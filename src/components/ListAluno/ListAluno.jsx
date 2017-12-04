import React from 'react';
import { isWidthDown, isWidthUp } from 'material-ui/utils/withWidth';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Avatar from 'material-ui/Avatar';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';

import capitalizeEvery from '../../utils/capitalizeEvery';

const ListAluno = (props) => {
  return (
    <List {...isWidthDown("md", props.width) && { dense: true }}>
      {props.alunos.map((aluno, index) => (
        <Tooltip
          id="tooltip-icon"
          title={`Ver detalhes sobre: ${aluno.name.first}`}
          enterDelay={300}
          placement="bottom"
          key={index}
        >
          <ListItem
            key={index}
            className={props.classes.listItem}
            divider={true}
          >
            <Avatar alt="Remy Sharp" src={aluno.picture.large}/>
            <ListItemText
              primary={capitalizeEvery(
                aluno.name.first,
                aluno.name.last
              )}
              {...isWidthUp("sm", props.width) && {
                secondary: aluno.email
              }}
            />
            <ListItemSecondaryAction>
              <Button
                className={props.classes.button}
                dense
                onClick={() => {
                  props.handleClickOpen(aluno, index);
                }}
              >
                {isWidthUp("sm", props.width) && "Ver detalhes"}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  )
};

export default ListAluno;
