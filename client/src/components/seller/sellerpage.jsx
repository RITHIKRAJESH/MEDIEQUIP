import React from 'react'
// import Employeeview from './employeeview'
import Sellerheader from './sellerheader'
import { Container, Row, Col, Nav} from "react-bootstrap";
// import Profile from './profile';
import { Routes, Route } from 'react-router-dom';

import Usersearch1 from '../admin/usersearch1';
import Addproducte from '../admin/addproduct';

import Sellersearch from '../admin/sellersearch';
import Productview1 from './productview1';
import Productedit from './productedit';

import { FaFirstOrderAlt } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import Myorder from './order';


export default function Sellerpage() {
  return (
    <div>
      <Sellerheader />
      {/* <Employeeview/> */}
      <Container fluid>
        <Row>
          <Col lg={2} style={{ height: "500vh", backgroundColor: "lightgrey" ,fontSize:"23px",color:"black"}}>
            <Nav defaultActiveKey="/home" className="flex-column" style={{marginTop:"30px"}}>
              <Nav.Link href=""><IoHome/>Home</Nav.Link>

              <Nav.Link href="/sellerpage/usersearch1"><FaUsers/> Users</Nav.Link>
              <Nav.Link href="/sellerpage/addproduct"><IoAddCircleSharp/>Add products</Nav.Link>
              <Nav.Link href="/sellerpage/productview1"><GrProductHunt/>Products</Nav.Link>
              <Nav.Link href="/sellerpage/order"><FaFirstOrderAlt />Order page</Nav.Link>
              <Nav.Link href="/"><AiOutlineLogout/>Logout</Nav.Link>
              {/* <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link> */}
            </Nav>
          </Col>
          <Col lg={10}>
            {/* <Profile /> */}
            <Routes>
              {/* <Route path="/profile" element={<Profile />} />
              <Route path="/employeeview" element={<Employeeview />} /> */}
              <Route path="productview1" element={<Productview1/>} />
              <Route path="productedit/:id" element={<Productedit/>} />
              <Route path="usersearch1" element={<Usersearch1 />} />
              <Route path="addproduct" element={<Addproducte />} />
              <Route path="order" element={<Myorder/>}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}