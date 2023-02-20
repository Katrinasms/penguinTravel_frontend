import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only">Loading...</span>
        {/* <p className="text-black">is loading</p> */}
      </div>
    </div>
  );
};

export default Loading;
