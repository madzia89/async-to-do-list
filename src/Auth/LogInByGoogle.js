import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'



const LogInByGoogle = (props) => (
    <div>
        <Paper style={{margin: '25px', padding: '25px'}}>
        <Row center={'xs'}>
            <Col md={9}>
                <h2 style={{color: 'darkslategray'}}>Log in with google account...</h2>
                <RaisedButton
                    label={'Log in with Google!'}
                    secondary={true}
                    onClick={props.onLogInHandler}
                />
            </Col>
        </Row>
            </Paper>
    </div>
)

export default LogInByGoogle