import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export interface CheckOutOrderProps {
    className?: string;
}

const loginSocials = [
    {
        name: "Continue with Facebook",
        href: "#",
        icon: facebookSvg,
    },
    {
        name: "Continue with Google",
        href: "#",
        icon: googleSvg,
    },
];

const CheckOutOrder: FC<CheckOutOrderProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const initializeGSI = () => {
            if (
                window.google &&
                window.google.accounts &&
                window.google.accounts.id
            ) {
                window.google.accounts.id.initialize({
                    client_id:
                        "866529374797-npcd5h9o0ir5vjoiaj5utgcbh7bclqvj.apps.googleusercontent.com",
                    callback: handleCredentialResponse,
                });

                const buttonDiv = document.getElementById(
                    "google-signin-button"
                );
                if (buttonDiv) {
                    window.google.accounts.id.renderButton(buttonDiv, {
                        theme: "outline",
                        size: "large",
                    });
                }
            }
        };

        if (window.google && window.google.accounts) {
            initializeGSI();
        } else {
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.defer = true;
            script.onload = initializeGSI;
            document.body.appendChild(script);
        }
    }, []);
    const handleCredentialResponse = (response: any) => {
        const responsePayload = decodeJwtResponse(response.credential);
        let data = new FormData();
        data.append("email", responsePayload.email);
        data.append("name", responsePayload.name);
        fetch(process.env.REACT_APP_API_URL + "/login/google", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    localStorage.setItem("email", responsePayload.email);
                    localStorage.setItem("name", responsePayload.name);
                    localStorage.setItem("type", "3");
                    window.location.href = "/";
                })
            )
            .catch((err) => console.log(err));
    };

    const decodeJwtResponse = (token: string) => {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return (
                        "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    };

    const onSubmit = () => {
        if (userEmail == "" || password == "") {
            toast("Please input all fields!");
            return;
        }

        let data = new FormData();
        data.append("email", userEmail);
        data.append("password", password);
        data.append("type", "3");
        fetch(process.env.REACT_APP_API_URL + "/login", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    if (res.status == "wrong") {
                        toast("Credentials not matching. Please try again!");
                        return;
                    } else {
                        console.log(res);
                        localStorage.setItem("email", res.message.email);
                        localStorage.setItem("name", res.message.name);
                        localStorage.setItem("type", res.message.type);
                        window.location.href = "/";
                    }
                })
            )
            .catch((err) => console.log(err));
    };
    return (
        <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="container mb-24 lg:mb-32">
                <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                    Personal Login
                </h2>
                <ToastContainer />
                <div className="max-w-md mx-auto space-y-6">
                    <div className="grid gap-3">
                        <div id="google-signin-button"></div>
                        {/* {loginSocials.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                            >
                                <img
                                    className="flex-shrink-0"
                                    src={item.icon}
                                    alt={item.name}
                                />
                                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                                    {item.name}
                                </h3>
                            </a>
                        ))} */}
                    </div>
                    {/* OR */}
                    <div className="relative text-center">
                        <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
                            OR
                        </span>
                        <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
                    </div>
                    {/* FORM */}
                    <form className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-neutral-800 dark:text-neutral-200">
                                Email address
                            </span>
                            <Input
                                type="email"
                                placeholder="example@example.com"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="mt-1"
                            />
                        </label>
                        <label className="block">
                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                                Password
                                {/* <Link to="/forgot-pass" className="text-sm">
                                    Forgot password?
                                </Link> */}
                            </span>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1"
                            />
                        </label>
                        <ButtonPrimary type="button" onClick={onSubmit}>
                            Continue
                        </ButtonPrimary>
                    </form>

                    {/* ==== */}
                    <span className="block text-center text-neutral-700 dark:text-neutral-300">
                        New user? {` `}
                        <Link to="/signup">Create an account</Link>
                    </span>
                    <span className="block text-center text-neutral-700 dark:text-neutral-300">
                        <Link to="/business-login">Business Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CheckOutOrder;
