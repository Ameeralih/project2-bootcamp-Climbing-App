import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase/storage";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

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
      <h3>Name:</h3>
      <h3>Email: {user.email}</h3>
      <h1 style={{ fontSize: "5px" }}>Unique User ID: {user.uid}</h1>
      {!user.displayName && (
        <Alert severity="info">Please Complete Your Profile</Alert>
      )}
    </div>
  );
}
