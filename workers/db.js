const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
const uri = "mongodb+srv://API_MASTER:Oscar123@howoldhowtall-mqg0m.mongodb.net/test?retryWrites=true&w=majority"

module.exports = {

    create: async (options) => {
        const db = await MongoClient.connect(uri,{ useUnifiedTopology: true });
        const dbo = db.db(options.db);
        const collection = dbo.collection(options.collection);
        if(options.records.length > 1) {
            let res = await collection.insertMany(options.records);
            db.close();
            return res;
        } else {
            let res = await collection.insertOne(options.records[0]);
            db.close();
            return res;
        }
    },

    search: async (options) => {
        let query = typeof options.query === 'object' ? options.query : JSON.parse(options.query);
        let limit = parseInt(options.limit);
        const db = await MongoClient.connect(uri,{ useUnifiedTopology: true });
        const dbo = db.db(options.db);
        const collection = dbo.collection(options.collection);
        const res = await collection.find(query).limit(limit).toArray();
        db.close();
        return res;
    },

    read_id: async (options) => {
        const o_id = new ObjectId(options.id);
        const db = await MongoClient.connect(uri,{ useUnifiedTopology: true });
        const dbo = db.db(options.db);
        const collection = dbo.collection(options.collection);
        const res = await collection.find(o_id).toArray();
        db.close();
        return res;
    },

    update: async (options) => {
        const o_id = new ObjectId(options.id);
        let values = typeof options.values === 'object' ? options.values : JSON.parse(options.values);
        const db = await MongoClient.connect(uri,{ useUnifiedTopology: true });
        const dbo = db.db(options.db);
        const collection = dbo.collection(options.collection);
        const res = await collection.updateOne({_id: o_id}, {$set: values});
        db.close();
        return res;
    },

    delete: async (options) => {
        const o_id = new ObjectId(options.id);
        const db = await MongoClient.connect(uri,{ useUnifiedTopology: true });
        const dbo = db.db(options.db);
        const collection = dbo.collection(options.collection);
        let res = await collection.deleteOne({_id: o_id});
        db.close();
        return res;
    }

}