import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarTop from './NavbarTop';


function Signup() {
    const navigate = useNavigate("");

    // const [errors,setErrors]=useState({})
    const [user, setUser] = useState({

        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    let name, value;

    const handleInputs = (e) => {

        console.log(e)

        name = e.target.name;
        value = e.target.value;


        setUser({ ...user, [name]: value })

    }


    const PostData = async (e) => {
        e.preventDefault();
        
        const { name, email, phone, work, password, cpassword } = user;
      
      //Important
      
        const res = await fetch("/register", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });




        const data = await res.json();

        console.log(data)
        window.alert(JSON.stringify(data));
        navigate("/login")
        // if (data.status === 500 || !data) {
        //     window.alert("Invalid");
        //     console.log(`invalid error`)
        // } else {
        //     window.alert("successful");
        //     console.log(`successful`)
        //     navigate("/login")
        // }


        // if (res.ok) {
        //     window.alert("Successful");
        //     console.log(`Successful`);
        //     navigate("/login");
        // } else {
        //     if (data.errors) {
        //         setErrors(data.errors);
        //     } else {
        //         window.alert("Server Error");
        //         console.log(`Server Error`);
        //     }
        // }
    }
    return (
        <section>
            {/* <NavbarTop /> */}
            <h1>Sign Up</h1>
            <form method='POST' onSubmit={PostData}>

                <div>       
                    <label>Name</label>
                    <input type='text' value={user.name}  name="name" onChange={handleInputs}></input>

                </div>

                <div>

                    <label>Email</label>
                    <input type='text' value={user.email} name="email" onChange={handleInputs}></input>
                </div>
                <div>

                    <label>Phone</label>
                    <input type='number' value={user.phone} name="phone" onChange={handleInputs}></input>
                </div>
                <div>

                    <label>work</label>
                    <input type='text' value={user.work} name="work" onChange={handleInputs}></input>
                </div>
                <div>

                    <label>password</label>
                    <input type='text' value={user.password} name="password" onChange={handleInputs}></input>
                </div>

                <div>

                    <label>Confirm password</label>
                    <input type='text' value={user.cpassword} name="cpassword" onChange={handleInputs}></input>
                </div>


                <div>

                    <input type='submit' value="submit" name="signup" ></input>
                </div>
            </form>
        </section>

    )
}

export default Signup