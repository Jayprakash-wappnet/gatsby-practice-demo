import React from "react";
import { Link } from "gatsby";

const about = () => {
  return (
    <div>
      <h1>Wappnet System pvt ltd</h1>
      <Link to="/">
        <button className="btn btn-danger">Back to the Home</button>
      </Link>
    </div>
  );
};

export default about;
