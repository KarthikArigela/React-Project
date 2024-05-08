import { render } from '@testing-library/react'
import { Button, Table } from 'antd'
import { EditFilled, DeleteFilled } from "@ant-design/icons"
import React from 'react'

function Datatable({ data, deleteUser }) {
    var users = data
    var totalkeys = []
    // users.forEach((item) =>{
    //     var keys = Object.keys(item)
    //     totalkeys.push(...keys)
    // })
    var uniquekeys = new Set(totalkeys)
   var columns = []
    uniquekeys.forEach((item) => {
        columns.push({
            title: item.toUpperCase(),
            dataIndex: item,
            key: item
        })
    })
    columns.push({
        title: "Action",
        render: (text,record, index) => {
            return <Button /* onClick={deleteUser.bind(null,index)} */  type="primary"><EditFilled></EditFilled></Button>
        },
       
    })
    if(deleteUser){
        columns.push({
            title: "Action",
            render: (text,record, index) => {
                return <Button onClick={deleteUser.bind(null,index)} style={{ backgroundColor: "red" }} type="primary"><DeleteFilled></DeleteFilled></Button>
            },
           
        })
    }
    return (
        <>
        <Table dataSource={users} columns={columns} />;
        </>
        
    )
}
export default Datatable
  