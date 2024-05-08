import { Row, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Cake from "./Cake";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function CakeList() {

  var [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  var navigate = useNavigate();

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => getCakeList();
  }, []);

  function getCakeList() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/allcakes",
      method: "get"
    }).then((response) => {
      console.log('Response from API: ' + response);
      setCakes(response.data.data);
      console.log('cakes:' + cakes);
    },
      (error) => {
        console.log('Error from API: ' + error);
      })
  }

  return (
    <>
      <Spin indicator={<LoadingOutlined />} spinning={loading} size="large" />
      <div style={{ display: loading ? 'none' : 'block' }}></div>
      <Row>
        {
          cakes?.map((each, index) => {
            return < Cake data={each} key={index} />
          })
        }
      </Row>
    </>
  )
}