
function Form(props) {

    const { onChange } = props;
    const { name, password, email, ToS} = props;


    return (
        <div>
            <form>
                <label>Name:
                  <input
                        type='text'
                        id="nameInput"
                        placeholder="Name"
                        name="name"
                        onChange={onChange}
                    ></input>
                </label>
                <br />
                <label>Email:
                <input
                        type='text'
                        id="emailInput"
                        placeholder="Email"
                        name="email"
                        onChange={onChange}
                    ></input>
                </label>
                <br />
                <label>Password:
                <input
                        type='text'
                        id="passwordInput"
                        placeholder="Password"
                        name="password"
                        onChange={onChange}
                    ></input>
                </label>
                <br />
                <label>Terms of Service:
              <input
                        type='checkbox'
                        id="ToSInput"
                        checked={ToS}
                        name="ToS"
                        onChange={onChange}
                    ></input>
                </label>
                <br />
                <input type='submit'></input>
            </form>
        </div>
    );
}

export default Form;
