import { pdf } from "@react-pdf/renderer";
import PayoutStatementDetail from "./payoutStatementDetail/PayoutStatementDetail";
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
function PayoutStatement() {
  const openPdfInNewTab = async (data) => {
    const blob = await pdf(
      <PayoutStatementDetail pdfData={pdfData} />
    ).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="PageHeading">
        <h1>Payout Statement</h1>
      </div>
      <div className="ContentArea">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div>Select Payout</div>
          </div>
          <div className="p-3">
            <form action="" method="post" name="frmReport" id="frmReport">
              <div className="form-row" style={{ alignItems: "end" }}>
                {/* <div className="form-group col-md-6">
                  <label htmlFor="txtUserId">Transaction Number</label>
                  <input type="text" className="form-control" />
                </div> */}
                <div className="form-group col-md-6">
                  <label htmlFor="reward">Select Respective Payout No </label>
                  <select className="form-select">
                    <option>Plus</option>
                    <option>minus</option>
                  </select>
                </div>

                <div className="form-group col-md-2">
                  <button
                    type="button"
                    className="btn btn-info mr-3 text-white"
                    onClick={openPdfInNewTab}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="dataTables_info_page">
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
        </div> */}
      </div>
    </div>
  );
}
export default PayoutStatement;
