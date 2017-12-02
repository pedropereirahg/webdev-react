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

import Tooltip from "material-ui/Tooltip";

import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

import logo from "./logo.svg";
import "./App.css";
import ModalDetailsAluno from "./components/ModalDetailsAluno";
import { compose } from "recompose";
import { Hidden, withWidth } from "material-ui";
import capitalize from "lodash/capitalize";
import { isWidthDown, isWidthUp } from "material-ui/utils/withWidth";

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
const capitalizeEvery = (...words) =>
  words.map(word => capitalize(word)).join(" ");

console.log("CAPIRALIZE", capitalizeEvery("rod", "costa", "clemente"));

/**
 * Start with the slowest value as low end devices often have a small screen.
 *
 * innerWidth |0      xs      sm      md      lg      xl
 *            |-------|-------|-------|-------|-------|------>
 * width      |  xs   |  xs   |  sm   |  md   |  lg   |  xl
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alunos: null,
      open: false,
      checked: [0],
      alunoSelected: null
    };
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  handleClickOpen = (aluno, index) => {
    this.setState({
      open: true,
      alunoSelected: { ...aluno, index }
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      alunoSelected: null
    });
  };

  updateAluno = (aluno, index) => {
    console.log({ aluno, index });
    console.log(this.state);

    // this.handleRequestClose();
  };

  handleAddStudents(students) {
    this.setState({ alunos: students });
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=50&nat=us,dk,fr,gb`)
      .then(response => response.json())
      .then(json => this.handleAddStudents(json.results));
  }

  render() {
    const { classes, width } = this.props;
    const { alunos, open } = this.state;
    return (
      <Grid container>
        {open && (
          <ModalDetailsAluno
            isOpen={open}
            aluno={this.state.alunoSelected}
            close={this.handleRequestClose}
            updateAluno={this.updateAluno}
          />
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
              <List
                  {...(isWidthDown("md", width) && { dense: true })}>
                {alunos.map((aluno, index) => (
                  <Tooltip
                    id="tooltip-icon"
                    title={`Ver detalhes sobre: ${aluno.name.first}`}
                    enterDelay={300}
                    placement="bottom"
                    key={index}
                  >
                    <ListItem
                      key={index}
                      className={classes.listItem}
                      divider={true}
                    >
                      {/*Current width: {width}*/}
                      <Avatar alt="Remy Sharp" src={aluno.picture.large} />
                      <ListItemText
                        primary={capitalizeEvery(
                          aluno.name.first,
                          aluno.name.last
                        )}
                        {...isWidthUp("sm", width) && ({ secondary: aluno.email })}
                      />
                      <ListItemSecondaryAction>
                        <Button
                          className={classes.button}
                          dense
                          onClick={() => {
                            this.handleClickOpen(aluno, index);
                          }}
                        >
                          {isWidthUp("sm", width) && "Ver detalhes"}
                        </Button>

                        {/*<Checkbox*/}
                        {/*onChange={this.handleToggle(index)}*/}
                        {/*checked={this.state.checked.indexOf(index) !== -1}*/}
                        {/*/>*/}
                      </ListItemSecondaryAction>
                    </ListItem>
                  </Tooltip>
                ))}
              </List>
            ) : (
              <CircularProgress />
            )}

            <Divider />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default compose(withWidth(), withStyles(styles))(App);
