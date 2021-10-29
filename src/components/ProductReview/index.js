import React, { useEffect, useState } from "react";
import Comment from "../Comment";
import Loading from "../Loading";
import PaginationSection from "../Pagination";
import StarRateSection from "../StarRateSection";
import ProductReviewData from "./Data";
import {
  CommentList,
  CommentProduct,
  CommentWrap,
  OverviewFilter,
  PaginationList,
  ProductReviewContainer,
  ProductReviewWrap,
  RatingBriefing,
  RatingFilters,
  RatingOutOf,
  RatingReviewStar,
  RatingScore,
  RatingScoreWrap,
  ReviewHeader,
  ReviewList,
  ReviewOverview,
} from "./ProductReview.elements";

const ProductReview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewPerPage, setreviewPerPage] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState();

  const indexOfLast = currentPage * reviewPerPage;
  const indexOfFirst = indexOfLast - reviewPerPage;
  const currentReview = reviews.slice(indexOfFirst, indexOfLast);
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      const res = await ProductReviewData();
      setReviews(res);
      setTotalPage(Math.ceil(res.length / reviewPerPage));
      setLoading(false);
    };
    fetchReviews();
  }, []);
  console.log(currentReview);
  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <ProductReviewWrap>
      <ProductReviewContainer>
        <ReviewHeader>ĐÁNH GIÁ SẢN PHẨM</ReviewHeader>
        <ReviewOverview>
          <RatingBriefing>
            <RatingScoreWrap>
              <RatingScore>4.8</RatingScore>
              <RatingOutOf> out of 5</RatingOutOf>
            </RatingScoreWrap>
            <RatingReviewStar>
              <StarRateSection />
            </RatingReviewStar>
          </RatingBriefing>
          <RatingFilters>
            <OverviewFilter>Tất cả</OverviewFilter>
            <OverviewFilter>5 Sao (1,2k)</OverviewFilter>
            <OverviewFilter>4 Sao (48)</OverviewFilter>
            <OverviewFilter>3 Sao (30)</OverviewFilter>
            <OverviewFilter>2 Sao (1,2k)</OverviewFilter>
            <OverviewFilter>1 Sao (1,2k)</OverviewFilter>
            <OverviewFilter>Có Bình luận (496)</OverviewFilter>
            <OverviewFilter>Có hình ảnh / video (397)</OverviewFilter>
          </RatingFilters>
        </ReviewOverview>
        <ReviewList>
          <CommentList>
            <CommentProduct>
              {loading ? (
                <Loading />
              ) : (
                currentReview &&
                currentReview.map((data, index) => {
                  return <Comment data={data} key={index} />;
                })
              )}
            </CommentProduct>
          </CommentList>
          <PaginationList>
            <PaginationSection
              totalPage={totalPage}
              handleChangePage={handleChangePage}
            />
          </PaginationList>
        </ReviewList>
      </ProductReviewContainer>
    </ProductReviewWrap>
  );
};

export default ProductReview;
