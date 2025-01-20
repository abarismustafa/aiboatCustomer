import React from "react";
import { Pagination } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

export default function AiEpinReceivedReport() {
    return (
        <div>
            <div className="PageHeading">
                <h1>Epin Received Report</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="card-header d-flex justify-content-between">
                            <div className="d-flex gap-2 align-items-center">
                                <span>Show</span>
                                <select className="form-select">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                                <span>entries</span>
                            </div>
                            <div className="input-group col-5">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                                <button className="input-group-text"><CiSearch /></button>
                            </div></div>
                        <div id="myTable_wrapper" className="dataTables_wrapper px-3 no-footer">
                            <div className="d-flex  justify-content-between align-items-center">
                                <div className="dataTables_length mb-3" id="myTable_length">
                                </div>
                            </div>
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">
                                            Sr.No
                                        </th>
                                        <th className="sorting" >Transfer From</th>
                                        <th className="sorting" >Transfer to</th>
                                        <th className="sorting">QTY</th>
                                        <th className="sorting">Transfer Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="odd" >
                                        <td valign="top" className="dataTables_empty">1</td>
                                        <td valign="top" className="dataTables_empty">VARoot (Vedaanta ayurveda )</td>
                                        <td valign="top" className="dataTables_empty">VA1098 (raj )</td>
                                        <td valign="top" className="dataTables_empty">1</td>
                                        <td valign="top" className="dataTables_empty">07/09/2023</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {0}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                            defaultCurrent={1}
                            onChange={""}
                            total={""}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}