import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from './store'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Auth from './Auth/Auth'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            {/*<Auth>*/}
                <App/>
            {/*</Auth>*/}
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)

