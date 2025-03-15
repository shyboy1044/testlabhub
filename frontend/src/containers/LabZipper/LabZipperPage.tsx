import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./LabZipper.css";
import steponeImg from "images/custom/step-img1.avif";
import steptwoImg from "images/custom/step-img2.avif";
import stepthreeImg from "images/custom/step-img3.avif";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export interface LabZipperProps {
    className?: string;
}

const LabZipper: FC<LabZipperProps> = ({ className = "" }) => {
    const user_email = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "";
    const navigate = useNavigate();
    const stepTwo = () => {
        if (!user_email) navigate("/login");
        else navigate("/lab-zipper/dashboard");
    };
    return (
        <>
            <nav className="flex mt-10 ml-20" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <NavLink
                            end
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                            to={"/"}
                        >
                            <svg
                                className="w-3 h-3 me-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <div className="flex items-center">
                            <svg
                                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                to="/lab-reservation/schedule-testing"
                            >
                                Lab Reservation
                            </NavLink>
                        </div>
                    </li> */}
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg
                                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                Telcron Rewards
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div
                className={`nc-PageAbout overflow-hidden relative ${className}`}
                data-nc-id="PageAbout"
            >
                <Helmet>
                    <title>LabZipper</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-20">
                    <div className="steps-section">
                        <h2>Getting started is easy</h2>
                        <div className="steps-container">
                            <div className="step">
                                <div className="step-img">
                                    <img
                                        className="m-auto"
                                        src={steponeImg}
                                        alt="Step 1"
                                    />
                                </div>
                                <h3 className="text-black">Sign in</h3>
                                <p>
                                    You may already be a member. Try logging in
                                    with your Telcron Rewards account, before
                                    creating a new one.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-img">
                                    <img
                                        className="m-auto"
                                        src={steptwoImg}
                                        alt="Step 2"
                                    />
                                </div>
                                <h3 className="text-black">
                                    Visit the Rewards dashboard
                                </h3>
                                <p>
                                    This fully activates your account, so you
                                    can start earning instantly.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-img">
                                    <img
                                        className="m-auto"
                                        src={stepthreeImg}
                                        alt="Step 3"
                                    />
                                </div>
                                <h3 className="text-black">
                                    Earn points, score top rewards
                                </h3>
                                <p>
                                    Rack up points and redeem them for gift
                                    cards, cash donations to causes you care
                                    about, and more.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <ButtonPrimary
                                className="m-auto mt-20"
                                type="button"
                                onClick={stepTwo}
                            >
                                Continue Telcron Rewards
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LabZipper;
