import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
            setLoading(false)
        }
        return response.json();
      })
      .then((json) => setDetail(json));
  }, []);
  return (
    <>
      {loading ? (
        <p>is loading</p>
      ) : (
        <p>
          {detail.id}: {detail.body}
        </p>
      )}
    </>
  );
};

export default PostDetail;
