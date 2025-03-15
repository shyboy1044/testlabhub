import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
export interface WidgetFooterMenu {
    id: string;
    title: string;
    menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
    {
        id: "5",
        title: "Lab Reservation",
        menus: [
            {
                href: "/lab-reservation/schedule-testing",
                label: "Schedule Testing",
            },
            {
                href: "/lab-reservation/faqs",
                label: "FAQs",
            },
            {
                href: "/lab-reservation/submit-lab-review",
                label: "Submit Lab Review",
            },
            {
                href: "/lab-reservation/rewards",
                label: "Rewards",
            },
        ],
    },
    {
        id: "1",
        title: "Services",
        menus: [
            { href: "/store", label: "Store" },
            {
                href: "/services/compliance-management",
                label: "Compliance Management",
            },
            { href: "/services/consulting", label: "Consulting" },
            { href: "/services/eSource", label: "Esource" },
            { href: "/services/resource/emc", label: "Resource" },
        ],
    },
    {
        id: "2",
        title: "About",
        menus: [
            { href: "/about/capabilities", label: "Capabilities" },
            { href: "/about/our-team", label: "Our Team" },
            { href: "/about/our-partners", label: "Our Partners" },
            { href: "/about/blog", label: "Blog" },
        ],
    },
    {
        id: "4",
        title: "Schedule Now",
        menus: [
            {
                href: "/submit-rfq",
                label: "Submit Device for Certification Test",
            },
            {
                href: "/reserve-lab",
                label: "Reserve Lab for Pre-Certification Testing",
            },
        ],
    },
];

const Footer: React.FC = () => {
    const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
        return (
            <div key={index} className="text-sm hidden lg:block">
                <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                    {menu.title}
                </h2>
                <ul className="mt-5 space-y-4">
                    {menu.menus.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                to={item.href || ""}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="hidden lg:block nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
            <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
                <div className="grid  grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col m-auto">
                    <div className="col-span-2 flex items-center md:col-span-3">
                        <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
                    </div>
                </div>
                {widgetMenus.map(renderWidgetMenuItem)}
            </div>
        </div>
    );
};

export default Footer;
