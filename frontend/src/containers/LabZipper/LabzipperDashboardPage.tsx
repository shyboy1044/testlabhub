import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import { NavLink, useLocation } from "react-router-dom";
import "./labzipperdashboard.css";
import bannerImg from "images/custom/autoredeem-status-banner.png";
import flameImg from "images/custom/flame.svg";
import rewardsImg from "images/custom/rewards.svg";
import streakImg from "images/custom/streak.svg";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import levelImg from "images/custom/Modal-img.png";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSetState } from "react-use";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
export interface LabZipperDashboardPageProps {
    className?: string;
}

const LabZipperDashboardPage: FC<LabZipperDashboardPageProps> = ({
    className = "",
}) => {
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const precategories = [
        "Education",
        "Music",
        "Video game",
        "Science and technology studies",
        "Comedy",
        "Unboxing videos",
        "Animated videos",
        "Autos and vehicles",
        "Entertainment",
        "Explainer videos",
        "News and politics",
        "Pets and animals",
        "Product reviews",
        "Vlogs",
        "Collection videos",
        "Frequently asked questions",
        "People and blogs",
        "Beauty and fashion",
        "Interview",
        "Nonprofits and activism",
        "Travel",
        "Sports",
        "Challenge videos",
        "How to and style",
        "Photography",
        "Clothes",
        "Entertainment",
        "Take followers behind the scenes",
        "Carousel posts",
        "Community",
        "Contests and giveaways",
        "Graphic Designer",
        "Makeup",
        "User-generated content",
        "Video",
        "Reels",
        "Food",
        "Photo posts",
        "Stories",
        "Video posts",
    ];
    const [category, setCategory] = useState("");
    const [open, setOpen] = useState(false);
    const user_email = localStorage.getItem("email") || "";
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };
    const [earnings, setEarnings] = useState("0.00");
    const user_name = localStorage.getItem("name")
        ? localStorage.getItem("name")
        : "";
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(!open);
    };
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
    }, []);
    const onUpload = () => {
        if (title == "") {
            toast("You should input title for file upload");
            return;
        }
        if (category == "") {
            toast("You should input category for file upload");

            return;
        }
        if (!selectedFile) {
            toast("You should select one file to upload!");
            return;
        }
        const formData = new FormData();
        if (selectedFile) {
            formData.append("file", selectedFile);
            formData.append("title", title);
            formData.append("category", category);
            formData.append("email", user_email);
        }

        fetch(process.env.REACT_APP_API_URL + "/uploadZipper", {
            method: "POST",
            body: formData,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    if (res == "image") {
                        navigate("/lab-zipper/images/gallery");
                    } else if (res == "video") {
                        navigate("/lab-zipper/videos/gallery");
                    }
                })
            )
            .catch((err) => console.log(err));
    };
    // useEffect(() => {
    //     if (!selectedFile) return;
    // }, [selectedFile]);
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
                                to="/lab-zipper"
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
                                Dashboard
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <Dialog
                open={open}
                handler={handleOpen}
                placeholder={""}
                className="md:w-[50%] m-auto md:h-[60%] w-[95%] h-[95%] overflow-auto"
            >
                <DialogBody className="mt-10" placeholder={""}>
                    <img src={levelImg} alt="" />
                </DialogBody>
            </Dialog>
            <div
                className={`nc-PageAbout overflow-hidden relative ${className}`}
                data-nc-id="PageAbout"
            >
                <Helmet>
                    <title>LabZipper</title>
                </Helmet>
                <ToastContainer />
                <div className="relative space-y-24 mb-24 lg:space-y-28 lg:mb-10 mt-20">
                    <div className="container1">
                        <div className="header1">
                            <h1>Hi, {user_name}</h1>
                            <div className="level">
                                Level 1{" "}
                                <i
                                    onClick={handleOpen}
                                    className="bi bi-info-circle"
                                ></i>
                            </div>
                        </div>
                        <div className="section1">
                            <div className="card1">
                                <div className="card1-content">
                                    <div className="img-and-label">
                                        <img src={rewardsImg} alt="Medal" />
                                        <div className="label">
                                            Available points{" "}
                                            <i
                                                title="Reward points available to redeem for prizes"
                                                className="bi bi-info-circle"
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="count">${earnings}</div>
                                    <a href="#">
                                        Redeem{" "}
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="card1">
                                <div className="card1-content">
                                    <div className="img-and-label">
                                        <img
                                            src={bannerImg}
                                            alt="Auto-redeem"
                                        />
                                        <div className="label">
                                            Auto-redeem{" "}
                                            <i
                                                title="Auto-redeem allows you to choose a prize or nonprofit and redeem that prize every month or as soon as you have enough points."
                                                className="bi bi-info-circle"
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="count">0</div>
                                    <a href="#">
                                        Setup{" "}
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="card1">
                                <div className="card1-content">
                                    <div className="img-and-label">
                                        <img src={flameImg} alt="Points" />
                                        <div className="label">
                                            Today's points{" "}
                                            <i
                                                title="The total amount of Rewards points you have earned today."
                                                className="bi bi-info-circle"
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="count">0</div>
                                    <a href="#">
                                        Points breakdown{" "}
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="card1">
                                <div className="card1-content">
                                    <div className="img-and-label">
                                        <img src={streakImg} alt="Streak" />
                                        <div className="label">
                                            Streak count{" "}
                                            <i
                                                title="The number of days in a row you've completed the daily set. Keep the streak going to earn bonus points."
                                                className="bi bi-info-circle"
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="count">0</div>
                                    <div className="streak-toggle">
                                        <label className="custom-toggle">
                                            <input type="checkbox" />
                                            <span className="slider"></span>
                                        </label>
                                        <span>Streak protection</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex w-[95%] md:w-[60%] m-auto">
                        <div className="form-container">
                            <h1>
                                Earn $0.02 per video or image uploading. Start
                                earning now with Telcron Rewards.
                            </h1>

                            <div className="input-group">
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Write title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />

                                <input
                                    type="text"
                                    name="category"
                                    list="category-list"
                                    value={category}
                                    className="form-control"
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    placeholder="Select or insert category"
                                />
                                <datalist id="category-list">
                                    {precategories.map((cat, index) => (
                                        <option key={index} value={cat} />
                                    ))}
                                </datalist>
                            </div>
                            <div className="file-input">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    accept="video/*,image/*"
                                    onChange={handleFileChange}
                                />
                                <p className="custom-upload-btn">
                                    Choose a video or image
                                </p>
                            </div>
                            <span
                                id="file-name"
                                className="file-name d-block text-center"
                            ></span>
                            <p className="text-muted text-center mt-2">
                                <b>Note:</b> Video length maximum 2 minutes,
                                video size allowed maximum 30MB.
                            </p>
                            <div className="upload-btn">
                                <ButtonPrimary
                                    className="upload-video"
                                    onClick={onUpload}
                                >
                                    Upload
                                </ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LabZipperDashboardPage;
