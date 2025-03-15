import React, { FC } from "react";
import rightImgPng from "images/custom/our_team/best_team.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

import { NavLink, useLocation } from "react-router-dom";
export interface SectionOurFeaturesProps {
    className?: string;
    rightImg?: string;
    type?: "type1" | "type2";
}

const SafetyDetail: FC<SectionOurFeaturesProps> = ({
    className = "lg:py-14",
    rightImg = rightImgPng,
    type = "type1",
}) => {
    const links = [
        "US Fire Administration",
        "Underwriters Laboratories",
        "Consumer Product Safety Commission",
        "OSHA NRTL",
        "NFPA",
        "National Electrical Code",
        "Canadian National Electrical Code + Handbook",
        "IECEE CB Scheme",
    ];
    return (
        <div>
            <div
                className={`nc-SectionOurFeatures relative flex flex-col ${
                    type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${className}`}
                data-nc-id="SectionOurFeatures"
            >
                <div className="flex-grow mt-20"></div>
                <div
                    className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-4/5 ${
                        type === "type1" ? "lg:pl-16" : "lg:pr-16"
                    }`}
                >
                    <h2 className="font-semibold text-4xl mt-5 text-left">
                        Product Safety{" "}
                    </h2>

                    <ul className="space-y-10 mt-16">
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Product safety relates to measures to assure
                                there is adequate protection for users in a
                                product’s intended operating environment from
                                the potential for electrical shock, fire,
                                mechanical or chemical hazard, among other
                                concerns.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Many information technology products are
                                increasingly battery powered, and certain safety
                                requirements apply to batteries on a standalone
                                basis and as part of an end product in assuring
                                product safety. Suppliers of internal or
                                external power supplies typically perform
                                required safety tests on these supplies prior to
                                sale, but additional evaluation of the supplies
                                as part of an end system is necessary to assure
                                product safety of the system. In the US, by
                                mandate of Occupational Safety and Health
                                Administration (OSHA), many information
                                technology products used in the workplace are
                                required to be assessed for safety by a
                                Nationally Recognized Testing Laboratory (NRTL)
                                that include UL, TUV, CSA, ETL, or MET, and
                                involve UL/CSA 60950-1 evaluation.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                As part of their CE-mark requirements in the
                                European Union, information technology products
                                are required to meet certain product safety
                                standards, typically the EN 60950-1. On a global
                                scale, the CB Scheme program is an
                                internationally backed conformity testing and
                                certification system with over 50 member
                                countries covering product safety – it speeds up
                                the process to achieve product safety
                                certifications at the country level via mutual
                                recognition of assessment to IEC standards such
                                as IEC 60950-1. CBTL testing labs including MET
                                Labs and TUV Rheinland are able to complete
                                evaluation of technology products to achieve CB
                                Scheme certification.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Additional resources on electrical product
                                safety may be found at:
                            </span>
                            {links.map((link) => (
                                <div>
                                    <NavLink
                                        end
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600 underline dark:text-gray-400 dark:hover:text-white"
                                        to={"#"}
                                    >
                                        <span
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                backgroundColor: "#9b0405",
                                                display: "block",
                                                borderRadius: "50%",
                                                marginRight: "13px",
                                            }}
                                        ></span>
                                        {link}
                                    </NavLink>
                                </div>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SafetyDetail;
