// @flow

import {createStructuredSelector} from 'reselect';
import fetch from 'isomorphic-fetch'

const REQUEST_MEMBERS = 'redux-app/friends/REQUEST_MEMBERS';
const RECEIVE_MEMBERS = 'redux-app/friends/RECEIVE_MEMBERS';

export const NAME = 'TeamView';
const teamView = (state) => state[NAME];

const initialState = {
    isFetching: false,
    didInvalidate: false,
    radarLabels: [],
    members: []
};


const requestMembers = () => {
    return {
        type: REQUEST_MEMBERS,
        receivedAt: Date.now()
    }
};

function receiveMembers(json) {
    return {
        type: RECEIVE_MEMBERS,
        radarLabels: json.body.radar.labels,
        members: json.body.members,
        receivedAt: Date.now()
    }
}


const fetchMembers = () => {
    return dispatch => {
        dispatch(requestMembers())
        return fetch(`http://localhost:8090/members`, {}).then(
            response => response.json()
        ).then(json => dispatch(receiveMembers(json)))
    }
};


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_MEMBERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_MEMBERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                members: action.members,
                radarLabels: action.radarLabels,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

export const selector = createStructuredSelector({
    teamView
});

export const actionCreators = {
    fetchMembers
};
