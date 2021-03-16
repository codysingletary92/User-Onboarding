
function Form(props) {

    const submitHandler = props.onSubmit;
    const { form } = props;
    const { onChange } = props;


    return (
      <div className="Form">
          <form name="memberForm" onSubmit={submitHandler}>
            <label>Name:
                <input
                    type="text"
                    id="nameInput"
                    placeholder="Name"
                    maxLength="15"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Email:
                <input
                    type="text"
                    id="emailInput"
                    placeholder="Email"
                    maxLength="15"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Password: 
                <input
                    type="text"
                    id="passwordInput"
                    placeholder="Password"
                    maxLength="15"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Terms of Service:
                <input 
                    type="checkbox"
                    name="ToS"
                    checked={form.ToS}
                    onChange={onChange}
                />
            </label>
            <br />
            <input disabled={false} type="submit" value="submit"/>
        </form>
      </div>
    );
  }
  
  export default Form;
  