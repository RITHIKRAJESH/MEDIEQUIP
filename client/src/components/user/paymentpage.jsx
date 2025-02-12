import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import AXIOS from 'axios';

export default function PaymentPages() {
    const userid = sessionStorage.getItem("userid");
    const [record, setRecord] = useState([]);
    const [prod, setProd] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        AXIOS.get(`http://localhost:9000/getAllOrderbyuserid/${userid}`)
            .then((res) => {
                setRecord(res.data);
            })
            .catch((err) => message.error(err));
    }, []);

    useEffect(() => {
        const orderid = sessionStorage.getItem('orderid');
        const url = `http://localhost:9000/paymentpage/${orderid}`;
        AXIOS.get(url)
            .then((res) => {
                setProd(res.data.prod);
                setUser(res.data.user);
            });
    }, []);

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
                <Button onClick={generateCSV}>Download CSV</Button>
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
                <Button onClick={() => window.print()}>Generate Report</Button>
            </Container>
        </>
    );
}
