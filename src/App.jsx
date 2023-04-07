import { useState } from "react";
import "./App.css";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";

// const POSTS = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" },
// ];

// /posts -> ["posts"]
// /posts/1 -> ["posts", 1]
// /posts/1/comments -> ["posts", 1, "comments"]
// posts?authorId=1 -> ["posts", { authorId: 1 }]

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  // const queryClient = useQueryClient();
  // const postQuery = useQuery({
  //   queryKey: ["posts"],
  //   // queryFn: () => Promise.reject("Error Message"),
  //   queryFn: (obj) =>
  //     wait(1000).then(() => {
  //       console.log(obj);
  //       return [...POSTS];
  //     }),
  // });

  // const newPostMutation = useMutation({
  //   mutationFn: async (title) => {
  //     await wait(1000);
  //     return POSTS.push({ id: crypto.randomUUID(), title });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["posts"]);
  //   },
  // });

  // if (postQuery.isLoading) return <div>Loading...</div>;
  // if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;
  return (
    <div>
      {/* {postQuery.data.map((post) => (
        <>
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        </>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New
      </button> */}

      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>

      <br />
      {currentPage}
    </div>
  );
}

// function wait(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }

export default App;
