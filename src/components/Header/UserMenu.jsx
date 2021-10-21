import React from "react";
import { MenuItem, Popover } from "@material-ui/core";
import { userSignOut } from "actions";
import { useDispatch } from "react-redux";


export default ({open, anchorEl, handleClose}) => {
  const dispatch = useDispatch();

  return(
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={handleClose}>Change Password</MenuItem>
      <MenuItem onClick={()=>dispatch(userSignOut())}>Logout</MenuItem>
    </Popover>
)}