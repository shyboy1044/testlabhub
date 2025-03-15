import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { NavLink } from "react-router-dom";
import "./submitrfq.css";

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
                <div
                    className="second_menu"
                    style={{ marginTop: "30px", marginBottom: "30px" }}
                >
                    <header>
                        <div className="container">
                            <div id="lblHeader" className="inline ">
                                <nav className="overflow-auto">
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
                                                className="ms-1 text-lg w-max font-semibold px-5 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
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
                <span id="ContentPlaceHolder1_lblSection">
                    <section
                        role="banner"
                        className="outer_banner netwrk_readybanner"
                    >
                        <div className="container">
                            <div className="banner_wrap">
                                <div className="ban_table">
                                    <div className="ban_content">
                                        <div>
                                            <h1
                                                className="fs20"
                                                id="mcetoc_1g0fgflhp0"
                                            >
                                                Testlabhub Certification Gets
                                                You Network Ready
                                            </h1>
                                            <p className="justify">
                                                Testlabhub’s "Get Network Ready"
                                                program includes a simple
                                                process that assures your
                                                data-only or data-with-voice
                                                device is ready for network
                                                operation. This is an important
                                                step towards achieving maximum
                                                connectivity performance and
                                                reducing or eliminating costly
                                                after-the-fact redesign
                                                <g
                                                    className="gr_ gr_93 gr-alert gr_gramm gr_inline_cards gr_run_anim Style replaceWithoutSep"
                                                    id="93"
                                                    data-gr-id="93"
                                                >
                                                    .
                                                </g>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="body_wrap" role="main">
                        <div className="container netwrk_ready mt-10">
                            <div className="zigzag_wrap">
                                <div className="info_wrap">
                                    <h2 className="fs24" id="mcetoc_1g0fgflhp1">
                                        Testlabhub&nbsp; Certification is Simple
                                    </h2>
                                    <p className="justify">
                                        <span>
                                            If your device uses an&nbsp;
                                        </span>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="http://www.att.com/modules"
                                        >
                                            Testlabhub Approved Module
                                        </NavLink>
                                        &nbsp;
                                        <span>
                                            take the actions below
                                            simultaneously to initiate the
                                            Network Ready process. It’s possible
                                            that your device may&nbsp;
                                        </span>
                                        <em>already</em>
                                        <span>
                                            &nbsp;be certified, and does not
                                            require network ready testing.
                                            Review this list of&nbsp;
                                        </span>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="/certified-devices.aspx"
                                        >
                                            Testlabhub Certified Devices
                                        </NavLink>
                                        <span>
                                            &nbsp;to find out if your device is
                                            already certified.&nbsp;
                                        </span>
                                        <strong>
                                            We only certify devices based on 5G
                                            NR, LTE, LTE-M, and NB Testlabhub
                                            technologies.
                                        </strong>
                                        <span>
                                            &nbsp;In addition, there are&nbsp;
                                        </span>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="#mcetoc_1beomg97b17"
                                        >
                                            a few devices listed here
                                        </NavLink>
                                        <span>
                                            &nbsp;that you can not currently
                                            test on your own.&nbsp;You may find
                                            it helpful to&nbsp;
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="..\Uploaded_Docs\get_certified_checklist_20190111070751200.pdf"
                                            >
                                                download&nbsp;
                                            </NavLink>
                                            our checklist for Testlabhub Network
                                            Ready Certification as a PDF.
                                            <br /> <br /> <br />{" "}
                                        </span>
                                    </p>
                                    <ul className="widicons_list">
                                        <ul className="widicons_list">
                                            <li className="checkmark_icon !pl-0 lg:!pl-10">
                                                <h3
                                                    className="fs18"
                                                    id="mcetoc_1beomg97a11"
                                                >
                                                    Determine How You will
                                                    Identify Your Device
                                                </h3>
                                                <p className="justify">
                                                    Network Ready devices must
                                                    comply with either of the
                                                    following identification
                                                    methods. <br /> Prior to
                                                    network testing, you’ll need
                                                    to choose the method you
                                                    plan to use. <br /> (click
                                                    on the links to learn more
                                                    about each one)
                                                </p>
                                                <div className="left_col">
                                                    <ul className="widicons_list_sub">
                                                        <li>
                                                            Unique{" "}
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                                to="#"
                                                            >
                                                                IMEI Type
                                                                Allocation Code
                                                            </NavLink>
                                                            (TAC)
                                                        </li>
                                                        <li>
                                                            Periodic{" "}
                                                            <NavLink
                                                                end
                                                                rel="noopener noreferrer"
                                                                className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                                to="https://iotdevices.att.com/att-iot/IDthroughIMEI.aspx"
                                                            >
                                                                upload{" "}
                                                            </NavLink>
                                                            of all your device
                                                            IMEI numbers
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="right_col">
                                                    <p className="id_sim1">
                                                        <img
                                                            src="https://testlabhub.com/images/submitrfq/id-device.png"
                                                            width="124"
                                                            height="124"
                                                            alt=""
                                                        />
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                    <div className="clear"></div>
                                    <ul className="widicons_list">
                                        <li className="checkmark_icon !pl-0 lg:!pl-10">
                                            <h3
                                                className="fs18"
                                                id="mcetoc_1beomg97a12"
                                            >
                                                Order Testlabhub TRENDI SIMs
                                            </h3>
                                            <p className="net_pad justify">
                                                The Test Requirements for
                                                Evaluating Network Ready Devices
                                                for Testlabhub (TRENDI) verifies
                                                that your device will work
                                                efficiently on our network, is
                                                capable of receiving SMS
                                                messages, and is using the same
                                                software/firmware you use for
                                                INC&nbsp;certification (see
                                                below). TRENDI takes
                                                approximately 24&nbsp;
                                                <g
                                                    className="gr_ gr_87 gr-alert gr_gramm gr_inline_cards gr_run_anim Punctuation only-del replaceWithoutSep"
                                                    id="87"
                                                    data-gr-id="87"
                                                >
                                                    hours,
                                                </g>{" "}
                                                and requires that you use a
                                                single Testlabhub{" "}
                                                <g
                                                    className="gr_ gr_88 gr-alert gr_gramm gr_inline_cards gr_run_anim Style multiReplace"
                                                    id="88"
                                                    data-gr-id="88"
                                                >
                                                    SIM .
                                                </g>
                                                <span className="id_sim">
                                                    <img
                                                        src="https://testlabhub.com/images/submitrfq/sim_pic1.jpg"
                                                        width="170"
                                                        height="170"
                                                        alt=""
                                                    />
                                                </span>{" "}
                                                You can
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="../att-iot/TrendiTestInstructions.aspx"
                                                >
                                                    order your Testlabhub SIM
                                                    for{" "}
                                                    <g
                                                        className="gr_ gr_85 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling ins-del multiReplace"
                                                        id="85"
                                                        data-gr-id="85"
                                                    >
                                                        TRENDI
                                                    </g>{" "}
                                                    at this link
                                                </NavLink>
                                                . We will mail you an ACTIVATED
                                                SIM with detailed instructions
                                                for testing. You can also{" "}
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="#"
                                                >
                                                    view the testing
                                                    instructions here.
                                                </NavLink>
                                            </p>
                                            <p>
                                                <br />{" "}
                                                <strong
                                                    style={{ color: "#700203" }}
                                                >
                                                    IMPORTANT NOTES:
                                                </strong>
                                            </p>
                                            <div className="left_col">
                                                <ul className="widicons_list_sub">
                                                    <li className="justify">
                                                        If you already have
                                                        Testlabhub SIM cards
                                                        with an identifier that
                                                        begins with 8901170 you
                                                        may onboard your
                                                        device&nbsp;
                                                        <NavLink
                                                            end
                                                            rel="noopener noreferrer"
                                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                            to="#"
                                                        >
                                                            here
                                                        </NavLink>
                                                        .
                                                    </li>
                                                    <li className="justify">
                                                        THESE{" "}
                                                        <g
                                                            className="gr_ gr_71 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling ins-del multiReplace"
                                                            id="71"
                                                            data-gr-id="71"
                                                        >
                                                            TRENDI
                                                        </g>{" "}
                                                        SIMS ARE FOR
                                                        CERTIFICATION TESTING
                                                        ONLY&nbsp; -- NOT FOR
                                                        DEVELOPMENT.&nbsp; Find
                                                        Development SIMs at the{" "}
                                                        <NavLink
                                                            end
                                                            rel="noopener noreferrer"
                                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                            to="#"
                                                        >
                                                            ATT Marketplace
                                                        </NavLink>
                                                        .
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>&nbsp;</p>
                                        </li>
                                        <li className="checkmark_icon !pl-0 lg:!pl-10">
                                            <h3
                                                className="fs18"
                                                id="mcetoc_1beomg97a10"
                                            >
                                                Get Industry Certified
                                            </h3>
                                            <p className="net_pad justify">
                                                <span>
                                                    Your device must
                                                    be&nbsp;Testlabhub Network
                                                    Certified™ (INC) and meet
                                                    Testlabhub’s minimum antenna
                                                    performance specifications
                                                    for testing. At this link,
                                                    you can view the&nbsp;
                                                </span>
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="..\Uploaded_Docs\antenna_document_20230502104841646.pdf"
                                                >
                                                    Testlabhub antenna
                                                    performance limits
                                                </NavLink>
                                                <span>
                                                    . For more information on
                                                    INC, please visit&nbsp;
                                                    <NavLink
                                                        end
                                                        rel="noopener noreferrer"
                                                        className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                        to="https://iotnetworkcertified.com/about/"
                                                    >
                                                        Testlabhub Network
                                                        Certified
                                                    </NavLink>
                                                    . The minimum required bands
                                                    for operation on the
                                                    Testlabhub US domestic
                                                    network are LTE Bands 2, 4,
                                                    and 12. INC certification
                                                    can be obtained through any
                                                    authroized INC&nbsp;lab.
                                                    Please see&nbsp;
                                                </span>
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="../labs-and-resources.aspx"
                                                >
                                                    labs and resources
                                                </NavLink>
                                                &nbsp;for information to get
                                                started
                                                <span>
                                                    . Additionally, Testlabhub
                                                    has partnered with two
                                                    INC&nbsp;labs for&nbsp;
                                                </span>
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                    to="../iot-accelerator.aspx#certification"
                                                >
                                                    exclusive tiered pricing
                                                </NavLink>
                                                .
                                                <span className="id_sim">
                                                    {" "}
                                                    <img
                                                        src="https://testlabhub.com/images/submitrfq/iotcertifiedlogo.png"
                                                        width="170"
                                                        style={{
                                                            width: "210px",
                                                        }}
                                                        alt=""
                                                    />
                                                </span>
                                            </p>
                                            <div className="iotAcltrWrap">
                                                <img
                                                    src="https://testlabhub.com/images/logo.png"
                                                    alt=""
                                                    style={{
                                                        marginLeft: "0px",
                                                    }}
                                                />
                                                <br />
                                                <div>
                                                    <h4 className="fs18">
                                                        Accelerate your INC
                                                        Certification!
                                                    </h4>
                                                    <p className="justify">
                                                        Testlabhub has created a
                                                        partnership with two
                                                        labs who have agreed to
                                                        offer exclusive tiered
                                                        pricing through our{" "}
                                                        <a
                                                            href="../iot-accelerator.aspx#certification"
                                                            title="Testlabhub Accelerator PTCRB Program"
                                                        ></a>
                                                        <NavLink
                                                            end
                                                            rel="noopener noreferrer"
                                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                            to="#"
                                                        >
                                                            Testlabhub
                                                            Accelerator INC
                                                            Program
                                                        </NavLink>
                                                        .<br /> Click to learn
                                                        more!
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="imgry_wrap">
                                    <div className="process_box">
                                        <img
                                            src="https://testlabhub.com/images/submitrfq/downarrow.png"
                                            alt=""
                                        />
                                        <div className="clear"></div>
                                        <span className="fs28">
                                            Once you have initiated industry
                                            certification at INC&nbsp;and
                                            received your Request
                                            Number...SUBMIT your device for
                                            Testlabhub Certification
                                        </span>
                                        <br />{" "}
                                        <span
                                            className="fs28"
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            <NavLink
                                                end
                                                rel="noopener noreferrer"
                                                className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                                to="/lab-reservation/booking/step-one"
                                            >
                                                Submit Here
                                                <g
                                                    className="gr_ gr_73 gr-alert gr_gramm gr_inline_cards gr_run_anim Grammar multiReplace"
                                                    id="73"
                                                    data-gr-id="73"
                                                ></g>
                                            </NavLink>
                                        </span>
                                    </div>

                                    <div>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="#"
                                        >
                                            <img
                                                src="https://testlabhub.com/rfq/firstNet.png"
                                                style={{
                                                    width: "100%",
                                                    margin: "20px auto 0 auto",
                                                }}
                                                alt=""
                                            />
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="#"
                                        >
                                            <img
                                                src="https://testlabhub.com/rfq/brushtile.png"
                                                style={{
                                                    width: "100%",
                                                    margin: "20px auto",
                                                }}
                                                alt=""
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="body_wrap blue_background" role="main">
                        <div className="container">
                            <div className="implement_wrap guide_icon txtwhite">
                                <h2 className="fs24" id="mcetoc_1g0fgflhp2">
                                    Implementation Guides
                                </h2>
                                <p className="justify">
                                    Download helpful{" "}
                                    <NavLink
                                        end
                                        rel="noopener noreferrer"
                                        className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                        to="#"
                                    >
                                        implementation guides and information
                                    </NavLink>{" "}
                                    for best practices&nbsp;(
                                    <g
                                        className="gr_ gr_74 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling multiReplace"
                                        id="74"
                                        data-gr-id="74"
                                    >
                                        log in
                                    </g>{" "}
                                    required).
                                    <br /> Documents available{" "}
                                    <g
                                        className="gr_ gr_75 gr-alert gr_gramm gr_inline_cards gr_run_anim Punctuation only-del replaceWithoutSep"
                                        id="75"
                                        data-gr-id="75"
                                    >
                                        include:
                                    </g>{" "}
                                    <span>
                                        TAM Webinar Slides, Securing the
                                        Internet of Things, and Implementation
                                        Guides covering Device Management,
                                        Connected Car, and FirstNet
                                    </span>
                                    <g
                                        className="gr_ gr_79 gr-alert gr_gramm gr_inline_cards gr_run_anim Style replaceWithoutSep"
                                        id="79"
                                        data-gr-id="79"
                                    >
                                        .
                                    </g>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="body_wrap grey_background" role="main">
                        <div className="container">
                            <div className="implement_wrap securityIcon">
                                <h2 className="fs24" id="mcetoc_1beomg97b16">
                                    <g
                                        className="gr_ gr_79 gr-alert gr_gramm gr_inline_cards gr_disable_anim_appear Style replaceWithoutSep"
                                        id="G1"
                                        data-gr-id="79"
                                    >
                                        Testlabhub
                                    </g>{" "}
                                    Security and GSMA Guidelines
                                </h2>
                                <p>
                                    When it comes to security, Testlabhub
                                    follows the best practices of the GSMA
                                    guidelines, and we encourage our partners to
                                    follow them as well. <br />{" "}
                                    <NavLink
                                        end
                                        rel="noopener noreferrer"
                                        className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                        to="#"
                                    >
                                        Click here
                                    </NavLink>{" "}
                                    to download the latest GSMA guidelines as a
                                    PDF.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="body_wrap mt-10" role="main">
                        <div className="container">
                            <div className="zigzag_wrap someDevices_wrap">
                                <div className="imgry_wrap">
                                    <img
                                        style={{ maxWidth: "480px" }}
                                        src="https://testlabhub.com/images/submitrfq/networkready.jpg"
                                        alt="Some Devices May Not Qualify for Our Simple Certification Procedures"
                                    />
                                </div>
                                <div className="info_wrap ">
                                    <h2
                                        className="fs24"
                                        id="mcetoc_1beomg97b17"
                                    >
                                        Some Devices May Not Qualify for Our
                                        Simplest Network Ready Procedures
                                    </h2>
                                    <p>
                                        In some cases, becoming Network Ready
                                        requires different steps. This is true
                                        of the following device types:
                                    </p>
                                    <ul className="points">
                                        <li>Drones</li>
                                        <li>
                                            Telematics Control Units (factory
                                            installed)
                                        </li>
                                        <li>
                                            Devices that will use a FirstNet SIM
                                        </li>
                                    </ul>
                                    <p>
                                        Additionally,{" "}
                                        <span>
                                            &nbsp;separate certification
                                            processes are required for devices
                                            using chipsets or non-approved
                                            modules. Click&nbsp;
                                        </span>
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="#"
                                        >
                                            here
                                        </NavLink>
                                        , navigate to "Device Certification
                                        (Testlabhub &amp; MVNO)" and select
                                        "Create Certification Request".{" "}
                                        <span>
                                            You will be guided into the correct
                                            process to get certified on these
                                            device types
                                        </span>
                                        . Please click{" "}
                                        <NavLink
                                            end
                                            rel="noopener noreferrer"
                                            className="ms-1 font-medium inline text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                            to="#"
                                        >
                                            here
                                        </NavLink>
                                        to contact our team for additional
                                        questions or any assistance with the
                                        certification process.&nbsp;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </span>
            </div>
        </>
    );
};

export default Modules;
