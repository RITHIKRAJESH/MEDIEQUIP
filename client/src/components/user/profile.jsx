import { useEffect, useState } from 'react';
import AXIOS from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './profile.css'

export default function Profile() {
    const idn = sessionStorage.getItem('userid');
    const [record, setRecord] = useState([]);

    useEffect(() => {
        const url = `http://localhost:9000/fetchByid/${idn}`;
        AXIOS.get(url).then((res) => {
            setRecord(res.data);
        });
    }, [idn]);

    return (
        <Container className="mt-5">
            {record.map((ls) => (
                <Row className="justify-content-center" key={ls._id}>
                    <Col md={8}>
                        <Card className="shadow-sm p-4 mb-4 rounded">
                            {/* Profile Picture (Optional) */}
                            {/* <Card.Img variant="top" src="profile-image-url.jpg" className="rounded-circle" style={{ width: '150px', height: '150px', margin: '0 auto', objectFit: 'cover' }} /> */}
                            <Card.Body>
                                <h2 className="text-center text-info mb-4">Profile Details</h2>
                                <h4 className="mb-3"><strong>Full Name:</strong> {ls.fullname}</h4>
                                <h5 className="mb-3"><strong>Email:</strong> <a href={`mailto:${ls.email}`}>{ls.email}</a></h5>
                                <h5 className="mb-3"><strong>Phone:</strong> {ls.phone}</h5>
                                <h5 className="mb-3"><strong>Address:</strong> {ls.address}</h5>
                                <div className="d-flex justify-content-center mt-4">
                                    <Button variant="primary" size="lg">Edit Profile</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}
