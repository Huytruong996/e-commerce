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
    &:hover{
      color: #f03333;
    }
}
input, select, textarea {
    border: 1px solid #e9e9e9;
    padding: 5px 6px;
    background: 0 0;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    box-shadow: none;
    -moz-appearance: none;
    -o-appearance: none;
    -webkit-appearance: none;}
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
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
  margin: 0 auto;
  clear: both;
  display: block;
  width: 100%;
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

export default GlobalStyle;
