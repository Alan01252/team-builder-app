// @flow

import {createStructuredSelector} from 'reselect';
import assign from 'lodash/assign';

import {State} from 'models/members';

// This will be used in our root reducer and selectors
export const NAME = 'members';

const initialState:State = {
    memberById: [
        {
            id: 0,
            name: 'Mike Richardson (A10)',
            title: "Principal Applications Consultant",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper commodo sagittis. Proin egestas ipsum viverra sem finibus rutrum. Duis."
        },
        {
            id: 1,
            name: 'Simon Williams (A9) ',
            title: "Managing Software Engineer",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper commodo sagittis. Proin egestas ipsum viverra sem finibus rutrum. Duis."
        },
        {
            id: 2,
            name: 'Alan Hollis (A7)',
            title: 'Software Engineer',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper commodo sagittis. Proin egestas ipsum viverra sem finibus rutrum. Duis."
        },
        {
            id: 3,
            name: 'Alan Hollis (A7)',
            title: 'Software Engineer',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper commodo sagittis. Proin egestas ipsum viverra sem finibus rutrum. Duis."
        },
        {
            id: 4,
            name: 'Alan Hollis (A7)',
            title: 'Software Engineer',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper commodo sagittis. Proin egestas ipsum viverra sem finibus rutrum. Duis."
        }
    ]
};

// Reducer

/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

export default function reducer(state:State = initialState, action:any = {}):State {
    switch (action.type) {
        default:
            return state;
    }
}

// Selectors

const members = (state) => state[NAME];

export const selector = createStructuredSelector({
    members
});

export const actionCreators = {};
