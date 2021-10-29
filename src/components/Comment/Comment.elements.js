import styled from "styled-components";

export const CommentWrap = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  padding: 1rem 0 1rem 1.25rem;
`;

export const CommentAvatar = styled.div`
  width: 2.5rem;
  margin-right: 0.625rem;
  text-align: center;
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  border: 0.0625rem solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
`;

export const Placeholder = styled.div`
  width: 100%;
  position: relative;
  padding-top: 100%;
  background-color: #f5f5f5;
  border-radius: 50%;
  overflow: hidden;
  svg {
    stroke: #c6c6c6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
  }
`;

export const IMGAvatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
`;
export const CommentMain = styled.div`
  flex: 1;
`;
export const CommentAuthorName = styled.div`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.75rem;
`;
export const PersonalRating = styled.div`
  display: flex;
  margin-top: 0.375rem;
`;
export const OrderVariation = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
`;
export const CommentContent = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
`;
export const CommentMedia = styled.div`
  margin-top: 0.9375rem;
`;

export const CommentMediaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Media = styled.div`
  cursor: zoom-in;
  width: 4.5rem;
  height: 4.5rem;
  margin: 0 0.625rem 0.625rem 0;
  position: relative;
`;

export const MediaWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MediaPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fafafa;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    stroke: #c6c6c6;
  }
`;

export const MediaContent = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CommentTime = styled.div`
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.54);
`;
