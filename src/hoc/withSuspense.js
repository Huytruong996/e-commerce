import React, { Suspense } from "react";

const withSuspense = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <children />
  </Suspense>
);

export default withSuspense;
