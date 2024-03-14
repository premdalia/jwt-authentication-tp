import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// function NavbarTop() {

//   const navigate=useNavigate();

//     const handleLogout = async () => {
//         try {

//             sessionStorage.removeItem('userData');
//             const response = await fetch("/logout", {
//                 method: "POST",
//                 credentials: "include",
//             });

//             if (response.ok) {
              
//                 navigate("/")
//             } else {
//                 console.error("Failed to logout:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error occurred during logout:", error);
//         }
//     };

//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand as={Link} to="/">
//                     HPage
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/home">
//                             Home
//                         </Nav.Link>
//                         <Nav.Link as={Link} to="/about">
//                             About
//                         </Nav.Link>
//                         <Nav.Link as={Link} to="/contact">
//                             Contact
//                         </Nav.Link>
                      
//                             <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    
//                             <>
//                                 <Nav.Link as={Link} to="/">
//                                     Login
//                                 </Nav.Link>
//                                 <Nav.Link as={Link} to="/signup">
//                                     Signup
//                                 </Nav.Link>
//                             </>
                       
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavbarTop;





function NavbarTop() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            localStorage.removeItem('userData');
            const response = await fetch("/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                navigate("/")
            } else {
                console.error("Failed to logout:", response.statusText);
            }
        } catch (error) {
            console.error("Error occurred during logout:", error);
        }
    };

    const userData = localStorage.getItem('userData');

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    HPage
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        {userData ? (
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signup">
                                    Signup
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTop;





// import Container from 'react-bootstrap/Container';
// import "bootstrap/dist/css/bootstrap.css";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Cookies from 'js-cookie'; // Import js-cookie library

// function NavbarTop() {
//     const [authenticated, setAuthenticated] = useState(!!Cookies.get("token")); // Check if "token" cookie exists

//     const handleLogout = async () => {
//         try {
//             const response = await fetch("/logout", {
//                 method: "POST",
//                 credentials: "include",
//             });

//             if (response.ok) {
//                 setAuthenticated(false);
//             } else {
//                 console.error("Failed to logout:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error occurred during logout:", error);
//         }
//     };

//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand as={Link} to="/">HPage</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/about">About</Nav.Link>
//                         <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//                         {authenticated ? (
//                             <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//                         ) : (
//                             <>
//                                 <Nav.Link as={Link} to="/">Login</Nav.Link>
//                                 <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavbarTop;

// import Container from 'react-bootstrap/Container';
// import "bootstrap/dist/css/bootstrap.css";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// function NavbarTop() {
//   const handleLogout = async () => {
//       try {

//           const response = await fetch("/logout", {
//               method: "POST",
//               credentials: "include",
//           });

//       } catch (error) {
//           console.error("Error occurred during logout:", error);
//       }
//   };

//   return (
//       <Navbar expand="lg" className="bg-body-tertiary">
//           <Container>
//               <Navbar.Brand as={Link} to="/">HPage</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                   <Nav className="ms-auto">
//                       <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                       <Nav.Link as={Link} to="/about">About</Nav.Link>
//                       <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//                       <Nav.Link as={Link} to="/">Login</Nav.Link>
//                       <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                       <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
//                   </Nav>
//               </Navbar.Collapse>
//           </Container>
//       </Navbar>
//   );
// }

// export default NavbarTop;

// import React, { useEffect, useState } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css";

// function NavbarTop() {
//     // State to manage authentication status
//     const [authenticated, setAuthenticated] = useState(false);

//     const handleLogout = async () => {
//         try {
//             const response = await fetch("/logout", {
//                 method: "POST",
//                 credentials: "include",
//             });

//             if (response.ok) {
//               console.log(response.status)

//                 setAuthenticated(false);
//             } else {
//                 console.error("Failed to logout:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error occurred during logout:", error);
//         }
//     };

//     useEffect(() => {
//         // Check authentication status when component mounts
//         checkAuthentication();
//     });

//     // Function to check authentication status
//     useEffect(() => {
//       // Check authentication status whenever the component updates
//       checkAuthentication();
//   });

//   // Function to check authentication status
//   const checkAuthentication = async () => {
//       try {
//           const response = await fetch("", {
//               method: "POST",
//               credentials: "include" // Include cookies in the request
//           });
//           if (response.status === 200) {
//             console.log(response.status)
//               setAuthenticated(true);
//           } else {
//             console.log(response.status)

//               setAuthenticated(false);
//           }
//       } catch (error) {
//           console.error("Error occurred while checking authentication:", error);
//       }
//   };
// console.log(authenticated)

//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand as={Link} to="/">HPage</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/about">About</Nav.Link>
//                         <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

//                         {authenticated ? (

//                             <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
//                         ) : (
//                             <>
//                                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                                 <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavbarTop;
