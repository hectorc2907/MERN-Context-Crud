const PostCard = ({ post }) => {
  return (
    <div className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointerF">
      <div className="px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{post.title}</h3>
        </div>
        <p className="text-gray-400">{post.description}</p>
      </div>
      {post.image && <img src={post.image.url} alt={post.title} />}
    </div>
  );
};

export default PostCard;
