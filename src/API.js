//API.js
export const APIURL = "https://fakestoreapi.com/products";

//Fetch All Products

export async function fetchAllProducts() {
  try {
    const response = await fetch(APIURL);
    const responseJson = await response.json();

    const products = responseJson;
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//Fetch Single Product

export async function fetchSingleProduct() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const result = await response.json();
    const product = result;
    console.log(product);
    return product;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Login user
export async function loginUser() {
  try {
    const response = await fetch('https://fakestoreapi.com/auth/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: '',
          password: ''
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

//Get all users
export const usersAll = {
  all: () => {
    return fetch('https://fakestoreapi.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  },
};

//Get single user
