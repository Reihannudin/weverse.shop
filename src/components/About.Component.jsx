
export const AboutComponent = () => {
    return(
        <>
            <div className="w-9/12 mb-14 mx-auto">
                <div className="w-10/12 mx-auto">
                    <div className="text-left w-10/12 mx-auto">
                        <h3 className="font-bold" style={{ fontSize:"20px"}}>About Return and Exchange</h3>
                        <div>
                            <div className="my-6">
                                <p  className="font-medium" style={{ fontSize:"16px"}}>Return & Exchange Request</p>
                                <ul className="list-disc ms-5 my-3">
                                    <li className="my-2" style={{ fontSize:"15px"}}>You can request return or exchange by going to My > My Orders > Order Details OR by checking our FAQ.</li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <p  className="font-medium" style={{ fontSize:"16px"}}>Return & Exchange Period</p>
                                <ul className="list-disc ms-5 my-3">
                                    {/*Return & exchange requests must be made within 7 days of receiving the order.*/}
                                    <li className="my-2"  style={{ fontSize:"15px"}}>Return & exchange requests must be made within 7 days of receiving the order.</li>
                                    <li className="my-2"  style={{ fontSize:"15px"}}>If the order was processed differently from what was originally listed or advertised, or from the terms and conditions, customers can request either returns or exchanges within 3 months of receiving the order.</li>
                                    <li className="my-2"  style={{ fontSize:"15px"}}>(If the customer change of mind, the customer is not eligible for exchanges, but can cancel the purchase by returning the product.)</li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <p  className="font-medium" style={{ fontSize:"16px"}}>Return & Exchange Cost</p>
                                <ul className="list-disc ms-5 my-3">
                                    <li className="my-2"  style={{ fontSize:"15px"}}>If the customer wants to return the product(s) due to a change of mind, the customer is responsible for and must pay the shipping fee to send the product(s) back for return.</li>
                                    <li className="my-2"  style={{ fontSize:"15px"}}>In case of returns due to product defects, wrong delivery, or shipping issues, the seller is responsible for and must pay the shipping fee for the product(s) returned.</li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <p  className="font-medium" style={{ fontSize:"16px"}}>Refund Conditions</p>
                                <ul className="list-disc ms-5 my-3">
                                    <li className="my-2" style={{ fontSize:"15px"}}>We reserve the right to deny returns due to a change of mind or in case of opened product(s).</li>
                                    <li className="my-2" style={{ fontSize:"15px"}}>We reserve the right to deny returns if the value of product(s) is deemed to be depreciated due to any trace of product usage, removal or label or tags, or disposal of product box or wrapping.</li>
                                    <li className="my-2" style={{ fontSize:"15px"}}>You can exchange your order only with the identical merch with identical options. If not, you must re-order after returning your order.</li>
                                    <li className="my-2" style={{ fontSize:"15px"}}>We cannot exchange your order even when you apply for it when the seller does not have stocks. If you apply for an exchange when the seller does not have stocks, we cancel your order and make a refund by the payment method you chose when placing an order.</li>
                                </ul>
                            </div>

                            <div className="my-6">
                                <p  className="font-medium" style={{ fontSize:"16px"}}>Compensation for Consumer Damages and Refund Delays</p>
                                <ul className="list-disc ms-5 my-3">
                                    <li style={{ fontSize:"15px"}}>Return & exchange requests must be made within 7 days of receiving the order.</li>
                                    <li style={{ fontSize:"15px"}}>If the order was processed differently from what was originally listed or advertised, or from the terms and conditions, customers can request either returns or exchanges within 3 months of receiving the order.</li>
                                    <li style={{ fontSize:"15px"}}>(If the customer change of mind, the customer is not eligible for exchanges, but can cancel the purchase by returning the product. As for door-to-door delivery via DHL, a claim can be filed within 30 days after the order has been shipped out. Please note that after 30 days as mentioned above, you may not be able to file a claim.)</li>

                                </ul>
                            </div>
                            <div className="my-6">
                                <p  className="font-medium" style={{ fontSize:"16px"}}>For international customers</p>
                                <ul className="list-disc ms-5 my-3">
                                    <li className="my-2" style={{ fontSize:"15px"}}>Some of the policy above are only applicable to customers in South Korea. For international customers, please check FAQ to find more details about return and exchange policy for international orders.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}