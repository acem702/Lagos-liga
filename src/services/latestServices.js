import { databases } from "./appWriteClient";

// Use the correct database ID for your Appwrite instance
const databaseId = '67248a8e001b138a1ca6'; // Replace with your actual database ID
const newsCollectionId = 'news'; // Your collection ID for news

export async function getLatestNews() {
  try {
    const response = await databases.listDocuments(databaseId, newsCollectionId);
    const newsItems = response.documents;

    const featuredNews = newsItems[0]; // First item as featured news
    const latestNews = newsItems.slice(1); // Remaining items as latest news

    return { featuredNews, latestNews };
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error; // Propagate error
  }
}

export async function getLatestNewsBody(id) {
  try {
    const response = await databases.getDocument(databaseId, newsCollectionId, id);
    return response;
  } catch (error) {
    console.error('Error fetching news body:', error);
    throw error; // Propagate error
  }
}

// Assuming you will implement this later
export function getTweets() {
  // return Kiniscores.get(`${kiniscoresApi}/recent/tweets`);
}