import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { css } from "glamor"; // npm install glamor --save

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  title: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 24
  }
}));

const rule = css({
  paddingLeft: 10,
  color: "#ffffff",
  ":hover": {
    color: "#8095ed",
    textDecoration: "none"
  }
});
const rootRule = css({
  paddingLeft: 10,
  fontWeight: "bold",
  fontSize: 24,
  color: "#ffffff",
  ":hover": {
    color: "#ffffff",
    textDecoration: "none"
  }
});
const activeLink = {
  fontWeight: "bold",
  color: "#6d83de"
};

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/home-page" variant="subtitle2" {...rootRule}>
            Vidly
          </Link>
          <NavLink to="/movies" activeStyle={activeLink} {...rule}>
            Movies
          </NavLink>
          <NavLink to="/customers" activeStyle={activeLink} {...rule}>
            Customers
          </NavLink>
          <NavLink to="/rentals" activeStyle={activeLink} {...rule}>
            Rentals
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
