import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./submitrfq.css";
import rightImg from "images/custom/device-diagram.jpg";
import listImage from "images/custom/list-marker.png";

export interface ModulesProps {
    className?: string;
}

const Modules: FC<ModulesProps> = ({ className = "" }) => {
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
                <div
                    id="ContentPlaceHolder1_lblSection"
                    className="mt-10"
                    role="banner"
                >
                    <section
                        role="banner"
                        className="outer_banner modulePagebanner"
                    >
                        <div className="container">
                            <div className="banner_wrap">
                                <div className="ban_table">
                                    <div className="ban_content">
                                        <div>
                                            <h1
                                                className="fs20"
                                                style={{ paddingTop: "0px" }}
                                            >
                                                What is Inside Your Device?
                                            </h1>
                                            <p>
                                                Choosing the right module for
                                                your Testlabhub device can be
                                                the difference between an
                                                incredible user experience, or
                                                an uncertain one. AT&amp;T
                                                provides you with resources to
                                                make the best decision on a
                                                module for your specific
                                                <span>&nbsp;</span>
                                                <g
                                                    className="gr_ gr_37 gr-alert gr_gramm gr_inline_cards gr_run_anim Punctuation only-del replaceWithoutSep"
                                                    id="37"
                                                    data-gr-id="37"
                                                >
                                                    project,
                                                </g>
                                                <span>&nbsp;</span>while
                                                ensuring network compatibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="body_wrap" role="main">
                        <div className="container">
                            <div
                                className="zigzag_wrap wireles_comnctn_wrap"
                                style={{ padding: "60px 0px" }}
                            >
                                <div className="imgry_wrap">
                                    <img
                                        src="https://testlabhub.com/rfq/device-wireless-rf.jpg"
                                        alt="The Basics"
                                        style={{ maxWidth: "405px" }}
                                    />
                                </div>
                                <div className="info_wrap">
                                    <h2 className="fs24">
                                        The most critical aspect at the heart of
                                        any Testlabhub device is its wireless
                                        (RF) communication capability.
                                    </h2>
                                    <p>
                                        In choosing an AT&amp;T Approved Module,
                                        developers must consider the ability or
                                        need to handle:
                                    </p>
                                    <ul
                                        className="points"
                                        style={{ marginLeft: "0px" }}
                                    >
                                        <li>
                                            Network transitions and varying
                                            radio conditions
                                        </li>
                                        <li>Latency</li>
                                        <li>
                                            Authentication and network security
                                        </li>
                                        <li>
                                            Transitions from data-only to
                                            data/voice
                                        </li>
                                        <li>
                                            Battery consumption and battery
                                            usage needs
                                        </li>
                                        <li>
                                            Resending of service requests
                                            following a request rejection or
                                            <span>&nbsp;</span>
                                            <g
                                                className="gr_ gr_36 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling ins-del multiReplace"
                                                id="36"
                                                data-gr-id="36"
                                            >
                                                denial
                                            </g>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-20" />
                            <div className="take_advntg_section">
                                <h2 className="fs24">
                                    Take Advantage of AT&amp;T Resources to Make
                                    the Best Decisions on Your Module.
                                </h2>
                                <ul className="widicons_list twocol">
                                    <li className="module_icon1">
                                        <p>
                                            Choosing a module from the{" "}
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="#"
                                            >
                                                AT&amp;T Module Catalog
                                            </NavLink>{" "}
                                            saves time, while assuring ongoing
                                            network compatibility. See our{" "}
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="#"
                                            >
                                                AT&amp;T Testlabhub Technology
                                                Roadmap.
                                            </NavLink>
                                        </p>
                                    </li>
                                    <li className="module_icon2">
                                        <p>
                                            If you’re a module developer,
                                            AT&amp;T’s ADAPT program is the fast
                                            track to certification of newly
                                            developed LTE-capable chipsets. Find
                                            our list of chipsets under the
                                            <span>
                                                &nbsp;
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="#"
                                                >
                                                    ADAPT&nbsp;
                                                </NavLink>
                                            </span>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 inline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="#"
                                            >
                                                chipset tab on the module
                                                catalog
                                            </NavLink>
                                        </p>
                                    </li>
                                    <li className="module_icon3">
                                        <p>
                                            AT&amp;T’s{" "}
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 inline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="#"
                                            >
                                                Testlabhub Accelerator Program
                                            </NavLink>{" "}
                                            is the most efficient way to
                                            accelerate Testlabhub device
                                            development; and implementation is
                                            through a selection of low-cost,
                                            <span>&nbsp;</span>
                                            <g
                                                className="gr_ gr_38 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling multiReplace"
                                                id="38"
                                                data-gr-id="38"
                                            >
                                                high performance
                                            </g>
                                            <span>&nbsp;</span>modules. AT&amp;T
                                            has made it quick, easy and
                                            economical to obtain these modules
                                            by offering them through key
                                            suppliers for as low as $7.50 each.
                                            Nobody accelerates Testlabhub like
                                            AT&amp;T.
                                        </p>
                                        <p>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 inline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="#"
                                            >
                                                <img
                                                    src="https://testlabhub.com/images/logo.png"
                                                    alt="adsf"
                                                    width="100%"
                                                    style={{
                                                        maxWidth: "350px",
                                                    }}
                                                />
                                            </NavLink>
                                        </p>
                                    </li>
                                    <li className="module_icon4">
                                        <p>
                                            The final step in the development
                                            process is testing and
                                            certification. Go to
                                            <span>&nbsp;</span>
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 inline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="#"
                                            >
                                                <g
                                                    className="gr_ gr_34 gr-alert gr_gramm gr_inline_cards gr_run_anim Grammar multiReplace"
                                                    id="34"
                                                    data-gr-id="34"
                                                >
                                                    Get
                                                </g>
                                                <span>&nbsp;</span>Get Network
                                                Ready
                                            </NavLink>
                                            <span>&nbsp;</span>to learn about
                                            the simple steps required to get a
                                            device certified.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-20" />
                            <div
                                className="zigzag_wrap wireles_comnctn_wrap"
                                id="ChipsetDesign"
                            >
                                <div className="info_wrap">
                                    <h2 className="fs24">
                                        A Word of Caution Regarding Chipset
                                        Design.
                                    </h2>
                                    <p className="mgn-top30">
                                        <span>
                                            Chipsets are the building blocks for
                                            every wireless device but building a
                                            wireless radio at the chipset level
                                            is difficult and costly.&nbsp; Every
                                            AT&amp;T Approved module contains an
                                            AT&amp;T Validated chipset at its
                                            core.&nbsp;&nbsp; Rather than
                                            attempt to design your own chipset
                                            based device design, and pay a
                                            $50,000 fee for AT&amp;T to ensure
                                            that it works on our network (and
                                            additional 3rd party charges to
                                            achieve certification), we encourage
                                            you to use an existing
                                            AT&amp;T&nbsp;
                                        </span>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 inline font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="#"
                                        >
                                            approved module
                                        </NavLink>
                                    </p>
                                </div>
                                <div
                                    className="imgry_wrap"
                                    style={{ textAlign: "center" }}
                                >
                                    <img
                                        style={{ maxWidth: "294px" }}
                                        src="https://testlabhub.com/images/logo.png"
                                        alt="Validated Chipset"
                                        width="294"
                                        height="253"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Modules;
