import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookLogin from "react-facebook-login";

export interface BusinessSignupProps {
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

const BusinessSignup: FC<BusinessSignupProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [contact_name, setContactName] = useState("");
    const [password2, setPassword2] = useState("");
    const handleFacebookCallback = (response: any) => {
        if (response?.status === "unknown") {
            console.error(
                "Sorry!",
                "Something went wrong with facebook Login."
            );
            return;
        }
        console.log(response);
        let data = new FormData();
        data.append("email", response.email);
        data.append("name", response.name);
        fetch(process.env.REACT_APP_API_URL + "/login/google", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    localStorage.setItem("email", response.email);
                    localStorage.setItem("name", response.name);
                    localStorage.setItem("type", "3");
                    window.location.href = "/";
                })
            )
            .catch((err) => console.log(err));
    };
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
        if (
            company_name == "" ||
            contact_name == "" ||
            role == "" ||
            userEmail == "" ||
            password == "" ||
            password2 == ""
        ) {
            toast("Please input all fields!");
            return;
        }
        if (password !== password2) {
            toast("Passwords are not matched. Please confirm your password!");
            return;
        }
        if (password.length < 8) {
            toast("Password should be at least 8 characters!");
            return;
        }
        let data = new FormData();
        data.append("company_name", company_name);
        data.append("contact_name", contact_name);
        data.append("role", role);
        data.append("email", userEmail);
        data.append("password", password);
        data.append("password_confirmation", password2);
        data.append("type", "2");
        fetch(process.env.REACT_APP_API_URL + "/register", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    if (res.status == "wrong") {
                        toast(
                            "Email already exist. Please input another email!"
                        );
                    } else {
                        navigate("/business-login");
                    }
                })
            )
            .catch((err) => console.log(err));
    };
    return (
        <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
            <Helmet>
                <title>Sign up</title>
            </Helmet>

            <div className="container mb-24 lg:mb-32">
                <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                    Business Signup
                </h2>
                <ToastContainer />
                <div className="max-w-md mx-auto space-y-6 ">
                    <div className="grid gap-3">
                        <div
                            id="google-signin-button"
                            className="m-auto w-full"
                        ></div>
                        <div className="m-auto w-full">
                            <FacebookLogin
                                buttonStyle={{ padding: "9px" }}
                                appId="432736705920119" // we need to get this from facebook developer console by setting the app.
                                autoLoad={false}
                                fields="name,email"
                                callback={handleFacebookCallback}
                            />
                        </div>
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
                                Company Name
                            </span>
                            <Input
                                type="text"
                                placeholder="Company Name"
                                value={company_name}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="mt-1"
                            />
                        </label>
                        <label className="block">
                            <span className="text-neutral-800 dark:text-neutral-200">
                                Company Role
                            </span>
                            <Input
                                type="text"
                                placeholder="Company Role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="mt-1"
                            />
                        </label>
                        <label className="block">
                            <span className="text-neutral-800 dark:text-neutral-200">
                                Company Contact Name
                            </span>
                            <Input
                                type="text"
                                placeholder="Contact Name"
                                value={contact_name}
                                onChange={(e) => setContactName(e.target.value)}
                                className="mt-1"
                            />
                        </label>
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
                            </span>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1"
                            />
                        </label>
                        <label className="block">
                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                                Confirm Password
                            </span>
                            <Input
                                type="password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                                className="mt-1"
                            />
                        </label>

                        <ButtonPrimary type="button" onClick={onSubmit}>
                            Continue
                        </ButtonPrimary>
                    </form>

                    {/* ==== */}
                    <span className="block text-center text-neutral-700 dark:text-neutral-300">
                        Already have an account? {` `}
                        <Link to="/business-login">Sign in</Link>
                    </span>
                    <span className="block text-center text-neutral-700 dark:text-neutral-300">
                        <Link to="/login">Personal Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BusinessSignup;
