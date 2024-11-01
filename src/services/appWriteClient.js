import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite endpoint
    .setProject('YOUR_PROJECT_ID'); // Your Project ID

export const databases = new Databases(client);
export const storage = new Storage(client);