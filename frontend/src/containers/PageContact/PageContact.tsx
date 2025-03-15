import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export interface PageContactProps {
    className?: string;
}

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
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
                <title>Contact Us</title>
            </Helmet>
            <ToastContainer />
            <div className="mx-auto">
                <section className="mb-32">
                    <div
                        className={`relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://testlabhub.com/images/submitrfq/contact-banner.jpg')]`}
                    >
                        <div className="max-w-3xl m-auto mt-10">
                            <div className="text-white text-3xl text-center">
                                Contact the Testlabhub IoT Devices Team
                            </div>
                            <div className="text-white text-center p-4">
                                Do you need specific information to help achieve
                                certification for your unique device, module or
                                chipset? Contact the Testlabhub IoT Devices
                                team. We are highly experienced in analyzing
                                challenges and recommending the best solutions.
                            </div>
                        </div>
                    </div>
                    <div className="container px-6 md:px-12">
                        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 sm:-mt-[100px] backdrop-blur-[30px] max-w-4xl m-auto">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6">
                                    <form className="grid lg:grid-cols-2 gap-2 mt-8 sm:grid-cols-1">
                                        <label className="block">
                                            <Label>First Name</Label>

                                            <Input
                                                placeholder="John"
                                                type="text"
                                                className="mt-1"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                            />
                                        </label>
                                        <label className="block">
                                            <Label>Last Name</Label>

                                            <Input
                                                placeholder="Doe"
                                                type="text"
                                                className="mt-1"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        </label>
                                        <label className="block">
                                            <Label>Email address</Label>

                                            <Input
                                                type="email"
                                                placeholder="example@example.com"
                                                className="mt-1"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </label>
                                        <label className="block">
                                            <Label>Phone</Label>

                                            <Input
                                                type="text"
                                                placeholder="+123456789"
                                                className="mt-1"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                            />
                                        </label>
                                    </form>
                                    <div>
                                        <label className="block mt-5">
                                            <Label>Company name</Label>

                                            <Input
                                                type="text"
                                                placeholder=""
                                                className="mt-1"
                                                value={company}
                                                onChange={(e) =>
                                                    setCompany(e.target.value)
                                                }
                                            />
                                        </label>
                                        <label className="block w-full mt-5">
                                            <Label>Comments</Label>

                                            <Textarea
                                                className="mt-1"
                                                rows={6}
                                                value={comment}
                                                onChange={(e) =>
                                                    setComment(e.target.value)
                                                }
                                            />
                                        </label>
                                        <div>
                                            <ButtonPrimary
                                                className="mt-5 text-right"
                                                onClick={onSubmit}
                                            >
                                                Contact Us
                                            </ButtonPrimary>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PageContact;
