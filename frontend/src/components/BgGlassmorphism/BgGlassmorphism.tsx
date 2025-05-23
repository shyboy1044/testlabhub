import React, { FC } from "react";

export interface BgGlassmorphismProps {
    className?: string;
}

const BgGlassmorphism: FC<BgGlassmorphismProps> = ({
    className = "absolute inset-x-0  min-h-0 pl-20 py-24 flex overflow-hidden z-0 bg-[#700203] dark:bg-gray-900",
}) => {
    return (
        <div
            className={`nc-BgGlassmorphism ${className} bg-first`}
            data-nc-id="BgGlassmorphism"
        >
            <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
            <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
        </div>
    );
};

export default BgGlassmorphism;
