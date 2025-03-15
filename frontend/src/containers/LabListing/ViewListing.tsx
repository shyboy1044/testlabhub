import React, { FC } from "react";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Input from "shared/Input/Input";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
interface City {
    city: string;
}

interface cityLab {
    id: number;
    firm_name: string;
    country: string;
    city: string;
}
export interface ViewListingProps {
    className?: string;
}

const ViewListing: FC<ViewListingProps> = ({ className = "" }) => {
    const [term, setTerm] = useState("");
    const [cityLabs, setCityLabs] = useState<cityLab[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);
    const fetchPosts = async (page: any) => {
        try {
            fetch(
                process.env.REACT_APP_API_URL +
                    `/lab-rating-directory/view-listing?page=${page}`,
                {
                    method: "GET",
                }
            )
                .then((res) =>
                    res.json().then((res) => {
                        setCityLabs(res.data);
                        setCurrentPage(res.current_page);
                        setTotalPages(res.last_page);
                    })
                )
                .catch((err) => console.log(err));
        } catch (error) {
            console.error("There was an error fetching the posts!", error);
        }
    };
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    const termSearch = () => {
        setIsSearch(1);
        let data = new FormData();
        data.append("term", term);
        fetch(process.env.REACT_APP_API_URL + "/search_labs", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    setCityLabs(res);
                })
            )
            .catch((err) => console.log(err));
    };
    const [isSearch, setIsSearch] = useState(0);
    const navigate = useNavigate();

    return (
        <div
            className={`nc-PageContact overflow-hidden ${className}`}
            data-nc-id="PageContact"
        >
            <Helmet>
                <title>Lab Ratings/Directory</title>
            </Helmet>
            <ToastContainer />
            <div className="mx-auto">
                <section className="mb-32">
                    <div className="container px-6 md:px-12">
                        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 mt-[100px] backdrop-blur-[30px] m-auto">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6">
                                    <div className="grid lg:grid-cols-2 gap-2 mt-8 sm:grid-cols-1">
                                        <div>
                                            <ButtonPrimary
                                                className="w-full"
                                                onClick={() => {
                                                    navigate("/reserve-lab");
                                                }}
                                            >
                                                Click here to: Reserve Lab for
                                                Precertification Testing
                                            </ButtonPrimary>
                                        </div>
                                        <div>
                                            <ButtonPrimary
                                                className="w-full"
                                                onClick={() => {
                                                    navigate("/submit-rfq");
                                                }}
                                            >
                                                Click here to: Submit RFQ for
                                                Certification Test
                                            </ButtonPrimary>
                                        </div>
                                    </div>
                                    <h2 className="font-semibold text-3xl my-8">
                                        LAB RATINGS / DIRECTORY
                                    </h2>
                                    <div className="inline-flex flow-root">
                                        <div className="float-left">
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={() => {
                                                    navigate(
                                                        "/lab-rating-directory/submit-listing"
                                                    );
                                                }}
                                            >
                                                Submit A Listing
                                            </ButtonSecondary>
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={() => {
                                                    setTerm("");
                                                    setIsSearch(0);
                                                    setCurrentPage(1);
                                                    fetchPosts(1);
                                                    navigate(
                                                        "/lab-rating-directory/view-listing"
                                                    );
                                                }}
                                            >
                                                View Listings
                                            </ButtonSecondary>
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={() => {
                                                    navigate(
                                                        "/lab-rating-directory"
                                                    );
                                                }}
                                            >
                                                Directory
                                            </ButtonSecondary>
                                        </div>

                                        <span className="flex float-right">
                                            <Input
                                                placeholder="Search"
                                                type="text"
                                                className="mt-1 max-w-lg"
                                                value={term}
                                                onChange={(e) =>
                                                    setTerm(e.target.value)
                                                }
                                            />
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={termSearch}
                                            >
                                                Search
                                            </ButtonSecondary>
                                        </span>
                                    </div>
                                    <hr className="my-4" />

                                    <>
                                        {isSearch == 1 ? (
                                            <h2 className="font-semibold text-3xl my-8 text-center">
                                                Search Results:
                                                {cityLabs.length} Labs Found
                                            </h2>
                                        ) : (
                                            <></>
                                        )}
                                        {cityLabs.map((cityLab) => {
                                            return (
                                                <div className="my-2">
                                                    <div className="border-2 border-gray-200">
                                                        <div>
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1 text-3xl font-semibold px-5 underline text-gray-700 hover:text-blue-600 md:ms-2"
                                                                to="/lab-reservation/booking/step-one"
                                                            >
                                                                {
                                                                    cityLab.firm_name
                                                                }
                                                            </NavLink>
                                                        </div>

                                                        <ButtonPrimary
                                                            className="ml-8 my-4"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/contract?lab_id=${cityLab.id}`
                                                                )
                                                            }
                                                        >
                                                            Contract
                                                        </ButtonPrimary>
                                                        <p className="my-2">
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1 text-xl font-semibold px-5 text-red-700 hover:text-blue-600 md:ms-2"
                                                                to="/lab-reservation/booking/step-one"
                                                            >
                                                                Sign-up or Login
                                                            </NavLink>
                                                            to view more listing
                                                            information
                                                        </p>
                                                        <p className="mx-8">
                                                            Equipment:
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                to="/lab-reservation/booking/step-one"
                                                            >
                                                                (Members Only)
                                                            </NavLink>
                                                        </p>
                                                        <p className="mx-8">
                                                            Accreditation:
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                to="/lab-reservation/booking/step-one"
                                                            >
                                                                (Members Only)
                                                            </NavLink>
                                                        </p>
                                                        <p className="mx-8">
                                                            Test Methods:
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                to="/lab-reservation/booking/step-one"
                                                            >
                                                                (Members Only)
                                                            </NavLink>
                                                        </p>
                                                        <p className="mx-8">
                                                            Test Standards:
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                to="/lab-reservation/booking/step-one"
                                                            >
                                                                (Members Only)
                                                            </NavLink>
                                                        </p>
                                                        <p className="ms-1 my-4 text-xl font-semibold px-5 text-gray-700 hover:text-blue-600 md:ms-2">
                                                            Pre-Certification
                                                            Ratings
                                                        </p>
                                                        <table className="block w-[400px] md:w-fit overflow-auto m-auto border-collapse border border-slate-400">
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        Overall
                                                                        Rating
                                                                    </th>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        Would
                                                                        use
                                                                        again
                                                                    </th>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        On Time
                                                                    </th>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        On
                                                                        Budget
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <div className="flex items-center  mb-5">
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <NavLink
                                                                            end
                                                                            rel="noopener noreferrer"
                                                                            className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                            to="/lab-reservation/booking/step-one"
                                                                        >
                                                                            (Members
                                                                            Only)
                                                                        </NavLink>
                                                                    </td>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <NavLink
                                                                            end
                                                                            rel="noopener noreferrer"
                                                                            className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                            to="/lab-reservation/booking/step-one"
                                                                        >
                                                                            (Members
                                                                            Only)
                                                                        </NavLink>
                                                                    </td>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <NavLink
                                                                            end
                                                                            rel="noopener noreferrer"
                                                                            className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                            to="/lab-reservation/booking/step-one"
                                                                        >
                                                                            (Members
                                                                            Only)
                                                                        </NavLink>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <p className="ms-1 my-4 text-xl font-semibold px-5 text-gray-700 hover:text-blue-600 md:ms-2">
                                                            Certification
                                                            Ratings
                                                        </p>
                                                        <table className="block w-[400px] md:w-fit overflow-auto m-auto border-collapse border border-slate-400">
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        Overall
                                                                        Rating
                                                                    </th>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        Would
                                                                        use
                                                                        again
                                                                    </th>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        On Time
                                                                    </th>
                                                                    <th className="p-4 bg-red-700 text-white border border-slate-300 ">
                                                                        On
                                                                        Budget
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <div className="flex items-center  mb-5">
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                            <svg
                                                                                className="w-6 h-6 ms-2 text-yellow-300"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 22 20"
                                                                            >
                                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <NavLink
                                                                            end
                                                                            rel="noopener noreferrer"
                                                                            className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                            to="/lab-reservation/booking/step-one"
                                                                        >
                                                                            (Members
                                                                            Only)
                                                                        </NavLink>
                                                                    </td>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <NavLink
                                                                            end
                                                                            rel="noopener noreferrer"
                                                                            className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                            to="/lab-reservation/booking/step-one"
                                                                        >
                                                                            (Members
                                                                            Only)
                                                                        </NavLink>
                                                                    </td>
                                                                    <td className="p-4 border border-slate-300 ">
                                                                        <NavLink
                                                                            end
                                                                            rel="noopener noreferrer"
                                                                            className="ms-1  font-semibold text-red-700 hover:text-blue-600 md:ms-2"
                                                                            to="/lab-reservation/booking/step-one"
                                                                        >
                                                                            (Members
                                                                            Only)
                                                                        </NavLink>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <p className="ms-1 my-4 text-xl font-semibold px-5 text-gray-700 hover:text-blue-600 md:ms-2">
                                                            Tags:
                                                        </p>
                                                        <ButtonSecondary className="ml-8 my-4 !bg-gray-600 text-white">
                                                            VIEW
                                                        </ButtonSecondary>
                                                    </div>
                                                </div>
                                            );
                                        })}{" "}
                                        {isSearch == 0 ? (
                                            <div className="flex mt-16 justify-center items-center">
                                                <div>
                                                    <button
                                                        className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        onClick={() =>
                                                            handlePageChange(
                                                                currentPage - 1
                                                            )
                                                        }
                                                        disabled={
                                                            currentPage === 1
                                                        }
                                                    >
                                                        Previous
                                                    </button>
                                                    <span>
                                                        {" "}
                                                        Page {
                                                            currentPage
                                                        } of {totalPages}{" "}
                                                    </span>
                                                    <button
                                                        className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        onClick={() =>
                                                            handlePageChange(
                                                                currentPage + 1
                                                            )
                                                        }
                                                        disabled={
                                                            currentPage ===
                                                            totalPages
                                                        }
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        <div className="grid lg:grid-cols-2 gap-2 mt-8 sm:grid-cols-1">
                                            <div>
                                                <ButtonPrimary
                                                    className="w-full"
                                                    onClick={() => {
                                                        navigate(
                                                            "/reserve-lab"
                                                        );
                                                    }}
                                                >
                                                    Click here to: Reserve Lab
                                                    for Precertification Testing
                                                </ButtonPrimary>
                                            </div>
                                            <div>
                                                <ButtonPrimary
                                                    className="w-full"
                                                    onClick={() => {
                                                        navigate("/submit-rfq");
                                                    }}
                                                >
                                                    Click here to: Submit RFQ
                                                    for Certification Test
                                                </ButtonPrimary>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ViewListing;
