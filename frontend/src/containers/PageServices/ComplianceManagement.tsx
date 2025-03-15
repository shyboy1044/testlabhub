import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import rightImage from "images/custom/compliance.svg";
import { NavLink, useLocation } from "react-router-dom";

export interface ComplianceManagementProps {
    className?: string;
}

const ComplianceManagement: FC<ComplianceManagementProps> = ({
    className = "",
}) => {
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
                            <span className="ms-1 text-sm font-medium break-all text-gray-500 md:ms-2 dark:text-gray-400">
                                ComplianceManagement
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
                    <title>ComplianceManagement</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    <div className="border-b-2 border-red-700">
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse lg:py-14`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className="flex-grow mt-20">
                                <NcImage src={rightImage} className="mb-20" />
                            </div>
                            <div
                                className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/2 lg:pr-16`}
                            >
                                <h2 className="font-semibold break-all text-4xl mt-5 text-left">
                                    ComplianceManagement{" "}
                                </h2>

                                <ul className="space-y-10 mt-16">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Product related changes such as an
                                            obsolete part replacement, a
                                            firmware/software or hardware
                                            upgrade, or changes to the
                                            regulating test standard may trigger
                                            a reevaluation of the original
                                            compliance assessment hence the need
                                            for a compliance management program
                                            to handle the range of
                                            eventualities.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Compliance steps are known to vary
                                            by the standard/regulating authority
                                            and the standard enacting process
                                            itself differs by market/geography.
                                            For example, standards issued by the
                                            European Telecommunications
                                            Standards Institute (ETSI) tend to
                                            change often, and manufacturers need
                                            to keep up to date on the latest
                                            standard requirements that apply for
                                            CE-marking of their product. ETSI’s
                                            standards making process is
                                            different from that of the American
                                            National Standards Institute (ANSI)
                                            that issues a number of US based
                                            standard procedures the Federal
                                            Communications Commission (FCC)
                                            reckons with for product
                                            electromagnetic compatibility
                                            compliance. Telcron understands
                                            these subtleties that inform the
                                            need for a compliance strategy in
                                            alignment with market specific
                                            regulatory requirements.
                                        </span>
                                    </li>
                                </ul>
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
                                            Technology manufacturers seeking
                                            ongoing compliance to regulatory
                                            requirements during each product’s
                                            lifecycle have to assess their
                                            products to requirements that
                                            include the following:
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <div className="table-responsive w-[400px] md:w-fit overflow-auto">
                                            <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Part 15
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            CISPR 11
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 61000-3-2
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 300 330-1
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 301 489-1
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            RSS 210
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            CISPR 22
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 61000-3-3
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 300 330-2
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 301 489-3
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Part 18
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            RSS 123
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 50360
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 300 220-1
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 301 489-7
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC OET 65
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            RSS Gen
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 50361
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 300 220-2
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 301 489-17
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Par 2
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            RSS 310
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 50364
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 300 440-1
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            EN 301 908-1
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Part 90
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            RSS –
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 50371
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 300 440-2
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 301 908.2
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Part 95
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            ICES 003
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 60950-1
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 301 511
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 301 893
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Part 22
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            ANSI C63.4
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            IEEE C95.1
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 302 208-1
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 300 328-1
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            FCC Part 24
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            ANSI C63.10
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 55024
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 302 208-2
                                                        </td>
                                                        <td className="text-lg font-semibold px-6 py-4">
                                                            {" "}
                                                            EN 300 328-2
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            and other harmonized R&TTE Directive
                                            standards , harmonized Low Voltage
                                            Directive standards , and harmonized
                                            EMC Directive standards as
                                            applicable; non-harmonized standards
                                            may apply in other cases that may
                                            require expert determination.
                                            Products are ass essed to these
                                            standards in order to meet CE mark,
                                            FCC, IC, C-Tick, and other mandatory
                                            or market preferred certifications
                                            in the European Union, US, Canada,
                                            and Australia. In the European
                                            Union, i nformation technology and
                                            radio equipment within our scope are
                                            regulated under the EMC Directive ,
                                            R&TTE Directive , and the Low
                                            Voltage Directive . Other Ecodesign
                                            regulations that may apply include
                                            Regulation No. 1275 of 2008 and
                                            Regulation No. 278 of 2009 .
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Besides regulations issued by
                                            agencies such as the FCC, Industry
                                            Canada , and the CEPT, major hubs to
                                            obtain standard/regulatory
                                            requirements include: IHS Global
                                            ,BSI Group,IEC
                                            Webstore,TechStreet,Document
                                            Center,ANSI Webstore,Comm-2000, ETSI
                                            .
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Techstreet also offers a Standard
                                            Tracker tool to track updates to any
                                            number of standards per user. A
                                            listing of standards that may be
                                            accessed by qualifying customers
                                            from Telcron’s library are here
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

export default ComplianceManagement;
