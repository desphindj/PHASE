import React from 'react';

const UserMessage = ({ role, name }) => {
  
  return (
    <div>
      {role === 'admin' ? (
        <h1>Welcome Admin, {name}!</h1>
      ) : role === 'user' ? (
        <h1>Welcome User, {name}!</h1>
      ) : (
        <h1>Welcome, Guest!</h1>
      )}
    </div>
  );
};

const Eight = () => {
  
  const role = 'admin'; 
  const userName = 'John Doe';

  return (
    <div>
      <UserMessage role={role} name={userName} />
    </div>
  );
};

export default Eight;
