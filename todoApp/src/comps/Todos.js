import React from "react";

import { connect } from "react-redux";
import Todo from "./Todo";

import {
  Fade,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Todos = (props) => {
  return (
    <List>
      <Grid container spacing={2}>
        {props.todos.length > 0 ? (
          props.todos.map((i) => {
            return (
              <Grid item xs={12} md={6}>
                <Fade in>
                  <Box border={1} borderColor="grey.500">
                    <Todo key={i.id} data={i} />
                  </Box>
                </Fade>
              </Grid>
            );
          })
        ) : (
          <ListItem divider style={{ textAlign: "center" }}>
            <ListItemText primary="You currently have nothing to do!  SURELY NOT? ;o)" />
          </ListItem>
        )}
      </Grid>
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
