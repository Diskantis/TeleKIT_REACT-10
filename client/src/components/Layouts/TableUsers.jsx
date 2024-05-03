import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

import EditSVG from "../Icons/EditSVG";
import DeleteSVG from "../Icons/DeleteSVG";
import { BtnDel, BtnEdit } from "../CompUI/CustomButton";
import Modal from "../CompUI/Modal";
import FormEditUser from "./FormEditUser";

import { BASE_URL } from "../../routers";

import {
  useDeleteUserMutation,
  useLazyGetAllUsersQuery,
  useLazyGetOneUserQuery,
} from "../../app/services/userApi";
import { selectAllUsers, selectOneUser } from "../../app/features/userSlice";

const TableUsers = () => {
  const navigate = useNavigate();
  const [triggerGetAllUsers] = useLazyGetAllUsersQuery();
  const [getOneUser, { isLoading }] = useLazyGetOneUserQuery();
  const [deleteUser] = useDeleteUserMutation();

  const users_list = useSelector(selectAllUsers);
  const user = useSelector(selectOneUser);

  const [modalActive, setModalActive] = useState(false);

  const handleChange = async (id) => {
    try {
      setModalActive(true);
      await getOneUser(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      triggerGetAllUsers().unwrap();
      navigate("/admin/user_list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableStyled>
      <thead>
        <tr>
          <TableTH scope="col">#</TableTH>
          <TableTH scope="col">Аватар</TableTH>
          <TableTH scope="col">Фамилия</TableTH>
          <TableTH scope="col">Имя</TableTH>
          <TableTH scope="col">Отчество</TableTH>
          <TableTH scope="col">Email</TableTH>
          <TableTH scope="col">Пароль</TableTH>
          <TableTH scope="col">Роль</TableTH>
          <TableTH scope="col"></TableTH>
        </tr>
      </thead>
      <tbody>
        {users_list.map((user, index) => (
          <tr key={index + 1}>
            <TableTD>{index + 1}</TableTD>
            <TableTD>
              {
                <Avatar
                  style={{
                    backgroundImage: `url(${BASE_URL}${user.avatarUrl})`,
                  }}
                ></Avatar>
              }
            </TableTD>
            <TableTD>{user.lastName}</TableTD>
            <TableTD>{user.firstName}</TableTD>
            <TableTD>{user.surName}</TableTD>
            <TableTD>{user.email}</TableTD>
            <TableTD>
              {user.password
                .split("")
                .slice(0, 10)
                .map(() => "*")}
            </TableTD>
            <TableTD>{user.role}</TableTD>
            <TableTD>
              <BtnGroup>
                <BtnEdit
                  onClick={() => handleChange(user.id)}
                  isLoading={isLoading}
                >
                  <EditSVG />
                </BtnEdit>
                <BtnDel onClick={() => handleDelete(user.id)}>
                  <DeleteSVG />
                </BtnDel>
              </BtnGroup>
            </TableTD>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        btnName="Сохранить"
        title="Редактирование данных пользователя"
      >
        {user && <FormEditUser user={user} />}
      </Modal>
    </TableStyled>
  );
};

const TableStyled = styled.table`
  width: calc(100vw - 390px);
  border-collapse: collapse;
  margin-right: 10px;
`;

const TableTH = styled.th`
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", weight: 700 })}
    color: ${Color.table_text};
  background-color: ${Color.table_bg};
  border-left: 1px solid ${Color.table_inputBorder};
  border-bottom: 1px solid ${Color.body_text};
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  padding: 20px 10px 15px 10px;

  // id

  &:nth-child(1) {
    width: 1%;
    border-left: none;
    text-align: center;
  }

  // avatarUrl

  &:nth-child(2) {
    width: 5%;
  }

  // lastName

  &:nth-child(3) {
    width: 20%;
  }

  // firstName

  &:nth-child(4) {
    width: 20%;
  }

  // surName

  &:nth-child(5) {
    width: 20%;
  }

  // email

  &:nth-child(6) {
    width: 15%;
  }

  // password

  &:nth-child(7) {
    width: 23%;
  }

  // role

  &:nth-child(8) {
    width: 20%;
  }

  // button

  &:nth-child(9) {
    width: 20%;
    border-right: none;
  }
`;

const TableTD = styled.td`
  color: ${Color.table_text};
  background-color: ${Color.table_bg};
  border: 1px solid ${Color.table_inputBorder};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", height: "normal" })}
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 10px 5px 10px;
  font-weight: normal;
  vertical-align: middle;

  &:first-child {
    border-left: none;
  }

  // id

  &:nth-child(1) {
    width: 1%;
    text-align: center;
  }

  // avatarUrl

  &:nth-child(2) {
    width: 5%;
  }

  // lastName

  &:nth-child(3) {
    width: 20%;
  }

  // firstName

  &:nth-child(4) {
    width: 20%;
  }

  // surName

  &:nth-child(5) {
    width: 20%;
  }

  // email

  &:nth-child(6) {
    width: 15%;
  }

  // password

  &:nth-child(7) {
    width: 23%;
  }

  // role

  &:nth-child(8) {
    width: 19%;
  }

  // button

  &:nth-child(9) {
    width: 20%;
    border-right: none;
    vertical-align: middle;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: right;
  width: 36px;
  height: 36px;
  transform: translateX(33%);
  background: #2c2c2c no-repeat center;
  background-size: cover;
`;

export default TableUsers;
