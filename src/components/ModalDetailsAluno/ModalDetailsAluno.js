import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import moment from 'moment';
import 'moment/locale/pt-br';

import red from 'material-ui/colors/red';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  withStyles
} from 'material-ui';
import TextValidator from '../TextValidator';
import { ValidatorForm } from 'react-form-validator-core';

const genderMap = {
  male: 'Masculino',
  female: 'Feminino',
  transMale: 'Homem Trans',
  transFemale: 'Mulher Trans',
  agender: 'Agênero',
  none: 'Não informado'
};

function getProperty(propertyName, object) {
  const parts = propertyName.split('.');
  const length = parts.length;
  let property = object || this;

  for (let i = 0; i < length; i++) {
    property = property[parts[i]];
  }

  return property;
}

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 194
  },
  avatarBig: {
    width: 120,
    height: 120
  },

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  flexGrow: {
    flex: '1 1 auto'
  }
});

class FormAluno extends Component {

  render() {
    const props = this.props;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={(...ar) => {
          console.log(ar);
        }}
        onError={errors => console.log(errors)}
      >
        {/*<form noValidate autoComplete="off">*/}
        {React.Children.map(props.children, child => {
          props.registerInputFormState(
            child.props.fieldKey,
            getProperty(child.props.fieldKey, props.aluno)
          );
          return React.cloneElement(child, {
            ...props
          });
        })}
        {/*</form>*/}
      </ValidatorForm>
    );
  }
}

const SelectGenderAluno = props => {
  const { fieldKey, label, aluno, onChange, formState } = props;

  return (
    <FormControl>
      <InputLabel htmlFor="age-simple">{label}</InputLabel>
      <Select
        value={formState[fieldKey] || 'none'}
        defaultValue={getProperty(fieldKey, aluno)}
        onChange={onChange(fieldKey)}
        input={<Input name="age" id="age-simple" />}
      >
        {Object.entries(genderMap).map(([genderKey, genderTranslation]) => (
          <MenuItem key={genderKey} value={genderKey}>
            {genderTranslation}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FieldAluno = props => {
  const { fieldKey, label, aluno, onChange, validators } = props;


  let componentProps = {
    name: fieldKey,
    id: fieldKey,
    defaultValue: getProperty(fieldKey, aluno),
    // value: formState[fieldKey],
    onChange: onChange(fieldKey),
    margin: 'normal',
    fullWidth: true,
    label
  };

  if (validators) {
    // const [validator, errorMessage] = validators.map();
    const { validations, errorMessages } = Object.entries(validators).reduce(
      (acc, curr) => {
        const [rule, message] = curr;
        if (
          acc.validations !== undefined &&
          acc.errorMessages !== undefined
        ) {
          acc.validations.push(rule) &&
          acc.errorMessages.push(message);
        }
        return acc;
      },
      { validations: [], errorMessages: [] }
    );

    componentProps = {
      ...componentProps,
      validators: validations,
      errorMessages
    };
  }

  // return <TextField {...componentProps} />;
  return (
    <TextValidator
      {...componentProps}
    />
  );
};

// const ModalDetailsAluno = props => {
class ModalDetailsAluno extends Component {
  constructor(state, props) {
    super(state, props);
    moment.locale('pt-br');
  }

  state = {
    expanded: false
  };

  handleChange = name => event => {
    console.log(this.state);
    console.log(event._isAMomentObject);
    this.setState({
      [name]: event._isAMomentObject ? event : event.target.value
    });
  };

  registerInputFormState = (field, initialValue) => {
    if (!this.state[field]) {
      console.log(this.state[field]);
      console.group();
      console.log({ field, initialValue });
      this.setState({
        [field]: initialValue
      });
      console.groupEnd();
    }
  };

  render() {
    const { aluno, isOpen, close, classes, updateAluno } = this.props;
    return (
      <Dialog open={isOpen} onRequestClose={close}>
        <DialogTitle>
          Detalhes do aluno: <strong>{aluno.name.first}</strong>
        </DialogTitle>
        <DialogContent>
          <Avatar
            alt={aluno.name}
            className={classes.avatarBig}
            src={aluno.picture.large}
          />
          {/*<DatePicker*/}
          {/*value={this.state.dob || aluno.dob}*/}
          {/*onChange={this.handleChange("dob")}*/}
          {/*leftArrowIcon={<ArrowBack />}*/}
          {/*rightArrowIcon={<ArrowForward />}*/}
          {/*format="DD/MM/YYYY"*/}
          {/*okLabel="Salvar"*/}
          {/*cancelLabel="Cancelar"*/}
          {/*disableFuture*/}
          {/*autoOk*/}
          {/*/>*/}
          <FormAluno
            aluno={aluno}
            classes={classes}
            onChange={this.handleChange}
            formState={this.state}
            registerInputFormState={this.registerInputFormState}
          >
            <FieldAluno
              fieldKey={'name.first'}
              label={'Primeiro Nome'}
              validators={{ required: 'Este campo é obrigatório' }}
            />
            <FieldAluno fieldKey={'name.last'} label={'Sobrenome'} />
            <FieldAluno
              fieldKey={'email'}
              label={'E-mail'}
              validators={{
                required: 'Este campo é obrigatório',
                isEmail: 'O e-mail está no formato inválido'
              }}
            />
            <SelectGenderAluno fieldKey={'gender'} label="Gênero" />
          </FormAluno>
          <DialogContentText>{''}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}> Cancelar </Button>
          <Button onClick={updateAluno(aluno, aluno.index)} autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

FieldAluno.propTypes = {
  aluno: PropTypes.object,
  fieldKey: PropTypes.string,
  formState: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

ModalDetailsAluno.propTypes = {
  aluno: PropTypes.object,
  classes: PropTypes.array,
  close: PropTypes.func,
  isOpen: PropTypes.bool,
  updateAluno: PropTypes.func
};

export default withStyles(styles)(ModalDetailsAluno);
