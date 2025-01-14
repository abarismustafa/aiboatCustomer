import React from "react";
import PlansCards from "./PlansCards";

export default function AiPlans() {
    return (
        <div>
            <div className="PageHeading">
                <h1>Plans</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>plans</span></div>
                    <div className="card-body p-1" style={{ background: "#bcd2f3" }}>
                        <div className="row mt-3 mx-2">
                            <div className="col-4">
                                <PlansCards title={"Basic"} package={"$20.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Optimal"} package={"$100.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Silver"} package={"$800.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Gold"} package={"$1,000.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Diamond"} package={"$1,200.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Platinum"} package={"$2,000.00 USD"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}