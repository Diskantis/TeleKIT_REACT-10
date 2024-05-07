import React, { useState } from "react";

import FormContainer, { FormRow } from "../../Layouts/FormContainer";

import InputCreate from "../../CompUI/Inputs/InputCreate";
import InputSelect from "../../CompUI/Inputs/InputSelect";
import CustomButton from "../../CompUI/Buttons/CustomButton";

import {
  useLazyGetAllUsersQuery,
  useRegisterMutation,
} from "../../../app/services/userApi";

const Admin_UserNew = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ADMIN");

  const [register, { isLoading }] = useRegisterMutation();
  const [triggerGetAllUsers] = useLazyGetAllUsersQuery();

  const resetForm = () => {
    setLastName("");
    setFirstName("");
    setSurName("");
    setEmail("");
    setPassword("");
    setRole("ADMIN");
  };

  const click = async () => {
    try {
      await register({
        lastName,
        firstName,
        surName,
        email,
        password,
        role,
      }).unwrap();
      triggerGetAllUsers().unwrap();
      resetForm();
    } catch (err) {
      alert(err.data.message);
      resetForm();
    }
  };

  return (
    <FormContainer title="Создание нового пользователя">
      <FormRow>
        <InputCreate
          name="Фамилия"
          width={"280px"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputCreate
          name="Имя"
          width={"280px"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputCreate
          name="Отчество"
          width={"280px"}
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
        />
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
      <CustomButton
        name="Зарегистрировать"
        width="280px"
        onClick={click}
        isLoading={isLoading}
      />
    </FormContainer>
  );
};

export default Admin_UserNew;
