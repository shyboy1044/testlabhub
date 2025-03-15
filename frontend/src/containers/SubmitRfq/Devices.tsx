import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./submitrfq.css";
import rightImg from "device-diagram.jpg";
import listImage from "list-marker.png";

export interface DevicesProps {
    className?: string;
}

const Devices: FC<DevicesProps> = ({ className = "" }) => {
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
                        <div id="ContentPlaceHolder1_lblSection" role="banner">
                            <section
                                role="banner"
                                className="outer_banner devicePagebanner"
                            >
                                <div className="container">
                                    <div className="banner_wrap">
                                        <div className="ban_table">
                                            <div className="ban_content">
                                                <h1
                                                    className="fs20"
                                                    style={{
                                                        paddingTop: "0px",
                                                    }}
                                                >
                                                    Do you have an idea for a
                                                    Device?
                                                </h1>
                                                <p>
                                                    While being “first to
                                                    market” or solving a need by
                                                    custom building a device is
                                                    the goal of many developers
                                                    and companies, there are
                                                    many PROVEN, ADAPTABLE
                                                    devices ALREADY available
                                                    that can be customized to
                                                    meet your needs at a much
                                                    lower cost. Below are some
                                                    tips and links to help you
                                                    FIND a device to fit your
                                                    needs and then get CERTIFIED
                                                    and CONNECTED on the
                                                    AT&amp;T Network.
                                                </p>
                                                <p className="ban_icon_wrap">
                                                    <img
                                                        src="https://testlabhub.com/rfq/icon/device-ban-icon1.png"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="https://testlabhub.com/rfq/icon/device-ban-icon2.png"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="https://testlabhub.com/rfq/icon/device-ban-icon3.png"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="https://testlabhub.com/rfq/icon/device-ban-icon4.png"
                                                        alt=""
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                className="blue_strip yellow"
                                style={{
                                    padding: "6px 20px 4px",
                                    lineHeight: "28px",
                                }}
                                id="buy"
                            >
                                <div className="container txt_lft">
                                    <h2 className="fs24 text-lg font-semibold">
                                        Existing Certified Devices Save Time and
                                        Money
                                    </h2>
                                </div>
                            </section>
                            <section className="body_wrap grey_background newDevices">
                                <div className="container">
                                    <div className="zigzag_wrap">
                                        <div className="imgry_wrap">
                                            <img
                                                style={{ maxWidth: "270px" }}
                                                src="https://testlabhub.com/rfq/review-deviceThumb.jpg"
                                                alt="Review a complete listing of AT&amp;T Certified Testlabhub Device."
                                            />
                                        </div>
                                        <div className="info_wrap">
                                            <div className="deviceThumbR thumb1"></div>
                                            <h2 className="fs24 text-lg font-semibold">
                                                Review a complete listing of
                                                AT&amp;T Certified Testlabhub
                                                Devices.
                                            </h2>
                                            <div className="clear"></div>
                                            <p>
                                                Each device in our{" "}
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="#"
                                                >
                                                    AT&amp;T Certified Devices
                                                    list
                                                </NavLink>
                                                shows you manufacturer, device
                                                type, frequency bands and
                                                technology platform to help you
                                                verify that an existing device
                                                could meet your needs. You can
                                                then contact the manufacturer
                                                and determine if this is the
                                                best path for you.
                                            </p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="zigzag_wrap">
                                        <div className="imgry_wrap">
                                            <img
                                                style={{ maxWidth: "270px" }}
                                                src="https://testlabhub.com/rfq/find-deviceThumb.jpg"
                                                alt="Find a certified device for your Solution in the AT&amp;T Testlabhub Device Catalog."
                                            />
                                        </div>
                                        <div className="info_wrap">
                                            <h2 className="fs24 text-lg font-semibold">
                                                Find a certified device for your
                                                solution in the AT&amp;T
                                                Testlabhub Device Catalog.
                                            </h2>
                                            <div className="deviceThumbR thumb2"></div>
                                            <p>
                                                Several of the{" "}
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="#"
                                                >
                                                    devices in our catalog
                                                </NavLink>{" "}
                                                are likely to meet your needs —
                                                with minimal time and effort
                                                required to customize to your
                                                specific solution. Search by
                                                use-case to help you save time
                                                and money, while accelerating
                                                your development. Best of all,
                                                these devices are pre-certified
                                                for the AT&amp;T Network!
                                            </p>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="zigzag_wrap">
                                        <div className="imgry_wrap">
                                            <img
                                                style={{ maxWidth: "270px" }}
                                                src="https://testlabhub.com/rfq/ramp-marketplaceThumb.jpg"
                                                alt="Ramp up quickly with the Testlabhub marketplace."
                                            />
                                        </div>
                                        <div className="info_wrap">
                                            <div className="deviceThumbR thumb3"></div>
                                            <h2 className="fs24 text-lg font-semibold">
                                                Ramp up quickly with the
                                                Testlabhub Marketplace.
                                            </h2>
                                            <div className="clear"></div>
                                            <p>
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="#"
                                                >
                                                    The Testlabhub Marketplace
                                                </NavLink>
                                                &nbsp;is a great starting point
                                                for your Testlabhub solution
                                                where you can purchase starter
                                                kits, certified devices, and
                                                Testlabhub data plans to meet
                                                your Testlabhub solution needs.
                                            </p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </section>
                            <section
                                className="blue_strip yellow"
                                style={{
                                    padding: "6px 20px 4px",
                                    lineHeight: "28px",
                                }}
                                id="build"
                            >
                                <div className="container txt_lft">
                                    <h2 className="fs24 text-lg font-semibold">
                                        Device Developers can Benefit from
                                        Partnerships and Pricing Considerations
                                    </h2>
                                </div>
                            </section>
                            <section
                                className="body_wrap newDevices cjChart"
                                role="main"
                            >
                                <div className="container">
                                    <div className="zigzag_wrap">
                                        <div className="imgry_wrap">
                                            <img
                                                style={{ maxWidth: "350px" }}
                                                src="https://testlabhub.com/rfq/ownChipsetThumb.jpg"
                                                alt="Build your own design with a Module or Chipset."
                                            />
                                        </div>
                                        <div className="info_wrap">
                                            <h2 className="fs24 text-lg font-semibold">
                                                Build your own design
                                            </h2>
                                            <p>
                                                If you prefer to build your own
                                                device, keep in mind a few of
                                                these potential problems that
                                                you should address during
                                                design:
                                            </p>
                                            <div className="deviceThumbR thumb5"></div>
                                            <ul className="widicons_list_sub">
                                                <li>impedance mismatches</li>
                                                <li>
                                                    internal noise from data
                                                    clocks or other components
                                                </li>
                                                <li>
                                                    electromagnetic interference
                                                </li>
                                                <li>
                                                    SIM/UICC form factor
                                                    selection
                                                </li>
                                                <li>
                                                    wireless performance
                                                    requirements
                                                </li>
                                            </ul>
                                            <div className="clear"></div>
                                            <p>
                                                Failure to consider issues like
                                                these could necessitate hardware
                                                changes — causing increases in
                                                development costs and time.
                                                Reference the Cost Justification
                                                Chart below to consider volume,
                                                the costs and the complexity of
                                                Module and Chipset
                                                Designs.&nbsp;
                                            </p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="network-chart">
                                        <img
                                            src="https://testlabhub.com/rfq/cost_justification_chart_8.20.17_20170821010543878.jpg"
                                            width="1082"
                                            style={{
                                                margin: "0 auto!important",
                                            }}
                                            height="395"
                                            alt=""
                                        />
                                    </div>
                                    <div className="zigzag_wrap">
                                        <div
                                            className="imgry_wrap"
                                            style={{
                                                float: "none",
                                                verticalAlign: "middle",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    maxWidth: "250px",
                                                    margin: "0 auto!important",
                                                }}
                                                src="https://testlabhub.com/rfq/device-wireless-rf.jpg"
                                                alt="Find the right module for your needs."
                                            />
                                        </div>
                                        <div
                                            className="info_wrap"
                                            style={{
                                                float: "none",
                                                verticalAlign: "middle",
                                            }}
                                        >
                                            <h2 className="fs24 text-lg font-semibold">
                                                Find the right module for your
                                                needs.
                                            </h2>
                                            <div className="clear"></div>
                                            <p>
                                                For chipset-based device
                                                designs, there is a
                                                $50,000&nbsp;fee for AT&amp;T to
                                                ensure that it works on our
                                                network along with additional
                                                3rd party lab charges to achieve
                                                certification. Choosing an
                                                existing, AT&amp;T approved
                                                module from our&nbsp;
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="#"
                                                >
                                                    AT&amp;T Module Catalogv
                                                </NavLink>{" "}
                                                saves time and money while
                                                ensuring ongoing network
                                                compatibility.
                                            </p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="zigzag_wrap">
                                        <div className="imgry_wrap">
                                            <img
                                                src="https://testlabhub.com/images/logo.png"
                                                alt="The Testlabhub Accelerator speeds your time to market"
                                                style={{ maxWidth: "350px" }}
                                            />
                                        </div>
                                        <div className="info_wrap">
                                            <h2 className="fs24 text-lg font-semibold">
                                                The Testlabhub Accelerator
                                                speeds your time to market
                                            </h2>
                                            <div className="clear"></div>
                                            <p>
                                                The Testlabhub Accelerator
                                                program provides you with
                                                pre-certified low-cost,{" "}
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="#"
                                                >
                                                    high performance LTE modules
                                                </NavLink>{" "}
                                                to get you started quickly. You
                                                will also find simple and
                                                affordable{" "}
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="#"
                                                >
                                                    INC options for
                                                    certification
                                                </NavLink>
                                                .
                                            </p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="zigzag_wrap">
                                        <div className="imgry_wrap">
                                            <img
                                                style={{ maxWidth: "350px" }}
                                                src="https://testlabhub.com/rfq/provenPartnersThumb.jpg"
                                                alt="Work with our proven partners to get the job done right."
                                            />
                                        </div>
                                        <div className="info_wrap">
                                            <div className="deviceThumbR thumb6"></div>
                                            <h2 className="fs24 text-lg font-semibold">
                                                Work with our proven partners to
                                                get the job done right.
                                            </h2>
                                            <div className="clear"></div>
                                            <p>
                                                AT&amp;T Approved Partners are
                                                available to help increase your
                                                chance of success in designing
                                                your new Testlabhub device.
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 underline  font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                    to="/about/our-partners"
                                                >
                                                    Visit our Partners Page
                                                </NavLink>{" "}
                                                to select the type of assistance
                                                you need including device
                                                certification, hardware/software
                                                design, as well as manufacturing
                                                services and connect with proven
                                                professionals.
                                                <br />
                                                <br />
                                            </p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Devices;
