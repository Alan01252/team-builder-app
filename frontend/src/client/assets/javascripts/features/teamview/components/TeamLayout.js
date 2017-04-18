import React, {Component, PropTypes} from 'react';

import TeamList from './TeamList';
import './TeamLayoutApp.scss';

export default class TeamLayout extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchMembers();
    }


    render() {

        const {teamView, actions} = this.props;

        return (
            <div className="">
                <h1>Platforms Engineering Team</h1>
                {teamView.members.length > 0 &&
                <TeamList radarLabels={teamView.radarLabels} members={teamView.members} actions={actions}/>
                }
            </div>
        );
    }
}
