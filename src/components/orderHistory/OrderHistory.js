import React from "react";
import { Button } from "react-bootstrap";

import { CiSearch } from "react-icons/ci";
import { Pagination } from "antd";
import { pdf } from "@react-pdf/renderer";
import TaxInvoice from "./taxInvoice/TaxInvoice";


const pdfData = {
  invoice_no: "INV-2020-21-1133",
  member_id: "VARoot",
  invoice_date: "27/06/2023",
  order_date: "27/06/2023",
  state: "Delhi",
  delivery_mode: "Andhra Pradesh",
  code: "7",
  pod_no: "",
  shipping_address: "Shampur Bazar, Krishnanagar, Nadia 741301",
  billing_address: "Vedaanta Ayurveda, A-11, Delhi NCR, City: Delhi",
  products: [
    {
      description: "Cool Oil with Triphla & Almond",
      hsn_code: "",
      unit_price: "262.50",
      quantity: "2",
      net_amount: "525.00",
      igst_rate: "12%",
      igst_amount: "63.00",
      total: "588.00",
    },
  ],
  amount_in_words: "Five Hundred Eighty-Eight Only",
  total_before_tax: "525.00",
  igst: "63.00",
  total_after_tax: "588.00",
};

function OrderHistory() {
  const openPdfInNewTab = async (data) => {
    const blob = await pdf(<TaxInvoice pdfData={pdfData} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="PageHeading">
        <h1>Order History</h1>
      </div>
      <div className="ContentArea">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div>Order History</div>
            <div className="input-group col-5">
              <input
                type="search"
                className="form-control"
                placeholder="Search by Trx"
              />
              <button className="input-group-text">
                <CiSearch />
              </button>
            </div>
          </div>
          <div className="card-body">
            <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
              <div className="d-flex  justify-content-between align-items-center">
                <div
                  className="dataTables_length mb-3"
                  id="myTable_length"
                ></div>
              </div>
              <div
                id="myTable_processing"
                className="dataTables_processing"
                style={{ display: "none" }}
              >
                Processing...
              </div>
              <table
                className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed"
                id="myTable"
                role="grid"
                aria-describedby="myTable_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting">S.No</th>
                    <th className="sorting"> Order No</th>
                    <th className="sorting">Order Date</th>
                    <th className="sorting">Order Amount</th>
                    <th className="sorting">Total BV</th>
                    <th className="sorting">Order Status</th>
                    <th className="sorting">Print Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd">
                    <td valign="top" className="dataTables_empty">
                      1
                    </td>
                    <td>1003</td>
                    <td valign="top" className="dataTables_empty text-center">
                      <span className="d-bolck m-0">2025-01-02 11:56 AM</span>
                      <span className="d-block m-0">1 week ago</span>
                    </td>
                    <td valign="top" className="dataTables_empty text-success">
                      + $1.00 USD
                    </td>
                    <td valign="top" className="dataTables_empty">
                      $4,087.57 USD
                    </td>
                    <td valign="top" className="dataTables_empty">
                      <Button variant="danger">Not Confirmed</Button>
                    </td>
                    <td>
                      {/* <Link to="taxInvoice" className="text-decoration-none">
                        View Details
                      </Link> */}
                      <Button
                        variant="success"
                        type="button"
                        onClick={openPdfInNewTab}
                      >
                        Details
                      </Button>

                      {/* <Print /> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="dataTables_info_page">
          <div
            className="dataTables_info"
            id="empoloyees-tblwrapper_info"
            role="status"
            aria-live="polite"
          >
            Total {0} entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="empoloyees-tblwrapper_paginate"
          >
            <Pagination defaultCurrent={1} onChange={""} total={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderHistory;
