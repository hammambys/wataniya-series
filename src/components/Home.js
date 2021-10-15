import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Link to="/login" className="btn btn-primary w-100 mt-3">
        login
      </Link>
    </>
  );
}
