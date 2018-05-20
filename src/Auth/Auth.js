import React from 'react'
import {connect} from 'react-redux'
import {logInByGoogle} from '../state/auth' //odpowiada za logowanie googlem
import LogInByGoogle from "./LogInByGoogle"
import {Grid, Row, Col} from 'react-flexbox-grid'
import AppBar from 'material-ui/AppBar'


const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <div>
                    <AppBar
                        title="Home"
                        showMenuIconButton={false}
                        style={{backgroundColor: '#AD1457'}}
                    />
                    <h1 style={{textAlign: 'center'}}>Log in to add tasks</h1>
                    <Row center={'xs'}>
                        <LogInByGoogle
                            onLogInHandler={props.logInByGoogle}
                        />
                    </Row>
                </div>
        }
    </div>
)

const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)