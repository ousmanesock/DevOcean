import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Thread({ doc }) {
  console.log("🚀 ~ file: Thread.js ~ line 11 ~ Thread ~ doc", doc);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {doc.thread.map((item, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={item.message}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.user}
                  </Typography>
                  {/* {" — I'll be in your neighborhood doing errands this…"} */}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
