import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ children, location: { pathname } }) => {
  window.scrollTo({
    top: 0,
    left: 0,
  });

  return children || null;
};

export default withRouter(ScrollToTop);
