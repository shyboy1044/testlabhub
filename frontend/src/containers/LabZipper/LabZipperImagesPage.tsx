import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./labzippervideos.css";
import { useState, ChangeEvent, useEffect, useRef } from "react";
import SectionSliderNewCategories from "./SectionSliderNewCategories";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export interface LabZipperImagesPageProps {
    className?: string;
}
interface ImageItem {
    id: number;
    title: string;
    category: string;
    path: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}
const LabZipperImagesPage: FC<LabZipperImagesPageProps> = ({
    className = "",
}) => {
    const user_email = localStorage.getItem("email") || "";
    const navigate = useNavigate();
    const stepTwo = () => {
        if (!user_email) navigate("/login");
        else navigate("/lap-zipper/dashboard");
    };
    const [selectedItem, setSelectedItem] = useState("");
    const [earnings, setEarnings] = useState("0.00");
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [images, setImages] = useState<ImageItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        const user_email = localStorage.getItem("email") || "";
        let data = new FormData();
        data.append("email", user_email);
        fetch(process.env.REACT_APP_API_URL + "/get_earnings", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    setEarnings(res);
                })
            )
            .catch((err) => console.log(err));

        fetch(process.env.REACT_APP_API_URL + "/get_image_categories", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    setCategories(res);
                })
            )
            .catch((err) => console.log(err));
        onSearch();
    }, []);
    const [link, setLink] = useState<string>("");
    const linkRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (link != "" && linkRef.current) {
            linkRef.current.click();
        }
    }, [link]);
    const onSearch = () => {
        let data = new FormData();
        data.append("email", localStorage.getItem("email") || "");
        data.append("term", searchTerm);
        data.append("selected_category", selectedCategory);
        data.append("gallery_type", "image");
        fetch(process.env.REACT_APP_API_URL + "/get_gallery", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    setImages(res);
                })
            )
            .catch((err) => console.log(err));
    };
    const onCategoryChanged = (category: any) => {
        setSelectedCategory(category);
        onSearch();
    };
    const resetSearch = () => {
        setSearchTerm("");
        setSelectedCategory("");
        onSearch();
    };
    const sendVertex = () => {
        let data = new FormData();
        data.append("path", selectedItem);
        data.append("type", "image");
        fetch(process.env.REACT_APP_API_URL + "/moveFile", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    const download_url =
                        "/python/api_result/sources/" +
                        res.folder +
                        "/" +
                        res.filename;
                    setLink(download_url);
                })
            )
            .catch((err) => console.log(err));
    };
    const fetchBestBuy = () => {
        let data = new FormData();
        data.append("email", localStorage.getItem("email") || "");
        fetch(process.env.REACT_APP_API_URL + "/fetchBestBuy", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    setImages((prevImages) => [...prevImages, ...res]);
                })
            )
            .catch((err) => console.log(err));
    };
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
                                to="/lab-zipper/dashboard"
                            >
                                Telcron Rewards
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
                                Images Gallery
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
                    <title>LabZipper</title>
                </Helmet>
                <a
                    href={link}
                    download
                    ref={linkRef}
                    target="_blank"
                    style={{ display: "none" }}
                >
                    Download Link
                </a>
                {isModalOpen && (
                    <div
                        className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-10"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-semibold mb-4">
                                Do you want to send this item to Vertex AI?
                            </h2>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={sendVertex}
                            >
                                Send to Vertex AI
                            </button>
                        </div>
                    </div>
                )}
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-20">
                    <div className="top-container !mt-4">
                        <div className="earnings-container">
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                                to="/lab-zipper/dashboard"
                            >
                                Upload more images
                            </NavLink>

                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                                to="/lab-zipper/videos/gallery"
                            >
                                Videos gallery
                            </NavLink>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={fetchBestBuy}
                            >
                                Fetch from BestBuy
                            </button>
                        </div>
                        <div className="top-paragraph">
                            <p>
                                Earn $0.02 per image search. Start earning now
                                with Telcron Rewards.
                            </p>
                        </div>
                    </div>
                    <div className="search-container !mt-2">
                        <div className="input-group">
                            <input
                                type="search"
                                name="search"
                                className="form-control shadow-none searchInput"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary videosearchBTn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={onSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="top-container !mt-2">
                        <div className="earnings-container">
                            <ButtonPrimary
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    resetSearch();
                                }}
                            >
                                Reset Search
                            </ButtonPrimary>
                        </div>
                        <div className="top-paragraph">
                            <p className="earnings">
                                <b>Total Earnings:</b> ${earnings}
                            </p>
                        </div>
                    </div>
                    <div className="relative py-2 !mt-8">
                        <SectionSliderNewCategories
                            categories={categories}
                            categoryChanged={onCategoryChanged}
                            categoryCardType="card4"
                            itemPerRow={3}
                            sliderStyle="style2"
                            uniqueClassName="PageHome_s2"
                        />
                    </div>
                    <div className="grid" id="media-grid">
                        {images.map((image) => {
                            return (
                                <div
                                    className="grid-item"
                                    onClick={() => {
                                        setSelectedItem(image.path);
                                        openModal();
                                    }}
                                >
                                    <img
                                        src={
                                            process.env.REACT_APP_BACKEND_URL +
                                            image.path
                                        }
                                        alt=""
                                    />
                                    {/* <div>{image.title}</div>
                                    <div>{image.category}</div> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LabZipperImagesPage;
