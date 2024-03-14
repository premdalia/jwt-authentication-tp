import React, { useEffect, useState } from "react";
import NavbarTop from './NavbarTop'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {


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
  return (<>
    {/* <NavbarTop /> */}
    <div>Contact</div>
    <div>
      <h1>Get in Touch</h1>


    </div>


    <form>
      <div>
        <input type='text' required="true"></input>

        <input type='email' required="true"></input>
        <input type='number' required="true"></input>

      </div>

      <div>

        <textarea cols="74" rows="10">

        </textarea>

        <button type='submit/' >send msg</button>
      </div>

    </form>
  </>
  )
}

export default Contact