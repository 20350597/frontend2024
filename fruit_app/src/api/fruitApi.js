const fruitApiUrl = import.meta.env.VITE_FRUIT_API_URL;

export const getFruitByName = async (name) => {
    try {
      const response = await fetch(`https://www.fruityvice.com/api/fruit/${name}`);
      if (!response.ok) {
        throw new Error(`Error fetching fruit: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching fruit: ${error.message}`);
    }
  };
  

export const getRandomFruit = async () => {
  const fruits = ["apple", "banana", "grape", "orange", "strawberry"];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  return await getFruitByName(randomFruit);
};
