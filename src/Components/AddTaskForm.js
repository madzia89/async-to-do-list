import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import {addTask, clear, onChange } from "../state/todoList";
import {connect} from "react-redux";

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const AddTaskForm = (props) => (
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
    </div>
)


const mapStateToProps = state => ({
    tasks: state.todoList.tasks,
    newText: state.todoList.newText,
})

const mapDispatchToProps = dispatch => ({
    onChange: (ev, newValue) => dispatch(onChange(newValue)),
    addTask: () => dispatch(addTask()),
    clear: () => dispatch(clear()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTaskForm)