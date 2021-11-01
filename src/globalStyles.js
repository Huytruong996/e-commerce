import styled, { createGlobalStyle, css } from "styled-components";

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
  :hover {
    background: #333e48;
    color: #ffffff;
    border-color: #333e48;
  }
`;
export default GlobalStyle;
