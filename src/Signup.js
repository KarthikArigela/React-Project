import { Button, Col, Input, Layout } from 'antd'
import axios from "axios";

export function Signup() {

  var user = {};

  function addUser() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/register",
      method: "post",
      data: user
    }).then((response) => {
      console.log('User was signed-up', response)
    }, (error) => {
      console.log('API Error ', error)
    })
  }

  function handleUserName(event) {
    user.name = event.target.value;
  }

  function handlePassword(event) {
    user.password = event.target.value;
  }

  function handleEmail(event) {
    user.email = event.target.value;
  }

  return (
    // <>
    //   <input type="text" placeholder="User Name" onChange={handleUserName}></input>
    //   <br></br>
    //   <input type="password" placeholder="Password" onChange={handlePassword}></input>
    //   <br></br>
    //   <input type="text" placeholder="Email" onChange={handleEmail}></input>
    //   <br></br>
    //   <Button onClick={addUser} type="primary">Sign Up</Button>
    // </>

        <>
        <Layout>
        <Layout style={{ background: "white", margin: "auto" }}>
                <Col style={{ margin: "auto" }} span={18}>
                <Input style={{ marginTop: 10 }}  type="text" placeholder="Email" onChange={handleEmail} required />
                <Input style={{ marginTop: 10 }} type="text" placeholder="Name" onChange={handleUserName} required />
                <Input.Password iconRender={() => false} style={{ marginTop: 20 }} type="password" placeholder="password" onChange={handlePassword} />
                <Button style={{ marginTop: 20 }} type="primary" onClick={addUser}>Sign Up</Button>
            </Col>
        </Layout >
        </Layout>
            
        </>

  )
}