const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  try {
    const posts = await fetch(POSTS_URL).then(res => res.json());
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
