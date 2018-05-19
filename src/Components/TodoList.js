import React from 'react'
import todoList, {set, newTask} from '../state/todoList'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const Tasks = (props) => (

    <div>
        <h1>tasks</h1>
        <TextField
            name={'addTasks'}
            onChange={props.newTask}
            value={props.newTaskText}

        />
        <RaisedButton
            label={'ADD TASK'}
            primary={true}
            onClick={() => props.set()}
        />
        <ul>
            {props.tasks.map((task, i) => (
                    <ListItem key={i}>
                        {task}
                    </ListItem>
                )
            )}
        </ul>
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todoList.tasks,
    newTaskText: state.todoList.newTaskText
})

const mapDispatchToProps = dispatch => ({
    newTask: (ev, newValue) => dispatch(newTask(newValue)),
    set: () => dispatch(set())

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)