import React, { useEffect } from "react";

import FormContainer, { FormContentStyled } from "../../Layouts/FormContainer";
import TableUsers from "../../Layouts/TableUsers";
import { useLazyGetAllUsersQuery } from "../../../app/services/userApi";
import FullFeaturedCrudGrid from "../../Layouts/DataGridEdit";
import DataGridUsers from "../../Layouts/DataGridUsers";

const Admin_UserList = () => {
  // const [triggerGetAllUsers] = useLazyGetAllUsersQuery();
  //
  // useEffect(() => {
  //   try {
  //     triggerGetAllUsers().unwrap();
  //   } catch (err) {
  //     alert(err.data.message);
  //   }
  // }, [triggerGetAllUsers]);

  return (
    <FormContainer title="Список пользователей">
      <FormContentStyled>
        {/*<TableUsers />*/}
        {/*<FullFeaturedCrudGrid />*/}
        <DataGridUsers />
      </FormContentStyled>
    </FormContainer>
  );
};

export default Admin_UserList;
