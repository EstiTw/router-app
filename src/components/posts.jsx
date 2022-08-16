import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const { month, year } = match.params;
  // this will give us an object with properties based on parameters in the query string
  const result = queryString.parse(location.search);
  console.log(result); // {approved: 'true', sortBy: 'newest'}
  return (
    <div>
      <h1>Posts</h1>
      Year:{year} , Month:{month}
    </div>
  );
};

export default Posts;
