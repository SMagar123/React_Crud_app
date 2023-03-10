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
import addImage from "../images/users4_add.png";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";
const initialValues = {
  name: "",
  email: "",
  phonenumber: "",
  address: "",
};

const AddUsers = () => {
  const [userInfo, setUserInfo] = useState(initialValues);
  const navigate = useNavigate();
  const handleUserInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(userInfo);
    navigate("/users");
  };
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <img
          src={addImage}
          alt="image_edit"
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        />
      </div>

      <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
        Add User
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handleUserInput(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => handleUserInput(e)} type="email" name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => handleUserInput(e)} name="phonenumber" />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => handleUserInput(e)} name="address" />
      </FormControl>
      <FormControl>
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          style={{ backgroundColor: " #482880" }}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5em auto auto auto;
  & > div {
    margin-top: 0.8em;
  }
`;
