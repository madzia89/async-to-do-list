import React from 'react'
import todoList, {addTask, onChange, clear, filter, deleteTask, updateAfterDelete} from '../state/todoList'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'
import {Grid, Row, Col} from 'react-flexbox-grid'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'


const Tasks = (props) => (

    <div>

        <h1 style={{textAlign: 'center', marginBottom: '50px'}}>To do list</h1>
        <Row around={'xs'}>
            <Col md={9}>
                <TextField
                    name={'addTasks'}
                    fullWidth={true}
                    placeholder={'add task'}
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
            </Col>
            <Col center={'true'}>
                <RaisedButton
                    label={'ADD TASK'}
                    backgroundColor={'#AD1457'}
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
            </Col>
        </Row>
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
                                                    props.deleteTask(i)
                                                    props.updateAfterDelete()
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
    newText: state.todoList.newText,
    newFilter: state.todoList.newFilter,
})

const mapDispatchToProps = dispatch => ({
    onChange: (ev, newValue) => dispatch(onChange(newValue)),
    filter: (ev, newValue) => dispatch(filter(newValue)),
    addTask: () => dispatch(addTask()),
    clear: () => dispatch(clear()),
    deleteTask: (index) => dispatch(deleteTask(index)),
    updateAfterDelete: () => dispatch(updateAfterDelete()),

})


export default connect(
mapStateToProps,
mapDispatchToProps
)(Tasks)