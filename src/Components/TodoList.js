import React from 'react'
import todoList, {addTask, onChange, clear} from '../state/todoList'
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
            onKeyPress={(ev) => {
                if ((ev.key === 'Enter') && (props.newText !== '')) {
                    props.addTask()
                    props.clear()
                }
            }
            }

        />
        <RaisedButton
            label={'ADD TASK'}
            primary={true}
            onClick={() => {
                props.addTask()
                props.clear()
            }
            }
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
    addTask: () => dispatch(addTask()),
    clear: () => dispatch(clear())

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)