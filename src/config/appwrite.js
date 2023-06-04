import { Account, Client, Databases } from "appwrite";
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);

const database = new Databases(
  client,
  process.env.NEXT_PUBLIC_APPWRITE_DB_ID
);

export {account, database};
