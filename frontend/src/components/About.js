// import React from 'react'
// import NavbarTop from './NavbarTop'

// function About() {
//   return (
//     <div>
//       {/* <NavbarTop /> */}
//       <div>
//         About
//       </div>
//     </div>
//   )
// }

// export default About




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/about", {
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
            <p className="pt-5">Welcome about {user.name}</p>
            {/* Display other content for authenticated users */}
        </div>
    );
}

export default Home;