const quotesUrl = import.meta.env.VITE_GOT_QUOTES_URL;
const housesUrl = import.meta.env.VITE_GOT_HOUSES_URL;

export const getQuotesByCharacter = async (characterName) => {
  try {
    const response = await fetch(`${quotesUrl}${characterName}/2`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};

export const getHouseByName = async (houseName) => {
  try {
    const response = await fetch(`${housesUrl}${houseName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching house:', error);
    throw error;
  }
};
