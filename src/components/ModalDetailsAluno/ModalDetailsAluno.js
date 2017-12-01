import React, {Component} from "react";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";

import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Card, {CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "material-ui/Dialog";
import {FormControl, Input, InputLabel, MenuItem, Select, withStyles} from "material-ui";

function getPropertyName (property){
    return property
}
function getProperty( propertyName, object ) {
    const parts = propertyName.split( "." );
        const length = parts.length;
        let property = object || this;

    for ( let i = 0; i < length; i++ ) {
        property = property[parts[i]];
    }

    return property;
}

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 194,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});

const FormAluno = props => {
    return (
        <form
            // className={classes.container}
              noValidate
              autoComplete="off">
             {React.Children.map(props.children, child => {
                return React.cloneElement(child, {
                    // aluno: props.aluno
                    ...props
                })
            })}
            {/*{props.children}*/}
        </form>
    );
};

const SelectGenderAluno = props => {
    return(<FormControl
            // className={classes.formControl}
        >
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
                value={this.state.age}
                onChange={this.handleChange}
                input={<Input name="age" id="age-simple" />}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
};

const FieldAluno = props => {
    const { fieldKey, name, label, aluno, onChange, formState } = props;
    const componentProps = {
        name: fieldKey,
        id: fieldKey,
        defaultValue: getProperty(fieldKey, aluno),
        value: formState[fieldKey],
        onChange: onChange(fieldKey),
        margin: "normal",
        fullWidth: true,
        label
    };

    return (
        <TextField
            // id={props.name.toLowerCase()}
            // label={props.label}
            // className={classes.textField}
            // value={this.state[name] || name}
            // onChange={this.handleChange(props.name)}
            // margin="normal"
            // fullWidth
            {...componentProps}
        />
    )
};

// const ModalDetailsAluno = props => {
class ModalDetailsAluno extends Component {
    constructor(state, props) {
        super(state, props);
    }

    state = {
        expanded: false,
    };

    handleExpandClick = () => {
        console.log('IJADJODJISOSJIAD')
    };

    handleChange = name => event => {
        console.log(this.state);
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const {aluno, isOpen, close, classes} = this.props;
        return (
            <Dialog open={isOpen} onRequestClose={close}>
                <DialogTitle>
                    Detalhes do aluno: <strong>{aluno.name.first}</strong>
                </DialogTitle>
                <DialogContent>

                    <FormAluno aluno={aluno}
                               classes={classes}
                               onChange={this.handleChange}
                               formState={this.state}
                    >
                        <FieldAluno
                            fieldKey={'name.first'}
                            label={'Primeiro Nome'}
                        />
                        <FieldAluno
                            fieldKey={'name.last'}
                            label={'Sobrenome'}
                        />
                        <SelectGenderAluno
                            fieldKey={''} />


                    </FormAluno>

                {/*<Card className={classes.card}>*/}
                {/*<CardHeader*/}
                {/*avatar={*/}
                {/*<Avatar aria-label="Recipe" className={classes.avatar}>*/}
                {/*R*/}
                {/*</Avatar>*/}
                {/*}*/}
                {/*action={*/}
                {/*<IconButton>*/}
                {/*<MoreVertIcon/>*/}
                {/*</IconButton>*/}
                {/*}*/}
                {/*title="Shrimp and Chorizo Paella"*/}
                {/*subheader="September 14, 2016"*/}
                {/*/>*/}
                {/*<CardMedia*/}
                {/*className={classes.media}*/}
                {/*image={aluno.picture.large}*/}
                {/*title="Contemplative Reptile"*/}
                {/*/>*/}
                {/*<CardContent>*/}
                {/*<Typography component="p">*/}
                {/*This impressive paella is a perfect party dish and a fun meal to cook together with*/}
                {/*your guests. Add 1 cup of frozen peas along with the mussels, if you like.*/}
                {/*</Typography>*/}
                {/*</CardContent>*/}
                {/*<CardActions disableActionSpacing>*/}
                {/*<IconButton aria-label="Add to favorites">*/}
                {/*<FavoriteIcon/>*/}
                {/*</IconButton>*/}
                {/*<IconButton aria-label="Share">*/}
                {/*<ShareIcon/>*/}
                {/*</IconButton>*/}
                {/*<div className={classes.flexGrow}/>*/}
                {/*<IconButton*/}
                {/*// className={classnames(classes.expand, {*/}
                {/*// [classes.expandOpen]: this.state.expanded,*/}
                {/*//})}*/}
                {/*onClick={this.handleExpandClick}*/}
                {/*// aria-expanded={this.state.expanded}*/}
                {/*// aria-label="Show more"*/}
                {/*>*/}
                {/*<ExpandMoreIcon/>*/}
                {/*</IconButton>*/}
                {/*</CardActions>*/}
                {/*<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>*/}
                {/*<CardContent>*/}
                {/*<Typography paragraph type="body2">*/}
                {/*Method:*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10*/}
                {/*minutes.*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
                {/*heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
                {/*browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving*/}
                {/*chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,*/}
                {/*salt and pepper, and cook, stirring often until thickened and fragrant, about 10*/}
                {/*minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*Add rice and stir very gently to distribute. Top with artichokes and peppers, and*/}
                {/*cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.*/}
                {/*Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into*/}
                {/*the rice, and cook again without stirring, until mussels have opened and rice is*/}
                {/*just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)*/}
                {/*</Typography>*/}
                {/*<Typography>*/}
                {/*Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                {/*</Typography>*/}
                {/*</CardContent>*/}
                {/*</Collapse>*/}
                {/*</Card>*/}
                <DialogContentText>
                    <pre>{`${JSON.stringify(aluno, null, 2)}`}</pre>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            < DialogActions >
            < Button
        onClick = {close} > Disagree < /Button>
        <Button onClick={close} autoFocus>
            Agree
        </Button>
        < /DialogActions>
    </Dialog>
    );
    }
    }

    export default withStyles(styles)(ModalDetailsAluno);