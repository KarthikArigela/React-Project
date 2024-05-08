import React from 'react'
import { Alert, Card, Image, Row } from "antd";
import Datatable from "./Datatable"
import Iron from './ironMan.webp'

function Userslist() {
    var users = [{ name: "Iron Man", role: "Software Developer" },
    { name: "Captain America", role: "Product Manager" }]
        return (
            <div>
                 <h1>All Users</h1>
            <Datatable data={users} />
                {/* <Row>
                    {users.map((item) => {
                        var keys = Object.keys(item)
                        return (
                            <Card style={{ width: 200 }}>
                                <Image height={150} src={Iron} />
                                {
                                    keys.map((itemKey) => {
                                        return <Alert message={item[itemKey]} type="success" />
                                    })
                                }

                            </Card>


                        )
                    })}
                </Row> */}

            </div>
        )
}
export default Userslist


