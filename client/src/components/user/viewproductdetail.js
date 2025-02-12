import React from 'react'
import { useEffect,useState } from "react"
import { Container,Row,Col,Form} from 'react-bootstrap'
import AXIOS from 'axios'
import { Table } from 'react-bootstrap';

import blk from '../images/block.png'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ViewProductDetail(){
    const params=useParams()
    const userid=sessionStorage.getItem('userid')
    const [uname,setUname]=useState("");
    const [product,setProduct]=useState([])
    const [qty,setQty]=useState(true)
    useEffect(()=>{
        const prdid=params.prdid;
        console.log(prdid)
        const url=`http://localhost:9000/editByid1/${prdid}`;
        AXIOS.get(url).then(
            (res)=>{
                setProduct(res.data)
            }
        )
    },[])
    const deleteproduct=(userid)=>{
        let ans=window.confirm("Do u Wnat to delete")
        if(ans){
            const url=`http://localhost:9000/deleteproducts/${userid}`;
            AXIOS.get(url).then((res)=>{
                alert(res.data)
            })
        }
        else{
            alert("Delete is Canceled")
        }

    }
    const handlerBooking=()=>{
       //booking code 
    }
    return(
        <>

       <Container>

            {
                product.map((ls)=>{
                    
                  return(  <Row className='p-3 mt-4'>

                        <Col lg={7}>
                            <img src={`http://localhost:9000/${ls.image}`} style={{width:'100%',height:'474px'}}/>
                        </Col>
                        <Col lg={5}>
                            <h5>Product Name: {ls.productname}</h5> 
                            <p style={{position:'relaative',top:'120px', padding:'20px' }}>
                            <p>
                                Quantity: {ls.productquantity>=1?ls.productquantity:<img src={blk} style={{width:'80px',height:'80px'}}/>}
                            </p>
                            <p>
                                Price: {ls.productprice}
                            </p>
                            <p>
                                Category: {ls.category}
                            </p>
                            <p>
                                Product Used: {ls.prod_used}
                            </p>
                            {/* <button type="button" className='btn btn-primary' onClick={()=>{
                                 
                            }}> Booking</button> */}
                             <a href={`/emppage/order/${ls._id}/${ls.sellerid}`} className='btn btn-danger'>
                                        Order Now
                                    </a>
                            </p>
                        </Col>
                    </Row>)



                })
                           


            }
        
        
        </Container>
        
        </>
    )
}