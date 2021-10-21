import React from "react";
import { IconButton } from "@material-ui/core";
import { PersonRounded, Search } from "@material-ui/icons";
import headerStyle from './style';
import UserMenu from "./UserMenu";



export default ()=>{
  const classes = headerStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return(
    <div className={classes.root}>
      <div className="container d-flex h-100 align-items-center justify-content-between">
        <h2 className={classes.header}>Credentials Manager</h2>
        <div className={classes.searchBox}>
          <input className={classes.searchInput} placeholder="Search..."/>
          <Search fontSize="small"/>
        </div>
        <IconButton className={classes.user} onClick={handleClick}>
          <PersonRounded/>
        </IconButton>
        <UserMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose}/>
      </div>
    </div>
  )
}