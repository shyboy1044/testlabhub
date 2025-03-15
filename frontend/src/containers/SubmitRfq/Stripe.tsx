import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
interface StripeProps {
    total: number;
    paydone: any;
}
export default function Stripe({ total, paydone }: StripeProps) {
    const stripePromise = loadStripe(
        "pk_test_51PFvfK07WuOE0XTD8F6ichMgRii52lYSDastocsU2rlepQCc8yMH4HXR7Gt8LQX2zm6onqiotfH3QRsK1kukEBMz00IQsnhO8n"
    );
    const [clientSecret, setClientSecret] = useState("");
    const items = [{ amount: total }];

    useEffect(() => {
        fetchClientSecret();
    }, []);

    const fetchClientSecret = async () => {
        try {
            fetch(process.env.REACT_APP_API_URL + "/payByStripe", {
                method: "POST",
                body: JSON.stringify(items),
            })
                .then((res) =>
                    res.json().then((res) => {
                        console.log(res);
                        setClientSecret(res.clientSecret);
                    })
                )
                .catch((err) => console.log(err));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckOutForm paydone={paydone} />
                </Elements>
            )}
        </>
    );
}
