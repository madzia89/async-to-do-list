import React from 'react'
import AddTaskForm from './AddTaskForm'
import {addTask, onChange, clear, filter, deleteTask, updateAfterDelete} from '../state/todoList'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'
import {Row, Col} from 'react-flexbox-grid'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const Filter = (props) => (

    <div>
        <Paper style={{margin: '10px'}}>
            <Row center={'xs'}>
                <Col md={4}>
                    <TextField
                        name={'filterTasks'}
                        placeholder={'find task'}
                        onChange={props.filter}
                        value={props.newFilter}
                    />
                </Col>
            </Row>
            <ul>
                {
                    props.tasks
                        .filter(task => (task.toLowerCase().indexOf(props.newFilter.toLowerCase()) !== -1))
                        .map((task, i) => (
                                <ListItem key={i}>
                                    <Row middle="xs">
                                        <Col xs={6}>
                                            {task}
                                        </Col>
                                        <Col xs={6}>
                                            <RaisedButton
                                                backgroundColor={'#ff6666'}
                                                label={'delete'}
                                                onClick={() => {
                                                    props.deleteTask(task)
                                                    props.updateAfterDelete()
                                                    props.clear()
                                                    alert('task is about to be deleted')
                                                }
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </ListItem>
                            )
                        )
                }
            </ul>
        </Paper>
    </div>
)
const mapStateToProps = state => ({
    tasks: state.todoList.tasks,
    newFilter: state.todoList.newFilter,
})

const mapDispatchToProps = dispatch => ({
    filter: (ev, newValue) => dispatch(filter(newValue)),
    deleteTask: (taskName) => dispatch(deleteTask(taskName)),
    updateAfterDelete: () => dispatch(updateAfterDelete()),
    clear: () => dispatch(clear()),


})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)