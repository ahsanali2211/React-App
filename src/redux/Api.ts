// api.js

export const api = {
  // Fetch product data from the external API
  fetchData: async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch product. Please try again.');
      }
      const product = await response.json();
      return product;
    } catch (error) {
      throw new Error(`Failed to fetch product: ${error.message}`);
    }
  },
  fetchUser: async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch product. Please try again.');
      }
      const product = await response.json();
      return product;
    } catch (error) {
      throw new Error(`Failed to fetch product: ${error.message}`);
    }
  },
};
