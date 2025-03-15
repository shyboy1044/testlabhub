import React, { FC, KeyboardEvent } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right.png";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export interface SectionHeroProps {
    className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const onSubmit = () => {
        if (name == "" || email == "" || message == "") {
            toast("Please fill all fields!.");
            return;
        }
        let data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("message", message);
        fetch(process.env.REACT_APP_API_URL + "/sendmail/send", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    toast("Contact sent successfully!.");
                })
            )
            .catch((err) => console.log(err));
    };
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (searchTerm == "") return;
            navigate(`/home-search?q=${searchTerm}`);
        }
    };
    return (
        <div
            className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
            data-nc-id="SectionHero"
        >
            <ToastContainer />
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="flex-shrink-0 lg:w-3/5 flex flex-col items-start space-y-8 sm:space-y-10 pb-14  xl:pr-14 lg:mr-10 xl:mr-0">
                    <h2 className="font-medium text-4xl text-white md:text-5xl xl:text-7xl !leading-[114%] ">
                        A smarter way to product compliance
                    </h2>
                    <span className="text-base md:text-lg text-white dark:text-neutral-400">
                        Testlabhub facilitates compliance testing services and
                        complementary solutions for technology manufacturers to
                        achieve and maintain legal marketing of their products
                        globally. Simply put, we help make pre- and post-market
                        compliance steps that product manufacturers’ need or
                        want, successful.
                    </span>
                    <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Find Certification Information with Product iQ"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="flex-grow">
                    <div className="p-5 rounded-xl bg-white dark:bg-gray-700">
                        <h2 className="my-8 sm:my-10 flex items-center text-2xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-[#700203] dark:text-neutral-100 justify-center">
                            Contact Form
                        </h2>
                        <form className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <Label>Full name</Label>

                                <Input
                                    placeholder="Example Doe"
                                    type="text"
                                    className="mt-1"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label className="block">
                                <Label>Email address</Label>

                                <Input
                                    type="email"
                                    placeholder="example@example.com"
                                    className="mt-1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label className="block">
                                <Label>Message</Label>

                                <Textarea
                                    className="mt-1"
                                    rows={6}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </label>
                            <div>
                                <ButtonPrimary
                                    className="bg-red-800 w-full dark:bg-orange-500"
                                    type="button"
                                    onClick={onSubmit}
                                >
                                    Send Message
                                </ButtonPrimary>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default SectionHero;
