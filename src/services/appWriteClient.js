import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('football'); // Your Project ID

export const databases = new Databases(client);
export const storage = new Storage(client);