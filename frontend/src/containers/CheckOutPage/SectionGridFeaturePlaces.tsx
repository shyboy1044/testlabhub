import React, { FC, ReactNode } from "react";
import { StayDataType } from "data/types";
import StayCard from "./StayCard";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import OrderSummary from "./OrderSummary";
import ButtonPrimary from "shared/Button/ButtonPrimary";

// OTHER DEMO WILL PASS PROPS

//
export interface SectionGridFeaturePlacesProps {
    gridClass?: string;
    heading?: ReactNode;
    subHeading?: ReactNode;
    headingIsCenter?: boolean;
    tabs?: string[];
}
interface Order {
    id: number;
    photourl: string;
    price: number;
    name: string;
    quantity: number;
}
const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
    gridClass = "",
}) => {
    const renderCard = (stay: StayDataType) => {
        return <StayCard key={stay.id} data={stay} addItem={addItem} />;
    };
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState(false);
    const [email, setEmail] = useState<string>("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [orders, setOrders] = useState<Order[]>([]);
    const [willpay, setWillpay] = useState(false);
    const paynow = () => {
        setWillpay(true);
    };
    useEffect(() => {
        if (
            localStorage.getItem("email") &&
            localStorage.getItem("email") != ""
        ) {
            setEmail(localStorage.getItem("email") ?? "");
        }
    }, []);
    const addItem = (newOrder: Order) => {
        const isDuplicate = orders.some((order) => order.id === newOrder.id);
        if (!isDuplicate) {
            setOrders([...orders, newOrder]);
        } else {
            toast("Already added into cart!");
        }
    };
    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);
    useEffect(() => {
        let newTotal = 0;
        for (let i = 0; i < orders.length; i++) {
            newTotal += orders[i].price * orders[i].quantity;
        }
        setTotal(newTotal);
    }, [orders]);
    const navigate = useNavigate();

    const paydone = (payId: string) => {
        let data = new FormData();
        data.append("email", email);
        data.append("orders", JSON.stringify(orders));
        data.append("payId", payId);
        fetch(process.env.REACT_APP_API_URL + "/paydone", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    toast("You are succeessfuly purchased!");
                    navigate("/");
                })
            )
            .catch((err) => console.log(err));
    };
    console.log(orders);
    const fetchPosts = async (page: any) => {
        try {
            fetch(process.env.REACT_APP_API_URL + `/store?page=${page}`, {
                method: "GET",
            })
                .then((res) =>
                    res.json().then((res) => {
                        setItems(res.data);
                        setCurrentPage(res.current_page);
                        setTotalPages(res.last_page);
                    })
                )
                .catch((err) => console.log(err));
        } catch (error) {
            console.error("There was an error fetching the posts!", error);
        }
    };
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    const checkout = () => {
        setCart(true);
    };
    const continueOrder = () => {
        setCart(false);
    };
    const decrease = (id: number) => {
        const updatedOrders = orders.map((order) =>
            order.id === id
                ? {
                      ...order,
                      quantity:
                          order.quantity - 1 == 0 ? 1 : order.quantity - 1,
                  }
                : order
        );
        setOrders(updatedOrders);
    };
    const increase = (id: number) => {
        const updatedOrders = orders.map((order) =>
            order.id === id
                ? {
                      ...order,
                      quantity: order.quantity + 1,
                  }
                : order
        );
        setOrders(updatedOrders);
    };
    const remove = (id: number) => {
        const updatedOrders = orders.filter((order) => order.id !== id);
        setOrders(updatedOrders);
    };
    return (
        <div className="nc-SectionGridFeaturePlaces relative mt-20">
            <ToastContainer />
            {cart == true ? (
                <div>
                    <div
                        className="flex justify-center mb-10 cursor-pointer"
                        onClick={continueOrder}
                    >
                        <div className="relative py-2 text-blue-700 underline">
                            Continue order
                        </div>
                    </div>
                    <div className="font-sans max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <div className="bg-gray-100 p-6 rounded-md">
                                    <h2 className="text-2xl font-extrabold text-gray-800">
                                        Your Cart
                                    </h2>
                                    <div className="space-y-4 mt-8">
                                        {orders.map((order) => {
                                            return (
                                                <>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                                                            <img
                                                                src={
                                                                    order.photourl
                                                                }
                                                                className="w-full h-full object-contain"
                                                                alt=""
                                                            />
                                                        </div>

                                                        <div className="w-full">
                                                            <h3 className="text-base font-semibold text-gray-800">
                                                                {order.name}
                                                            </h3>
                                                            <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
                                                                ${order.price}
                                                            </h6>

                                                            <div className="flex gap-4 mt-4">
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-2.5 fill-current"
                                                                            viewBox="0 0 124 124"
                                                                            onClick={() =>
                                                                                decrease(
                                                                                    order.id
                                                                                )
                                                                            }
                                                                        >
                                                                            <path
                                                                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                                                                data-original="#000000"
                                                                            ></path>
                                                                        </svg>

                                                                        <span className="mx-2.5">
                                                                            {
                                                                                order.quantity
                                                                            }
                                                                        </span>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-2.5 fill-current"
                                                                            viewBox="0 0 42 42"
                                                                            onClick={() =>
                                                                                increase(
                                                                                    order.id
                                                                                )
                                                                            }
                                                                        >
                                                                            <path
                                                                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                                                                data-original="#000000"
                                                                            ></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>

                                                                <div className="ml-auto">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-5 fill-red-500 inline cursor-pointer"
                                                                        viewBox="0 0 24 24"
                                                                        onClick={() =>
                                                                            remove(
                                                                                order.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <path
                                                                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                                            data-original="#000000"
                                                                        ></path>
                                                                        <path
                                                                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                                            data-original="#000000"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr className="border-gray-300" />
                                                </>
                                            );
                                        })}
                                        <div className="font-semibold">
                                            Total:${total}
                                        </div>
                                        <div>
                                            <ButtonPrimary onClick={paynow}>
                                                Pay Now
                                            </ButtonPrimary>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {willpay == true ? (
                                <OrderSummary
                                    amount={total}
                                    paydone={paydone}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {" "}
                    <div
                        className="flex justify-center mb-10 cursor-pointer"
                        onClick={checkout}
                    >
                        <div className="relative py-2 ">
                            <div className="t-0 absolute left-3">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                    {orders.length}
                                </p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="file: mt-4 h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
                    >
                        {items.map((stay) => renderCard(stay))}
                    </div>
                    <div className="flex mt-16 justify-center items-center">
                        <div>
                            <button
                                className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>
                                {" "}
                                Page {currentPage} of {totalPages}{" "}
                            </span>
                            <button
                                className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionGridFeaturePlaces;
