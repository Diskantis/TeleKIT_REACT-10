import React from "react";

export const ErrorMessages = ({ error = "" }) => {
  return (
    error && (
      <p style={{ color: "red", marginTop: 20, marginBottom: 50 }}>{error}</p>
    )
  );
};
