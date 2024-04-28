import React from "react";
import { BASE_URL } from "../../routers";

const ProfUser = ({ lastName, firstName, surName, avatarURL }) => {
  return (
    <p style={{ display: "flex", alignContent: "center" }}>
      <span style={{ alignContent: "center" }}>Пользователь: &nbsp; </span>
      <img
        src={`${BASE_URL}${avatarURL}`}
        alt="Avatar"
        style={{ width: 30, height: 30 }}
      />
      <span style={{ alignContent: "center" }}>
        &nbsp;{lastName} {firstName[0]}.{surName[0]}.
      </span>
    </p>
  );
};

export default ProfUser;
