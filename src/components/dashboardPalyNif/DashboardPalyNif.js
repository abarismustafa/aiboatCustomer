import { useEffect, useState } from "react"
import Loader from "../../common/loader/Loader"
import { dashboardPublic } from "../../api/login/Login"
import { Link } from "react-router-dom"
import '../dashboardPalyNif/dashboardPalyNif.css'


function DashboardPalyNif() {
    const [loader, setLoader] = useState()

    const [data, setSata] = useState(null)

    const getData = async () => {
        setLoader(true)
        try {
            const res = await dashboardPublic()
            // console.log(res?.data);
            setSata(res?.data?.data)
            setLoader(false)

        } catch (error) {
            setLoader(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>

            {loader && <Loader />}
            <div className="ContentArea">
                <div className="card ContentArea-card">
                    <div className="card-body">
                        <div className="row">
                            {/* <div className="col-md-3">
                                <div className="card card-custom p-3 text-center">
                                    <div className="card-icon text-primary">👆</div>
                                    <div className="card-title">Total Clicks</div>
                                    <div className="text-small">70</div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card card-custom p-3 text-center">
                                    <div className="card-icon text-success">🕐</div>
                                    <div className="card-title">Remain clicks for today</div>
                                    <div className="text-small">5</div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card card-custom p-3 text-center">
                                    <div className="card-icon text-danger">✔</div>
                                    <div className="card-title">Today's Click</div>
                                    <div className="text-small">0</div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card card-custom p-3 text-center">
                                    <div className="card-icon text-danger">⏰</div>
                                    <div className="card-title">Next Reminder</div>
                                    <div className="text-small">COMPLETE</div>
                                </div>
                            </div> */}

                            <div className="col-md-6">
                                <div className="card card-custom p-3">
                                    <h5 className="card-title">Business Volume</h5>
                                    <div className="row">
                                        <div className="col-6 text-small">161 Total BV</div>
                                        <div className="col-6 text-small">99 Left BV</div>
                                        <div className="col-6 text-small">62 Right BV</div>
                                        <div className="col-6 text-small">0 Total BV Cut</div>
                                    </div>
                                </div>
                            </div>
                            {/* Withdrawals */}
                            <div className="col-md-6">
                                <div className="card card-custom p-3">
                                    <h5 className="card-title">Withdrawals</h5>
                                    <div className="row">
                                        <div className="col-6 text-small">$0.00 Total Withdrawn</div>
                                        <div className="col-6 text-small">2 Pending Withdrawals</div>
                                        <div className="col-6 text-small">0 Rejected Withdrawals</div>
                                        <div className="col-6 text-small">0 Completed Withdraw</div>
                                    </div>
                                </div>
                            </div>


                            <div className="row ">
                                {/* Current Balance */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Current Balance</span>
                                            <i className="fas fa-money-bill-wave icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            $4,357.57 USD
                                        </div>
                                    </div>
                                </div>
                                {/* Total Deposit */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Deposit</span>
                                            <i className="fas fa-university icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            $10.00 USD
                                        </div>
                                    </div>
                                </div>
                                {/* Total Investment */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Investment</span>
                                            <i className="fas fa-wallet icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            $2,280.00 USD
                                        </div>
                                    </div>
                                </div>
                                {/* Total Referral Commission */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Referral Commission</span>
                                            <i className="fas fa-percentage icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            $102.00 USD
                                        </div>
                                    </div>
                                </div>
                                {/* Total Binary Commission */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Binary Commission</span>
                                            <i className="fas fa-tree icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            $54.57 USD
                                        </div>
                                    </div>
                                </div>
                                {/* Total Referral */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Referral</span>
                                            <i className="fas fa-users icon-wrappe1r" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            2,067
                                        </div>
                                    </div>
                                </div>
                                {/* Total Left */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Left</span>
                                            <i className="fas fa-arrow-left icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            2,182
                                        </div>
                                    </div>
                                </div>
                                {/* Total Right */}
                                <div className="col-md-4">
                                    <div className="card card-custom1 text-center">
                                        <div className="card-header card-header-custom1">
                                            <span>Total Right</span>
                                            <i className="fas fa-arrow-right icon-wrapper1" />
                                        </div>
                                        <div className="card-body1 card-body-custom1">
                                            991
                                        </div>
                                    </div>
                                </div>
                            </div>




                            {/* <div className="col-lg-3 col-md-6 custom-card-set">
                                <Link to="/all-contest-list/All">
                                    <div className="custom-card">
                                        <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                        <div className="number" style={{ color: 'black' }}>{data?.totalContest}</div>
                                        <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Total All Contest</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="custom-card">
                                    <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                    <div className="number" style={{ color: 'black' }}>{data?.won_Amount}</div>
                                    <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Total Participition Won</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 custom-card-set">

                                <div className="custom-card">
                                    <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                    <div className="number" style={{ color: 'black' }}>{data?.upcomming_Count}</div>
                                    <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Total Upcomming Contest</div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 custom-card-set">
                                <Link to="/live-Contests-List/Live">
                                    <div className="custom-card">
                                        <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                        <div className="number" style={{ color: 'black' }}>{data?.totalParticipates}</div>
                                        <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Total Live Contest</div>
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <div className="custom-card">
                                    <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                    <div className="number" style={{ color: 'black' }}>{data?.amount_recived}</div>
                                    <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Amount Recived</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <div className="custom-card">
                                    <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                    <div className="number" style={{ color: 'black' }}>{data?.expired_Count}</div>
                                    <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Expired Count</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <div className="custom-card">
                                    <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                    <div className="number" style={{ color: 'black' }}>0</div>
                                    <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Self Ranking</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default DashboardPalyNif