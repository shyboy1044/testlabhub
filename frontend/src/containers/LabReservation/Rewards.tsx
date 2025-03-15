import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./rewards.css";
import listImage from "images/custom/list-marker.png";
export interface RewardsProps {
    className?: string;
}

const Rewards: FC<RewardsProps> = ({ className = "" }) => {
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
                                Faqs
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
                    <title>Rewards</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-20">
                    <h2 className="text-xl font-semibold">Rewards</h2>
                    <div className="card-body" style={{ marginTop: "16px" }}>
                        <h4
                            style={{
                                color: "#700203",
                                textTransform: "capitalize",
                            }}
                        >
                            Benefits of lab booking through Testlabhub include:
                        </h4>
                        <ul>
                            <li className="pngImage">
                                <img
                                    className="inline"
                                    src={listImage}
                                    alt="listImage"
                                />
                                Ten lab shifts booked and utilized in a twelve
                                month period earns a free lab shift – at one of
                                several labs. For pre-certification test
                                bookings only.
                            </li>
                            <li className="pngImage">
                                <img
                                    className="inline"
                                    src={listImage}
                                    alt="listImage"
                                />
                                Cut cycle times and administrative costs by up
                                to half during final certification test
                                programs.
                            </li>
                            <li className="pngImage">
                                <img
                                    className="inline"
                                    src={listImage}
                                    alt="listImage"
                                />
                                Packaged pricing for multi-category services
                                (for example, product safety, electromagnetic
                                compatibility, wireless/radio communications,
                                radio frequency exposure tests) utilizing{" "}
                                <NavLink
                                    end
                                    rel="noopener noreferrer"
                                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                    to="https://www.telcron.net/portfolio-view/esource/"
                                >
                                    eSource
                                </NavLink>{" "}
                                at select lab partners.
                            </li>
                            <li className="pngImage">
                                <img
                                    className="inline"
                                    src={listImage}
                                    alt="listImage"
                                />
                                Use{" "}
                                <NavLink
                                    end
                                    rel="noopener noreferrer"
                                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                    to="https://www.telcron.net/lab-reservations/rf-rewards/resources/WorkZone+security+policy+030111+$281$29.pdf"
                                >
                                    secure
                                </NavLink>{" "}
                                document sharing and retention{" "}
                                <NavLink
                                    end
                                    rel="noopener noreferrer"
                                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                    to="https://www.workzone.com/"
                                >
                                    platform
                                </NavLink>{" "}
                                for testing projects at one or more test labs.
                            </li>
                            <li className="pngImage">
                                <img
                                    className="inline"
                                    src={listImage}
                                    alt="listImage"
                                />
                                Access to standards or regulations of interest
                                through Testlabhub’s Techstreet subscription
                                (starting August 2012). This is for clients
                                making ten or more pre-certification or
                                certification bookings within a twelve month
                                period.
                            </li>
                            <li className="pngImage">
                                <img
                                    className="inline"
                                    src={listImage}
                                    alt="listImage"
                                />
                                Product Bill of Materials (BOM) scrub for RoHS
                                and REACH regulatory compliance at no additional
                                charge through partnership with{" "}
                                <NavLink
                                    end
                                    rel="noopener noreferrer"
                                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                    to="https://www.greensofttech.com/"
                                >
                                    Greensoft
                                </NavLink>{" "}
                                . Comprehensive compliance assessment to RoHS
                                and REACH including Full Declaration to EU
                                Directives are done on a per-project pricing
                                basis driven by the number of parts involved in
                                the assessment.
                            </li>
                        </ul>
                        <h4
                            style={{
                                color: "#700203",
                                textTransform: "uppercase",
                                marginTop: "1em",
                            }}
                        >
                            Rewards
                        </h4>
                        <p className="justify">
                            We are delighted to announce RF Rewards, a new
                            program intended to incentivize product design
                            practices by manufacturers that minimize
                            electromagnetic emissions from electronic equipment
                            in their operating environment in the US and Canada.
                            It is voluntary and open to participation by
                            interested firms that consent to Testlabhub’s terms.
                        </p>
                        <p className="justify">
                            With a proliferation in intentionally radiating
                            electronic equipment being introduced into the
                            marketplace – reflected in the recent endorsement of
                            the 3 to 5 alphanumeric character change in the{" "}
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                to="http://hraunfoss.fcc.gov/edocs_public/attachmatch/FCC-12-60A1.pdf"
                            >
                                FCC identifier scheme
                            </NavLink>{" "}
                            , it’s logical to anticipate electromagnetic
                            emissions and the potential for interference with
                            other devices to rise. Other consumer and business
                            use electronics that don’t intentionally transmit
                            radio frequency energy are also being introduced to
                            market and are within scope of this program. While
                            limits set by regulatory authorities are meant to
                            lessen the probability of interference, we take a
                            step further to allocate credits for equipment that
                            emit low levels of electromagnetic emission relative
                            to the limits, and debits for those that emit high
                            levels relative to the limits.
                        </p>
                        <p className="justify">
                            Only radio frequency equipment that have been
                            regulatory approved within the last five years are
                            eligible for participation. Under this program,
                            credits are earned based on margins relative to
                            mandatory radiated or conducted emission limits in
                            Part 15, Part 18, Part 22, Part 24 and other
                            applicable regulations. Testlabhub reviews the
                            associated test report within two weeks of receipt
                            from the manufacturer, subsequently computing the
                            earned aggregate credits per equipment. Only
                            official test reports issued by accredited testing
                            laboratories are tenable, as well as
                            proof/confirmation of ongoing equipment
                            marketing/sale. There is no limit on equipment per
                            manufacturer, and each mode of device operation will
                            be considered independently for credit unit
                            computation purposes. Original or className II
                            Permissive Change equipment authorization
                            application reports may be utilized.
                        </p>
                        <p className="justify">
                            If credits have been accrued by a manufacturer and
                            the equipment is no longer offered for sale, such
                            credits may be sold back to Testlabhub at $.001 per
                            credit unit, or to another party at agreed upon
                            market rates that may be higher. We are limiting
                            this program to equipment offered for sale in the US
                            and Canada at the present time but will be
                            considering other geographies in the future. Credit
                            units only have market value within the geography
                            the credits have been computed for, for example,
                            credit gained for equipment evaluated to US or
                            Canadian rules is relevant only in the US or Canada
                            respectively and can only be exchanged for value in
                            each country.
                        </p>
                        <p className="justify">
                            Guidelines for the program’s administration will
                            utilize both radiated and conducted limits as
                            described below:
                        </p>
                        <h5 style={{ marginTop: "1.5%" }}>
                            <u>Radiated Limits</u>
                        </h5>
                        <p className="justify">
                            1(a) For className A devices, spurious radiated
                            emission measurements below 960 MHz, margins below
                            the limit in each of the four bands described in
                            15.109, accrue 10 credit units per 10 dB of below
                            limit measurement at an FCC acceptable laboratory.
                            If using CISPR 22 limits, each of the two bands
                            (30-230 MHz, 230-1000 MHz) will be awarded 20 credit
                            units per 20 dB margin in the two bands.
                        </p>
                        <p className="justify">
                            (a) (i) For className A devices, spurious radiated
                            emission measurements above 960 MHz (or 1 GHz for
                            CISPR 22), margins below the limit accrue 10 credit
                            units per 10 dB of below limit measurement at an FCC
                            acceptable laboratory.
                        </p>
                        <p className="justify">
                            (b) For className B devices, spurious radiated
                            emission measurements below 960 MHz, margins below
                            the limit accrue 10 credit units per 10 dB of below
                            limit measurement at an FCC acceptable laboratory.
                            If using the CISPR 22 limits, each of the two bands
                            will be awarded 20 credit units per 20 dB margin in
                            the two bands (30-230 MHz, 230-1000 MHz).
                        </p>
                        <p className="judtify">
                            (b)(ii) For className B devices, spurious radiated
                            emission measurements above 960 MHz (or 1 GHz for
                            CISPR 22) , margins below the limit accrue 10 credit
                            units per 10 dB of below limit measurement at an FCC
                            acceptable laboratory. If using the CISPR 22 limits,
                            each of the two bands will be awarded 20 credit
                            units per 20 dB margin.
                        </p>
                        <p className="justify">
                            (c) For (a) and (b) above, measurements within the
                            measurement uncertainty margins, based on CISPR
                            16-4-2 expanded measurement uncertainty computation
                            by the lab, will receive debits, such that a 20 dB
                            debit equates to at limit measurement, decreasing
                            linearly per dB below the limit until the maximum
                            uncertainty margin is reached .
                        </p>
                        <p className="justify">
                            (d) only highest emission measurement data points
                            are used in computation of these credits or debits
                            per frequency band reckoned with.
                        </p>
                        <p className="justify">(e) dB refers to dBuV/m.</p>
                        <h5 style={{ marginTop: "1.5%" }}>
                            <u>Conducted limits</u>
                        </h5>
                        <p className="justify">
                            2(a) For className A devices, spurious emission
                            measured below 30 MHz, margins below the limit in
                            each of the four bands, accrue 10 credit units per
                            10 dB of below limit measurement at an FCC
                            acceptable laboratory. If using the CISPR 22 limits,
                            each of the two bands will be awarded 20 credit
                            units per 20 dB margin.
                        </p>
                        <p className="justify">
                            (b) For className B devices, spurious emission
                            measured below 30 MHz, margins below the limit
                            accrue 10 credit units per 10 dB of below limit
                            measurement at an FCC acceptable laboratory. If
                            using the CISPR 22 limits, each of the two bands
                            will be awarded 20 credit units per 20 dB margin.
                        </p>
                        <p className="justify">
                            (c) For (a) and (b) above, measurements within the
                            measurement uncertainty margins, based on CISPR
                            16-4-2 expanded measurement uncertainty computation
                            by the lab, will receive debits, such that a 20 dB
                            debit equates to at limit measurement, decreasing
                            linearly per dB below the limit until the maximum
                            uncertainty margin is reached .
                        </p>
                        <p className="justify">
                            (d) only highest emission measurement data points
                            are used in computation of these credits or debits
                            per frequency band reckoned with.
                        </p>
                        <p className="justify">(e) dB refers to dBuV/m.</p>
                        <p className="justify">
                            3) For other Part 15 Subpart C intentional
                            radiators, margins below the limit accrue 20 credit
                            units per 10 dB of margin at the designated transmit
                            frequency bands of operation inclusive of transmit
                            side-bands, using highest emission measurement data
                            points in credit/debit computation.
                        </p>
                        <p className="justify">
                            4) Unintentional radiators will be subject to the
                            guidelines stated in 1 and 2 above.
                        </p>
                        <h5 style={{ marginTop: "1.5%" }}>
                            <u>RF Exposure limits</u>
                        </h5>
                        <p className="justify">
                            5) For mobile or portable devices used within 20 cm
                            separation distance of the general public, highest
                            peak measurements below the Specific Absorption Rate
                            (SAR) limits in the appropriate frequency bands
                            stipulated in the applicable guideline, FCC OET 65
                            (or RSS 102) will be awarded credit units up to a
                            maximum of 50 credit units at each operating mode,
                            assuming 0 credit unit awarded for a measurement at
                            50% of the limit and 50 credit units at 5% of the
                            limit or lower.
                        </p>
                        <p className="justify">
                            Similar devices to which the general public may be
                            exposed at a separation distance beyond 20 cm and to
                            which Maximum Permissible Exposure (MPE) limits are
                            applicable will be awarded a maximum of 50 credit
                            units when the highest peak measurement is 5% of the
                            limit or lower, linearly decreasing to 0 credit
                            units at 50 % of the limit, for each operating mode.
                            No credit awards apply for SAR or MPE levels over
                            50% of the limit.
                        </p>
                        <h5 style={{ marginTop: "1.5%" }}>
                            <u>Equipment classNamees covered</u>
                        </h5>
                        <p className="justify">
                            In addition to unintentional radiators (or Part 15
                            B) devices, the following equipment classNamees are
                            covered by the above described program:
                        </p>
                        <table style={{ width: "100%", marginTop: "1.5%" }}>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            width: "220px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Equipment className
                                    </td>
                                    <td
                                        style={{
                                            width: "400px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Description
                                    </td>
                                    <td
                                        style={{
                                            width: "220px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Rule Part
                                    </td>
                                </tr>
                                <tr>
                                    <td>DSS</td>
                                    <td>Part 15 Spread Spectrum Transmitter</td>
                                    <td>15C</td>
                                </tr>
                                <tr>
                                    <td>DTS</td>
                                    <td>Digital Transmission System</td>
                                    <td>15C</td>
                                </tr>
                                <tr>
                                    <td>DXT</td>
                                    <td>
                                        Part 15 Low Power Transceiver, Rx
                                        Verified
                                    </td>
                                    <td>15C</td>
                                </tr>
                                <tr>
                                    <td>DXX</td>
                                    <td>
                                        Part 15 Low Power Communication Device
                                        Transmitter
                                    </td>
                                    <td>15C</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="justify">
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white underline"
                                to="#"
                            >
                                Contact Us
                            </NavLink>{" "}
                            for additional information about participation in
                            the RF Rewards program.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rewards;
