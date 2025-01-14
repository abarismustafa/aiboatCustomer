import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import CardModuls from "./PlanCardModuls";
import { Link } from "react-router-dom";

export default function PlansCards(props){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div className="card text-center">
        <CardModuls show={show} handleClose={handleClose}/>
      <div className="card-body">
        <h5 className="card-title fs-1 mb-4">{props.title}</h5>
        <h6 className="card-subtitle mb-3 fw-normal text-muted">{props.package}</h6>
        <div className="border border-1 bordder-black mb-3"></div>
        <ul className="list-unstyled">
          <li className="mt-2 d-flex align-items-center justify-content-between">
            <span><span className="text-success">✔</span> Business Volume (BV): 2</span>
            <button type="button" className="btn btn-link text-decoration-none" title="More info" onClick={handleShow}>
            <CiCircleQuestion />
            </button>
          </li>
          <li className="mt-2 d-flex align-items-center justify-content-between">
            <span><span className="text-success">✔</span> Referral Commission: $1.00 USD</span>
            <button type="button" className="btn btn-link text-decoration-none" title="More info" onClick={handleShow}>
            <CiCircleQuestion />
            </button>
          </li>
          <li className="mt-2 d-flex align-items-center justify-content-between ">
            <span><span className="text-success">✔</span> Tree Commission: $0.99 USD</span>
            <button type="button" className="btn btn-link  text-decoration-none" title="More info" onClick={handleShow}>
            <CiCircleQuestion />
            </button>
          </li>
          <li className="mt-2 d-flex align-items-center justify-content-between ">
            <span><span className="text-success">✔</span> Daily Ad View Limit: 5 </span>
            <button type="button" className="btn btn-link text-decoration-none" title="More info" onClick={handleShow}>
            <CiCircleQuestion />
            </button>
          </li>
        </ul>
        <Link to="/depositmethod" className="btn btn-outline-primary w-100">Subscribe</Link>
      </div>
    </div>
    )
}