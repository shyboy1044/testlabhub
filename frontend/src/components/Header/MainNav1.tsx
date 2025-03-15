import React, { FC } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "components/HeroSearchForm2Mobile/HeroSearchForm2MobileFactory";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export interface MainNav1Props {
    className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(0);
    const [email, setEmail] = useState<string>("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (
            localStorage.getItem("email") &&
            localStorage.getItem("email") != ""
        ) {
            setIsLogin(1);

            setEmail(localStorage.getItem("email") ?? "");
            setType(localStorage.getItem("type") ?? "");
            setName(localStorage.getItem("name") ?? "");
        }
    }, []);
    const logout = () => {
        if (window.google && window.google.accounts) {
            window.google.accounts.id.disableAutoSelect();
            console.log("User has been logged out");
        }
        let data = new FormData();
        fetch(process.env.REACT_APP_API_URL + "/signout", {
            method: "POST",
            body: data,
        })
            .then((res) =>
                res.json().then((res) => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("type");
                    localStorage.removeItem("name");
                    window.location.href = "/";
                })
            )
            .catch((err) => console.log(err));
    };
    return (
        <div className={`nc-MainNav1 relative z-10 ${className}`}>
            <div className="px-8  py-4 lg:py-5 relative flex justify-between items-center">
                <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
                    <Logo />
                    <Navigation />
                </div>

                <div className="flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
                    {isLogin == 0 ? (
                        <div className="xl:flex items-center space-x-0.5">
                            {/* <SwitchDarkMode /> */}
                            <div className="px-1" />

                            <ButtonPrimary href="/login">Sign In</ButtonPrimary>
                        </div>
                    ) : (
                        <div className="flex">
                            <div className="xl:flex items-center space-x-0.5">
                                {/* <SwitchDarkMode /> */}
                                <div className="px-1" />
                                {type == "2" ? (
                                    <ButtonPrimary>
                                        Business/{name}
                                    </ButtonPrimary>
                                ) : (
                                    <ButtonPrimary>
                                        Personal/{name}
                                    </ButtonPrimary>
                                )}
                            </div>
                            <div className=" xl:flex items-center space-x-0.5">
                                {/* <SwitchDarkMode /> */}
                                <div className="px-1" />

                                <ButtonPrimary onClick={logout}>
                                    Log out
                                </ButtonPrimary>
                            </div>
                        </div>
                    )}

                    <div className="flex md:hidden items-center">
                        {/* <SwitchDarkMode /> */}
                        <div className="px-0.5" />
                        <MenuBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav1;
