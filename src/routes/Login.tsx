import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Login() {
    const [showPass, setShowPass] = useState("false");

    const navigate = useNavigate();

    function handleLogin() {
      navigate("/Dashboard");
    }

    return (
        <div className="Login bg-grey-200 border-2 rounded-2xl p-10 w-2/5 max-w-screen-md h-fit flex flex-col flex-wrap justify-center align-middle items-center">
            <div className="px-10 text-black font-serif font-bold text-base text-left w-full h-fit p-4 my-4">

                <div>
                    <div>Email Address</div>
                    <input type="text" className=" border-2   rounded-xl  bg-white p-3 mb-4 w-full border-green-300 ring-green-300 ring-1 "/>
                </div>

                <div>
                    <div> Password</div>
                    <input type="text" className="border-2 rounded-xl bg-white p-3 mb-4 w-full"/>
                </div>

            </div>

            <button className=" bg-grey-200 text-black font-sans font-semibold text-lg w-fit h-fit p-4 my-4 border-black border-2 rounded-2xl" onClick={handleLogin} > Login</button>

            {/* <Link to="/Dashboard">Login</Link> */}
        </div>
    );
}