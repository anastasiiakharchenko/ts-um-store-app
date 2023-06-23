import {Navbar, Container, Nav} from 'react-bootstrap';
import {Outlet} from 'react-router-dom'

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
                    <Outlet />
                </Container>
            </main>
            <div className="text-center">
                <footer>All right reserved</footer>
            </div>
        </div>
    )
}

export default App
