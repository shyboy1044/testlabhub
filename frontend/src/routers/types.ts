import { ComponentType } from "react";

export interface LocationStates {
    "/"?: {};
    "/#"?: {};
    "/about/our-team"?: {};
    "/about/our-partners"?: {};
    "/about/our-capabilities"?: {};
    "/services/resources/products"?: {};
    "/services/resources/reference-links"?: {};
    "/services/resources/rf-exposure"?: {};
    "/services/resources/product-safety"?: {};
    "/services/resources/emc"?: {};
    "/services/eSource"?: {};
    "/services/compliance-management"?: {};
    "/services/consulting"?: {};
    "/lab-zipper"?: {};
    "/lab-zipper/dashboard"?: {};
    "/lab-zipper/images/gallery"?: {};
    "/lab-zipper/videos/gallery"?: {};
    "/lab-reservation/schedule-testing"?: {};
    "/lab-reservation/faqs"?: {};
    "/lab-reservation/submit-lab-review"?: {};
    "/lab-rating-directory"?: {};
    "/lab-rating-directory/view-listing"?: {};
    "/lab-rating-directory/submit-listing"?: {};
    "/home-search"?: {};
    "/reserve-lab"?: {};
    "/contract"?: {};
    "/lab-reservation/rewards"?: {};
    "/submit-rfq"?: {};
    "/submit-rfq/devices"?: {};
    "/submit-rfq/modules"?: {};
    "/submit-rfq/get-certified"?: {};
    "/store"?: {};
    "/home"?: {};
    "/home-2"?: {};
    "/home-3"?: {};
    "/home-1-header-2"?: {};
    //
    "/listing-flights"?: {};
    //
    "/listing-stay"?: {};
    "/listing-stay-map"?: {};
    "/listing-stay-detail"?: {};
    //
    "/listing-experiences"?: {};
    "/listing-experiences-map"?: {};
    "/listing-experiences-detail"?: {};
    //
    "/listing-real-estate"?: {};
    "/listing-real-estate-map"?: {};
    "/listing-real-estate-detail"?: {};
    //
    "/listing-car"?: {};
    "/listing-car-map"?: {};
    "/listing-car-detail"?: {};
    //
    "/checkout"?: {};
    "/pay-done"?: {};
    //
    "/account"?: {};
    "/account-savelists"?: {};
    "/account-password"?: {};
    "/account-billing"?: {};
    //
    "/about/blog"?: {};
    "/blog-single"?: {};
    //
    "/add-listing-1"?: {};
    "/add-listing-2"?: {};
    "/add-listing-3"?: {};
    "/add-listing-4"?: {};
    "/add-listing-5"?: {};
    "/add-listing-6"?: {};
    "/add-listing-7"?: {};
    "/add-listing-8"?: {};
    "/add-listing-9"?: {};
    "/add-listing-10"?: {};
    //
    "/author"?: {};
    "/search"?: {};
    "/about"?: {};
    "/contact-us"?: {};
    "/login"?: {};
    "/signup"?: {};
    "/business-login"?: {};
    "/business-signup"?: {};
    "/forgot-pass"?: {};
    "/page404"?: {};
    "/subscription"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
    path: PathName;
    exact?: boolean;
    component: ComponentType<Object>;
}
