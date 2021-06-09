import feedparser
#NewsFeed = feedparser.parse("https://rss.nytimes.com/services/xml/rss/nyt/World.xml")
#entry = NewsFeed.entries[1]

#print('Post Title :',entry.title)
#print('Post summary :',entry.summary)
#print('Post Link :',entry.link)
#print('Post Date :',str(entry.published_parsed.tm_year) + " " + str(entry.published_parsed.tm_mon))


class Post:
  def __init__(self, source):
    self.title = "unknown"
    self.summary = "unknown"
    self.link = "unknown"
    self.date = "unknown"
    self.source = source

def latestPost(rsslink: str, source: str) -> Post:
    answerPost= Post(source)

    try:
        NewsFeed = feedparser.parse(rsslink)
        entry = NewsFeed.entries[0]
    except:
        return

    try:
        answerPost.title=entry.title
    except:
        pass

    try:
        answerPost.summary=entry.summary
    except:
        pass

    try:
        answerPost.link=entry.link
    except:
        pass

    try:
        answerPost.date=entry.published
    except:
        pass

    return answerPost

entry= latestPost("https://rss.nytimes.com/services/xml/rss/nyt/World.xml", "NYtimes")

print('Post Title :',entry.title)
print('Post summary :',entry.summary)
print('Post Link :',entry.link)
print('Post Date :',entry.date)
print('Post Source :',entry.source)
#print('Post Date :',str(entry.published_parsed.tm_year) + " " + str(entry.published_parsed.tm_mon))