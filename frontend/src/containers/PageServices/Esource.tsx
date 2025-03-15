import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import rightImage from "images/custom/maplight.png";
import { NavLink, useLocation } from "react-router-dom";

export interface EsourceProps {
    className?: string;
}

const Esource: FC<EsourceProps> = ({ className = "" }) => {
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
                                to="/services/compliance-management"
                            >
                                Services
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
                                Esource
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
                    <title>Esource</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse lg:py-14`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className="flex-grow mt-20">
                                <NcImage src={rightImage} className="mb-20" />
                                <span className="block text-lg font-semibold text-left mt-30">
                                    A Radio Frequency Identification (RFID)
                                    product family with multiple operating modes
                                    and/or installation scenarios needing to be
                                    certified in accordance with regulatory
                                    requirements in North America and the
                                    European Union may have a price tag
                                    exceeding $25,000. And three or more testing
                                    lab partners in the US/Canada, European
                                    Union or in Asia may be capable of
                                    completing the project at different prices
                                    and schedules. Telcron’s eSourcing process
                                    helps to identify lab candidates, and
                                    moderate the selection process utilizing
                                    Ariba StartSourcing . Telcron runs an event
                                    (Request for Information/Proposal, or
                                    Auction) on the manufacturer’s behalf in
                                    Ariba StartSourcing in order to select lab
                                    partner(s) for specific projects, and create
                                    a tentative project plan report. Labs
                                    participating may need to be registered in
                                    Ariba’s supplier network. View a
                                    StartSourcing introductory video here . The
                                    project plan developed with the lab(s) are
                                    then transposed to Work Zone for shared
                                    visibility. Manufacturers should allow two
                                    weeks in advance of project start to run
                                    eSourcing and other coordination steps with
                                    labs involved. Only projects with potential
                                    spend over $5,000 are recommended for
                                    eSource at the present time.
                                </span>
                            </div>
                            <div
                                className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/3 lg:pr-16`}
                            >
                                <h2 className="font-semibold text-4xl mt-5 text-left">
                                    Esource{" "}
                                </h2>

                                <ul className="space-y-10 mt-16">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            For certain technology
                                            manufacturers, the decision on a
                                            third party compliance testing lab
                                            to have their new or update product
                                            tested and certified to regulatory
                                            or market applicable requirements
                                            (FCC, CE, Industry Canada, CB
                                            Scheme) isn’t only about cost. It
                                            may include other criteria such as
                                            prior similar project completed,
                                            vendor profile (ownership, service
                                            portfolio, quality metrics,
                                            location, etc) and an important
                                            factor – a willingness to consider
                                            multiple competitive lab partners as
                                            bidders before making a selection.
                                        </span>
                                    </li>
                                    <li className="space-y-4 mt-10">
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "2px",
                                                backgroundColor: "#9b0405",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "#9b0405",
                                                    borderRadius: "50%",
                                                    display: "block",
                                                    position: "relative",
                                                }}
                                            ></span>
                                        </div>
                                        <span className="block text-lg  text-left">
                                            Cycle times, and administrative
                                            costs cut by up to half or greater
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "2px",
                                                backgroundColor: "#9b0405",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "#9b0405",
                                                    borderRadius: "50%",
                                                    display: "block",
                                                    position: "relative",
                                                }}
                                            ></span>
                                        </div>
                                        <span className="block text-lg  text-left">
                                            Project options for selection – by
                                            least cost, least time to
                                            completion, least lab switching, and
                                            lab rating
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "2px",
                                                backgroundColor: "#9b0405",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "#9b0405",
                                                    borderRadius: "50%",
                                                    display: "block",
                                                    position: "relative",
                                                }}
                                            ></span>
                                        </div>
                                        <span className="block text-lg  text-left">
                                            Leverage an eCommerce network for a
                                            project experience of choice managed
                                            from one interfacer
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Esource;
