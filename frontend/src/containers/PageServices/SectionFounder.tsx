import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";
import image2 from "images/custom/our_team/DanKerns.png";
import image3 from "images/custom/our_team/PhilChadwick.png";
import image4 from "images/custom/our_team/TerryClancy.png";
export interface People {
    id: string;
    name: string;
    job: string;
    avatar: string;
}

const FOUNDER_DEMO: People[] = [
    {
        id: "1",
        name: `Bayo Olabisi`,
        job: "CEO",
        avatar: "",
    },
    {
        id: "4",
        name: `Dan Kerns`,
        job: "Technical Consultant",
        avatar: image2,
    },
    {
        id: "3",
        name: `Phil Chadwick`,
        job: "With expertise in standards assessment and product management from",
        avatar: image3,
    },
    {
        id: "2",
        name: `Terry Clancy`,
        job: "With expertise in standards assessment and product management from",
        avatar: image4,
    },
];

const SectionFounder = () => {
    return (
        <div className="nc-SectionFounder relative">
            <Heading desc="">Our leadership team includes:</Heading>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
                {FOUNDER_DEMO.map((item) => (
                    <div key={item.id} className="max-w-sm">
                        <NcImage
                            containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
                            className="absolute inset-0 object-cover"
                            src={item.avatar}
                        />
                        <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200 text-center">
                            {item.name}
                        </h3>
                        <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400 text-center">
                            {item.job}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionFounder;
