import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./submit_lab_review.css";
import image1 from "images/custom/VISA-CARD-50$.png";
import image2 from "images/custom/VISA-CARD-100$.png";
export interface SubmitLabReviewProps {
    className?: string;
}

const SubmitLabReview: FC<SubmitLabReviewProps> = ({ className = "" }) => {
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
                    <li>
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
                    </li>
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
                                Submit Lab Review
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
                    <title>Submit Lab Review</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 mt-20">
                    <div
                        style={{
                            border: "0px solid white",
                            width: "100%",
                        }}
                    >
                        <div
                            className="container"
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                        >
                            <div className="row justify-content-center ">
                                <div className="col-md-12">
                                    <div className="card" id="card">
                                        <div className="card-header">
                                            <div className="title text-center text-danger">
                                                <h2 className="text-xl font-semibold my-10 text-[#dc3545]">
                                                    Submit Lab Review
                                                </h2>
                                            </div>
                                            <div className="card-body">
                                                <b>
                                                    I. Laboratory Survey
                                                    Appreciation
                                                </b>
                                                <p className="justify">
                                                    Members and non members are
                                                    encouraged to provide
                                                    feedback through
                                                    Testlabhub’s Laboratory
                                                    Review Survey. Non members
                                                    are also welcome to
                                                    participate with proof of
                                                    laboratory use in the last 6
                                                    months. Lab Rating access is
                                                    exclusive to Testlabhub
                                                    members.
                                                </p>
                                                <table className="w-full lg:w-[60%]">
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src={image1}
                                                                alt=""
                                                                style={{
                                                                    width: "max-content",
                                                                }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <br />
                                                            <b>
                                                                {" "}
                                                                &gt; $50 Visa
                                                                Gift Card
                                                            </b>
                                                            <br />
                                                            <br />
                                                            <p>
                                                                for submitted
                                                                surveys after
                                                                completion of a
                                                                pre-certification
                                                            </p>

                                                            <p>
                                                                test scheduled
                                                                through
                                                                Testlabhub.
                                                            </p>
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src={image2}
                                                                alt=""
                                                                style={{
                                                                    width: "max-content",
                                                                }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <br />
                                                            <b>
                                                                {" "}
                                                                &gt; $100 Visa
                                                                Gift Card
                                                            </b>
                                                            <br />
                                                            <br />
                                                            <p>
                                                                {" "}
                                                                for submitted
                                                                surveys after
                                                                completion of a
                                                            </p>
                                                            <p>
                                                                certification
                                                                test scheduled
                                                                through
                                                                Testlabhub’s
                                                            </p>
                                                            <p>
                                                                RFQ bid process.
                                                            </p>
                                                            <br />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p className="justify">
                                                    <b>
                                                        {" "}
                                                        &gt; $5 Visa Gift Card
                                                    </b>{" "}
                                                    for submitted surveys after
                                                    completion of pre-cert and
                                                    certification tests{" "}
                                                    <b>
                                                        {" "}
                                                        not scheduled through
                                                        Testlabhub.
                                                    </b>
                                                </p>
                                                <p className="justify">
                                                    <span
                                                        style={{
                                                            color: "#FF0000",
                                                        }}
                                                    >
                                                        {" "}
                                                        *
                                                    </span>
                                                    (must provide proof of lab
                                                    use in previous 12 months if
                                                    not scheduled through
                                                    Testlabhub)
                                                </p>
                                                <br />
                                                <b>
                                                    II. Laboratory Rating Access
                                                </b>
                                                <br />
                                                <br />
                                                <p className="justify">
                                                    Testlabhub members benefit
                                                    from access to key
                                                    laboratory info including
                                                    laboratory ratings. This
                                                    enables our members to make
                                                    informed scheduling
                                                    decisions with regard to the
                                                    labs they utilize.
                                                    Laboratory availability,
                                                    locations, capabilities and
                                                    ratings are all accessible
                                                    to members on the
                                                    Pre-certification
                                                    reservation page.
                                                </p>
                                                <br />
                                                <p className="justify">
                                                    Test labs routinely provide
                                                    services to technology
                                                    manufacturers to satisfy
                                                    legal and/or marketing
                                                    requirements. Like other
                                                    services measured in the
                                                    value chain towards
                                                    successful product
                                                    introduction to the market,
                                                    manufacturers want to know
                                                    how test labs rank with
                                                    regard to testing and
                                                    certification services
                                                    rendered.
                                                </p>
                                                <br />
                                                <p className="justify">
                                                    Please share your review of
                                                    services utilized at the
                                                    test lab using the
                                                    laboratory survey form
                                                    listed below.
                                                </p>
                                                <div className="customButton">
                                                    <h2 className="text-lg font-semibold">
                                                        Pre-certification Survey
                                                    </h2>

                                                    <NavLink
                                                        end
                                                        rel="noopener noreferrer"
                                                        className="telcommand ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                        to="https://www.surveymonkey.com/"
                                                    >
                                                        Start Survey
                                                    </NavLink>
                                                    <h2 className="text-lg font-semibold">
                                                        Certification Survey
                                                    </h2>

                                                    <NavLink
                                                        end
                                                        rel="noopener noreferrer"
                                                        className="telcommand ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                        to="https://www.surveymonkey.com/"
                                                    >
                                                        Start Survey
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubmitLabReview;
