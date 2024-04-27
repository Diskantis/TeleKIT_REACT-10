import React from "react";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import Content from "../../Layouts/Content";

const EquipmentList = () => {
  return (
    <Page>
      <SideBar />
      <Content title="Список оборудования."></Content>
    </Page>
  );
};

export default EquipmentList;
