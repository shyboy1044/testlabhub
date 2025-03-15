import React, {
    useState,
    ChangeEvent,
    FormEvent,
    useRef,
    useEffect,
} from "react";

import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import SectionDayline from "components/SectionHowItWork/SectionDayline";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import image3 from "images/custom/image3.png";
import image2 from "images/custom/image2.png";
import image1 from "images/custom/image1.png";
import retail from "images/custom/retail.png";
import image5 from "images/custom/image5.png";
import image7 from "images/custom/image7.png";
import HIW1img from "images/HIW2-1.png";
import HIW2img from "images/HIW2-2.png";
import HIW3img from "images/HIW2-3.png";
import HIW2img2 from "images/HIW2-2-2.png";
import HIW3img2 from "images/HIW2-3-2.png";
import HIW1imgDark from "images/HIW2-1-dark.png";
import HIW2imgDark from "images/HIW2-2-dark.png";
import HIW3imgDark from "images/HIW2-3-dark.png";
import HIW2imgDark2 from "images/HIW2-2-2-dark.png";
import labsvg from "images/custom/lab.svg";
import submitsvg from "images/custom/submit.svg";
import HIW3imgDark2 from "images/HIW2-3-2-dark.png";
import rightImgPng from "images/our-features-2.png";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
const DEMO_CATS: TaxonomyType[] = [
    {
        id: "1",
        href: "/submit-rfq",
        name: "New Yourk",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/submit-rfq",
        name: "Singapore",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        href: "/submit-rfq",
        name: "Paris",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        href: "/submit-rfq",
        name: "London",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/submit-rfq",
        name: "Tokyo",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/submit-rfq",
        name: "Maldives",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

const DEMO_CATS_2: TaxonomyType[] = [
    {
        id: "1",
        href: "/submit-rfq",
        name: "Transportation",
        taxonomy: "category",
        thumbnail: image3,
    },
    {
        id: "2",
        href: "/submit-rfq",
        name: "Partner solutions",
        taxonomy: "category",
        count: 188288,
        thumbnail: image2,
    },
    {
        id: "3",
        href: "/submit-rfq",
        name: "Healthcare",
        taxonomy: "category",
        count: 188288,
        thumbnail: image1,
    },
    {
        id: "4",
        href: "/submit-rfq",
        name: "Retail",
        taxonomy: "category",
        count: 188288,
        thumbnail: retail,
    },
    {
        id: "5",
        href: "/submit-rfq",
        name: "Manufacturing",
        taxonomy: "category",
        count: 188288,
        thumbnail: image5,
    },
    {
        id: "6",
        href: "/submit-rfq",
        name: "Finance",
        taxonomy: "category",
        count: 188288,
        thumbnail: image7,
    },
];

function HomePage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [link, setLink] = useState<string>("");
    const linkRef = useRef<HTMLAnchorElement | null>(null);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };
    useEffect(() => {
        if (!selectedFile) return;

        const formData = new FormData();
        if (selectedFile) {
            formData.append("file", selectedFile); // This line is now safe
        }

        fetch(process.env.REACT_APP_API_URL + "/uploadFile", {
            method: "POST",
            body: formData,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);

                    const download_url =
                        "/python/api_result/sources/" +
                        res.folder +
                        "/" +
                        res.filename;
                    setLink(download_url);
                })
            )
            .catch((err) => console.log(err));
    }, [selectedFile]);
    useEffect(() => {
        if (link != "" && linkRef.current) {
            linkRef.current.click();
        }
    }, [link]);
    return (
        <div className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <SectionHero className="pt-10 lg:pt-16" />
                {/* SECTION */}
                {/* <SectionSubscribe2 /> */}
                <a
                    href={link}
                    download
                    ref={linkRef}
                    target="_blank"
                    style={{ display: "none" }}
                >
                    Download Link
                </a>
                <div className="relative">
                    <div className="relative">
                        <div className="container max-w-7xl mx-auto">
                            <div className="flex-shrink-0 grid grid-cols-2 sm:grid-cols-2 gap-12 ">
                                <Link
                                    to="/reserve-lab"
                                    className={`nc-CardAuthorBox2 flex flex-col overflow-hidden bg-pink-50 dark:bg-neutral-700 rounded-3xl hover:shadow-xl transition-shadow `}
                                    data-nc-id="CardAuthorBox2"
                                >
                                    <div className="relative ">
                                        <div>
                                            <img
                                                alt=""
                                                src={labsvg}
                                                className="mx-auto my-10"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-[1px] px-6 text-center flex flex-col items-center relative -translate-y-7">
                                        <div className="mt-6">
                                            <h2
                                                className={`text-base font-medium text-red-800 dark:text-white`}
                                            >
                                                <span className="">
                                                    Reserve Lab for
                                                    <br />
                                                    Precertification Testing
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    to="/submit-rfq"
                                    className={`nc-CardAuthorBox2 flex flex-col overflow-hidden bg-pink-50 dark:bg-neutral-700 rounded-3xl hover:shadow-xl transition-shadow `}
                                    data-nc-id="CardAuthorBox2"
                                >
                                    <div className="relative ">
                                        <div>
                                            <img
                                                src={submitsvg}
                                                className="mx-auto my-10"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-[1px] px-6 text-center flex flex-col items-center relative -translate-y-7">
                                        <div className="mt-6">
                                            <h2
                                                className={`text-base font-medium text-red-800 dark:text-white`}
                                            >
                                                <span className="">
                                                    Submit RFQ for
                                                    <br />
                                                    Certification Test
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 mb-2 fill-gray-500"
                        viewBox="0 0 32 32"
                    >
                        <path
                            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                            data-original="#000000"
                        />
                        <path
                            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                            data-original="#000000"
                        />
                    </svg>
                    Upload file
                    <input
                        type="file"
                        id="uploadFile1"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <p className="text-xs font-medium text-gray-400 mt-2">
                        Image file or video file to be processed by Vertex AI.
                    </p>
                </label>
                {/* SECTION 1 */}
                {/* <SectionSliderNewCategories
                    categories={DEMO_CATS}
                    uniqueClassName="PageHome_s1"
                /> */}
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionDayline
                        data={[
                            {
                                id: 1,
                                img: HIW1img,
                                imgDark: HIW1imgDark,
                                title: "Make Booking",
                                desc: "Direct booking with selection of test items from www.testlabhub.com",
                            },
                            {
                                id: 2,
                                img: HIW2img2,
                                imgDark: HIW2imgDark2,
                                title: "Plan Review",
                                desc: "Activities including testing, documentation, filings, to meet go-to-market requirements",
                            },
                            {
                                id: 3,
                                img: HIW3img2,
                                imgDark: HIW3imgDark2,
                                title: "Start Project",
                                desc: "Project start @ test lab. Status viewable in WorkZone. Standard viewable in TechStreet",
                            },
                        ]}
                    />
                </div>
                {/* SECTION2 */}
                <SectionOurFeatures />

                {/* SECTION */}
                {/* <div className="relative py-16">
                    <BackgroundSection />
                    <SectionGridFeaturePlaces />
                </div> */}
                {/* SECTION */}
                <div className="relative py-16">
                    <SectionBecomeAnAuthor />
                </div>
                {/* SECTION 1 */}
                <div className="relative py-16">
                    <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
                    <SectionSliderNewCategories
                        categories={DEMO_CATS_2}
                        categoryCardType="card4"
                        itemPerRow={3}
                        heading="Find what fits your business needs"
                        subHeading=""
                        sliderStyle="style2"
                        uniqueClassName="PageHome_s2"
                    />
                </div>
                <SectionHowItWork
                    data={[
                        {
                            id: 1,
                            img: HIW1img,
                            imgDark: HIW1imgDark,
                            title: "Pre-certification",
                            desc: "The set of manufacturer activities, product design and development testing/evaluation to reduce risk of market non-acceptance",
                        },
                        {
                            id: 2,
                            img: HIW2img,
                            imgDark: HIW2imgDark,
                            title: "Certification",
                            desc: "Activities including testing, documentation, filings, to meet go-to-market requirements",
                        },
                        {
                            id: 3,
                            img: HIW3img,
                            imgDark: HIW3imgDark,
                            title: "Market",
                            desc: "Release product to market in retail",
                        },
                    ]}
                />

                {/* SECTION */}
                {/* <div className="relative py-16">
                    <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
                    <SectionGridAuthorBox />
                </div> */}

                {/* SECTION */}
                {/* <SectionGridCategoryBox /> */}

                {/* SECTION 1 */}
                {/* <SectionSliderNewCategories
                    heading="Explore by types of stays"
                    subHeading="Explore houses based on 10 types of stays"
                    categoryCardType="card5"
                    itemPerRow={5}
                    uniqueClassName="PageHome_s3"
                /> */}

                {/* SECTION */}
                {/* <SectionVideos /> */}

                {/* SECTION */}
                {/* <div className="relative py-16">
                    <BackgroundSection />
                    <SectionClientSay uniqueClassName="PageHome_" />
                </div> */}
            </div>
        </div>
    );
}

export default HomePage;
