import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/custom/logo.png";
import logoLightImg from "images/custom/logo.png";
import LogoSvgLight from "images/custom/logo.png";
import LogoSvg from "images/custom/logo.png";

export interface LogoProps {
    img?: string;
    imgLight?: string;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
    img = logoImg,
    imgLight = logoLightImg,
    className = "w-26",
}) => {
    return (
        <Link
            to="/"
            className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
        >
            {/* <LogoSvgLight />
            <LogoSvg /> */}
            <img
                className={`block max-h-16 ${imgLight ? "dark:hidden" : ""}`}
                src={img}
                alt="Logo"
            />
            {/* THIS USE FOR MY CLIENT */}
            {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
            {/* {img ? (
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )} */}
        </Link>
    );
};

export default Logo;
