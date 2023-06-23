import {sampleProducts} from "./data";
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
    return (
        <div className='d-flex flex-column vh-100'>
            <header>
                <Navbar
                    bg="light"
                    variant="light"
                    expand="lg"
                >
                    <Container>
                        <Navbar.Brand>Um Store</Navbar.Brand>
                    </Container>
                    <Nav>
                        <a href="/cart" className="nav-link">Cart</a>
                        <a href="/signin" className="nav-link">Sign In</a>
                    </Nav>
                </Navbar>
            </header>
            <main>
                <Container className="mt-3">
                <Row>
                    {
                        sampleProducts.map(product => (
                            <Col
                                key={product.slug}
                                sm={6}
                                md={4}
                                lg={3}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <h2>{product.name}</h2>
                                <p>{product.price}</p>
                            </Col>))
                    }
                </Row>
                </Container>
            </main>
            <div className="text-center">
            <footer>All right reserved</footer>
            </div>
        </div>
    )
}

export default App
