import React, { FC } from "react";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Input from "shared/Input/Input";
import { NavLink } from "react-router-dom";

import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
interface City {
    city: string;
}
interface Lab {
    country: string;
    cities: City[]; // Location is an array of strings
    // Add other properties as needed
}
interface cityLab {
    id: number;
    firm_name: string;
    country: string;
    city: string;
}
export interface LabRatingDirectoryProps {
    className?: string;
}

const LabRatingDirectory: FC<LabRatingDirectoryProps> = ({
    className = "",
}) => {
    const [term, setTerm] = useState("");
    const [labs, setLabs] = useState<Lab[]>([]);
    const [cityLabs, setCityLabs] = useState<cityLab[]>([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/lab-rating-directory", {
            method: "GET",
        })
            .then((res) =>
                res.json().then((res) => {
                    setLabs(res);
                })
            )
            .catch((err) => console.log(err));
    }, []);
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    const cityClick = (country: string, city: string) => {
        setViewShow(0);
        setSelectedCountry(country);
        let data = new FormData();
        data.append("country", country);
        data.append("city", city);
        fetch(process.env.REACT_APP_API_URL + "/get_city_labs", {
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
    const termSearch = () => {
        setIsSearch(1);
        setViewShow(0);
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
    const [selectedCountry, setSelectedCountry] = useState("");
    const [isSearch, setIsSearch] = useState(0);
    const [viewShow, setViewShow] = useState(1);
    const [selectedCity, setSelectedCity] = useState("");
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [comment, setComment] = useState("");
    const onSubmit = () => {
        if (
            firstName == "" ||
            lastName == "" ||
            email == "" ||
            phone == "" ||
            company == "" ||
            comment == ""
        ) {
            toast("Please fill every fields!");
            return;
        }
        let data = new FormData();
        data.append("first_name", firstName);
        data.append("last_name", lastName);
        data.append("email", email);
        data.append("phone", phone);
        data.append("company_name", company);
        data.append("comment", comment);
        fetch(process.env.REACT_APP_API_URL + "/submit-rfq/contact-us", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    toast("Sent contact successfully");
                    navigate("/");
                })
            )
            .catch((err) => console.log(err));
    };
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
                                                    setViewShow(1);
                                                    setTerm("");
                                                    setIsSearch(0);
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
                                    {viewShow == 1 ? (
                                        <div>
                                            <h2 className="font-semibold text-3xl my-8">
                                                Directory
                                            </h2>

                                            {labs.map((lab, idx) => {
                                                return (
                                                    <List placeholder={""}>
                                                        <Accordion
                                                            placeholder={""}
                                                            open={open === idx}
                                                        >
                                                            <ListItem
                                                                placeholder={""}
                                                                className="p-0"
                                                                selected={
                                                                    open === 1
                                                                }
                                                            >
                                                                <AccordionHeader
                                                                    placeholder={
                                                                        ""
                                                                    }
                                                                    onClick={() =>
                                                                        handleOpen(
                                                                            idx
                                                                        )
                                                                    }
                                                                    className="border-b-0 p-3"
                                                                >
                                                                    <ListItemPrefix placeholder="">
                                                                        <ChevronDownIcon
                                                                            strokeWidth={
                                                                                2.5
                                                                            }
                                                                            className={`mx-auto h-4 w-4 transition-transform ${
                                                                                open ===
                                                                                idx
                                                                                    ? "rotate-180"
                                                                                    : ""
                                                                            }`}
                                                                        />
                                                                    </ListItemPrefix>
                                                                    <Typography
                                                                        placeholder={
                                                                            ""
                                                                        }
                                                                        color="blue-gray"
                                                                        className="mr-auto font-semibold"
                                                                    >
                                                                        {
                                                                            lab.country
                                                                        }
                                                                    </Typography>
                                                                </AccordionHeader>
                                                            </ListItem>
                                                            {lab.cities.map(
                                                                (city) => {
                                                                    return (
                                                                        <AccordionBody
                                                                            className="py-1"
                                                                            onClick={() =>
                                                                                cityClick(
                                                                                    lab.country,
                                                                                    city.city
                                                                                )
                                                                            }
                                                                        >
                                                                            <List
                                                                                className="p-0"
                                                                                placeholder=""
                                                                            >
                                                                                <ListItem placeholder="">
                                                                                    <ListItemPrefix placeholder="">
                                                                                        <ChevronRightIcon
                                                                                            strokeWidth={
                                                                                                3
                                                                                            }
                                                                                            className="h-3 w-5"
                                                                                        />
                                                                                    </ListItemPrefix>
                                                                                    {
                                                                                        city.city
                                                                                    }
                                                                                </ListItem>
                                                                            </List>
                                                                        </AccordionBody>
                                                                    );
                                                                }
                                                            )}
                                                        </Accordion>
                                                    </List>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <>
                                            {isSearch == 1 ? (
                                                <h2 className="font-semibold text-3xl my-8 text-center">
                                                    Search Results:
                                                    {cityLabs.length} Labs Found
                                                </h2>
                                            ) : (
                                                <h2 className="font-semibold text-3xl my-8 text-center">
                                                    CATEGORY:{selectedCountry}
                                                </h2>
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
                                                                    Sign-up or
                                                                    Login
                                                                </NavLink>
                                                                to view more
                                                                listing
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
                                                                    (Members
                                                                    Only)
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
                                                                    (Members
                                                                    Only)
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
                                                                    (Members
                                                                    Only)
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
                                                                    (Members
                                                                    Only)
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
                                                                            On
                                                                            Time
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
                                                            <table className="block w-[400px] md:w-fit  overflow-auto m-auto border-collapse border border-slate-400">
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
                                                                            On
                                                                            Time
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
                                            })}

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
                                                        Click here to: Reserve
                                                        Lab for Precertification
                                                        Testing
                                                    </ButtonPrimary>
                                                </div>
                                                <div>
                                                    <ButtonPrimary
                                                        className="w-full"
                                                        onClick={() => {
                                                            navigate(
                                                                "/submit-rfq"
                                                            );
                                                        }}
                                                    >
                                                        Click here to: Submit
                                                        RFQ for Certification
                                                        Test
                                                    </ButtonPrimary>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LabRatingDirectory;
