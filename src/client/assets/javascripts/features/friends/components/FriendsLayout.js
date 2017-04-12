import React, {Component, PropTypes} from 'react';

import FriendList from './FriendList';
import './FriendListApp.scss';

export default class FriendsLayout extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        members: PropTypes.object.isRequired
    };

    render() {
        const {members: {memberById}, actions} = this.props;

        return (
            <div className="">
                <h1>Platforms Engineering Team</h1>
                <FriendList members={memberById} actions={actions}/>
            </div>
        );
    }
}
