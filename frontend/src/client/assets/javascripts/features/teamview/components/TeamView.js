import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators as teamActions, selector} from '../';
import TeamLayout from './TeamLayout';


@connect(selector, (dispatch) => ({
    actions: bindActionCreators(teamActions, dispatch)
}))

export default class TeamView extends Component {

    render() {

        console.log(this.props);

        return (
            <div>
                <TeamLayout {...this.props} />
            </div>
        );
    }
}
