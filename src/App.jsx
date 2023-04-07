import { useQuery } from "@tanstack/react-query";
import "./App.css";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("Error Message"),
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postQuery.isLoading) return <div>Loading...</div>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;
  return (
    <div>
      {postQuery.data.map((post) => (
        <>
          <div key={post.id}></div>
          <h3>{post.title}</h3>
        </>
      ))}
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
