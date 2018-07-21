import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";
import Styles from "./Styles.js";

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const list = [
  {
    id: 1,
    name: "Marcel Peruch",
    text: "Bávaro Software",
    image: <ImageIcon />
  },
  {
    id: 2,
    name: "Juarez da Rocha",
    text: "Tcha tchum CRM",
    image: <WorkIcon />
  },
  {
    id: 3,
    name: "Pedro da Silva",
    text: "Minhas Vendas",
    image: <BeachAccessIcon />
  }
];

const LeftContainer = ({ classes }) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          M
        </Avatar>
      }
    />
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant={classes.subheader}>
        Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
    </Paper>
    <List>
      {list.map(item => (
        <ListItem key={item.id}>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

const RightContainer = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={9}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Marcel Peruch"
    />
    <CardContent
      className={[classes.rightContainer, classes.content].join(" ")}
    />
  </Grid>
);

export default withStyles(Styles)(App);
