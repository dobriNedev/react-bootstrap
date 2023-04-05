import { createContext, useEffect, useState } from "react";

import postsArray from "../posts.json";

export const postsContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsArray);
  }, []);

  const context = {
    posts,
  };

  return (
    <postsContext.Provider value={context}>{children}</postsContext.Provider>
  );
};

export default PostProvider;
