const Tasktwelve = ({ isLoggedIn }) => {
  return (
    <div className="box">
      
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

export default Tasktwelve;
