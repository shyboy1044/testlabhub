import React, { FC } from "react";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Input from "shared/Input/Input";
import { NavLink, useLocation } from "react-router-dom";
import Select from "shared/Select/Select";

import { useNavigate } from "react-router-dom";
interface City {
    city: string;
}
export interface ContractProps {
    className?: string;
}
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const Contract: FC<ContractProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const [firmname, setFirmname] = useState("");
    const query = useQuery();
    const lab_id = query.get("lab_id");
    const [contractDate, setContractDate] = useState("");
    const [signer, setSigner] = useState("");
    const useremail = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "";
    const username = localStorage.getItem("name")
        ? localStorage.getItem("name")
        : "";
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    useEffect(() => {
        let data = new FormData();
        if (lab_id != "" && lab_id != null) {
            data.append("id", lab_id);
            try {
                fetch(process.env.REACT_APP_API_URL + "/contract_detail", {
                    method: "POST",
                    body: data,
                })
                    .then((res) =>
                        res.json().then((res) => {
                            setFirmname(res.firm_name);
                        })
                    )
                    .catch((err) => console.log(err));
            } catch (error) {
                console.error("There was an error fetching the posts!", error);
            }
        }
    }, []);
    const onSubmit = () => {
        if (!check1) {
            toast("You should agree contract term");
            return;
        }
        if (signer == "") {
            toast("You should input signer name");
            return;
        }
        if (contractDate == "") {
            toast("You should provide contract date");
            return;
        }
        let data = new FormData();
        if (
            useremail != null &&
            lab_id != null &&
            contractDate != null &&
            username != null
        ) {
            data.append("user_email", useremail);
            data.append("user_name", username);
            data.append("lab_id", lab_id);
            data.append("date", contractDate);
            fetch(process.env.REACT_APP_API_URL + "/contract_send", {
                method: "POST",
                body: data,
            })
                .then((res) =>
                    res.json().then((res) => {
                        console.log(res);
                        navigate("/lab-rating-directory");
                    })
                )
                .catch((err) => console.log(err));
        }
    };
    return (
        <div
            className={`nc-PageContact overflow-hidden ${className}`}
            data-nc-id="PageContact"
        >
            <Helmet>
                <title>Contract</title>
            </Helmet>
            <ToastContainer />
            <div className="mx-auto">
                <div
                    style={{
                        backgroundColor: "#700203",
                        border: "0px solid white",
                        width: "100%",
                    }}
                >
                    <div className="container">
                        <div className="bg-image d-flex justify-content-center align-items-center">
                            <img
                                src="https://lh3.googleusercontent.com/UVuj6-8yG1CVJlRLNFLkXZDSkUX4oJr_XnueT-DQgFrkTyGbvIgl3gNA3WD4qWQcGy_cd0Dfrj07ig_ZnbED5UH5vk0rtkPRoM6eChvl5L6RYv5TEZZ3Z7vT3QWF57ABzQ=w302"
                                style={{ width: "57%" }}
                                className="m-auto"
                                alt=""
                            />
                        </div>
                        <div
                            className="row d-flex m-auto justify-content-center visible"
                            style={{ width: "57%" }}
                            id="part_1"
                        >
                            <div
                                className="main-container border-t-2 mt-10"
                                style={{ width: "100%" }}
                            >
                                <div className="col text-center title bg-white pl-4 pb-2 font-semibold text-3xl">
                                    GENERAL CONTRACT FOR SERVICES
                                </div>
                                <div className="bg-white pl-4 pr-4">
                                    This Contract for Services is made effective
                                    as of February 4, 2013, by and between{" "}
                                    <b>{firmname}</b>, and Telcron LLC of P.O.
                                    Box 1398,Montclair, New Jersey 07042 (NJ
                                    Registration id: 0600386534).
                                </div>
                                <div className="u-line"></div>
                                <div className="bg-white pl-4 pr-4 pt-2 pb-2">
                                    <span>
                                        <b>{useremail}</b>
                                    </span>
                                </div>
                                <div className="u-line"></div>
                                <div className="bg-white radius-bottom"></div>
                                <form className="needs-validation">
                                    <div className="bg-white p-4 mt-4 radius-top radius-bottom">
                                        <span>
                                            Please read and accept the following
                                            details of contract for services.
                                            <br />
                                            <br />
                                            <div>
                                                1. DESCRIPTION OF SERVICES.
                                                Beginning on February 4, 2013,
                                                Telcron LLC will provide to
                                                <b>&nbsp;</b>
                                                <b>{firmname}</b> the following
                                                services (collectively, the
                                                "Services"): Representative for
                                                electrical/electronic testing
                                                and certification services
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                2. PAYMENT. Payment shall be
                                                made to Telcron LLC, Montclair,
                                                New Jersey 07042.
                                                <b>&nbsp;</b>
                                                <b>{firmname}</b> agrees to pay
                                                Telcron LLC as follows: on
                                                mutually agreed upon terms and
                                                conditions. A commission of 10%
                                                will be paid after receipt of
                                                payment for invoiced work.
                                                Commissions are based on work
                                                performed by
                                                <b>{firmname}</b> . In the event
                                                that a credit has been provided,
                                                the commission that has been
                                                previously paid can be deducted
                                                from the next commission pay
                                                period.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                3. TERM. This Contract may be
                                                terminated by either party upon
                                                60 days prior written notice to
                                                the other party.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                4. WORK PRODUCT OWNERSHIP. Any
                                                copyrightable works, ideas,
                                                discoveries, inventions,
                                                patents, products, or other
                                                information (collectively the
                                                "Work Product") developed in
                                                whole or in part by Telcron LLC
                                                in connection with the Services
                                                will be the exclusive property
                                                of Telcron LLC,
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                5. CONFIDENTIALITY. Telcron LLC,
                                                and its employees, agents, or
                                                representatives will not at any
                                                time or in any manner, either
                                                directly or indirectly, use for
                                                the personal benefit of Telcron
                                                LLC, or divulge, disclose, or
                                                communicate in any manner, any
                                                information that is proprietary
                                                to <b>{firmname}</b>. Teleron
                                                LLC and its employees, agents,
                                                and representatives will protect
                                                such information and treat it as
                                                strictly confidential. This
                                                provision will continue to be
                                                effective after the termination
                                                of this Contract. Upon
                                                termination of this Contract,
                                                Teleron LLC will return to{" "}
                                                <b>{firmname} &nbsp;</b>
                                                all records, notes,
                                                documentation and other items
                                                that were used, created, or
                                                controlled by Teleron LLC during
                                                the term of this Contract.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                6. WARRANTY. Telcron LLC shall
                                                provide its services and meet
                                                its obligations under this
                                                Contract in a timely and
                                                workmanlike manner, using
                                                knowledge and recommendations
                                                for performing the services
                                                which meet generally acceptable
                                                standards in Telcron LLC's
                                                community and region, and will
                                                provide a standard of care equal
                                                to, or superior to, care used by
                                                service providers similar to
                                                Teleron LLC on similar projects.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                7. FORCE MAJEURE. If performance
                                                of this Contract or any
                                                obligation under this Contract
                                                is prevented, restricted, or
                                                interfered with by causes beyond
                                                either party's reasonable
                                                control ("Force Majeure"), and
                                                if the party unable to carry out
                                                its obligations gives the other
                                                party prompt written notice of
                                                such event, then the obligations
                                                of the party invoking this
                                                provision shall be suspended to
                                                the extent necessary by such
                                                event. The term Force Majeure
                                                shall include, without
                                                limitation, acts of God, fire,
                                                explosion, vandalism, storm or
                                                other similar occurrence, orders
                                                or acts of military or civil
                                                authority, or by national
                                                emergencies, insurrections,
                                                riots, or wars, or strikes,
                                                lock-outs, work stoppages, or
                                                other labor disputes, or
                                                supplier failures. The excused
                                                party shall use reasonable
                                                efforts under the circumstances
                                                to avoid or remove such causes
                                                of non-performance and shall
                                                proceed to perform with
                                                reasonable dispatch whenever
                                                such causes are removed or
                                                ceased. An act or omission shall
                                                be deemed within the reasonable
                                                control of a party if committed,
                                                omitted, or caused by such
                                                party, or its employees,
                                                officers, agents, or affiliates.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                8. ENTIRE AGREEMENT. This
                                                Contract contains the entire
                                                agreement of the parties, and
                                                there are no other promises or
                                                conditions in any other
                                                agreement whether oral or
                                                written concerning the subject
                                                matter of this Contract. This
                                                Contract supersedes any prior
                                                written or oral agreements
                                                between the parties.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                9. SEVERABILITY. If any
                                                provision of this Contract will
                                                be held to be invalid or
                                                unenforceable for any reason,
                                                the remaining provisions will
                                                continue to be valid and
                                                enforceable. If a court finds
                                                that any provision of this
                                                Contract is invalid or
                                                unenforceable, but that by
                                                limiting such provision it would
                                                become valid and enforceable,
                                                then such provision will be
                                                deemed to be written, construed,
                                                and enforced as so limited.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                10. AMENDMENT. This Contract may
                                                be modified or amended in
                                                writing, if the writing is
                                                signed by the party obligated
                                                under the amendment.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                11. GOVERNING LAW. This Contract
                                                shall be construed in accordance
                                                with the laws of the State of
                                                Florida.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                12. NOTICE. Any notice or
                                                communication required or
                                                permitted under this Contract
                                                shall be sufficiently given if
                                                delivered in person or by
                                                certified mail, return receipt
                                                requested, to the address set
                                                forth in the opening paragraph
                                                or to such other address as one
                                                party may have furnished to the
                                                other in writing.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                13. WAIVER OF CONTRACTUAL RIGHT.
                                                The failure of either party to
                                                enforce any provision of this
                                                Contract shall not be construed
                                                as a waiver or limitation of
                                                that party's right to
                                                subsequently enforce and compel
                                                strict compliance with every
                                                provision of this Contract.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                IN WITNESS WHERE OF, the parties
                                                hereto have caused this
                                                Agreement to be executed by
                                                their duly authorized
                                                representatives as of the date
                                                first above written.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>Service Provider:</div>
                                            <div>Telcron LLC</div>
                                            <div>
                                                By&nbsp;
                                                <span>Bayo Olabisi</span>
                                            </div>
                                        </span>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={check1}
                                                onChange={(e) =>
                                                    setCheck1(!check1)
                                                }
                                            />
                                            <label className="form-check-label ml-2">
                                                I have read and accept the
                                                general contract for services
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={check2}
                                                onChange={(e) =>
                                                    setCheck2(!check2)
                                                }
                                            />

                                            <label className="form-check-label ml-2">
                                                I declined the general contract
                                                for services
                                            </label>
                                        </div>
                                        <div className="sign radius-top radius-bottom pt-4 mt-4 d-block">
                                            <label className="">
                                                Please sign name here.*
                                            </label>
                                            <input
                                                type="text"
                                                className=" form-control input-sign"
                                                value={signer}
                                                onChange={(e) =>
                                                    setSigner(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="sign radius-top radius-bottom pt-4 mt-4 d-block">
                                            <label className="">
                                                Please select date here.*
                                            </label>
                                            <input
                                                type="date"
                                                className=" form-control input-date w-25"
                                                value={contractDate}
                                                onChange={(e) =>
                                                    setContractDate(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="btn-group mt-2">
                                        <div className="group">
                                            <ButtonPrimary
                                                onClick={onSubmit}
                                                className="w-full my-4"
                                                type="button"
                                            >
                                                Submit
                                            </ButtonPrimary>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
