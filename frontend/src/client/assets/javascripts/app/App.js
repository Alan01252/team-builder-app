import React, { PropTypes } from 'react';

const App = (props) => (
  <div className="container-fluid">
    {React.cloneElement({...props}.children, {...props})}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
