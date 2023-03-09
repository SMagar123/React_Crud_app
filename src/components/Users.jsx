import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";
const Users = () => {
  const tableHeader = [
    "ID",
    "FullName",
    "Email",
    "PhoneNumber",
    "Address",
    " ",
  ];
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    getUsersDetails();
  }, []);
  const getUsersDetails = async () => {
    const response = await getUsers();
    setUserDetail(response.data);
  };
  const deleteSingleUser = async (user_id) => {
    await deleteUser(user_id);
    getUsersDetails();
  };
  return (
    <StyledTable>
      <TableHead>
        <StyledTHead>
          {tableHeader.map((item) => {
            return <TableCell>{item}</TableCell>;
          })}
        </StyledTHead>
      </TableHead>
      <TableBody>
        {userDetail.map((item) => {
          return (
            <StyledTBody>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phonenumber}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="success"
                  style={{ "margin-right": "5%" }}
                  component={Link}
                  to={`/edit/${item.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteSingleUser(item.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </StyledTBody>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default Users;
const StyledTable = styled(Table)`
  width: 90%;
  margin: 3% auto 0 auto;
  border: 1px solid black;
`;
const StyledTHead = styled(TableRow)`
  background: blue;
  & > th {
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
const StyledTBody = styled(TableRow)`
  & > td {
    font-size: 1rem;
  }
`;