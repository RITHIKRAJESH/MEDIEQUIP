import React from 'react'
import { Container,Row,Col,Button,Table } from 'react-bootstrap'
import { useEffect,useState } from 'react'
import {message} from 'antd'
import AXIOS from 'axios'
export default function Myorder() {
    const userid=sessionStorage.getItem("userid")
    const [record,setRecord]=useState([])
    useEffect(()=>{
        AXIOS.get("http://localhost:9000/getAllOrder")
        .then((res)=>{
            setRecord(res.data)
        })
        .catch((err)=>message.error(err))
    })
  return (
    <>
    <Container>
        <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Product Details
                            </th>
                            <th> Order Detail</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record
                            .map((ls)=>{
                                return(
                                    <tr>
                                        <td>
                                             <img src={`http://localhost:9000/${ls.pid.image}`}  style={{width:'100px',height:'95px'}} className="rounded" alt='Product'/>
                                            <h4>Product Name:{ls.pid.productname}</h4>
                                         <h5>Seller:{ls.sellerid.fullname}</h5>
                                         <h6>&#8377;{ls.pid.productprice}</h6>

                                        
                                        </td>
                                        <td>
                                           <h5>Total Quantitly:{ls.prodquantity}</h5>
                                           <h5>
                                             Address:{ls.address}
                                           </h5>
                                           <h5>Buyer:{ls.userid.fullname}</h5>
                                           <hr></hr>
                                           <h5>Order Date:{ls.createdAt.toLocaleString()}</h5>
                                        </td>
                                        <td>
                                            Status
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>

                </Table>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}
