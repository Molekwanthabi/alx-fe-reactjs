import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-lg font-bold">Blog Post {id}</h2>
      <p>This is the content for post ID: {id}.</p>
    </div>
  );
}

export default BlogPost;
