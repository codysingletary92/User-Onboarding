
function User(props) {
    const { user } = props

    return (
      <div className='user-list'>
          Name: {user.name} <br />
          Email: {user.email}<br />
          Password: {user.password}<br />
          ToS: {user.ToS === true ? 'agree' : 'disagree'}<br />
          <br />
      </div>
        );
  }
  
  export default User;