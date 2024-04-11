import React from "react"; //, {useEffect, useState}
import { useSelector } from "react-redux";

// import {removeUser, getOneUser} from "../../stores/usersSlice";

import { styled } from "styled-components";

import EditSVG from "../Icons/EditSVG";
import DeleteSVG from "../Icons/DeleteSVG";
import { BtnDel, BtnEdit } from "../CompUI/Button";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";
import { BASE_URL } from "../../routers/Routes";

// import Modal from "../ComponentUI/Modal";
// import FormUser from "./FormUser";
// import {useGetUserQuery} from "../../api/apiSlice";

const TableUsers = () => {
  const { list_users } = useSelector((state) => state.users);

  // const users = useSelector((state) => state.users.users_list)
  // console.log(users)
  // const dispatch = useDispatch();
  //
  // const [modalActive, setModalActive] = useState(false);

  const handleChange = (id) => {
    return null;
    // setModalActive(true);
    // dispatch(getOneUser({id}));
    // console.log(togUser)
  };

  const handleDelete = (id) => {
    return null;
    // dispatch(removeUser({id}));
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
        {list_users.map((user, index) => (
          <tr key={index + 1}>
            <TableTD>{index + 1}</TableTD>
            {/*<TableTD>{user.avatarUrl}</TableTD>*/}
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
                <BtnEdit onClick={() => handleChange(user.id)}>
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
      {/*<Modal*/}
      {/*  active={modalActive}*/}
      {/*  setActive={setModalActive}*/}
      {/*  title="Редактирование данных пользователя"*/}
      {/*>*/}
      {/*  <FormUser/>*/}
      {/*</Modal>*/}
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
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2c2c2c;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default TableUsers;
