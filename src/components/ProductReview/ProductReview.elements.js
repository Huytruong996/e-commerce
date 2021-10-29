import styled from "styled-components";

export const ProductReviewWrap = styled.div``;

export const ProductReviewContainer = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;

  background: #fff;
  margin-top: 0.9375rem;
  padding: 1.5625rem;
`;

export const ReviewHeader = styled.div`
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1em;
  text-transform: capitalize;
`;

export const ReviewOverview = styled.div`
  background-color: #fffbf8;
  min-height: 5rem;
  border: 1px solid #f9ede5;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 1.875rem;
`;

export const ReviewList = styled.div``;

export const RatingBriefing = styled.div`
  text-align: center;
  margin-right: 1.875rem;
  flex: 2;
`;

export const RatingScoreWrap = styled.div`
  color: #fed700;
  font-size: 1.125rem;
`;

export const RatingScore = styled.span`
  font-size: 1.875rem;
`;

export const RatingOutOf = styled.span``;

export const RatingReviewStar = styled.div`
  font-size: 1.25rem;
  margin-top: 0.625rem;
`;

export const RatingFilters = styled.div`
  flex: 3;
  @media (max-width: 992px) {
    flex: auto;
  }
  margin-left: 0.9375rem;
`;

export const OverviewFilter = styled.div`
  cursor: pointer;
  user-select: none;
  height: auto;
  line-height: 2rem;
  min-width: 6.25rem;
  text-align: center;
  padding: 0 0.625rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  display: inline-block;
  margin-right: 0.5rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  text-transform: capitalize;
  border-radius: 2px;
  margin-bottom: 0.3125rem;
  margin-top: 0.3125rem;
`;

export const CommentList = styled.div``;

export const PaginationList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const CommentProduct = styled.div`
  > div:first-child {
    padding-top: 0;
  }
`;
