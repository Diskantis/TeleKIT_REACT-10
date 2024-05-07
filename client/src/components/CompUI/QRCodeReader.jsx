import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import "./QRCodeReader.css";
import styled from "styled-components/macro";

const QrCodeReader = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [qrMessage, setQrMessage] = useState("");

  useEffect(() => {
    const config = {
      fps: 60,
      qrbox: { width: 250, height: 210 },
    };
    const html5QrCode = new Html5Qrcode("qrCodeContainer");

    const qrScannerStop = () => {
      if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode
          .stop()
          .then(() => console.log("Scanner stop"))
          .catch(qrCodeError);
      }
    };

    const qrCodeSuccess = (decodedText) => {
      setQrMessage(decodedText);
      setEnabled(false);
    };
    const qrCodeError = () => {
      console.log("Scanner error");
    };

    if (isEnabled) {
      html5QrCode.start(
        { facingMode: "environment" },
        config,
        qrCodeSuccess,
        qrCodeError,
      );
      setQrMessage("");
    } else {
      qrScannerStop();
    }

    return () => {
      qrScannerStop();
    };
  }, [isEnabled]);

  return (
    <>
      <QRCodeContainer id="qrCodeContainer">
        <QRShadedRegion id="qr-shaded-region"></QRShadedRegion>
      </QRCodeContainer>
      {qrMessage && <QRMessage>{qrMessage}</QRMessage>}
      <QRButtonStart onClick={() => setEnabled(!isEnabled)}>
        {isEnabled ? "On" : "Off"}
      </QRButtonStart>
    </>
  );
};

export default QrCodeReader;

const QRCodeContainer = styled.div`
  position: relative;
  width: 760px;
  height: 600px;
  border-radius: 7px;
  overflow: hidden;
`;

const QRShadedRegion = styled.div`
  border-radius: 50px !important;
`;

const QRMessage = styled.div`
  position: absolute;
  top: 195px;
  left: 330px;
  width: 81.75%;
  height: 10%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  color: rgb(255, 255, 255);
  text-align: center;
  word-break: break-all;
`;

const QRButtonStart = styled.button`
  position: absolute;
  top: 130px;
  left: 350px;
  width: 40px;
  height: 40px;
  background-color: #d81414;
  border: 0;
  border-radius: 7px;
  font-size: 20px;
  color: #ffffff;
`;
