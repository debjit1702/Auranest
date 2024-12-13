import { Client, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://YOUR_APPWRITE_ENDPOINT/v1") // Replace with your Appwrite endpoint
  .setProject("675acbb4003b97de3053"); // Replace with your Project ID

  const storage = new Storage(client);

export { client, storage };
