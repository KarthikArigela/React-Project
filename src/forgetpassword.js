import { Button, Input } from "antd";
function ForgetPassword()
{
    return(
       <>
       <label>Enter new password</label>
        <Input placeholder="New password"></Input>
        <label> Confirm new password</label>
        <Input placeholder="Confirm new password"></Input>
        <Button type="primary">Confirm</Button>
       </>
    )
}
export default ForgetPassword