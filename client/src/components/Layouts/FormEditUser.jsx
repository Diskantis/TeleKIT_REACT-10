import React, { useEffect, useState } from "react";
import { FormRow } from "./FormContainer";

import InputCreate from "../CompUI/Inputs/InputCreate";
import InputSelect from "../CompUI/Inputs/InputSelect";

const FormEditUser = (user) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ADMIN");

  useEffect(() => {
    if (user) {
      setLastName(user.user.lastName);
      setFirstName(user.user.firstName);
      setSurName(user.user.surName);
      setEmail(user.user.email);
      setPassword(user.user.password);
      setRole(user.user.role);
    }
  }, [
    user,
    setLastName,
    setFirstName,
    setSurName,
    setEmail,
    setPassword,
    setRole,
  ]);

  return (
    <>
      <FormRow>
        <InputCreate
          name="Фамилия"
          width={"195px"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputCreate
          name="Имя"
          width={"195px"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputCreate
          name="Отчество"
          width={"195px"}
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <InputCreate
          name="Email"
          width={"240px"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputCreate
          name="Пароль"
          width={"240px"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputSelect
          name="Роль"
          width={"100px"}
          role={role}
          setRole={setRole}
          options={[{ value: "ADMIN" }, { value: "USER" }]}
        />
      </FormRow>
    </>
  );
};

export default FormEditUser;
