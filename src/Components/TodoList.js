import React from 'react'
import todoList, {addTask, onChange} from '../state/todoList'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const Tasks = (props) => (

    <div>
        <h1>tasks</h1>
        <TextField
            name={'addTasks'}
            onChange={props.onChange}
            value={props.newText}

        />
        <RaisedButton
            label={'ADD TASK'}
            primary={true}
            onClick={() => props.addTask()}
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
    newText: state.todoList.newText
})

const mapDispatchToProps = dispatch => ({
    onChange: (ev, newValue) => dispatch(onChange(newValue)),
    addTask: () => dispatch(addTask())

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)