import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image } from "antd";

export default function Checkout() {

  var [cakes, setCakes] = useState([]);

  useEffect(() => {
    getCakeList()
  }, []);

  function getCakeList() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/cakecart",
      method: "get",
      headers: {
        Authorization: localStorage.token
      }
    }).then((response) => {
      debugger;
      setCakes(response.data.data);
      console.log('Cakes from Checkout:' + cakes);
    }, (error) => {
      console.log('Error from API', error);
    })
  }

  return (
    <>
      {
        cakes?.map((each) => {
          return <Card style={{ width: 300, marginLeft: 40 }}>
            <Image preview={false} height={200} src={each.image} width={250} />
            <p>{each.name}</p>
            <p>{each.price}</p>
            {each.tag && <p>{each.tag}</p>}
          </Card>
        })
      }
    </>
  );
}