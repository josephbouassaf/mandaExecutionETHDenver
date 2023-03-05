# A Data-driven approach to find links between communities using Tally's API



# import libraries

import requests
import json
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt



# Tally API and Api-key

url = 'https://api.tally.xyz/query'
headers = {"Api-key": 'a6a335a19f8b493c976e78566f7e1795dee68409b0e7dbd2ef98247edaafea93'}



# Function taking as input
# 1) lim: first: representing the first indexed proposal
# 2) off: skip: represennting the skipped indexed proposal
# Returns the query to be run

def query_(lim,off):
    query = """query Governors {
      governors (

        chainIds: "eip155:1", 
        pagination: {
          limit:""" + str(lim) + """,
          offset:""" + str(off) + """
        }
      )
      { 
        name
        delegates {
          account {
            address 
          } 
        }
      }
    }"""
    return query



# for loop querying all on-chain proposals of 5 DAOs per loop

df = pd.DataFrame()

for x in range(5, 300, 5):
    
    r = requests.post(url, json={'query': query_(x,x-5)}, headers=headers)
    json_data = json.loads(r.text)
    
    space_lst = []
    member_lst = []

    index = 0

    for i in range(len(json_data['data']['governors'])):    
        for j in range(len(json_data['data']['governors'][i]['delegates'])):
            space_lst.append(json_data['data']['governors'][i]['name'])
            member_lst.append(json_data['data']['governors'][i]['delegates'][j]['account']['address'])

    df = df.append(pd.DataFrame([space_lst, member_lst]).T)

df.columns = ['DAO', 'Contributors']
df = df.drop_duplicates()



# dataframe containing contributors addresses to their DAO

df.head()



# Create a cross-tabulation table
cross_tab = pd.crosstab(index=df['DAO'], columns=df['Contributors'])

# Multiply the cross-tabulation table by its transpose to get the 2D matrix
matrix = cross_tab.dot(cross_tab.T)

# Plot
plt.figure(figsize=(20,10))

vmin = 0
vmax = 1500

# Create a heatmap using seaborn
sns.heatmap(matrix, cmap="YlGnBu", vmin=vmin, vmax=vmax)

# Show the plot
plt.show()



import numpy as np
from scipy.cluster.hierarchy import dendrogram, linkage

z = linkage(np.log(matrix[np.log(matrix)>0]).fillna(0), method='ward', metric='euclidean');

plt.figure(figsize=(20,10));

# Plot the dendrogram
dendrogram(z, labels=matrix.index);


# Litterature of future work
# 
# https://www.pnas.org/doi/10.1073/pnas.122653799
