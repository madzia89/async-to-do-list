import React from 'react'
import {connect} from 'react-redux'
import countLogins from '../state/countLogins'


const CountLogins = (props) => (
    <div>
        <p style={{textAlign: 'center', color: 'darkslategray'}}>We're so happy to see you for the {props.loginsNumber.length}th time!</p>
        {console.log(props.loginsNumber.length)}
    </div>
)

const mapStateToProps = state => ({
    loginsNumber: state.countLogins.loginsNumber
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountLogins)