import React, { FC } from "react";
import rightImgPng from "images/custom/our_team/best_team.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
    className?: string;
    rightImg?: string;
    type?: "type1" | "type2";
}

const ProductDetail: FC<SectionOurFeaturesProps> = ({
    className = "lg:py-14",
    rightImg = rightImgPng,
    type = "type1",
}) => {
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
                        Products{" "}
                    </h2>

                    <ul className="space-y-10 mt-16">
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Additional resources on electrical product
                                safety may be found at:
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                With respect to electromagnetic
                                interference/compatibility, compliance
                                requirements for technology products vary
                                depending on whether they intentionally radiate
                                radio frequency energy. Regulatory standards
                                also define limits and test methodologies based
                                on home or industrial use environment of the
                                product among other considerations that imply a
                                relationship – without regulations/standards,
                                some products may not exist, and vice versa.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                In the US, FCC Part 15.3(k) defines a digital
                                device as an unintentional radiator that
                                generates and uses timing signals or pulses at a
                                rate in excess of 9,000 pulses per second (or 9
                                KHz) and uses digital techniques for performing
                                data processing functions. Computing products
                                such as E-readers (without Wifi) and PC
                                peripherals including monitors, disk drives fall
                                in this category, and the vast majority of these
                                unintentional radiators require either
                                verification or declaration of conformity for
                                equipment authorization. For equipment that
                                require certification as most intentional
                                radiators do, the FCC defines over 60 equipment
                                classes and nearly 200 rule parts as applicable.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Recommendation 70-03 issued by the pan-European
                                agency CEPT specifies 13 annexes of unlicensed
                                Short Range Device (SRD) radio products with
                                limits and radio regulatory parameters they are
                                to be assessed per conformity with the European
                                Union R&TTE directive. And for typical
                                information technology equipment without
                                intentional radio frequency transmission, a
                                number of product standards such as EN 55022 or
                                EN 55024 may apply pursuant to the regulating
                                EMC and Low Voltage Directives.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Click on the links below to make bookings at the
                                lab, Sporton International – Taiwan for FCC
                                (US), Industry Canada (CAN), and CE mark (EU)
                                product testing and certification (Certain
                                assumptions apply to prices quoted in portal –
                                reference products are handheld and battery
                                powered; battery presumed to meet applicable
                                regulatory specifications.)
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg text-left">
                                a) E-reader/Tablet, no WiFi, North America
                            </span>
                            <span className="block text-lg text-left">
                                b) Tablet PC, WiFi+3G/4G, North America + EU
                            </span>
                            <span className="block text-lg text-left">
                                c) RFID System, 13.56 MHz, North America
                            </span>
                            <span className="block text-lg text-left">
                                d) RFID System, 13.56 MHz, North America + EU
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Be sure to select applicable certification
                                standards during booking. As with
                                pre-certification testing, online booking of
                                certification testing services obviates the need
                                for a formal lab quotation. You may contact us
                                to discuss your booking.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                To obtain a detailed report that includes
                                multi-lab pricing and schedule options, talk to
                                us about our e Source service.
                            </span>
                        </li>
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                *Be advised that additional charges may apply
                                should the actual product or its operating modes
                                be found to differ materially from the
                                representative products used to generate
                                pricing. Telcron assumes no responsibility for
                                such additional charges. Refer toWiFi Alliance
                                2012 Gadget Guide for representative Tablet PC
                                and Merchant warehouse for the 13.56 MHz RFID
                                reader. Other charges, terms and conditions may
                                also apply as reasonably determined by the lab
                                upon assessing work completed, or time committed
                                to project completion.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
