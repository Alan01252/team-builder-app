import React, {Component, PropTypes} from 'react';

import FriendListItem from '../FriendListItem';
import './FriendList.scss';

export default class FriendList extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        friends: PropTypes.array.isRequired
    };

    renderList() {
        return this.props.members.map((member) =>
            (
                <FriendListItem
                    key={member.id}
                    id={member.id}
                    member={member}
                    {...this.props.actions} />
            )
        );
    }

    render() {
        return (
            <div className="friendList">
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}
