import React from 'react'
import todoList, {addTask, onChange, clear, filter} from '../state/todoList'
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
                if (props.newText !== '') {
                    props.addTask()
                    props.clear()
                }
                else {
                    alert('oops! you try to add empty task')
                }
            }
            }
        />
        <TextField
            name={'filterTasks'}
            placeholder={'find task'}
            onChange={props.filter}
            value={props.newFilter}
        />
        <ul>
            {
                props.tasks
                    .filter(task => (task.toLowerCase().indexOf(props.newFilter.toLowerCase()) !== -1))
                    .map((task, i) => (
                        <ListItem key={i}>
                            {task}
                        </ListItem>
                    )
                )
            }
        </ul>
    </div>
)
const mapStateToProps = state => ({
    tasks: state.todoList.tasks,
    newText: state.todoList.newText,
    newFilter: state.todoList.newFilter,
})

const mapDispatchToProps = dispatch => ({
    onChange: (ev, newValue) => dispatch(onChange(newValue)),
    filter: (ev, newValue) => dispatch(filter(newValue)),
    addTask: () => dispatch(addTask()),
    clear: () => dispatch(clear())

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)