import axios from "axios";

export async function getPosts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
}
