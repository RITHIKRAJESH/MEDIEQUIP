import logo from './logo.svg';
import './App.css';
import Userregister from './components/user/userregister';
import  Userlogin from './components/user/userlogin';
import { Route, Routes } from 'react-router-dom';
import Webheader from './components/webheader';
import Addproducte from './components/admin/addproduct';
import Adminlogin from './components/admin/adminlogin';
import Employeeview from './components/user/employeeview';
import Msg from './components/user/welcome';
import Productview from './components/user/productview';
import Adminnav from './components/admin/adminnav';
import Emppage from './components/user/emppage';
import Sellerregister from './components/seller/sellerregister';
import Sellerlogin from './components/seller/sellerlogin';
import Usersearch from './components/admin/usersearch';

import Adminpage from './components/admin/adminpage';
import Profile from './components/user/profile';
import Sellerpage from './components/seller/sellerpage';
import Sellersearch from './components/admin/sellersearch';
import Productview1 from './components/seller/productview1';
import Homepage from './components/homepage';
import Middle3 from './components/middle3';
import Contact from './components/contact';
import ProductviewCard from './components/user/product_card';
import OrderNow from './components/user/order';
import PaymentPage from './components/user/makepayment';



function App() {
  return (
    <>
   <Routes>
    {/* <Route path="/" element={<Webheader/>}/> */}
    <Route path="/userregister" element={<Userregister/>}/>
    <Route path="/userlogin" element={<Userlogin/>}/>
    <Route path="/addproduct" element={< Addproducte/>}/>
    <Route path="/adminlogin" element={< Adminlogin/>}/>
    <Route path="/employeeview" element={< Employeeview/>}/>
    <Route path="/welcome" element={<Msg/>}/>
    <Route path="/productview" element={<Productview/>}/>
    <Route path="/productview1" element={<Productview1/>}/>
    <Route path="/adminnav" element={<Adminnav/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/emppage/*" element={<Emppage/>}/>
    <Route path="/sellerpage/*" element={<Sellerpage/>}/>
    <Route path="/adminpage/*" element={<Adminpage/>}/>
    <Route path="/sellerregister" element={<Sellerregister/>}/>
    <Route path="/sellerlogin" element={<Sellerlogin/>}/>
    <Route path="/usersearch" element={<Usersearch/>}/>
    <Route path="/sellersearch" element={<Sellersearch/>}/>
    <Route path="/middle3" element={<Middle3/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/productviewcard' element={<ProductviewCard/>}/>
    <Route path='/order' element={<OrderNow/>}/>
    <Route path="/paymentpage" element={<PaymentPage/>}></Route>
   </Routes>
   
    </>
  );
}

export default App;
