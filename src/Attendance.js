import { Button, Input } from 'antd'
import React, { useState } from 'react'

export const Attendance = () => {
    var user = {}
    var [people,setPeople] = useState([{
        name: "Karthik Arigela"
    }])
    function handleName(e){
        user.name = e.target.value
    }
    function markAttendance(){
        people.push(user)
        people=[...people]
        setPeople(people)
    }
  return (
    <div>
        <h1>Attendance</h1>
        <Input placeholder="Name" onChange={handleName} required/>
        <Button onClick={markAttendance}>Mark Attendance</Button>
    </div>
  )
}
