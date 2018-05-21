import React from 'react'
import AddTaskForm from './AddTaskForm'
import FilterAndDelete from './FilterAndDelete'

const Tasks = (props) => (

    <div>
        <AddTaskForm/>
        <FilterAndDelete/>
    </div>
)
const mapStateToProps = state => ({
    tasks: state.todoList.tasks,
    newText: state.todoList.newText,
    newFilter: state.todoList.newFilter,
})




export default Tasks