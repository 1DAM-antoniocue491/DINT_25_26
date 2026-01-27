import { Character, Episode } from "../types/Interfaces";

const BASE_URL = "https://api.sampleapis.com/rickandmorty";

export const getCharacters = async (): Promise<Character[]> => {
    try {
      const response = await fetch(`${BASE_URL}/characters`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
};

export const getEpisodes = async (): Promise<Episode[]> => {
    try {
      const response = await fetch(`${BASE_URL}/episodes`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching episodes:", error);
      return [];
    }
};
