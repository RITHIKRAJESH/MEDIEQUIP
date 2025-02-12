// import React from 'react'
// // import Employeeview from './employeeview'
// // import Empheader from './empheader'
// import { Navbar, Container, Row, Col, Nav, Table } from "react-bootstrap";
// // import Profile from './profile';
// import { Routes, Route } from 'react-router-dom';
// import Productview from '../user/productview';
// import Usersearch from './usersearch';
// import Adminheader from './adminheader';
// import Useredit from './useredit';
// import Sellersearch from './sellersearch';


// import { IoHome } from "react-icons/io5";
// import { IoAddCircleSharp } from "react-icons/io5";
// import { FaUsers } from "react-icons/fa";
// import { GrProductHunt } from "react-icons/gr";
// import { FaFirstOrderAlt } from "react-icons/fa6";
// import { AiOutlineLogout } from "react-icons/ai";
// import Myorder from './allorder';
// import SaleReport from './salepreport';


// export default function Adminpage() {
//   return (
//     <div>
//       {/* <Adminheader /> */}
//       {/* <Employeeview/> */}
//       <Container fluid>
//         <Row>
//         <Col lg={2} style={{ height: "100vh", backgroundColor: "lightblue" ,fontSize:"23px",color:"black"}}>
//             <Nav defaultActiveKey="/home" className="flex-column" style={{marginTop:"30px"}}>
//               <Nav.Link href=""><IoHome/>Home</Nav.Link>

//               <Nav.Link href="/adminpage/usersearch"><FaUsers/>Users</Nav.Link>
//               <Nav.Link href="/adminpage/sellersearch"><FaUsers/>Sellers</Nav.Link>
//               <Nav.Link href="/adminpage/productview"><GrProductHunt/>Product</Nav.Link>
//               <Nav.Link href="/adminpage/allorder"><FaFirstOrderAlt />Order Page</Nav.Link>
//               <Nav.Link href="/adminpage/salereport"><FaFirstOrderAlt />Sale Report</Nav.Link>
//               <Nav.Link href="/"><AiOutlineLogout/>Logout</Nav.Link>
//               {/* <Nav.Link eventKey="disabled" disabled>
//                 Disabled
//               </Nav.Link> */}
//             </Nav>
//           </Col>
//           <Col lg={10}>
//             {/* <Profile /> */}
//             <Routes>
//               {/* <Route path="/profile" element={<Profile />} />
//               <Route path="/employeeview" element={<Employeeview />} /> */}
//               <Route path="productview" element={<Productview />} />
//               <Route path="/useredit/:id" element={<Useredit />} />
//               <Route path="usersearch" element={<Usersearch />} />
//               <Route path="sellersearch" element={<Sellersearch />} />
//               <Route path="allorder" element={<Myorder/>}/>
//               <Route path="/salereport" element={<SaleReport/>}></Route>
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Productview from '../user/productview';
import Usersearch from './usersearch';
import Adminheader from './adminheader';
import Useredit from './useredit';
import Sellersearch from './sellersearch';
import { IoHome, IoAddCircleSharp } from "react-icons/io5";
import { FaUsers, FaFirstOrderAlt } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import Myorder from './allorder';
import SaleReport from './salepreport';
import './Adminpage.css'; // Import CSS file for custom styles

export default function Adminpage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const handleMouseEnter = () => {
    setSidebarCollapsed(false);
  };

  const handleMouseLeave = () => {
    setSidebarCollapsed(true);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
              <div className="sidebar-header">
                Admin
              </div>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href=""><IoHome />Home</Nav.Link>
                <Nav.Link href="/adminpage/usersearch"><FaUsers />Users</Nav.Link>
                <Nav.Link href="/adminpage/sellersearch"><FaUsers />Sellers</Nav.Link>
                <Nav.Link href="/adminpage/productview"><GrProductHunt />Product</Nav.Link>
                <Nav.Link href="/adminpage/allorder"><FaFirstOrderAlt />Order Page</Nav.Link>
                <Nav.Link href="/adminpage/salereport"><FaFirstOrderAlt />Sale Report</Nav.Link>
                <Nav.Link href="/"><AiOutlineLogout />Logout</Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col lg={10}>
            {/* <Adminheader /> */}
            <Routes>
              <Route path="productview" element={<Productview />} />
              <Route path="/useredit/:id" element={<Useredit />} />
              <Route path="usersearch" element={<Usersearch />} />
              <Route path="sellersearch" element={<Sellersearch />} />
              <Route path="allorder" element={<Myorder />} />
              <Route path="/salereport" element={<SaleReport />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


