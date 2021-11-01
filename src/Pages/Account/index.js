import React from "react";
import AccountContent from "../../components/AccountContent";
import BreadCrumb from "../../components/BreadCrumb";
import Login from "../../components/Login";
import { Container } from "../../globalStyles";
import MainLayout from "../../layouts/MainLayout";

const Account = () => {
  return (
    <MainLayout>
      <Container>
        <BreadCrumb />
        <AccountContent />
      </Container>
    </MainLayout>
  );
};

export default Account;
