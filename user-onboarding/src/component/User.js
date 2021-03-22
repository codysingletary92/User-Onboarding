
function User(props) {

  const { user } = props;

    return (
      <div className='user-list'>
        Name: {user.name}
        Password: {user.password}
        Email: {user.email}
        ToS: {user.ToS}
      </div>
        );
  }
  
  export default User;