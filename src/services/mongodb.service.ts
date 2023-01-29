import * as mongoDB from "mongodb";
import "dotenv/config";

export const collections: {  messages?: mongoDB.Collection, contacts?: mongoDB.Collection, orders?: mongoDB.Collection } = {}

export async function connectToDatabase () {
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const contactsCollection: mongoDB.Collection = db.collection(process.env.CONTACTS_COLLECTION_NAME);
    const messageCollection: mongoDB.Collection = db.collection(process.env.MESSAGES_COLLECTION_NAME);
    const orderCollection: mongoDB.Collection = db.collection(process.env.ORDERS_COLLECTION_NAME);
 
    collections.messages = messageCollection;
    collections.contacts = contactsCollection;
    collections.orders = orderCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName}`);
 }

