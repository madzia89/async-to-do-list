import React, {Component} from 'react';
import Tasks from './Components/TodoList'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import {auth} from "./firebase";


const App = (props) => (
    <div>
        <AppBar title="Home"
                showMenuIconButton={false}
                style={{backgroundColor: '#AD1457'}}
                iconElementRight={
                    <IconButton onClick={() => auth.signOut()}>
                        <NavigationClose/>
                    </IconButton>
                }/>
        <Tasks/>
    </div>
)


export default App;
