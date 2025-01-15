import { Pagination } from "antd"


const TransfertoPackageWallet = () => {
    return (
        <>

            <div className="PageHeading">
                <h1>Transfer Fund</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>TRANSFER FUND</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Income Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Package Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">TLC Income Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">TLC Package Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Select Wallet <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Wallet</option>
                                        <option value={1}>Package</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Transfer To(User ID)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Transfer To(User ID)'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Amount to be Transfer </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Amount to be Transfer '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Remarks </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Amount to be Transfer '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>



                            </div>
                        </form>
                    </div>

                </div>
            </div >



        </>
    )
}

export default TransfertoPackageWallet