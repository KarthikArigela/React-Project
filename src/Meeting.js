import { Button } from 'antd'
import React, { useState } from 'react'

export const Meeting = () => {

    var [users, setUsers] = useState(0)

    function joinMeeting(){
        setUsers(users+1)
    }
  return (
    <div>
        <h1> People Joined: {users}</h1>
        <Button onClick={joinMeeting} type='primary'>Join Meeting</Button>
    </div>
  )
}
