const { MongoClient } = require("mongodb");

// const URI =
//   "mongodb+srv://anilghale:PrZCUU9gAP7CcnIP@anilnodejs.spasfpz.mongodb.net/?appName=AnilNodeJs";

const url =
  "mongodb+srv://anilghale:PrZCUU9gAP7CcnIP@anilnodejs.spasfpz.mongodb.net/?appName=AnilNodeJs";
const client = new MongoClient(url);
const dbName = "Anil";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: 'Soniya',
    lastName: 'Ghale',
    city: 'Bhaktapur',
    phoneNumber: '9841234567',
  }

  //insert
  const insertResult = await collection.insertMany([
   data
  ]);
  console.log("Inserted documents =>", insertResult);

//read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  //similarly explore find count from documents and do CRUD operations on your own.

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

