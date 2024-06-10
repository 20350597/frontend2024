const characterUrl = import.meta.env.VITE_RICKANDMORTY_CHARACTER_URL;
const locationUrl = import.meta.env.VITE_RICKANDMORTY_LOCATION_URL;

export const getCharacterByName = async (name) => {
  const response = await fetch(`${characterUrl}/?name=${name}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error fetching character: ${data.error}`);
  }

  return data.results;
};

export const getLocationByName = async (name) => {
  const response = await fetch(`${locationUrl}/?name=${name}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Error fetching location: ${data.error}`);
  }

  return data.results;
};

export const getRandomCharacter = async () => {
  const response = await fetch(`${characterUrl}`);
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
};

export const getRandomLocation = async () => {
  const response = await fetch(`${locationUrl}`);
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
};
