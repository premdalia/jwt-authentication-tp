// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";

// function Home() {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("/home", {
//                     withCredentials: true,
//                 });
//                 console.log(response);

//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <p className="pt-5">WELCOME</p>
//             welcomemkmdkvmk
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/home", {
                    withCredentials: true,
                });
                console.log(response);
                setUser(response.data.user);
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate("/"); // Redirect to login if unauthorized
            }
        };

        fetchData();
    }, [navigate]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p className="pt-5">Welcome, {user.name}</p>
            {/* Display other content for authenticated users */}
        </div>
    );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Home() {
//     // const [authenticated, setAuthenticated] = useState(false);
//     const navigate = useNavigate();

//     const user = () => async () => {
//         try {
//             await axios.get("http://localhost:4000/home", {
//                 withCredentials: true, // Send cookies along with the request
//             });
//         } catch (error) {
//             navigate("/");
//             console.error("Error fetching items:", error);
//         }
//     };

//     useEffect(() => {
//         user();
//     }, []);
//     return (
//         <div>
//             <p className="pt-5">WELCOME</p>
//             welcomemkmdkvmk
//         </div>
//     );
// }
// export default Home;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6

// function Home() {
//   const navigate = useNavigate();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if the user is authenticated (you need to implement this logic)
//     const isAuthenticated = checkAuthentication();

//     // If user is not authenticated, redirect to login page
//     if (!isAuthenticated) {
//       navigate('/');
//       console.log("Not a user")
//     } else {
//       setAuthenticated(true);
//     }
//   }, []);

//   // Function to check authentication status
//   const checkAuthentication = () => {
//     // Retrieve the cookie
//     const cookieValue = getCookie('yourCookieName'); // Replace 'yourCookieName' with the actual name of your cookie

//     // Check if cookie exists and if it matches the expected value
//     if (cookieValue && cookieValue === 'expectedValue') { // Replace 'expectedValue' with the expected value of the cookie
//       return true; // User is authenticated
//     } else {
//       return false; // User is not authenticated
//     }
//   };

//   // Function to retrieve cookie value
//   const getCookie = (name) => {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       // Check if this cookie is the one we are looking for
//       if (cookie.startsWith(name + '=')) {
//         const cookieValue = cookie.substring(name.length + 1);
//         return decodeURIComponent(cookieValue); // Decode cookie value
//       }
//     }
//     return null; // Cookie not found
//   };

//   return (
//     <div>
//       <p className='pt-5'>WELCOME</p>
//     </div>
//   );
// }

// export default Home;

// useEffect(() => {
//   const callHomePage = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/home", {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         withCredentials: true // Make sure to include credentials
//     });
//     } catch (err) {
//       navigate('/');
//       console.error(err);
//     }
//   };
//   callHomePage();
// }, []);

// if (!authenticated) {
//   // Perform the redirection here
//   // window.location.href = '/';
//   navigate('/');

//   // return null; // Prevent rendering the rest of the component
// }

// import React, { useEffect } from 'react'

// function Home() {

//   const callHomePage=async()=>{

//     try{

// const res = await fetch("/Home",{
//   method:"GET",
//   headers:{
//     Accpt:"application/json",
//     "Content-Type":"application/json"
//   },
//   credentials:"include"

// });
// const data=await res.json();
//     }
//     catch(err){

// console.log(err)
//     }
//   }

//   useEffect(()=>{
//     callHomePage();

//   },[])
//   return (
//     <div>

//         <p className='pt-5'>WELCOME</p>
//         </div>
//   )
// }

// export default Home
