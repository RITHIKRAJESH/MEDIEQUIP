import { Container, Row,Col } from "react-bootstrap";

export default function Footer(){
    return(
        <>
          <Container fluid className="footer" style={{height:'400px', fontFamily:'monospace'}} >       
               <Row>
                <Col>
                <p>&copy; 2001 Medical Equipment Company. All rights reserved. | 
            <a href="mailto:info@medicalequipment.com">info@medicalequipment.com</a> | 
            <a href="tel:+123456789">123-456-789</a>
        </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}