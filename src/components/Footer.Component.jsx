import {Link} from "react-router-dom";

export const FooterComponent = () => {
    return(
        <>
            <footer className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="w-10/12 mx-auto">
                    <div className="w-6/12 mx-auto">
                        <ul className="flex gap-5 mx-auto" style={{ fontSize:"15px"}}>
                            <li className="mx-auto">
                                <Link>
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li className="mx-auto">
                                <Link>
                                    <span>Terms of Use</span>
                                </Link>
                            </li>
                            <li className="mx-auto">
                                <Link>
                                    <span>Terms of Use for Paid Service</span>
                                </Link>
                            </li>
                            <li className="mx-auto">
                                <Link>
                                    <span>Cookie Policy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-10/12 my-7 mx-auto">
                        <p className="text-center" style={{ fontSize:"13px"}}>
                            COMPANYWEVERSE COMPANY Inc.CEOJOON WON CHOICALL CENTER(+82)-2-2097-1830FAX(+82)-2-2144-9399ADDRESSC, 6F, PangyoTech-onetower, 131, Bundangnaegok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of KoreaPERSONAL INFORMATION OFFICERRyeo, Sung Koo (privacy@weverseshop.io)BUSINESS REGISTRATION NUMBER716-87-01158 Business RegistrationMAIL ORDER BUSINESS REGISTRATION NUMBER2022-Seongnam Bundang A-0557HOSTED BYAmazon Web Services, Inc.
                            <br/>
                            <br/>
                            Weverse Shop is the e-commerce intermediary of the merch, not the direct e-commerce seller. Thus, Weverse Shop bears no responsibility for the merch, transaction information of the merch and the transaction of the merch. The shipping management and shipping responsibility of tangible products fall on Weverse Company.
                            <br/>
                            <br/>
                            Copyright by WEVERSE COMPANY INC. or its affiliates (WEVERSE JAPAN & WEVERSE AMERICA Inc) All rights reserved.
                        </p>
                    </div>
                    <div>
                        <span  style={{ fontSize:"14px"}}>© WEVERSE COMPANY Inc.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

