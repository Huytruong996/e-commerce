import axios from "axios";

const ProductReviewData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return res.data;
};

export default ProductReviewData;
