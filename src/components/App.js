import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

  // Array destructuring:
  // "currentValue" of this piece of state
  // and "setCurrentValue" function to update out state
  // useState function from React
  // ("initialValue") as indiviual values rather than objects
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <UserList />
      <div>
        <button className="ui button primary" onClick={() => setResource('posts')}>Posts</button>
        <button className="ui button secondary" onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;