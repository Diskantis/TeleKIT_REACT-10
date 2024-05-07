import React from "react";

import FormContainer, { FormContentStyled } from "../../Layouts/FormContainer";
import QrCodeBar from "../../CompUI/QRCodeBar";
import QRCodeReader from "../../CompUI/QRCodeReader";

const EquipmentNew = () => {
  return (
    <FormContainer title="Новое оборудование.">
      <FormContentStyled>
        {/*<QrCodeBar />*/}
        <QRCodeReader />
      </FormContentStyled>
    </FormContainer>
  );
};

export default EquipmentNew;
