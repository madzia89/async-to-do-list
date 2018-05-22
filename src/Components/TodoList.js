import React from 'react'
import Filter from './FilterAndDelete'
import AddTaskForm from './AddTaskForm'
import CountLogins from './CountLogins'


const Tasks = (props) => (

    <div>
        <AddTaskForm/>
        <Filter/>
        <CountLogins/>
    </div>
)


export default (Tasks)