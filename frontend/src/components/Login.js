// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import NavbarTop from './NavbarTop';


// function Login() {
//     const navigate = useNavigate("");

//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     });

//     const handleInputs = (e) => {
//         const { name, value } = e.target;
//         setUser(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const PostData = async (e) => {
//         e.preventDefault();

//         const { email, password } = user;

//         const res = await fetch("http://localhost:4000/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email, password })
//         });

//         console.log(res);

//         // const token = res.token;
//         // console.log(token);

//         // let data = await res.json();
//         // console.log(data);
//         // const token = data.token;
//         // console.log(token);
//         // window.alert(JSON.stringify(data.message));

//         // if (data.message === "signin successfully") {
//         //     localStorage.setItem('token', token);
//         //     setTimeout(() => {
//         //         localStorage.removeItem('token'); // Remove token after 20 seconds
//         //     }, 10000); // 20 seconds in milliseconds
//         //     navigate("/");
//         // }
//         let data = await res.json();
//         console.log(data);
//         const token = data.token;
//         console.log(token);
//         window.alert(JSON.stringify(data.message));

//         // if (data.message === "signin successfully") {
//         //     // Set token as HTTP-only cookie
//         //     document.cookie = `token=${token}; path=/; max-age=20; HttpOnly`;
//         //     navigate("/");
//         // }


//         if (data.message === "signin successfully") {
//             // Set token as HTTP-only cookie
//             Cookies.set('token', token, { path: '/', expires: 1 / 3, secure: true, sameSite: 'None' });
//             navigate("/home");
//         }
//     }

//     return (
//         <section>
//             {/* <NavbarTop /> */}
//             <h1>Login</h1>
//             <form onSubmit={PostData}>

//                 <div>

//                     <label>Email</label>
//                     <input type='text' name="email" value={user.email} onChange={handleInputs}></input>
//                 </div>

//                 <div>
//                     <label>password</label>
//                     <input type='text' id="password" value={user.password} name="password" onChange={handleInputs}></input>
//                 </div>
//                 <div>
//                     <input type='submit' value="enter" name="signup" ></input>
//                 </div>
//             </form>
//         </section>

//     )
// }

// export default Login;



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Cookies from 'js-cookie';

// // function Login() {
// //     const navigate = useNavigate();

// //     const [user, setUser] = useState({
// //         email: "",
// //         password: ""
// //     });

// //     const handleInputs = (e) => {
// //         const { name, value } = e.target;
// //         setUser(prevState => ({
// //             ...prevState,
// //             [name]: value
// //         }));
// //     };

// //     const PostData = async (e) => {
// //         e.preventDefault();

// //         const { email, password } = user;

// //         const res = await fetch("http://localhost:4000/", {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             },
// //             body: JSON.stringify({ email, password })
// //         });

// //         if (res.ok) {
// //             let data = await res.json();
// //             const token = data.token;

// //             window.alert(data.message);

// //             // Set token as HTTP-only cookie
// //             Cookies.set('token', token, { path: '/', expires: 1 / 3, secure: true, sameSite: 'None' });

// //             // Redirect to home page
// //             navigate("/home");
// //         } else {
// //             window.alert("Login failed. Please check your credentials.");
// //         }
// //     }

// //     return (
// //         <section>
// //             <h1>Login</h1>
// //             <form onSubmit={PostData}>
// //                 <div>
// //                     <label>Email</label>
// //                     <input type='text' name="email" value={user.email} onChange={handleInputs}></input>
// //                 </div>
// //                 <div>
// //                     <label>Password</label>
// //                     <input type='password' name="password" value={user.password} onChange={handleInputs}></input>
// //                 </div>
// //                 <div>
// //                     <input type='submit' value="Login"></input>
// //                 </div>
// //             </form>
// //         </section>
// //     )
// // }

// // export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import NavbarTop from './NavbarTop';
// import axios from 'axios';

// function Login() {
//     const navigate = useNavigate("");

//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     });

//     const handleInputs = (e) => {
//         const { name, value } = e.target;
//         setUser(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const PostData = async (e) => {
//         e.preventDefault();

//         const { email, password } = user;

//         try {
//             const res = await axios.post("/", {
//                 email,
//                 password
//             });

//             console.log(res);

//             const data = res.data;
//             console.log(data);
//             const token = data.token;
//             console.log(token);
//             window.alert(JSON.stringify(data.message));

//         } catch (error) {
//             console.error('Error:', error);
//             window.alert('An error occurred while logging in.');
//         }
//     };

//     return (
//         <section>
//             {/* <NavbarTop /> */}
//             <h1>Login</h1>
//             <form onSubmit={PostData}>
//                 <div>
//                     <label>Email</label>
//                     <input type='text' name="email" value={user.email} onChange={handleInputs} />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input type='password' id="password" value={user.password} name="password" onChange={handleInputs} />
//                 </div>
//                 <div>
//                     <input type='submit' value="Enter" name="signin" />
//                 </div>
//             </form>
//         </section>
//     );
// }

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from '../authSlice';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const PostData = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        try {
            const res = await axios.post("/", {
                email,
                password
            });
console.log(res)
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 30);

// Store user data and expiry date in localStorage
localStorage.setItem('userData', JSON.stringify({
    user: res.data.user,
    expiryDate: expiryDate.toISOString() // Convert to ISO string for consistency
}));

console.log(res.data.user)
window.alert("Login Successfully");
            dispatch(login());
            // Redirect to home page
            navigate('/home');

        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred while logging in.');
        }
    };

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={PostData}>
                <div>
                    <label>Email</label>
                    <input type='text' name="email" value={user.email} onChange={handleInputs} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' id="password" value={user.password} name="password" onChange={handleInputs} />
                </div>
                <div>
                    <input type='submit' value="Enter" name="signin" />
                </div>
            </form>
        </section>
    );
}

export default Login;

