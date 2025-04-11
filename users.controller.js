const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(USERS_URL).then(res => res.json());
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};