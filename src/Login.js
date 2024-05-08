import { Alert, Button } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  // variable student is created JSON Object
  var user = {};

  var navigate = useNavigate();

  function loginUser() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/login",
      method: "post",
      data: user
    }).then((response) => {
      debugger;
      console.log('Login successfull', response);
      localStorage.token = response.status === 200 ? response.data.token : null;
      if (response.status === 200) navigate('/');
    }, (error) => {
      Alert('Invalid Credentials');
      localStorage.token = null;
    })
  }

  function handlePassword(event) {
    user.password = event.target.value;
  }

  function handleEmail(event) {
    user.email = event.target.value;
  }

  if (!localStorage.token) {
    debugger;
    navigate('/login');
    return null;
  }

  return (
    <>
      User ID: <input type="text" placeholder="Email" onChange={handleEmail}></input>
      <br />
      Password: <input type="password" placeholder="Password" onChange={handlePassword}></input>
      <br />
      <br />
      <Button onClick={loginUser} type="primary">Login In</Button>
      <br />
      <br />
      <Link to='/signup'><Button type="primary">Sign Up</Button></Link>&nbsp;&nbsp;&nbsp;
      <Link to='/forgot'><Button type="primary">Forgot Password?</Button></Link>
      <br />
      <br />
    </>
  )
}