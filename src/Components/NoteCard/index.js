import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  pad: {
  marginTop: 20,
  marginBottom: 0,
  paddingBottom: 0
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">{note.details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
