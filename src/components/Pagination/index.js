import React from "react";
import { Pagination } from "@mui/material";
const PaginationSection = ({ totalPage, handleChangePage }) => {
  return (
    <Pagination
      count={totalPage}
      variant="outlined"
      shape="rounded"
      onChange={handleChangePage}
      color="primary"
    />
  );
};

export default PaginationSection;
