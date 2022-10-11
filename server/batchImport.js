const { MongoClient } = require("mongodb");
const { workspaces, documents, threads, users } = require("./data");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const workspaceResult = await db
      .collection("Workspaces")
      .insertMany(workspaces);
    const usersResult = await db.collection("Users").insertMany(users);
    const threadsResult = await db.collection("Threads").insertMany(threads);
    const documentsResult = await db
      .collection("Documents")
      .insertMany(documents);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};
batchImport();
