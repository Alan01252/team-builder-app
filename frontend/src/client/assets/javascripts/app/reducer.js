import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import teamview, { NAME as teamName } from 'features/teamview';

export default combineReducers({
  routing,
  [teamName]: teamview
});
