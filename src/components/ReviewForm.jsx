import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { child, push, ref, update } from "firebase/database";
import { database } from "../firebase/database";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal({ currentGym, user }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addNewReview = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newComment = {
      id: user.uid,
      name: user.displayName,
      comment: data.get("review"),
      time: Date.now(),
    };
    const newCommentKey = push(
      child(ref(database), `/gyms/${currentGym.name}`)
    ).key;
    const updates = {};
    updates[`/gyms/${currentGym.name}` + newCommentKey] = newComment;
    update(ref(database), updates)
      .catch(({ message }) => <Alert severity="error">{message}</Alert>)
      .then(() => {
        handleClose();
      });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Review</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={addNewReview} sx={style}>
          <TextField
            name="name"
            label="name"
            fullWidth
            value={user.displayName}
          />
          <TextField
            margin="normal"
            name="review"
            label="Review"
            fullWidth
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 3 }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
export const ReviewForm = ({ currentGym, user }) => {
  return <BasicModal currentGym={currentGym} user={user} />;
};
