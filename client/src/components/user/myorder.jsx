import React from 'react'
import { Container,Row,Col,Button,Table } from 'react-bootstrap'
import { useEffect,useState } from 'react'
import {message} from 'antd'
import { MdDelete } from "react-icons/md";
import AXIOS from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Myorder() {
    const nav=useNavigate()
    const userid=sessionStorage.getItem("userid")
    const [record,setRecord]=useState([])
    useEffect(()=>{
        AXIOS.get(`http://localhost:9000/getAllOrderbyuserid/${userid}`)
        .then((res)=>{
            setRecord(res.data)
        })
        .catch((err)=>message.error(err))
    })
    const payProcess=(orderid)=>{
        sessionStorage.setItem("orderid",orderid)
        AXIOS.post(`http://localhost:9000/paymentprocess/${orderid}`)
        .then((res)=>{
            message.success(res.data)
            
            nav('/emppage/paymentpage')


        })
        .catch((err)=>message.error(err))
    }
    const deleteproduct=(orderid)=>{
        let ans=window.confirm("Do u want to delete?")
        if(ans){
          const url=`http://localhost:9000/deleteorder/${orderid}`;
          AXIOS.get(url).then((res)=>{
            alert(res.data)
          })
        }
        else
        {
            alert("Delete is cancelled")
        }
    }
  return (
    <>
    <Container>
        <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Product Detail
                            </th>
                            <th> Order Detail</th>
                            <th> Action</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record
                            // .filter((ls)=>{return ls.status=="nill"})
                            .map((ls)=>{
                                return(
                                    <tr>
                                        <td>
                                             <img src={`http://localhost:9000/${ls.pid.image}`} style={{width:'100px',height:'95px'}} className="rounded"/>
                                            <h4>Product Name: {ls.pid.productname}</h4>
                                            <h5>Category: {ls.pid.category}</h5>
                                         <h5>Seller: {ls.sellerid.fullname}</h5>
                                         {/* {ls.sellerid._id} */}
                                         <h6>&#8377;{ls.pid.productprice}</h6>

                                        
                                        </td>
                                        <td>
                                           <h5>Total Quantitly:{ls.prodquantity}</h5>
                                           <h5>
                                             Address:{ls.address}
                                           </h5>
                                           <hr></hr>
                                           <h5>Create Date:{ls.createdAt.toLocaleString()}</h5>
                                        </td>
                                        <td>
                                            {/* <button className='btn btn-success' onClick={()=>
                                                payProcess(ls._id)}>
                                                PaymentProcess
                                            </button> */}
                                            <br>
                                            </br>
                                            <MdDelete onClick={()=>{deleteproduct(ls._id)
                                }}
                                style={{color:'red', fontSize:'30px'}} />
                                        </td>
                                        <td>
                                            <button className='btn btn-info' onClick={()=>{payProcess(ls._id)}}>Payment</button>
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
