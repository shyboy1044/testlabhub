import React, { FC, KeyboardEvent } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right.png";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
interface searchResult {
    id: number;
    title: string;
    standard: string;
    company_name: string;
}
export interface HomeSearchProps {
    className?: string;
}
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const HomeSearch: FC<HomeSearchProps> = ({ className = "" }) => {
    const navigate = useNavigate();
    const query = useQuery();
    const query_term = query.get("q");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState<searchResult[]>([]);
    useEffect(() => {
        let data = new FormData();
        if (query_term != "" && query_term != null) {
            data.append("query", query_term);
            try {
                fetch(process.env.REACT_APP_API_URL + "/get_home_search", {
                    method: "POST",
                    body: data,
                })
                    .then((res) =>
                        res.json().then((res) => {
                            console.log(res);
                            setResults(res);
                        })
                    )
                    .catch((err) => console.log(err));
            } catch (error) {
                console.error("There was an error fetching the posts!", error);
            }
        }
    }, []);

    return (
        <div
            className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
            data-nc-id="SectionHero"
        >
            <ToastContainer />

            <div className="container lg:items-center">
                <div className="text-xl font-semibold mt-10">
                    {results.length} Results::Keyword:"{query_term}"
                </div>
                <table className="table w-full mt-6 mb-20">
                    <thead className="">
                        <tr className="my-6">
                            <th scope="col" className="text-left py-3">
                                No.
                            </th>
                            <th scope="col" className="text-left py-3">
                                Company Name
                            </th>
                            <th scope="col" className="text-left py-3">
                                Title
                            </th>
                            <th scope="col" className="text-left py-3">
                                Standard
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {results.map((result, index) => {
                            return (
                                <tr className="my-6">
                                    <td className=" text-left">{index + 1}</td>
                                    <td>{result.company_name}</td>
                                    <td>{result.title}</td>
                                    <td>{result.standard}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomeSearch;
