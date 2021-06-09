import sys
sys.path.append('/home/alex/Documents/programming/Projects/RSSnews/RSSnews/Analytics/libs')

import rssreader  
import mongoFunctions  

entry= rssreader.latestPost("https://rss.nytimes.com/services/xml/rss/nyt/World.xml", "NYtimes")

print(entry.getDict())

mongoFunctions.insert("firstPosts",entry.getDict())