import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import HomePage from "containers/PageHome/HomePage";
import Page404 from "containers/Page404/Page404";
import ListingStayPage from "containers/ListingStayPage/ListingStayPage";
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage";
import ListingExperiencesPage from "containers/ListingExperiencesPage/ListingExperiencesPage";
import ListingExperiencesMapPage from "containers/ListingExperiencesPage/ListingExperiencesMapPage";
import ListingCarPage from "containers/ListingCarPage/ListingCarPage";
import ListingCarMapPage from "containers/ListingCarPage/ListingCarMapPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import CheckOutOrder from "containers/CheckOutPage/CheckOutOrder";
import PayPage from "containers/PayPage/PayPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountBilling from "containers/AccountPage/AccountBilling";
import PageContact from "containers/PageContact/PageContact";
import LabRatingDirectory from "containers/LabListing/LabRatingDirectory";
import ViewListing from "containers/LabListing/ViewListing";
import SubmitListing from "containers/LabListing/SubmitListing";
import HomeSearch from "components/SectionHero/HomeSearch";

import Contract from "containers/LabListing/Contract";

import PageAbout from "containers/PageAbout/PageAbout";
import LabZipperPage from "containers/LabZipper/LabZipperPage";
import LabZipperDashboardPage from "containers/LabZipper/LabzipperDashboardPage";
import LabZipperImagesPage from "containers/LabZipper/LabZipperImagesPage";
import LabZipperVideosPage from "containers/LabZipper/LabzipperVideosPage";
import OurTeam from "containers/PageAbout/OurTeam";
import OurPartners from "containers/PageAbout/OurPartners";
import Store from "containers/CheckOutPage/Store";
import OurCapabilities from "containers/PageAbout/OurCapabilities";
import ResourceProducts from "containers/PageServices/ResourceProducts";
import ResourceReferenceLinks from "containers/PageServices/ResourceReferenceLinks";
import RfExposure from "containers/PageServices/RfExposure";
import ProductSafety from "containers/PageServices/ProductSafety";
import Emc from "containers/PageServices/Emc";
import Esource from "containers/PageServices/Esource";
import ComplianceManagement from "containers/PageServices/ComplianceManagement";
import Consulting from "containers/PageServices/Consulting";
import ScheduleTesting from "containers/LabReservation/ScheduleTesting";
import Faqs from "containers/LabReservation/Faqs";
import SubmitLabReview from "containers/LabReservation/SubmitLabReview";
import Rewards from "containers/LabReservation/Rewards";
import SubmitRfq from "containers/SubmitRfq/SubmitRfq";
import SubmitRfqDevices from "containers/SubmitRfq/Devices";
import SubmitRfqModules from "containers/SubmitRfq/Modules";
import SubmitRfqCertified from "containers/SubmitRfq/Certified";
import ReserveLab from "containers/SubmitRfq/ReserveLab";

import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import BusinessSignUp from "containers/PageSignUp/BusinessSignUp";
import BusinessLogin from "containers/PageLogin/BusinessLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1";
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2";
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3";
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4";
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5";
import PageAddListing6 from "containers/PageAddListing1/PageAddListing6";
import PageAddListing7 from "containers/PageAddListing1/PageAddListing7";
import PageAddListing8 from "containers/PageAddListing1/PageAddListing8";
import PageAddListing9 from "containers/PageAddListing1/PageAddListing9";
import PageAddListing10 from "containers/PageAddListing1/PageAddListing10";
import PageHome2 from "containers/PageHome/PageHome2";
import ListingRealEstateMapPage from "containers/ListingRealEstatePage/ListingRealEstateMapPage";
import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
import SiteHeader from "containers/SiteHeader";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";
import FooterNav from "components/FooterNav";
import useWindowSize from "hooks/useWindowResize";
import PageHome3 from "containers/PageHome/PageHome3";
import ListingStayDetailPage from "containers/ListingDetailPage/listing-stay-detail/ListingStayDetailPage";
import ListingCarDetailPage from "containers/ListingDetailPage/listing-car-detail/ListingCarDetailPage";
import ListingExperiencesDetailPage from "containers/ListingDetailPage/listing-experiences-detail/ListingExperiencesDetailPage";

export const pages: Page[] = [
    { path: "/", exact: true, component: HomePage },
    { path: "/#", exact: true, component: PageHome },
    { path: "/about/our-team", exact: true, component: OurTeam },
    { path: "/store", exact: true, component: Store },
    { path: "/about/our-partners", exact: true, component: OurPartners },
    {
        path: "/about/our-capabilities",
        exact: true,
        component: OurCapabilities,
    },
    {
        path: "/services/resources/products",
        exact: true,
        component: ResourceProducts,
    },
    {
        path: "/services/resources/reference-links",
        exact: true,
        component: ResourceReferenceLinks,
    },
    {
        path: "/services/resources/rf-exposure",
        exact: true,
        component: RfExposure,
    },
    {
        path: "/services/resources/product-safety",
        exact: true,
        component: ProductSafety,
    },
    {
        path: "/services/resources/emc",
        exact: true,
        component: Emc,
    },
    {
        path: "/services/eSource",
        exact: true,
        component: Esource,
    },
    {
        path: "/services/compliance-management",
        exact: true,
        component: ComplianceManagement,
    },
    {
        path: "/services/consulting",
        exact: true,
        component: Consulting,
    },
    {
        path: "/lab-reservation/schedule-testing",
        exact: true,
        component: ScheduleTesting,
    },
    {
        path: "/lab-zipper",
        exact: true,
        component: LabZipperPage,
    },
    {
        path: "/lab-zipper/dashboard",
        exact: true,
        component: LabZipperDashboardPage,
    },
    {
        path: "/lab-zipper/images/gallery",
        exact: true,
        component: LabZipperImagesPage,
    },
    {
        path: "/lab-zipper/videos/gallery",
        exact: true,
        component: LabZipperVideosPage,
    },
    {
        path: "/lab-reservation/faqs",
        exact: true,
        component: Faqs,
    },
    {
        path: "/lab-reservation/submit-lab-review",
        exact: true,
        component: SubmitLabReview,
    },
    {
        path: "/lab-reservation/rewards",
        exact: true,
        component: Rewards,
    },
    {
        path: "/submit-rfq",
        exact: true,
        component: SubmitRfq,
    },
    {
        path: "/reserve-lab",
        exact: true,
        component: ReserveLab,
    },
    {
        path: "/submit-rfq/devices",
        exact: true,
        component: SubmitRfqDevices,
    },
    {
        path: "/submit-rfq/modules",
        exact: true,
        component: SubmitRfqModules,
    },
    {
        path: "/submit-rfq/get-certified",
        exact: true,
        component: SubmitRfqCertified,
    },
    { path: "/home", exact: true, component: PageHome },
    { path: "/home-1-header-2", exact: true, component: PageHome },
    { path: "/home-2", component: PageHome2 },
    { path: "/home-3", component: PageHome3 },
    //
    { path: "/listing-stay", component: ListingStayPage },
    { path: "/listing-stay-map", component: ListingStayMapPage },
    { path: "/listing-stay-detail", component: ListingStayDetailPage },
    { path: "/lab-rating-directory", component: LabRatingDirectory },
    { path: "/contract", component: Contract },
    {
        path: "/lab-rating-directory/view-listing",
        component: ViewListing,
    },
    {
        path: "/lab-rating-directory/submit-listing",
        component: SubmitListing,
    },

    //
    {
        path: "/listing-experiences",
        component: ListingExperiencesPage,
    },
    {
        path: "/listing-experiences-map",
        component: ListingExperiencesMapPage,
    },
    {
        path: "/listing-experiences-detail",
        component: ListingExperiencesDetailPage,
    },
    {
        path: "/home-search",
        component: HomeSearch,
    },
    //
    { path: "/listing-car", component: ListingCarPage },
    { path: "/listing-car-map", component: ListingCarMapPage },
    { path: "/listing-car-detail", component: ListingCarDetailPage },
    //
    { path: "/listing-real-estate-map", component: ListingRealEstateMapPage },
    { path: "/listing-real-estate", component: ListingRealEstatePage },
    //
    { path: "/listing-flights", component: ListingFlightsPage },
    //
    { path: "/checkout", component: CheckOutOrder },
    { path: "/pay-done", component: PayPage },
    //
    { path: "/author", component: AuthorPage },
    { path: "/account", component: AccountPage },
    { path: "/account-password", component: AccountPass },
    { path: "/account-savelists", component: AccountSavelists },
    { path: "/account-billing", component: AccountBilling },
    //
    { path: "/about/blog", component: BlogPage },
    { path: "/blog-single", component: BlogSingle },
    //
    { path: "/add-listing-1", component: PageAddListing1 },
    { path: "/add-listing-2", component: PageAddListing2 },
    { path: "/add-listing-3", component: PageAddListing3 },
    { path: "/add-listing-4", component: PageAddListing4 },
    { path: "/add-listing-5", component: PageAddListing5 },
    { path: "/add-listing-6", component: PageAddListing6 },
    { path: "/add-listing-7", component: PageAddListing7 },
    { path: "/add-listing-8", component: PageAddListing8 },
    { path: "/add-listing-9", component: PageAddListing9 },
    { path: "/add-listing-10", component: PageAddListing10 },
    //
    { path: "/contact-us", component: PageContact },
    { path: "/about", component: PageAbout },
    { path: "/business-login", component: BusinessLogin },
    { path: "/business-signup", component: BusinessSignUp },
    { path: "/signup", component: PageSignUp },
    { path: "/login", component: PageLogin },
    { path: "/subscription", component: PageSubcription },
    //
];

const MyRoutes = () => {
    let WIN_WIDTH = useWindowSize().width;
    if (typeof window !== "undefined") {
        WIN_WIDTH = WIN_WIDTH || window.innerWidth;
    }

    return (
        <BrowserRouter>
            <ScrollToTop />
            <SiteHeader />

            <Routes>
                {pages.map(({ component, path }) => {
                    const Component = component;
                    return (
                        <Route key={path} element={<Component />} path={path} />
                    );
                })}
                <Route element={<Page404 />} />
            </Routes>

            {WIN_WIDTH < 768 && <FooterNav />}
            <Footer />
        </BrowserRouter>
    );
};

export default MyRoutes;
