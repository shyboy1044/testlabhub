declare module "react-helmet";
declare module "react-use-keypress";

interface Google {
    accounts: {
        id: {
            initialize: (config: {
                client_id: string;
                callback: (response: any) => void;
            }) => void;
            renderButton: (
                element: HTMLElement,
                options: { theme: string; size: string }
            ) => void;
            disableAutoSelect: () => void;
        };
    };
}

interface Window {
    google: Google;
}
