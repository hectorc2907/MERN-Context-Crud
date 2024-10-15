import { usePosts } from "../context/postsContext";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { VscEmptyWindow } from "react-icons/vsc";

const HomePage = () => {
  const { posts } = usePosts();

  const renderPost = () => {
    if (posts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white" />
          <h1 className="text-white text-2xl">There are no posts</h1>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} posts={post} />
        ))}
      </div>
    );
  };

  return (
    <main>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl text-gray-300 font-bold">
          Posts ({posts.length})
        </h1>
      </header>
      {renderPost()}
    </main>
  );
};

export default HomePage;
