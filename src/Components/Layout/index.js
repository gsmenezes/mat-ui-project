import React from "react";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    background: "#EDF6F9",
    width: "100%",
    height: '100vh'
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
