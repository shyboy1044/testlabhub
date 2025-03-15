import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import rightImage from "images/custom/scheduleTesting.png";
import { NavLink, useLocation } from "react-router-dom";
import "./scheduletesting.css";
import preCertImg from "images/custom/PrecertificationTesting.png";
import CertImg from "images/custom/CertificationTest.png";
export interface ScheduleTestingProps {
    className?: string;
}

const ScheduleTesting: FC<ScheduleTestingProps> = ({ className = "" }) => {
    const links = [
        "BS EN 50360",
        "BS EN 50364",
        "BS EN 50371",
        "EN 62311",
        "EN 62479",
        "ANSI/IEEE C95.1",
        "FCC OET Bulletin No. 65",
        "ICNIRP Publications",
        "ARPANSA Publications",
    ];
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
                                Schedule Testing
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
                    <title>Schedule Testing</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse lg:py-14`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className="flex-grow mt-20">
                                <span className="text-xl font-semibold mb-16">
                                    Best team to help you realize your business
                                </span>
                                <NcImage src={rightImage} className="mt-20" />
                            </div>
                            <div
                                className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-3/5 lg:pr-16`}
                            >
                                <h2 className="font-semibold text-4xl mt-5 text-left">
                                    Schedule Testing{" "}
                                </h2>

                                <ul className="space-y-10 mt-16">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            There’s a 50% chance that products
                                            fail electromagnetic compatibility
                                            (EMC) tests the first time,
                                            according to at least one leading
                                            industry expert. Other test
                                            categories such as radio regulatory
                                            and product safety may also
                                            necessitate design changes after the
                                            initial run to meet all applicable
                                            requirements. These realities make
                                            pre-certification testing a
                                            recommended step before committing
                                            to final certification efforts for
                                            many technology products, with the
                                            benefit of improved confidence
                                            during certification tests, and
                                            reduced risk of redesign at
                                            significant time and cost that
                                            hampers product launch to market.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Test equipment Manufacturers seeking
                                            third party EMC labs consider
                                            several factors – among them,
                                            availability, cost, and credibility
                                            of results, a 2011 survey suggests.
                                            And, compliance tests may need to be
                                            performed at multiple test labs to
                                            fulfill all applicable regulatory
                                            testing requirements. With a number
                                            of accredited partner test labs
                                            around the world, Telcron makes it
                                            simple and easier for manufacturers
                                            to secure bookings at test labs for
                                            pre-certification and certification
                                            compliance testing of technology
                                            products and provides a single
                                            interface for coordination and
                                            management.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Three days or more advance booking
                                            is recommended to confirm the
                                            preferred schedule or an alternate.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Pre-certification electromagnetic
                                            compatibility and radio conformance
                                            testing can be coordinated at
                                            regulatory approved ambient free
                                            anechoic chambers, or Open Area Test
                                            Sites (OATS) at over twenty globally
                                            situated test labs. WorkZone project
                                            management platform and pertinent
                                            standards from TechStreet are
                                            accessible to clients (access are
                                            subject to applicable publisher,
                                            copyright, and other guidelines
                                            pursuant to subscriptions at
                                            TechStreet).
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="workflows_banner">
                        <div className="head_name">
                            <p className="text m-l_0 text-xl font-semibold">
                                Workflows for Pre-Certification Test Programs
                                Illustration
                            </p>
                        </div>

                        <div className="certificationProcess">
                            <div className="line_banner">
                                <div className="special_line">
                                    <span className="circle"></span>
                                    <span className="day_is">1 day</span>
                                    <span className="circle"></span>
                                    <span className="day_is">4 days</span>
                                    <span className="circle"></span>
                                </div>
                            </div>
                            <div className="text_bar">
                                <div>
                                    <p>
                                        Direct booking with selection of test
                                        items from www.telcron.net.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Client review plan and accepts / changes
                                        or cancels 3 days before scheduled
                                        start.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Project start @ test lab. Status
                                        viewable in WorkZone. Standard viewable
                                        in TechStreet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className={`w-full lg:mt-0`}>
                                <ul className="space-y-4 mt-4">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Certification test programs for
                                            various technology products may be
                                            booked using the eSource platform
                                            that typically involves a multi-lab
                                            selection process and assures access
                                            to resources such as the WorkZone
                                            project management platform and
                                            pertinent standards from TechStreet.
                                            Client test program requests
                                            submitted should include:
                                        </span>
                                    </li>

                                    <li className="space-y-4">
                                        <span className="block text-lg text-left">
                                            Product description including power
                                            source (battery, power supply): e.g.
                                            Tablet, RFID system, battery powered
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg text-left">
                                            Testing objectives/standards: e.g.
                                            FCC Part 15 Emissions, CE EN 55022
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg text-left">
                                            Target countries for marketing: e.g.
                                            USA, Canada, European Union,
                                            Australia
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg text-left">
                                            Notes about certification: e.g.
                                            operating modes, installation
                                            scenarios, etc.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg text-left">
                                            Preferred start date
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            The following chart illustrates how
                                            the certification process is
                                            subsequently handled:
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="workflows_banner">
                        <div className="head_name">
                            <p className="text m-l_0 text-xl font-semibold">
                                Certification Process
                            </p>
                        </div>

                        <div className="certificationProcess">
                            <div className="line_banner">
                                <div className="special_line">
                                    <span className="circle"></span>
                                    <span className="day_is">1 day</span>
                                    <span className="circle"></span>
                                    <span className="day_is">5 days</span>
                                    <span className="circle"></span>
                                    <span className="day_is">7 days</span>
                                    <span className="circle"></span>
                                </div>
                            </div>
                            <div className="text_bar">
                                <div>
                                    <p>
                                        Request submitted to Telcron. Product
                                        description, service objectives defined.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Project Plan delivered by Telcron
                                        including cost / schedule.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Client review plan and accepts or makes
                                        changes
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Product sample & documents submitted to
                                        lab. Status viewable in WorkZone.
                                        Standard viewable in
                                    </p>
                                    TechStreet.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className={`w-full lg:mt-0`}>
                                <ul className="space-y-4 mt-4">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Our lab partners are designated to
                                            perform various electromagnetic
                                            compatibility standards based tests
                                            pursuant to their ISO/IEC 17025
                                            accreditation by entities such as
                                            A2LA, NVLAP, SCC, IECEE, UKAS, ILAC,
                                            DAkks
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            And the accreditation program for
                                            product safety in US workplaces per
                                            the Occupational Safety and Health
                                            Administration (OSHA) is the NRTL
                                            Program. Of note, two partner labs –
                                            MET Laboratories and TUV Rheinland
                                            of North America have CB Scheme
                                            Testing Laboratories (CBTL)
                                            designation and are allowed to
                                            perform necessary product safety
                                            evaluation applicable to certain
                                            technology products pursuant to
                                            requirements such as IEC 60950-1
                                            among others under the CB Scheme
                                            program.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Bookings for pre-certification or
                                            certification tests obviate the need
                                            for a quote; but the attached Form
                                            can be sent to info@telcron.net for
                                            a quote if needed.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="reserve_lab">
                        <div className="test_banner">
                            <div className="custom-ico-bar">
                                <img
                                    src={preCertImg}
                                    alt="Precertification Testing"
                                    title="Precertification Testing"
                                />
                            </div>
                            <div className="text_bar">
                                <NavLink
                                    end
                                    rel="noopener noreferrer"
                                    className="inline-flex text-[#9B0405] items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    to={"/reserve-lab"}
                                >
                                    <p className="text-lg">
                                        Reserve Lab for Precertification Testing
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="test_banner rfq">
                            <div className="custom-ico-bar">
                                <img
                                    src={CertImg}
                                    alt="Certification Test"
                                    title="Certification Test"
                                />
                            </div>
                            <div className="text_bar">
                                <NavLink
                                    end
                                    rel="noopener noreferrer"
                                    className="inline-flex text-[#9B0405] items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    to={"/submit-rfq"}
                                >
                                    <p className="text-lg">
                                        Submit RFQ for Certification Test
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className={`w-full lg:mt-0`}>
                                <ul className="space-y-4 mt-4">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            The growing footprint of test labs
                                            being worked with is illustrated in
                                            the following map:
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="locatedMap">
                        <div className="container-fluid">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                    width={600}
                                    height={450}
                                    title="googleMap"
                                    style={{ border: 0 }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScheduleTesting;
