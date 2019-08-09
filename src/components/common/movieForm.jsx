import React from "react";
import { Route } from "react-router-dom";
// MATERIAL UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <Typography style={{ marginBottom: 20 }} variant="h4">
        Movie Form {match.params.id}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </Button>
    </div>
  );
};

export default MovieForm;
