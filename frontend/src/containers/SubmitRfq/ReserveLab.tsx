import React, { Fragment, FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import rightImg from "images/custom/device-diagram.jpg";
import listImage from "images/custom/list-marker.png";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import { useState, useEffect, ChangeEvent } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import OrderSummary from "./OrderSummary";
import ClearDataButton from "./ClearDataButton";
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
} from "date-fns";
import DatePicker from "react-datepicker";
import DatePickerCustomHeaderTwoMonth from "components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "components/DatePickerCustomDay";
import { useNavigate } from "react-router-dom";
export interface ReserveLabProps {
    className?: string;
}
interface Country {
    country: string;
}
interface ServicePreference {
    id: number;
    name: string;
}

interface ProductDescription {
    id: number;
    name: string;
}
interface Lab {
    id: number;
    price: string;
    firm_name: string;
    city: string;
    country: string;
}
const ReserveLab: FC<ReserveLabProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const user_email = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "";
    const [countries, setCountries] = useState<Country[]>([]);
    const [country, setCountry] = useState("");
    const [bookingTime, setBookingTime] = useState("1");
    const [labs, setLabs] = useState<Lab[]>([]);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [selectedLab, setSelectedLab] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState("");
    const [step, setStep] = useState(1);
    const [company_name, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [company_contact_f_name, setCompanyFirstName] = useState("");
    const [company_contact_l_name, setCompanyLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province_state, setProvinceState] = useState("");
    const [zip_code, setZipCode] = useState("");
    const [booking_email, setBookingEmail] = useState("");
    const [booking_fax_number, setFaxNumber] = useState("");
    const [booking_phone_one, setPhone1] = useState("");
    const [booking_phone_two, setPhone2] = useState("");
    const [description, setDescription] = useState("");
    const [reservation_email, setReservationEmail] = useState("");
    const [reserveCountry, setReserveCountry] = useState("");
    //
    const [selectedLabName, setSelectedLabName] = useState("");
    const onChangeDate = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const [yourTotal, setYourTotal] = useState(0);
    const [servicePreferences, setServicePreference] = useState<
        ServicePreference[]
    >([]);
    const [productDescriptions, setProductDescription] = useState<
        ProductDescription[]
    >([]);

    const padZero = (number: number) => {
        return number < 10 ? "0" + number : number;
    };

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1); // getMonth() returns month from 0 to 11
        const day = padZero(date.getDate());

        return `${year}-${month}-${day}`;
    };
    const paydone = (payId: string) => {
        let data = new FormData();
        data.append("reservation_email", reservation_email);
        data.append("description", description);
        data.append("booking_phone_two", booking_phone_two);
        data.append("booking_phone_one", booking_phone_one);
        data.append("booking_fax_number", booking_fax_number);
        data.append("booking_email", booking_email);
        data.append("zip_code", zip_code);
        data.append("province_state", province_state);
        data.append("city", city);
        data.append("address", address);
        data.append("country", country);
        data.append("company_contact_l_name", company_contact_l_name);
        data.append("company_contact_f_name", company_contact_f_name);
        data.append("email", user_email ?? "");
        data.append("company_name", company_name);
        data.append("total_price", yourTotal.toString());
        data.append("lab_type_id", selectedLab.toString());
        data.append("reserve_country", reserveCountry);
        data.append("payId", payId);
        data.append("full_or_part", "Part");
        if (startDate != null && endDate != null) {
            let days =
                differenceInDays(endDate, startDate) == 0
                    ? 1
                    : differenceInDays(endDate, startDate);
            data.append("diff_days", days.toString());
            data.append("end_date", formatDate(endDate));
            data.append("start_date", formatDate(startDate));
        }
        data.append("service_preferences", JSON.stringify(selectedServices));
        data.append(
            "product_descriptions",
            JSON.stringify(selectedDescriptions)
        );
        fetch(process.env.REACT_APP_API_URL + "/reserve_lab", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    navigate("/");
                })
            )
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/get_countries", {
            method: "GET",
        })
            .then((res) =>
                res.json().then((res) => {
                    setCountries(res);
                    setCountry(res[0].country);
                })
            )
            .catch((err) => console.log(err));
        fetch(process.env.REACT_APP_API_URL + "/get_service_preference", {
            method: "GET",
        })
            .then((res) =>
                res.json().then((res) => {
                    setServicePreference(res);
                })
            )
            .catch((err) => console.log(err));
        fetch(process.env.REACT_APP_API_URL + "/get_product_description", {
            method: "GET",
        })
            .then((res) =>
                res.json().then((res) => {
                    setProductDescription(res);
                })
            )
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        let data = new FormData();
        data.append("country", country);
        fetch(process.env.REACT_APP_API_URL + "/get_labs_country", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    setLabs(res);
                })
            )
            .catch((err) => console.log(err));
    }, [country]);
    useEffect(() => {
        if (endDate != null && startDate != null && selectedPrice != "") {
            let days =
                differenceInDays(endDate, startDate) == 0
                    ? 1
                    : differenceInDays(endDate, startDate);
            let total = Number(selectedPrice) * Number(days);
            setYourTotal(total);
        }
    }, [selectedLab, endDate]);
    const renderInput = () => {
        return (
            <>
                <div className="text-neutral-300 dark:text-neutral-400">
                    <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
                <div className="flex-grow text-left">
                    <span className="block xl:text-lg font-semibold">
                        {startDate?.toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                        }) || "Add dates"}
                        {endDate
                            ? " - " +
                              endDate?.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "2-digit",
                              })
                            : ""}
                    </span>
                    <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                        {"Check in - Check out"}
                    </span>
                </div>
            </>
        );
    };
    const stepTwo = () => {
        if (!user_email) navigate("/login");
        if (yourTotal == 0) return;
        setStep(2);
    };
    const [selectedServices, setSelectedServices] = useState<any[]>([]);
    const [selectedDescriptions, setSelectedDescriptions] = useState<any[]>([]);
    const handleServiceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const exists = selectedServices.includes(Number(event.target.value));

        if (event.target.checked) {
            let newArr = selectedServices;
            newArr.push(Number(event.target.value));
            setSelectedServices(newArr);
        } else {
            let newArr = selectedServices;
            const index = selectedServices.indexOf(Number(event.target.value));

            if (index !== -1) {
                newArr.splice(index, 1);
                setSelectedServices(newArr);
            }
        }
    };
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const exists = selectedDescriptions.includes(
            Number(event.target.value)
        );

        if (event.target.checked) {
            let newArr = selectedDescriptions;
            newArr.push(Number(event.target.value));
            setSelectedDescriptions(newArr);
        } else {
            let newArr = selectedDescriptions;
            const index = selectedDescriptions.indexOf(
                Number(event.target.value)
            );

            if (index !== -1) {
                newArr.splice(index, 1);
                setSelectedDescriptions(newArr);
            }
        }
        console.log(selectedDescriptions);
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
                                Reserve Lab
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
                    <title>Submit Device for Certification</title>
                </Helmet>
                <div className="second_menu" style={{ marginTop: "30px" }}>
                    <header>
                        <div className="container">
                            <div id="lblHeader" className="inline ">
                                <nav>
                                    <ul className="inline flex justify-center">
                                        <li className="">
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="#"
                                            >
                                                Promo Code
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="#"
                                            >
                                                Special Offers
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/"
                                            >
                                                Cancel Reservation
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                </div>
                {step == 1 ? (
                    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-10">
                        <ol className="items-center sm:flex">
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Check availability and rates
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        2
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        3
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                        </ol>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                            <div>
                                <h2 className="font-semibold text-xl">
                                    Select your booking dates and address
                                </h2>
                                <p className="mb-10">
                                    Please select a departure date as the day
                                    after your testing ends
                                </p>
                                <h2 className="text-xl font-semibold text-red-600">
                                    CHOOSE THE LOCATION
                                </h2>
                                <Select
                                    className="mt-4"
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    {countries.map((country) => {
                                        return (
                                            <option>{country.country}</option>
                                        );
                                    })}
                                </Select>
                                <h2 className="text-xl font-semibold text-red-600 my-10">
                                    SELECT YOUR BOOKING DATES
                                </h2>

                                <Popover
                                    className={`StayDatesRangeInput z-10 relative flex ${className}`}
                                >
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`flex-1 z-10 flex relative items-center space-x-3 focus:outline-none ${
                                                    open
                                                        ? "nc-hero-field-focused"
                                                        : ""
                                                }`}
                                                // onClickCapture={() =>
                                                //     document
                                                //         .querySelector("html")
                                                //         ?.click()
                                                // }
                                            >
                                                {renderInput()}
                                                {startDate && open && (
                                                    <ClearDataButton
                                                        onClick={() =>
                                                            onChangeDate([
                                                                null,
                                                                null,
                                                            ])
                                                        }
                                                    />
                                                )}
                                            </Popover.Button>

                                            {/* {open && (
                                                <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white dark:bg-neutral-800"></div>
                                            )}

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/2 z-10 mt-3 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                                    <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-8">
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={
                                                                onChangeDate
                                                            }
                                                            startDate={
                                                                startDate
                                                            }
                                                            endDate={endDate}
                                                            selectsRange
                                                            monthsShown={2}
                                                            showPopperArrow={
                                                                false
                                                            }
                                                            inline
                                                            renderCustomHeader={(
                                                                p
                                                            ) => (
                                                                <DatePickerCustomHeaderTwoMonth
                                                                    {...p}
                                                                />
                                                            )}
                                                            renderDayContents={(
                                                                day,
                                                                date
                                                            ) => (
                                                                <DatePickerCustomDay
                                                                    dayOfMonth={
                                                                        day
                                                                    }
                                                                    date={date}
                                                                />
                                                            )}
                                                        />
                                                    </div>
                                                </Popover.Panel>
                                            </Transition> */}
                                        </>
                                    )}
                                </Popover>
                                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-8 mt-10">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={onChangeDate}
                                        startDate={startDate}
                                        endDate={endDate}
                                        selectsRange
                                        monthsShown={2}
                                        showPopperArrow={false}
                                        inline
                                        renderCustomHeader={(p) => (
                                            <DatePickerCustomHeaderTwoMonth
                                                {...p}
                                            />
                                        )}
                                        renderDayContents={(day, date) => (
                                            <DatePickerCustomDay
                                                dayOfMonth={day}
                                                date={date}
                                            />
                                        )}
                                    />
                                </div>
                                <h2 className="text-xl font-semibold text-red-600 my-8">
                                    SELECT YOUR BOOKING TIME
                                </h2>
                                <Select
                                    className="mt-4"
                                    onChange={(e) =>
                                        setBookingTime(e.target.value)
                                    }
                                >
                                    <option value="1">8AM to 5PM</option>
                                    <option value="2">8AM to 12:30PM</option>
                                    <option value="3">12:30PM to 5PM</option>
                                </Select>
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">
                                    Select your lab
                                </h2>
                                <p className="mb-10">
                                    Click on lab type to view the lab
                                    description, availability and rates
                                </p>
                                <div className="grid grid-cols-4 border-2 my-10 rounded-lg p-4">
                                    {labs.map((lab) => {
                                        return (
                                            <>
                                                <div
                                                    className={`col-span-3 ${
                                                        lab.id == selectedLab
                                                            ? "bg-red-300"
                                                            : ""
                                                    } p-2 rounded-md`}
                                                    onClick={() => {
                                                        setSelectedLab(lab.id);
                                                        setSelectedPrice(
                                                            lab.price
                                                        );
                                                        setSelectedLabName(
                                                            lab.firm_name
                                                        );
                                                    }}
                                                >
                                                    <p
                                                        className="font-bold text-xl text-wrap"
                                                        style={{
                                                            wordBreak:
                                                                "break-all",
                                                        }}
                                                    >
                                                        {lab.firm_name}
                                                    </p>
                                                    <p className="text-wrap font-medium text-lg italic">
                                                        {lab.city},{lab.country}
                                                    </p>
                                                </div>
                                                <div className="font-semibold text-xl text-right pt-4">
                                                    ${lab.price}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">
                                    Booking Summary
                                </h2>
                                <p className="mb-10">
                                    You can see here your booking summary
                                </p>
                                <div className="grid grid-cols-2 gap-3 border-2 rounded-lg p-4">
                                    <div className="font-semibold text-xl">
                                        Arrival Date:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {startDate?.toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "short",
                                                day: "2-digit",
                                            }
                                        ) || ""}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Departure Date:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {endDate?.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                        }) || ""}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Lab Type:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {selectedLabName}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Days:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {endDate != null && startDate != null
                                            ? differenceInDays(
                                                  endDate,
                                                  startDate
                                              ) == 0
                                                ? 1
                                                : differenceInDays(
                                                      endDate,
                                                      startDate
                                                  ) + " Days"
                                            : ""}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Labs:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        1
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Lab Total:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        ${yourTotal}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Lab Tax:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Plus Tax
                                    </div>
                                    <div className="font-semibold text-xl text-red-600">
                                        Your Total:
                                    </div>
                                    <div className="font-semibold text-xl text-red-600">
                                        ${yourTotal}
                                    </div>
                                    <div className="font-semibold col-span-2 text-xl mt-20">
                                        All prices in US dollars
                                    </div>
                                    <div className="font-semibold underline col-span-2 text-lg text-red-600">
                                        <NavLink
                                            to="https://www.xe.com/"
                                            target="_blank"
                                        >
                                            Use currency converter
                                        </NavLink>
                                    </div>
                                    <div className="col-span-2">
                                        <ButtonPrimary
                                            className="w-full"
                                            type="button"
                                            onClick={stepTwo}
                                        >
                                            Continue Online Reservation
                                        </ButtonPrimary>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : step == 2 ? (
                    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-10">
                        <ol className="items-center sm:flex">
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        1
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Please enter your consumer information
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        3
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                        </ol>
                        <div className="hidden grid lg:block grid-cols-3 gap-3">
                            <div>
                                <h2 className="font-semibold text-xl">
                                    I am a new cusomer
                                </h2>
                                <p className="mb-10">
                                    We value your privacy. We do not sell or
                                    rent names. View our Privacy Policy for more
                                    details.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">
                                    I am a returning customer
                                </h2>
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">
                                    Booking Summary
                                </h2>
                                <p className="mb-10">
                                    You can see here your booking summary
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                            <div className="col-span-2">
                                <h2 className="font-semibold text-xl">
                                    A. COMPANY INFORMATION
                                </h2>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Company Name"
                                            className="mt-4"
                                            value={company_name}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Short Business Description"
                                            className="mt-4"
                                            value={user_email ?? ""}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Company Contact's First Name"
                                            className="mt-4"
                                            value={company_contact_f_name}
                                            onChange={(e) =>
                                                setCompanyFirstName(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Company Contact's Last Name"
                                            className="mt-4"
                                            value={company_contact_l_name}
                                            onChange={(e) =>
                                                setCompanyLastName(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Input
                                            type="text"
                                            placeholder="Address"
                                            className="mt-4"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="City"
                                            className="mt-4"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Province State"
                                            className="mt-4"
                                            value={province_state}
                                            onChange={(e) =>
                                                setProvinceState(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Select
                                            onChange={(e) =>
                                                setReserveCountry(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {countries.map((country) => {
                                                return (
                                                    <option>
                                                        {country.country}
                                                    </option>
                                                );
                                            })}
                                        </Select>
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Zip Code"
                                            className="mt-4"
                                            value={zip_code}
                                            onChange={(e) =>
                                                setZipCode(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <h2 className="font-semibold text-xl">
                                    B. BOOKING CONTACT INFORMATION
                                </h2>
                                <p>
                                    A reservation confirmation email will be
                                    sent to this email address.
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Email Address"
                                            className="mt-4"
                                            value={booking_email}
                                            onChange={(e) =>
                                                setBookingEmail(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Fax Number"
                                            className="mt-4"
                                            value={booking_fax_number}
                                            onChange={(e) =>
                                                setFaxNumber(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Phone Number1"
                                            className="mt-4"
                                            value={booking_phone_one}
                                            onChange={(e) =>
                                                setPhone1(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Phone Number2"
                                            className="mt-4"
                                            value={booking_phone_two}
                                            onChange={(e) =>
                                                setPhone2(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <h2 className="font-semibold text-xl mt-10">
                                    C. LAB OPTIONS / PREFERENCES (OPTIONAL)
                                </h2>
                                <p>Check all that apply:</p>
                                <p>
                                    Additional product information and comments
                                    Please include product name, model number
                                    and any special requests you may have.
                                </p>
                                <h2>Testing service preference</h2>
                                <div className="border-2 rounded-xl p-6">
                                    {servicePreferences.map(
                                        (servicepreference) => {
                                            return (
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        value={
                                                            servicepreference.id
                                                        }
                                                        onChange={
                                                            handleServiceChange
                                                        }
                                                    />
                                                    {servicepreference.name}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <h2>Product Description</h2>
                                <div className="border-2 rounded-xl p-6">
                                    {productDescriptions.map(
                                        (productDescription) => {
                                            return (
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        value={
                                                            productDescription.id
                                                        }
                                                        onChange={
                                                            handleDescriptionChange
                                                        }
                                                    />
                                                    {productDescription.name}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    className="mt-4"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />

                                <h2 className="font-semibold text-xl mt-10">
                                    D. RESERVATION GUARANTEE
                                </h2>
                                <p>Booking / Cancellation:</p>
                                <Input
                                    type="text"
                                    placeholder="Reservation Email"
                                    className="mt-4"
                                    value={reservation_email}
                                    onChange={(e) =>
                                        setReservationEmail(e.target.value)
                                    }
                                />
                                <p>
                                    Cancellations must be made three business
                                    days in advance of the planned start date of
                                    testing to avoid late charges of 10%, 25%,
                                    and 40% of value of the booking per day past
                                    the three business day period. Partial
                                    cancellation of a scheduled booking will
                                    incur lesser charges than a full
                                    cancellation, pro-rated based on canceled
                                    schedule.
                                </p>
                                <p>
                                    {" "}
                                    Bookings are to be made at the website,
                                    www.testlabquote.com or by phone with a
                                    representative at 973-348-9011 preferably
                                    two weeks or greater in advance of start
                                    date of testing bu no later than three days
                                    before the planned start date.
                                </p>
                                <h2>
                                    The guaranteed reservation is: ${yourTotal}
                                </h2>
                                <p>
                                    *Credit Card information is not required if
                                    a purchase order was used
                                </p>
                                <p>Choose the way of payment</p>
                                <ButtonPrimary
                                    onClick={() => setStep(3)}
                                    type="button"
                                >
                                    Complete Reservation
                                </ButtonPrimary>
                            </div>

                            <div>
                                <h2 className="font-semibold text-xl text-red-700">
                                    PRE-CERTIFICATION PRODUCT TESTING
                                </h2>

                                <div className="grid grid-cols-2 gap-3 border-2 rounded-lg p-4">
                                    <div className="font-semibold text-xl">
                                        Arrival Date:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {startDate?.toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "short",
                                                day: "2-digit",
                                            }
                                        ) || ""}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Departure Date:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {endDate?.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                        }) || ""}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Lab Type:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {selectedLabName}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Days:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {endDate != null && startDate != null
                                            ? differenceInDays(
                                                  endDate,
                                                  startDate
                                              ) == 0
                                                ? 1
                                                : differenceInDays(
                                                      endDate,
                                                      startDate
                                                  ) + " Days"
                                            : ""}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Labs:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        1
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Lab Total:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        {yourTotal}
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Lab Tax:
                                    </div>
                                    <div className="font-semibold text-xl">
                                        Plus Tax
                                    </div>
                                    <div className="font-semibold text-xl text-red-600">
                                        Your Total:
                                    </div>
                                    <div className="font-semibold text-xl text-red-600">
                                        {yourTotal}
                                    </div>
                                    <div className="font-semibold col-span-2 text-xl mt-20">
                                        All prices in US dollars
                                    </div>
                                    <div className="font-semibold underline col-span-2 text-lg text-red-600">
                                        <NavLink
                                            to="https://www.xe.com/"
                                            target="_blank"
                                        >
                                            Use currency converter
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-10">
                        <ol className="items-center sm:flex">
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        1
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        2
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 min-w-[400px]">
                                <div className="mt-3 sm:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Complete
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <div className=" sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                        </ol>
                        <OrderSummary amount={yourTotal} paydone={paydone} />
                    </div>
                )}
            </div>
        </>
    );
};

export default ReserveLab;
