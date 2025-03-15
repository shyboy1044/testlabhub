import React, { FC } from "react";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Input from "shared/Input/Input";
import { NavLink } from "react-router-dom";
import Select from "shared/Select/Select";

import { useNavigate } from "react-router-dom";
interface City {
    city: string;
}
export interface SubmitListingProps {
    className?: string;
}

const SubmitListing: FC<SubmitListingProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const [businessName, setBusinessName] = useState("");
    const [shortBusinessDesc, setShortBusinessDesc] = useState("");
    const [longBusinessDesc, setLongBusinessDesc] = useState("");
    const [businessStreetAddress, setBusinessStreetAddress] = useState("");
    const [businessCity, setBusinessCity] = useState("");
    const [businessState, setBusinessState] = useState("");
    const [businessZIP, setBusinessZIP] = useState("");
    const [businessCountry, setBusinessCountry] = useState("");
    const [businessURL, setBusinessURL] = useState("");
    const [linkTextOpt, setLinkTextOpt] = useState("");
    const [businessPhoneNumber, setBusinessPhoneNumber] = useState("");
    const [businessFax, setBusinessFax] = useState("");
    const [businessContactEmail, setBusinessContactEmail] = useState("");
    const [accreditingBody, setAccreditingBody] = useState("");
    const [testFacility, setTestFacility] = useState("");
    const [testCategory, setTestCategory] = useState("");
    const [testStandard, setTestStandard] = useState("");
    const [certification, setCertification] = useState("");
    const [city, setCity] = useState("");
    const [cities, setCities] = useState<City[]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };
    const onSubmit = () => {
        let data = new FormData();
        data.append("businessName", businessName);
        data.append("shortBusinessDesc", shortBusinessDesc);
        data.append("longBusinessDesc", longBusinessDesc);
        data.append("businessStreetAddress", businessStreetAddress);
        data.append("businessCity", businessCity);
        data.append("businessState", businessState);
        data.append("businessZIP", businessZIP);
        data.append("businessCountry", businessCountry);
        data.append("businessURL", businessURL);
        data.append("linkTextOpt", linkTextOpt);
        data.append("businessPhoneNumber", businessPhoneNumber);
        data.append("businessFax", businessFax);
        data.append("businessContactEmail", businessContactEmail);
        data.append("accreditingBody", accreditingBody);
        data.append("testFacility", testFacility);
        data.append("testCategory", testCategory);
        data.append("testStandard", testStandard);
        data.append("certification", certification);
        data.append("city", city);
        if (selectedFile) {
            data.append("file", selectedFile); // This line is now safe
        }

        fetch(
            process.env.REACT_APP_API_URL +
                "/lab-rating-directory/add-submit-listing",
            {
                method: "POST",
                body: data,
            }
        )
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    navigate("/lab-rating-directory");
                })
            )
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        try {
            fetch(
                process.env.REACT_APP_API_URL +
                    "/lab-rating-directory/get-cities",
                {
                    method: "GET",
                }
            )
                .then((res) =>
                    res.json().then((res) => {
                        setCities(res);
                    })
                )
                .catch((err) => console.log(err));
        } catch (error) {
            console.error("There was an error fetching the posts!", error);
        }
    }, []);
    return (
        <div
            className={`nc-PageContact overflow-hidden ${className}`}
            data-nc-id="PageContact"
        >
            <Helmet>
                <title>Lab Ratings/Directory</title>
            </Helmet>
            <ToastContainer />
            <div className="mx-auto">
                <section className="mb-32">
                    <div className="container px-6 md:px-12">
                        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 mt-[100px] backdrop-blur-[30px] m-auto">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6">
                                    <div className="grid lg:grid-cols-2 gap-2 mt-8 sm:grid-cols-1">
                                        <div>
                                            <ButtonPrimary
                                                className="w-full"
                                                onClick={() => {
                                                    navigate("/reserve-lab");
                                                }}
                                            >
                                                Click here to: Reserve Lab for
                                                Precertification Testing
                                            </ButtonPrimary>
                                        </div>
                                        <div>
                                            <ButtonPrimary
                                                className="w-full"
                                                onClick={() => {
                                                    navigate("/submit-rfq");
                                                }}
                                            >
                                                Click here to: Submit RFQ for
                                                Certification Test
                                            </ButtonPrimary>
                                        </div>
                                    </div>
                                    <h2 className="font-semibold text-3xl my-8">
                                        LAB RATINGS / DIRECTORY
                                    </h2>
                                    <div className="inline-flex flow-root">
                                        <div className="float-left">
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={() => {
                                                    navigate(
                                                        "/lab-rating-directory/submit-listing"
                                                    );
                                                }}
                                            >
                                                Submit A Listing
                                            </ButtonSecondary>
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={() => {
                                                    navigate(
                                                        "/lab-rating-directory/view-listing"
                                                    );
                                                }}
                                            >
                                                View Listings
                                            </ButtonSecondary>
                                            <ButtonSecondary
                                                className="!bg-gray-800 !text-white hover:!bg-gray-200 hover:!text-gray-800"
                                                onClick={() => {
                                                    navigate(
                                                        "/lab-rating-directory"
                                                    );
                                                }}
                                            >
                                                Directory
                                            </ButtonSecondary>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <h2 className="font-semibold text-3xl my-8">
                                        SUBMIT A LISTING
                                    </h2>

                                    <Input
                                        type="text"
                                        placeholder="Business Name"
                                        className="mt-4"
                                        value={businessName}
                                        onChange={(e) =>
                                            setBusinessName(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Short Business Description"
                                        className="mt-4"
                                        value={shortBusinessDesc}
                                        onChange={(e) =>
                                            setShortBusinessDesc(e.target.value)
                                        }
                                    />

                                    <Select
                                        className="mt-4"
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                    >
                                        {cities.map((city) => {
                                            return <option>{city.city}</option>;
                                        })}
                                    </Select>

                                    <Input
                                        type="text"
                                        placeholder="Long Business Description"
                                        className="mt-4"
                                        value={longBusinessDesc}
                                        onChange={(e) =>
                                            setLongBusinessDesc(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business Street Address"
                                        className="mt-4"
                                        value={businessStreetAddress}
                                        onChange={(e) =>
                                            setBusinessStreetAddress(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business City"
                                        className="mt-4"
                                        value={businessCity}
                                        onChange={(e) =>
                                            setBusinessCity(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business State"
                                        className="mt-4"
                                        value={businessState}
                                        onChange={(e) =>
                                            setBusinessState(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business ZIP"
                                        className="mt-4"
                                        value={businessZIP}
                                        onChange={(e) =>
                                            setBusinessZIP(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business Country"
                                        className="mt-4"
                                        value={businessCountry}
                                        onChange={(e) =>
                                            setBusinessCountry(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business URL"
                                        className="mt-4"
                                        value={businessURL}
                                        onChange={(e) =>
                                            setBusinessURL(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Link Text(Optional)"
                                        className="mt-4"
                                        value={linkTextOpt}
                                        onChange={(e) =>
                                            setLinkTextOpt(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business Phone Number"
                                        className="mt-4"
                                        value={businessPhoneNumber}
                                        onChange={(e) =>
                                            setBusinessPhoneNumber(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Business Fax"
                                        className="mt-4"
                                        value={businessFax}
                                        onChange={(e) =>
                                            setBusinessFax(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Business Contact Email"
                                        className="mt-4"
                                        value={businessContactEmail}
                                        onChange={(e) =>
                                            setBusinessContactEmail(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Accrediting Body"
                                        className="mt-4"
                                        value={accreditingBody}
                                        onChange={(e) =>
                                            setAccreditingBody(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Test Facility"
                                        className="mt-4"
                                        value={testFacility}
                                        onChange={(e) =>
                                            setTestFacility(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Test Category"
                                        className="mt-4"
                                        value={testCategory}
                                        onChange={(e) =>
                                            setTestCategory(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Test Standard"
                                        className="mt-4"
                                        value={testStandard}
                                        onChange={(e) =>
                                            setTestStandard(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Certification"
                                        className="mt-4"
                                        value={certification}
                                        onChange={(e) =>
                                            setCertification(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="file"
                                        className="mt-4"
                                        onChange={handleFileChange}
                                    />
                                    <ButtonPrimary
                                        className="w-full"
                                        onClick={onSubmit}
                                    >
                                        Submit
                                    </ButtonPrimary>
                                    <div className="grid lg:grid-cols-2 gap-2 mt-8 sm:grid-cols-1">
                                        <div>
                                            <ButtonPrimary
                                                className="w-full"
                                                onClick={() => {
                                                    navigate("/reserve-lab");
                                                }}
                                            >
                                                Click here to: Reserve Lab for
                                                Precertification Testing
                                            </ButtonPrimary>
                                        </div>
                                        <div>
                                            <ButtonPrimary
                                                className="w-full"
                                                onClick={() => {
                                                    navigate("/submit-rfq");
                                                }}
                                            >
                                                Click here to: Submit RFQ for
                                                Certification Test
                                            </ButtonPrimary>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SubmitListing;
