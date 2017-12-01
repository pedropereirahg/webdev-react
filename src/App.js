import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { purple, grey } from "material-ui/colors";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";

import { MenuItem } from "material-ui/Menu";
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import { CircularProgress } from "material-ui/Progress";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

import logo from "./logo.svg";
import "./App.css";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  },

  // Autocomplete
  suggestionsContainerOpen: {
    position: "absolute",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  textField: {
    width: "100%"
  }
});

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const InputSearchAluno = inputProps => {
  const { classes, autoFocus, value, ref, ...other } = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
};

const ModalDetailsAluno = props => {
  const { aluno, isOpen, close } = props;

  return (
    <Dialog open={props.isOpen} onRequestClose={close}>
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Disagree</Button>
        <Button onClick={props.close} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alunos: null,
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleAddStudents(students) {
    this.setState({ alunos: students });
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=5`)
      .then(response => response.json())
      .then(json => this.handleAddStudents(json.results));
  }

  render() {
    const { classes } = this.props;
    const { alunos, open } = this.state;
    return (
      <Grid container>
        {open && (
          <ModalDetailsAluno isOpen={open} close={this.handleRequestClose} />
        )}
        <Grid item xs={12}>
          <Paper>
            <TextField
              label="Nome do aluno"
              id="margin-normal"
              defaultValue="José da Silva"
              className={classes.textField}
              helperText="Digite o nome do aluno que você deseja procurar"
              margin="normal"
            />
          </Paper>

          <Paper>
            {alunos ? (
              <List>
                {alunos.map(aluno => (
                  <ListItem
                    key={aluno.id.value}
                    dense
                    button
                    className={classes.listItem}
                    onClick={this.handleClickOpen}
                  >
                    <Avatar alt="Remy Sharp" src={aluno.picture.large} />
                    <ListItemText
                      primary={`${aluno.name.first} ${aluno.name.last}`}
                    />
                    <ListItemSecondaryAction>
                      <Checkbox
                      // onChange={this.handleToggle(value)}
                      // checked={this.state.checked.indexOf(value) !== -1}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            ) : (
              <CircularProgress />
            )}

            <Divider />
            <Button>Botão lindo</Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
