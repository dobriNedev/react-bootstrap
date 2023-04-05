import { useContext } from "react";
import { postsContext } from "../../contexts/postsContext";
import PostCard from "../Cards/PostCard";

const Catalog = () => {
  const { posts } = useContext(postsContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-4 mb-4" key={post._id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default Catalog;
