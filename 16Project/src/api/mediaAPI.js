import axios from "axios";

const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const pexelsKey = import.meta.env.VITE_PEXELS_KEY;
// const tenorKey = import.meta.env.VITE_TENOR_KEY;

export const searchUnsplash = async (query,page=1,per_page=20) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`,{
        params: {
            query: query,
            page: page,
            per_page: per_page
        },
        headers: {
            Authorization: `Client-ID ${unsplashAccessKey}`,
        },
    });
    console.log("Unsplash Response:", response.data);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching from Unsplash:", error);
    return [];
  }
};


export const VideoPexels = async (query,page=1,per_page=10) => {
  try {
    if (!pexelsKey) {
      console.error('Pexels API key missing. Set VITE_PEXELS_KEY in your .env file.');
      return [];
    }
    const response = await axios.get(`https://api.pexels.com/videos/search`, {
        params: {
            query: query,
            page: page,
            per_page: per_page
        },
        headers: {        
        Authorization: pexelsKey,
        },
    });
    console.log("Pexels Response:", response.data);
    return response.data.videos;
    } catch (error){
      if (error.response) {
        console.error("Error fetching from Pexels:", error.response.status, error.response.data);
      } else {
        console.error("Error fetching from Pexels:", error.message);
      }
      return [];
    }
}


