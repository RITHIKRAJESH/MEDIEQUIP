import {useEffect,useState} from 'react';
import AXIOS from 'axios';
import { Container, Row, Table ,Col} from 'react-bootstrap';
export default function Profile(){
    const idn=sessionStorage.getItem('userid')
    const [record,setRecord]=useState([])
    useEffect(()=>{
        const url=`http://localhost:9000/fetchByid/${idn}`;
        AXIOS.get(url).then((res)=>{
                setRecord(res.data)
        })
    })

    return(
        <>
        <Container>
           
               {
  record.map((ls)=>{

    return(

        <Row className='rounded shadow p-4 border mt-3'>
   <Col lg={2}>
           {/* <img src={''} className='square bg-info' style={{width:'100%'
        ,height:'200px'   
        }}/> */}
        </Col>
        <Col lg={10}>
            <h3>Full Name:{ls.fullname}</h3>
            <h3>Email:<a href="">{ls.email}</a></h3>
            <h3>Phone Number:
                {ls.phone}
            </h3>
            <h3>Address:{ls.address}</h3>
        </Col>
        </Row>
     
       
    )

  })

               }
                
           
        </Container>
        
        </>
    )
}