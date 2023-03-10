import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser, editUser } from "../service/api";
import editimage from "../images/user_edit.png";
const initialValues = {
  name: "",
  email: "",
  phonenumber: "",
  address: "",
  month: "",
};

const EditUsers = () => {
  const [userInfo, setUserInfo] = useState(initialValues);
  useEffect(() => {
    getSingleUserDetail();
  }, []);
  const { id } = useParams();
  const getSingleUserDetail = async () => {
    let response = await getSingleUser(id);
    setUserInfo(response.data);
  };
  const navigate = useNavigate();
  const handleUserInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await editUser(userInfo, userInfo.id);
    navigate("/users");
  };
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <img
          src={editimage}
          alt="image_edit"
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        />
      </div>

      <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
        Edit User
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => handleUserInput(e)}
          name="name"
          value={userInfo.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => handleUserInput(e)}
          name="email"
          value={userInfo.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input
          onChange={(e) => handleUserInput(e)}
          name="phonenumber"
          value={userInfo.phonenumber}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input
          onChange={(e) => handleUserInput(e)}
          name="address"
          value={userInfo.address}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Assigned Month</InputLabel>
        <Input
          onChange={(e) => handleUserInput(e)}
          name="month"
          value={userInfo.month}
        />
      </FormControl>
      <FormControl>
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          style={{ backgroundColor: " #482880" }}
        >
          Update Information
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUsers;
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5em auto auto auto;
  & > div {
    margin-top: 0.8em;
  }
`;
