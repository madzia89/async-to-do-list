import React from 'react'
import {connect} from 'react-redux'

const CountLogins = (props) => (
    <div>
        <p style={{textAlign: 'center', color: 'darkslategray'}}>
            Wow! you have logged in {props.loginsNumber.length} times!</p>
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