import React from "react";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import Content from "../../Layouts/Content";

const Admin = () => {
  return (
    <Page>
      <SideBar />
      <Content title="Административная панель."></Content>
    </Page>
  );
};

export default Admin;
