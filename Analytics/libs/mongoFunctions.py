import pymongo

DB_ADDRESS="mongodb://localhost:27017/"
DB_NAME="RSSFeedDB"

myclient = pymongo.MongoClient(DB_ADDRESS)
mydb = myclient[DB_NAME]
mycol = mydb["customers"]

def insert(collection: str, data: dict ):
    myclient = pymongo.MongoClient(DB_ADDRESS)
    mydb = myclient[DB_NAME]
    mycol = mydb[collection]
    
    mycol.insert_one(data)
