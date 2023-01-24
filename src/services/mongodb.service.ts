import * as mongoDB from "mongodb";
import "dotenv/config";

export const collections: { chats?: mongoDB.Collection } = {}

export async function connectToDatabase () {
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const classificationCollection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME);
 
    collections.chats = classificationCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${classificationCollection.collectionName}`);
 }

