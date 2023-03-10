import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";
import "../styles/user.css";
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
  const [userFinding, setUserFinding] = useState("");
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
  const searchUser = () => {
    return userDetail.filter((item) => {
      return item.name.toLowerCase().includes(userFinding);
    });
  };
  return (
    <div style={{ overflowX: "auto", margin: "4em auto auto auto" }}>
      <div className="searchUsers">
        <div className="userInformation">
          <h2>Users Records</h2>
        </div>
        <div className="searchIndividualUser">
          <div className="searchIcon">
            <PersonSearchRoundedIcon style={{ fontSize: "3rem" }} />
          </div>
          <input
            type="text"
            placeholder="Search user by name..."
            onChange={(e) => setUserFinding(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <StyledTable>
        <TableHead>
          <StyledTHead>
            {tableHeader.map((item, index) => {
              return <TableCell key={index}>{item}</TableCell>;
            })}
          </StyledTHead>
        </TableHead>
        <TableBody>
          {searchUser().map((item) => {
            return (
              <StyledTBody>
                <TableCell key={item.id}>{item.id}</TableCell>
                <TableCell key={item.name}>{item.name}</TableCell>
                <TableCell key={item.email}>{item.email}</TableCell>
                <TableCell key={item.phonenumber}>{item.phonenumber}</TableCell>
                <TableCell key={item.address}>{item.address}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    style={{ marginRight: "5%" }}
                    component={Link}
                    to={`/edit/${item.id}`}
                    endIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteSingleUser(item.id)}
                    endIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </StyledTBody>
            );
          })}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Users;
const StyledTable = styled(Table)`
  width: 90%;
  margin: auto auto 0 auto;
  border: 1px solid black;
  border-collapse: collapse;
`;
const StyledTHead = styled(TableRow)`
  background: #482880;
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
