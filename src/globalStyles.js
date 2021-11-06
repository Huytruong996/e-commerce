import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-size:14px;
  position: relative;
  ${(props) =>
    props.opened
      ? css`
          overflow: hidden;
        `
      : css`
          overflow-x: hidden;
        `}
}

*{
  margin: 0;
	padding: 0;
	border: 0;
	font-family: Open Sans, 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	vertical-align: baseline;
    box-sizing: border-box;
  }
    :after , :before{
    box-sizing: border-box;
    }
    &:focus {
    outline: none;
    }
    img{
    border: 0;
    vertical-align: top;
    max-width: 100%;
    height: auto;
    }
    ol, ul {
	list-style: none;
}
a{
    text-decoration: none;
    color: #000;
    transition: all .35s ease 0s;
    cursor: pointer;
    &:hover{
      color: #f03333;
    }
}
input, select, textarea {
    border: 1px solid #e9e9e9;
    padding: 5px 6px;
    background: 0 0;
    border-radius: 0;

    box-shadow: none;

button{
    cursor: pointer;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.7;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.blur-up{
  filter: blur(7px);
  transition: filter .3s;
}
.blur-up.lazyloaded{
  filter: blur(0);
}
.lazyload {
	opacity: 0;
}
`;

export const BodyContent = styled.div`
  ${(props) =>
    props.opened
      ? css`
          :before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            display: inline-block;
            z-index: 999991;
          }
        `
      : css`
          :before {
            content: "";
            display: table;
          }
        `}
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 760px;
  }
  @media (min-width: 992px) {
    max-width: 980px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Breakpoint = {
  Desktop: "1200px",
  Tablet: "992px",
  Mobile: "768px",
  SmallMobile: "576px",
};

// Grid

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const elementorColumn = styled.div`
  position: relative;
  display: flex;
`;

export const SectionContent = styled.div`
  position: relative;
  margin: 0 auto;
  clear: both;
  display: block;
  width: 100%;
`;

export const DetailProductWrap = styled.div`
  background: #eff0f5;
  padding: 0;
  max-width: 100%;
  margin: 10px 0;
`;

export const RowResponsive = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: ${Breakpoint.Mobile}) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: ${Breakpoint.Mobile}) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const TabSection = styled.div`
  @media (min-width: 768px) {
    padding-top: 36px;
    padding-bottom: 28px;
  }
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const ContentTabWrapper = styled.div`
  :before,
  :after {
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
  position: relative;
`;

export const HeadingAccount = styled.h2`
  font-size: 25px;
  font-weight: 400;
  margin: 0 0 10px;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 11px;
  line-height: 32px;
  position: relative;
  :before {
    content: "";
    width: 100%;
    height: 2px;
    background: #fed700;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    width: 115px;
  }
`;

export const FormAccount = styled.form`
  padding: 30px 0;
`;

export const ControlWrap = styled.div``;

export const ControlLabel = styled.label`
  display: block;
  clear: both;
  margin-bottom: 10px;
  font-weight: 700;
  color: #333e48;
  font-size: 14px;
  span {
    padding-inline-start: 3px;
  }
`;

export const ControlInput = styled.input`
  display: block;
  clear: both;
  margin-bottom: 20px;
  width: 100%;
  height: 47px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: 14px;
  background: #fff;
  padding: 13px 15px;
  line-height: 1.6;
  border: 1px solid #dddddd;
  border-radius: 25px 25px 25px 25px;
  box-shadow: inset 0 0 0 0 #fff;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  :focus {
    outline: none;
    border-color: #fed700;
  }
`;

const faSpin = keyframes`
0%{transform:rotate(0)}
to{transform:rotate(359deg)}
`;

export const ControlButton = styled.button`
  cursor: pointer;
  margin-bottom: 10px;
  min-width: 130px;
  margin-inline-end: 8px;
  background: #fed700;
  color: #333e48;
  border: 1px solid #fed700;
  padding: 9px 30px;
  line-height: 27px;
  font-weight: 700;
  white-space: normal;
  font-size: 14px;
  border-radius: 25px 25px 25px 25px;
  position: relative;
  :hover {
    background: #333e48;
    color: #ffffff;
    border-color: #333e48;
  }

  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
          color: transparent !important;
          :after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 20px;
            height: 20px;
            background: #ffff;
            animation: ${faSpin} 2s linear infinite;
            mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 64 64'%3E%3Cpath d='M54.72 53.824c-12.096 12.16-33.28 11.008-45.12-.832-12.16-12.16-12.8-31.616-1.792-44.48.704-.832 1.344-1.664 2.24-2.176 2.304-1.472 5.44-1.152 7.488.832a6.138 6.138 0 011.024 7.168c-.32.576-.576.96-1.024 1.408-8.96 9.664-9.28 24.256-.512 33.024 9.792 9.792 26.048 7.744 34.688-2.176 6.784-7.808 9.088-19.008 4.928-28.864C51.328 5.056 37.12-.896 24 3.52v-.064c15.104-5.248 31.488 1.536 37.632 16.128 4.544 10.688 2.368 22.72-4.608 31.552a23.182 23.182 0 01-2.304 2.688z'/%3E%3C/svg%3E");
          }
        `
      : ``}
`;

export const CancelButton = styled(ControlButton)`
  background: #e6e6e6;
  border: 1px solid #e6e6e6;
  :hover {
    background: #333e48;
    color: #ffffff;
    border-color: #333e48;
  }
`;
export default GlobalStyle;
