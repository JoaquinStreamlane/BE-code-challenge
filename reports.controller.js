import { getUsers } from "./users.controller.js";
import { getPosts } from "./posts.controller.js";

export const getReport = async (sortBy) => {
  const users = await getUsers();
  const posts = await getPosts();

  const report = users.map(user => {
    const userPosts = posts.filter(post => post.userId === user.id);
    return {
      name: user.name,
      email: user.email,
      postCount: userPosts.length
    }
  });

  switch (sortBy) {
    case "postCount":
      report.sort((a, b) => b.postCount - a.postCount);
      break;
    case "name":
      report.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }


  return report;
}