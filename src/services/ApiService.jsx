import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    return [];
  }
};
