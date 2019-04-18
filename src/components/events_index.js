import React from 'react'
import { connect } from "react-redux";
import { readEvents } from "../actions";

class EventsIndex extends React.Component {

    componentDidMount() {
        this.props.readEvents()
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    readEvents
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)