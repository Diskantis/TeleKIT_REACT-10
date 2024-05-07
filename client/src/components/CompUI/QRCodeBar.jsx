import React, { useState } from "react";
import FormContainer from "../Layouts/FormContainer";
import { Input } from "@mui/base/Input";
import QRCode from "react-qr-code";

const QrCodeBar = () => {
  // "https://www.npmjs.com/package/react-qr-code"
  const [inputValue, setInputValue] = useState("");
  return (
    <FormContainer title="QR Код устройства">
      <Input
        type="text"
        placeholder="Введите ссылку для QR кода"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <QRCode value={inputValue} />
    </FormContainer>
  );
};

export default QrCodeBar;
