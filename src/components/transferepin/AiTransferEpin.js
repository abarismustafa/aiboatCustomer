import React from "react";
import { Pagination } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

export default function AiTransferEpin() {
    return (
        <div>
            <div className="PageHeading">
                <h1>Binary Income</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div>Transfer Epin</div>
                    </div>
                    <div className="p-3">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-3">
                                    <label htmlFor="reward">Select Kit Code</label>
                                   <select className="form-select">
                                    <option>Select Kit Code</option>
                                    <option>Activation Package</option>
                                   </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="reward">Kit Describe </label>
                                    <input className="form-control" type="text" value={"Activation Packag"} readOnly/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="reward">Value of 1 Epin </label>
                                    <input className="form-control" type="number" value={"450.00"} readOnly/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="reward">Available Pin	 </label>
                                    <input className="form-control" type="number" value={"8"} readOnly/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="reward">No of E-Pin	 </label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="reward">Enter Other loginid	 </label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <div className="row justify-content-center">
                                    <button type="button" className="btn col-2 btn-primary mr-3" >
                                       transfer
                                    </button>
                                    <button type="button" className="btn col-2 btn-primary mr-3" >
                                        Refresh
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}