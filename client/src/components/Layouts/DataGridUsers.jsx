import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { BASE_URL } from "../../routers";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
} from "@mui/x-data-grid";

import { Color } from "../../styles/style_constants";
import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { selectAllUsers, selectOneUser } from "../../app/features/userSlice";
import {
  useDeleteUserMutation,
  useLazyGetAllUsersQuery,
  useLazyGetOneUserQuery,
} from "../../app/services/userApi";
import Modal from "../CompUI/Modal";

export default function DataGridUsers() {
  const [deleteUser] = useDeleteUserMutation();
  const [triggerGetAllUsers] = useLazyGetAllUsersQuery();
  const users_list = useSelector(selectAllUsers);

  const [rows, setRows] = React.useState(users_list);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [modalActive, setModalActive] = useState(false);

  const [removeUserId, setRemoveUserId] = useState();

  useEffect(() => {
    try {
      triggerGetAllUsers().unwrap();
    } catch (err) {
      alert(err.data.message);
    }
  }, [triggerGetAllUsers]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    // const { lastName } = params.row;
    const row = rows.filter((row) => row.id === id);
    console.log(row);
    // console.log(user);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const processRowDelete = async () => {
    const id = removeUserId;
    try {
      setRows(rows.filter((row) => row.id !== id));
      await deleteUser(id).unwrap();
      await triggerGetAllUsers().unwrap();
    } catch (error) {
      console.log(error);
    }
    setModalActive(false);
  };

  const handleDeleteClick = (id) => async () => {
    setModalActive(true);
    setRemoveUserId(id);
    // removeUser && processRowDelete(id);
    // setRemoveUser(!removeUser);
    //
    // await getOneUser(id).unwrap();
    // setModalActive(false);
    // setRemoveUser(false);

    // setRemoveUser(false);
    // console.log(removeUser);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "rowId",
      headerName: "#",
      flex: 0.1,
      minWidth: 40,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "avatarUrl",
      headerName: "Аватар",
      flex: 0.1,
      minWidth: 70,
      renderCell: (params) => (
        <Avatar
          sx={{ margin: "auto" }}
          src={`${BASE_URL}${params.row.avatarUrl}`}
        />
      ),
      headerAlign: "center",
      sortable: false,
      filterable: false,
    },
    {
      field: "lastName",
      headerName: "Фамилия",
      flex: 1,
      minWidth: 100,
      editable: true,
    },
    {
      field: "firstName",
      headerName: "Имя",
      flex: 1,
      minWidth: 100,
      editable: true,
    },
    {
      field: "surName",
      headerName: "Отчество",
      flex: 1,
      minWidth: 125,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 100,
      editable: true,
    },
    {
      field: "password",
      headerName: "Пароль",
      flex: 1,
      minWidth: 100,
      renderCell: (params) =>
        params.row.password
          .split("")
          .slice(0, 20)
          .map(() => "*"),
      editable: true,
    },
    {
      field: "role",
      headerName: "Роль",
      flex: 0.2,
      minWidth: 110,
      editable: true,
      type: "singleSelect",
      valueOptions: ["GUEST", "USER", "ADMIN"],
    },
    {
      field: "createdAt",
      headerName: "Дата регистрации",
      flex: 1,
      minWidth: 160,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "",
      flex: 0.5,
      minWidth: 80,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={
                <SaveIcon
                  color="success"
                  sx={{
                    color: "primary.main",
                  }}
                />
              }
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={
              <EditIcon
                sx={{
                  color: "inherit",
                  "&:hover": {
                    color: "inherit",
                  },
                }}
              />
            }
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
            sx={{
              color: "green",
              borderRadius: "8px 0 0 8px",
              border: "1px solid #adb5bd",
              "&:hover": {
                color: Color.body_text,
                backgroundColor: "green",
              },
            }}
          />,
          <GridActionsCellItem
            icon={
              <DeleteIcon
                sx={{
                  color: "inherit",
                  "&:hover": {
                    color: "inherit",
                  },
                }}
              />
            }
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            sx={{
              color: "red",
              borderRadius: "0 8px 8px 0",
              border: "1px solid #adb5bd",
              "&:hover": {
                color: Color.body_text,
                backgroundColor: "red",
              },
            }}
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: "calc(100vh - 200px)",
        width: "100%",
      }}
    >
      <StyledDataGrid
        rows={rows.map((item, index) => {
          return { rowId: index + 1, ...item };
        })}
        getRowId={(row) => row.id}
        disableColumnMenu
        columns={columns}
        rowHeight={44}
        hideFooter
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onRemoveUser={processRowDelete}
        type="delete"
        btnName="Удалить"
        title="Удалить пользователя?"
      />
    </Box>
  );
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  // border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#303030",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : Color.table_inputBorder
    }`,
  },

  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },

  "& .MuiDataGrid-cell--textLeft": {
    display: "flex",
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& ::-webkit-scrollbar": {
    width: "6px",
    height: "100%",
  },
  "& ::-webkit-scrollbar-track": {
    backgroundColor: "#212529FF",
  },
  "& ::-webkit-scrollbar-thumb": {
    borderRadius: "5px",
    backgroundColor: "#818181FF",
  },
}));
