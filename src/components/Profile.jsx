import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase/storage";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { deleteUser } from "firebase/auth";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Profile({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  });

  const updateProfilePic = (e) => {
    e.preventDefault();
    const userProfileRef = ref(storage, user.uid);
    uploadBytes(userProfileRef, file).then(() =>
      getDownloadURL(userProfileRef).then((url) => setAvatar(url))
    );
  };

  const handleDeleteUser = (user) => {
    deleteUser(user)
      .catch(<Alert severity="error">unsuccessful</Alert>)
      .then(navigate("/login"));
  };

  const [avatar, setAvatar] = useState("");
  const [file, setFile] = useState("");

  const [name, setName] = useState("");
  return (
    <div className="userprofile">
      <br />
      <br />
      <br />
      <Avatar
        alt="profile picture"
        sx={{ width: 56, height: 56 }}
        src={avatar}
      ></Avatar>
      <form onSubmit={updateProfilePic}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">
          {!avatar && "Confirm"}
          {avatar && "Edit"}
        </button>
        {avatar && <button onClick={() => setAvatar("")}>Delete</button>}
      </form>

      <h1>Hello There!</h1>
      <div>
        Name:
        <TextField
          id="outlined-basic"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
      </div>
      <div>
        Email:{" "}
        <TextField
          id="outlined-basic"
          size="small"
          value={user.email}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
      </div>
      <Button
        variant="outlined"
        color="error"
        onClick={() => handleDeleteUser(user)}
      >
        Delete Account
      </Button>
      <h1 style={{ fontSize: "5px" }}>Unique User ID: {user.uid}</h1>
      {!user.displayName && (
        <Alert severity="info">Please Complete Your Profile</Alert>
      )}
    </div>
  );
}
