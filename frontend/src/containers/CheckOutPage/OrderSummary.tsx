import React from "react";
import Stripe from "./Stripe";

export default function OrderSummary(props: any) {
    const { amount, paydone } = props;

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-md-6 mx-auto">
                    <Stripe total={amount} paydone={paydone} />
                </div>
            </div>
        </div>
    );
}
