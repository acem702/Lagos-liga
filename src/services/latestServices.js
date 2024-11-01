//import Kiniscores from "./httpService";
//import { kiniscoresApi } from "../config.json";

import { databases } from "./appWriteClient";

export async function getLatestNews() {
  try {
    const response = await databases.listDocuments('news');
    const newsItems = response.documents;

    const featuredNews = newsItems[0];
    const latestNews = newsItems.slice(1);

    return { featuredNews, latestNews };
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error;
  }
}

export async function getLatestNewsBody(id) {
  try {
    const response = await databases.getDocument('news', id);
    return response;
  } catch (error) {
    console.error('Error fetching news body:', error);
    throw error;
  }
}

export function getTweets() {
  return //Kiniscores.get(`${kiniscoresApi}/recent/tweets`);
  // return Kiniscores.get(`http://localhost:5001/api/recent/tweets`);
}
