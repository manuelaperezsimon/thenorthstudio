import { defineEventHandler } from "h3";
import { useFetch } from "nuxt/app";

export default defineEventHandler(async (event) => {
  const apiUrl = "https://royaloceanyachts.com/api/yachts?buy=true&page=1";

  try {
    const response = await useFetch(apiUrl, {
      headers: {
        CORS: "Access-Control-Allow-Origin",
      },
    });

    if (!response.data) {
      throw new Error("Failed to fetch data from external API");
    }

    return response;
  } catch (error) {
    return { error: "Failed to fetch data" + error };
  }
});
