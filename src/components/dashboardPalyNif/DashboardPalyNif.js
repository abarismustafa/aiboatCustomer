import { useEffect, useState } from "react"
import Loader from "../../common/loader/Loader"
import { dashboardPublic } from "../../api/login/Login"
import { Link } from "react-router-dom"


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

                            <div className="col-lg-3 col-md-6 custom-card-set">
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
                                {/* <Link to="/all-contest-list/All"> */}
                                <div className="custom-card">
                                    <img src="https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg" alt="Background Image" />
                                    <div className="number" style={{ color: 'black' }}>{data?.upcomming_Count}</div>
                                    <div className="description" style={{ color: 'black', fontWeight: 'bold' }}>Total Upcomming Contest</div>
                                </div>
                                {/* </Link> */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardPalyNif