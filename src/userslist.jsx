import React from 'react';

function UsersList(props) {
  const users = [];

  props.users.forEach(user => {
    if (user['name'].toLowerCase().indexOf(props.filterName.toLowerCase()) > -1) {
      users.push(<div key={user.id} className="panel-block">{user.name}</div>);
    }
  });

  return (
    <div>
      {users.length ? users : <div className="panel-block">Nothing found!</div>}
    </div>
  );
}

export default UsersList;