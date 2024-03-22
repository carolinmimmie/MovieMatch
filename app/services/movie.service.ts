import axios from "axios";

// API-nyckeln används som en inloggningnyckel för att autentisera och identifiera din frontendapplikation gentemot The Movie Database (TMDb) API.
const API_KEY = "b422d29e6db15bc19cc75b821d636ad3";
// API_BASE_URL är adressen där din frontendapplikation skickar förfrågningar för att hämta filmdata från TMDb API:et.
const API_BASE_URL = "https://api.themoviedb.org/3";

// Skapa en instans av Axios-klienten för att göra API-förfrågningar.
const client = axios.create({
  // Bas-URL:en för API:et används för alla förfrågningar.
  baseURL: API_BASE_URL,
  // Lägg till API-nyckeln som en parameter i varje förfrågan.
  params: { api_key: API_KEY },
});

// Funktionen searchMovies används för att söka efter filmer baserat på en angiven sökterm.
export const searchMovies = async (query: string) => {
  try {
    // Gör en GET-förfrågan till TMDb API för att söka efter filmer med den angivna söktermen.
    const response = await client.get("/search/movie", {
      params: { query },
    });

    // Hantera svaret och returnera filmresultaten om det finns några.
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the data");
    }
  } catch (error) {
    // Vid fel, skriv ut felet till konsolen och returnera en tom array.
    console.error(error);
    return [];
  }
};
