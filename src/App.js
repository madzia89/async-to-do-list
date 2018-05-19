import React, {Component} from 'react';
import Tasks from './Components/TodoList'

import AppBar from 'material-ui/AppBar'


class App extends Component {
    render() {
        return (
            <div>
                <AppBar title ="Home"
                        showMenuIconButton={false}
                        style={{backgroundColor: '#AD1457'}}
                />
                <Tasks/>
            </div>
        )
    }
}

export default App;
