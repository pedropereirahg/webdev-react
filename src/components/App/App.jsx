import React, { Component } from 'react';
import { compose } from 'recompose';

import { withWidth } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import './App.css';
import ListAluno from '../ListAluno';
import ModalDetailsAluno from '../ModalDetailsAluno';
import globalStyles from './globalStyles';

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
      alunoSelected: null,
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
      checked: newChecked,
    });
  };

  handleClickOpen = (aluno, index) => {
    this.setState({
      open: true,
      alunoSelected: { ...aluno, index },
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      alunoSelected: null,
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
    fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
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
              <ListAluno
                alunos={alunos}
                width={width}
                classes={classes}
                handleClickOpen={this.handleClickOpen}
              />
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

export default compose(withWidth(), withStyles(globalStyles))(App);
