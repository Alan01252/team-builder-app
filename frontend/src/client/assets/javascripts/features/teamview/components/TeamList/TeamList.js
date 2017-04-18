import React, {Component, PropTypes} from 'react';

import TeamListItem from '../TeamListItem';
import './TeamList.scss';

export default class TeamList extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        members: PropTypes.array.isRequired,
        radarLabels: PropTypes.array.isRequired
    };

    renderList() {

        return this.props.members.map((member) =>
            (
                <TeamListItem
                    key={member.id}
                    id={member.id}
                    member={member}
                    radarLabels={this.props.radarLabels}
                    {...this.props.actions} />
            )
        );
    }

    render() {
        return (
            <div className="teamList">
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}
