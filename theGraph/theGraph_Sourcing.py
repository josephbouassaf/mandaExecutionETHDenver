# A Data-driven approach to find links between communities using the Graph's snapshot subgraph API


# import libraries

import requests
import json
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np




# Production hub API found on https://docs.snapshot.org/guides/graphql-api

snapshot_url = 'https://hub.snapshot.org/graphql'



# Function taking as input
# 1) lim: first: representing the first indexed proposal
# 2) off: skip: represennting the skipped indexed proposal
# Returns the query to be run

def query_(lim,off):
    query = """query Votes2 {
      votes(
        first: """ + str(lim) +""",
        skip: """ + str(off) +""",
      ) 
      {
        voter,
        space {
          name
        }
      }
    }"""
    return query




# for loop querying 1000 proposals per loop

df = pd.DataFrame()

for x in range(1000, 6000, 1000):
    
    try:
        r = requests.post(snapshot_url, json={'query': query_(x,x-1000)})
        json_data = json.loads(r.text)

        space_lst = []
        member_lst = []

        index = 0

        for i in range(len(json_data['data']['votes'])):    
            space_lst.append(json_data['data']['votes'][i]['space']['name'])
            member_lst.append(json_data['data']['votes'][i]['voter'])

        df = df.append(pd.DataFrame([space_lst, member_lst]).T)
    except:
        continue

df.columns = ['DAO', 'Contributors']
df = df.drop_duplicates()



# dataframe containing contributors addresses to their DAO

df


# Create a cross-tabulation table
cross_tab = pd.crosstab(index=df['DAO'], columns=df['Contributors'])

# Multiply the cross-tabulation table by its transpose to get the 2D matrix
matrix = cross_tab.dot(cross_tab.T)

# plot 
plt.figure(figsize=(20,10))

vmin = 0
vmax = 30

# Create a heatmap using seaborn
sns.heatmap(matrix, cmap="YlGnBu", vmin=vmin, vmax=vmax)

# Show the plot
plt.show()




import vg;
from scipy.cluster.hierarchy import dendrogram, linkage;

z = linkage(np.log(matrix[np.log(matrix)>0]).fillna(0), method='ward', metric='euclidean');

plt.figure(figsize=(20,10));

# Plot the dendrogram;
dendrogram(z, labels=matrix.index);


# Litterature of future work
# 
# https://www.pnas.org/doi/10.1073/pnas.122653799
