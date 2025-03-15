import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

const productChildrenMenu: NavItemType[] = [
    {
        id: ncNanoId(),
        href: "/submit-rfq",
        name: "Electronics",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Accessories & Supplies",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Camera &amp; Photo",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Camera &amp; Photo",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Car &amp; Vehicle Electronics",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Cell Phones &amp; Accessories",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Computers &amp; Accessories",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "GPS &amp; Navigation",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Headphones",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Home Audio",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Office Electronis",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Portable Audio &amp; Video",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Security &amp; Surveillance",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Service Plans",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Television &amp; Audio",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Video Game Consoles &amp; Accessories",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Video Projectors",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Wearable Technology",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "eBook Readers &amp; Accessories",
            },
        ],
    },
    {
        id: ncNanoId(),
        href: "/submit-rfq",
        name: "Computers",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Computer Accessories &amp; Peripherals",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Computer Components",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Computer &amp; Tablets",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Data Storage",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "External Components",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Laptop Accessories",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Monitors",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Networking Products",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Power Strips &amp; Surge Protectors",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Printers",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Scanners",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Servers",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Tablet Accessories",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Tablet Replacement Parts",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Warranties &amp; Services",
            },
        ],
    },
    {
        id: ncNanoId(),
        href: "/submit-rfq",
        name: "Smart Home",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Telcron Smart Home",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Smart Home Lighting",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Smart Locks and Entry",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Security Cameras and Systems",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Plugs and Outlets",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "New Smart Devices",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Heating and Cooling",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Detector and Sensors",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Home Entertainment",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Pet",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Voice Assistants and Hubs",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Kitchen",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Vacuums and Mops",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Lawn and Garden",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "WIFI and Networking",
            },
        ],
    },
    {
        id: ncNanoId(),
        href: "/submit-rfq",
        name: "Industrial & Scientific",
    },
];
const demoChildMenus: NavItemType[] = [
    {
        id: ncNanoId(),
        href: "/lab-reservation/schedule-testing",
        name: "Schedule Testing",
    },
    {
        id: ncNanoId(),
        href: "/lab-reservation/faqs",
        name: "FAQs",
    },
    {
        id: ncNanoId(),
        href: "/lab-reservation/submit-lab-review",
        name: "Submit Lab Review",
    },
    {
        id: ncNanoId(),
        href: "/lab-reservation/rewards",
        name: "Rewards",
    },
];
const aboutChildrenMenus: NavItemType[] = [
    {
        id: ncNanoId(),
        href: "/",
        name: "Our Company",
    },
    {
        id: ncNanoId(),
        href: "/about/our-team",
        name: "Our Team",
    },
    {
        id: ncNanoId(),
        href: "/about/our-partners",
        name: "Our Partners",
    },
    {
        id: ncNanoId(),
        href: "/about/our-capabilities",
        name: "Our Capabilities",
    },
    {
        id: ncNanoId(),
        href: "/about/blog",
        name: "Blog",
    },
    {
        id: ncNanoId(),
        href: "/contact-us",
        name: "Contacts",
    },
];
const otherPageChildMenus: NavItemType[] = [
    {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
    },
    {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
    },
    {
        id: ncNanoId(),
        href: "/about",
        name: "About",
    },
    {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
    },
    {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
    },
    {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
    },
    {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
    },
];

const templatesChildrenMenus: NavItemType[] = [
    //
    {
        id: ncNanoId(),
        href: "/services/compliance-management",
        name: "Compliance Management",
    },
    { id: ncNanoId(), href: "/services/consulting", name: "Consulting" },
    { id: ncNanoId(), href: "/services/eSource", name: "Esource" },
    {
        id: ncNanoId(),
        href: "",
        name: "Resources",
        type: "dropdown",
        children: [
            {
                id: ncNanoId(),
                href: "/services/resources/emc",
                name: "EMC",
            },
            {
                id: ncNanoId(),
                href: "/services/resources/product-safety",
                name: "Product Safety",
            },
            {
                id: ncNanoId(),
                href: "/services/resources/rf-exposure",
                name: "RF EXPOSURE",
            },
            {
                id: ncNanoId(),
                href: "/services/resources/reference-links",
                name: "Reference Links",
            },
            {
                id: ncNanoId(),
                href: "/services/resources/products",
                name: "Products",
            },
        ],
    },
];

export const NAVIGATION_DEMO: NavItemType[] = [
    {
        id: ncNanoId(),
        href: "/lab-reservation/schedule-testing",
        name: "LAB RESERVATION",
        type: "dropdown",
        children: demoChildMenus,
    },
    {
        id: ncNanoId(),
        href: "/submit-rfq",
        name: "PRODUCTS",
        type: "dropdown",
        children: productChildrenMenu,
    },
    {
        id: ncNanoId(),
        href: "/submit-rfq",
        name: "INDUSTRIES",
        type: "dropdown",
        isNew: true,
        children: [
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Retail",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Manufacturing",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Finance",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Transportation",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Healthcare",
            },
            {
                id: ncNanoId(),
                href: "/submit-rfq",
                name: "Partner Solutions",
            },
        ],
    },
    {
        id: ncNanoId(),
        href: "/services/compliance-management",
        name: "SERVICES",
        type: "dropdown",
        children: templatesChildrenMenus,
    },

    {
        id: ncNanoId(),
        href: "/store",
        name: "STORE",
    },
    {
        id: ncNanoId(),
        href: "/lab-zipper",
        name: "TELCRON REWARDS",
    },
    {
        id: ncNanoId(),
        href: "/about/our-team",
        name: "ABOUT",
        type: "dropdown",
        children: aboutChildrenMenus,
    },
    {
        id: ncNanoId(),
        href: "/lab-rating-directory",
        name: "LAB RATINGS/DIRECTORY",
    },
];
