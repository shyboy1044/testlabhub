import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";

export interface SocialsList1Props {
    className?: string;
}

const socials: SocialType[] = [
    {
        name: "Youtube",
        icon: "lab la-youtube",
        href: "https://www.youtube.com/@TelcronLLC",
    },
    {
        name: "Facebook",
        icon: "lab la-facebook-square",
        href: "https://www.facebook.com/telcron/shop",
    },
    {
        name: "Twitter",
        icon: "lab la-twitter",
        href: "https://twitter.com/telcron_/status/1646591640335785984?t=7KH9JSM-5WQpj6CoAhJzQA&s=19",
    },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
    const renderItem = (item: SocialType, index: number) => {
        return (
            <a
                href={item.href}
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                key={index}
            >
                <i className={item.icon}></i>
                <span className="hidden lg:block text-sm">{item.name}</span>
            </a>
        );
    };

    return (
        <div
            className={`nc-SocialsList1 ${className}`}
            data-nc-id="SocialsList1"
        >
            <a
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                key={908}
            >
                <span className="hidden lg:block text-sm">+1 973 348 9011</span>
            </a>
            <a
                href="mailto:info@telcron.net"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                key={909}
            >
                <span className="hidden lg:block text-sm">
                    info@telcron.net
                </span>
            </a>
            {socials.map(renderItem)}
        </div>
    );
};

export default SocialsList1;
