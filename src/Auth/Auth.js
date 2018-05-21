import React from 'react'
import {connect} from 'react-redux'
import {logInByGoogle} from '../state/auth'
import RaisedButton from 'material-ui/RaisedButton'
import {Row} from 'react-flexbox-grid'
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
                        <RaisedButton
                            label={'Log in by Google!'}
                            secondary={true}
                            onClick={props.logInByGoogle}
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