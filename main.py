import requests
 
url = "https://api.consumet.org/anime/gogoanime/watch/niehime-to-kemono-no-ou-episode-18"
response = requests.get(url, params={"page": 1, "type": 1})
data = response.json()
 
print(data)