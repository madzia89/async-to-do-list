import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {store} from './store'

import Auth from './Auth/Auth'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth>
                <App />
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)