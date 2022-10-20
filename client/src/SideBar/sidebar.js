import React from "react";
import PropTypes from "prop-types";
// import InboxIcon from "@mui/Inbox";
// import DraftsIcon from "@mui/Drafts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const styles = {
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "white",
  },
};

function SimpleList(props) {
  return (
    <div style={{ width: 300 }}>
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>

      {/* <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List> */}
      {/* <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List> */}
      {/* <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List> */}
      {/* <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List> */}
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleList;
