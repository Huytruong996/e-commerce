import React from "react";
import { Alert, Slide, Snackbar } from "@mui/material";

const Notication = (props) => {
  const {
    open,
    vertical,
    horizontal,
    message,
    severity,
    setSateNoti,
    direction,
  } = props;
  const SlideTransition = (props) => {
    return <Slide {...props} direction={direction} />;
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal, vertical }}
      open={open}
      autoHideDuration={3000}
      key={horizontal + vertical}
      TransitionComponent={SlideTransition}
      onClose={(event, reason) => setSateNoti({ ...props, open: false })}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notication;
