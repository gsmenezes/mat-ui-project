import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h5"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new note Note
      </Typography>
      <Button
        type="submit"
        color="primary"
        variant="outlined"
        onClick={() => console.log("Hello! You clicked me..")}
      >
        Submit
      </Button>
    </Container>
  );
}
