import React from "react";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import Content from "../../Layouts/Content";

const RecipientList = () => {
  return (
    <Page>
      <SideBar />
      <Content title="Список получателей."></Content>
    </Page>
  );
};

export default RecipientList;
