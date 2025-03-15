import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./submitrfq.css";
import rightImg from "images/custom/device-diagram.jpg";
import listImage from "images/custom/list-marker.png";

export interface SubmitRfqProps {
    className?: string;
}

const SubmitRfq: FC<SubmitRfqProps> = ({ className = "" }) => {
    return (
        <>
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
                                <nav className="overflow-auto ">
                                    <ul className="inline flex justify-center w-fit">
                                        <li className="">
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/submit-rfq"
                                            >
                                                Basics
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/submit-rfq/devices"
                                            >
                                                Devices
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/submit-rfq/modules"
                                            >
                                                Modules
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 w-max text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/submit-rfq/get-certified"
                                            >
                                                Get Certified
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/lab-reservation/faqs"
                                            >
                                                FAQ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                to="/contact-us"
                                            >
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-10">
                    <div className="row">
                        <div className="container">
                            <div
                                role="banner"
                                className="outer_banner basicbanner"
                            >
                                <div
                                    className="container"
                                    style={{
                                        backgroundImage:
                                            "url(https://testlabhub.com/images/submitrfq/header-become-reference.jpg)",
                                        height: "400px",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    <div className=" banner_wrap">
                                        <div className="ban_table">
                                            <div className="ban_content">
                                                <div>
                                                    <h1>The Basics</h1>
                                                    <p>
                                                        The term “Internet of
                                                        Things” (IoT) came about
                                                        as a means of
                                                        distinguishing
                                                        device-to-device and
                                                        device-to-human
                                                        communication from
                                                        human-to-human
                                                        interaction. At its
                                                        basic level, an IoT
                                                        network involves sensing
                                                        equipment used for
                                                        monitoring conditions at
                                                        a remote location. These
                                                        range from
                                                        municipalities that have
                                                        replaced hardwired
                                                        traffic signal controls
                                                        with cloud-based IoT
                                                        networks to a consumer
                                                        using a connected
                                                        smartwatch to a business
                                                        operator monitoring a
                                                        warehouse location’s
                                                        thermostat remotely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="zigzag_wrap withouticon non-keyboard-outline"
                                style={{ marginTop: "60px" }}
                            >
                                <div className="info_wrap">
                                    <div className="fs24 underline font-semibold text-red-800 text-lg">
                                        <u>Devices Defined</u>
                                    </div>
                                    <p>
                                        AT&amp;T has worked with and evaluated
                                        thousands of devices, modules and
                                        chipsets, so chances are our team can
                                        recommend an existing device that will
                                        meet your requirements. If you are
                                        considering a custom-built device as a
                                        means of addressing cost or capability
                                        requirements, we can provide
                                        recommendations and guidance to industry
                                        resources that will assist you with
                                        concept, module selection and chipset
                                        selection.
                                    </p>
                                    <ul className="widicons_list">
                                        <li>
                                            <h3 className="fs18 text-red-700 text-md">
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="/submit-rfq/devices"
                                                >
                                                    Devices
                                                </NavLink>
                                            </h3>
                                            <p>
                                                In the world of Telcton, the
                                                term "device" specifically
                                                refers to the equipment that
                                                provides monitoring or control
                                                capability.
                                            </p>
                                        </li>
                                        <li>
                                            <h3 className="fs18 text-red-700 text-md">
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="/submit-rfq/modules"
                                                >
                                                    Modules
                                                </NavLink>
                                            </h3>
                                            <p>
                                                Wireless communication between
                                                devices and the cloud, or
                                                dedicated network, is handled by
                                                a radio frequency (RF) module
                                                that is typically included on
                                                commercially available devices.
                                            </p>
                                        </li>
                                        <li>
                                            <h3 className="fs18 text-red-700 text-md">
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 text-lg font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="/submit-rfq/get-certified"
                                                >
                                                    Get Certified
                                                </NavLink>
                                            </h3>
                                            <p>
                                                Get Certified labs are crucial
                                                for various testing and
                                                experimentation processes, as
                                                they provide standardized
                                                environments and equipment to
                                                ensure accurate and reliable
                                                results. Having access to labs
                                                can be essential for research,
                                                development, quality control,
                                                and regulatory compliance.
                                            </p>
                                        </li>
                                        <li>
                                            <h3 className="fs18 text-red-700 text-md">
                                                <u>Chipsets</u>{" "}
                                            </h3>
                                            <p>
                                                Much like a module, wireless
                                                communication between devices
                                                and the cloud, or dedicated
                                                network, is handled also by a
                                                radio frequency (RF) chipset
                                                that is typically included on
                                                commercially available devices.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="imgry_wrap">
                                    <img
                                        style={{ maxWidth: "284px" }}
                                        src={rightImg}
                                        alt="device_diagram"
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="why_certify_section">
                                <h2 className="fs24 underline font-semibold text-red-800 text-lg">
                                    <u>Why Get Network Ready with AT&amp;T</u>
                                </h2>
                                <p style={{ textAlign: "justify" }}>
                                    Our AT&amp;T Network Ready team helps you
                                    navigate your device through the AT&amp;T
                                    process to become network ready and ensure
                                    your data is ready for network operation. We
                                    have proven technology partners to assist
                                    you with device needs, as well as a team to
                                    help you work through best practices and
                                    each step of the AT&amp;T certification
                                    process.
                                </p>
                                <div className="images_section">
                                    <div className="imgtwo_col">
                                        <div className="colmn">
                                            <div
                                                className="center_cntnt_wrap !w-full lg:!w-[580px]"
                                                style={{
                                                    backgroundImage:
                                                        "url(https://testlabhub.com/images/submitrfq/3rdPartyLabs.jpeg)",
                                                }}
                                            >
                                                <h4 className="fs18 text-md">
                                                    3rd Party Labs &amp;
                                                    Resources
                                                </h4>
                                                <p>
                                                    AT&amp;T works with various
                                                    labs to help our device
                                                    partners efficiently become
                                                    Network Ready, offering
                                                    PTCRB, Telcron Network
                                                    Certified &amp; FCC
                                                    certification and guidance
                                                    for antennas. Click for a
                                                    list of labs offering
                                                    PTCRB/INC certification
                                                    services.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="colmn">
                                            <div
                                                className="center_cntnt_wrap !w-full lg:!w-[580px]"
                                                style={{
                                                    backgroundImage:
                                                        "url(https://testlabhub.com/images/submitrfq/Chipset.jpg)",
                                                    color: "#fff",
                                                }}
                                            >
                                                <h4 className="fs18 text-md">
                                                    Telcron Data Plans
                                                </h4>
                                                <p>
                                                    Being AT&amp;T Network Ready
                                                    will also help with your
                                                    connectivity plan. For
                                                    specific plan information
                                                    visit our Telcron Data Plans
                                                    site.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                backgroundImage:
                                                    "url(https://testlabhub.com/images/submitrfq/roadMap.jpg)",
                                                backgroundSize: "cover",
                                                color: "#fff",
                                                width: "1172px",
                                                height: "500px",
                                                textAlign: "center",
                                            }}
                                            className="!w-full lg:!w-1182px"
                                        >
                                            Technology Roadmap With the advent
                                            of LTE-M, there’s a significant
                                            decrease in cost available to device
                                            developers.
                                            <br />
                                            Click here to view our Technology
                                            Roadmap - our perspective on where
                                            technology is heading.
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

export default SubmitRfq;
