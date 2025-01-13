import { Pagination, Popconfirm } from "antd";
// import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import Loadar from "../../../common/loader/Loader";
import { Link } from "react-router-dom";
import DirectTeamFilter from "./directTeamFilte/DirectTeamFilter";


const DirectTeam = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Network",
        title_2: "Direct Team",
        path_2: ""
    };
    return (
        <>
            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
            <DirectTeamFilter />
            <div className="row m-4">
                {/* {loading && <Loadar />} */}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Direct Team</h4>
                                    {/* <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-blog" role="button" aria-controls="offcanvasExample">+ Blog Master</Link>
                                    </div> */}
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '150px' }}>User ID</th>
                                                <th style={{ width: '150px' }}>Name</th>
                                                <th style={{ width: '150px' }}>Subscription</th>
                                                <th style={{ width: '200px' }}>Trading</th>
                                                <th style={{ width: '200px' }}>Compounding</th>
                                                <th style={{ width: '150px' }}>Position</th>
                                                <th style={{ width: '100px' }}>Status</th>
                                                <th style={{ width: '100px' }}>Direct Business</th>
                                                <th style={{ width: '100px' }}>Team Business</th>
                                                <th style={{ width: '100px' }}>Total Bot</th>
                                                <th style={{ width: '100px' }}>Trading Business</th>
                                                <th style={{ width: '100px' }}>Compounding Business</th>
                                                <th style={{ width: '100px' }}>Rank</th>
                                                <th style={{ width: '100px' }}>Joining Date</th>
                                                <th style={{ width: '100px' }}>Activation Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr role="row" className="odd" key={''}>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                {/* <td>
                                                    <div className="d-flex">
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Popconfirm
                                                            title="Delete Blog"
                                                            description="Are you sure to delete?"
                                                            // onConfirm={() => confirm(item?._id)}
                                                            // onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                <i className="fa fa-trash" />
                                                            </Link>
                                                        </Popconfirm>
                                                    </div>
                                                </td> */}
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {0} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={data?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DirectTeam