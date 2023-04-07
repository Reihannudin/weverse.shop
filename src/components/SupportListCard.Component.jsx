import React from "react";

export default function SupportListCardComponent() {
    return (
        <div className="text-left">
                <details className=" rounded-lg">
                    <summary className="font-medium cursor-pointer " style={{ fontSize:"15px" , borderBottom:"1px solid #ebebebe"}}>How to create Accordion (FAQ) in react ?</summary>
                    <div className="mt-3">
                        <p>The shipping start date for pre-orders are announced on the product description pages and pre-order announcements.</p>
                        <br/>
                        <p>Pre-orders are clearly marked with ""This product is a pre-ordered product"" text and the scheduled shipping start date.</p>
                        <p>The shipping schedule may be delayed due to product and logistics issues.</p>
                    </div>
                </details>
        </div>
    );
}