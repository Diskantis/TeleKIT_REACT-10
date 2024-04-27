import React from "react";
import Page from "../Layouts/Page";
import SideBar from "../Layouts/SideBar";
import Content from "../Layouts/Content";

const Auth = () => {
  return (
    <Page>
      <SideBar />
      <Content title="Аунтификация"></Content>
    </Page>
  );
};

export default Auth;
