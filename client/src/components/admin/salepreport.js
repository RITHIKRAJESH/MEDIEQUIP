import React from 'react';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import AXIOS from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function SaleReport() {
    const userid = sessionStorage.getItem("userid");
    const [record, setRecord] = useState([]);
    const [prod, setProd] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        AXIOS.get(`http://localhost:9000/getAllOrder/`)
            .then((res) => {
                setRecord(res.data);
            })
            .catch((err) => message.error(err));
    }, []);

    useEffect(() => {
        // const orderid = sessionStorage.getItem('orderid');
        const url = `http://localhost:9000/paymentpage/`;
        AXIOS.get(url)
            .then((res) => {
                setProd(res.data.prod);
                setUser(res.data.user);
            });
    }, []);
    const chartData = prod.map((ord, index) => ({
        name: ord.address, // Assuming address is the x-axis label
        quantity: ord.prodquantity, // Assuming quantity is the y-axis value
    }));
    const generateCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "User Name, Product Name, Product Price, Address, Quantity\n";

        const dataRows = prod.map((ord) => {
            return `${ord.userid.fullname},${user.productname},${user.productprice},${ord.address},${ord.prodquantity}`;
        });

        const csvRows = [...dataRows];
        const csvData = csvContent + csvRows.join("\n");

        const encodedUri = encodeURI(csvData);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "payment_data.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <>
            <Container>
         <Row>
            <Col>
            <h1 className='text-center'>Sale Report</h1>
            </Col>
            <Col>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            
            </Col>
         </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Product Used</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((ls, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ls.productname}</td>
                                    <td>&#8377;{ls.productprice}</td>
                                    <td>{ls.category}</td>
                                    <td>{ls.prod_used}</td>
                                    {prod.map((ord, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <td>{ord.address}</td>
                                                <td>{ord.prodquantity}</td>
                                                <td>&#8377;{ord.prodquantity * ls.productprice}</td>
                                            </React.Fragment>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            
            </Container>
        </>
    );
}
