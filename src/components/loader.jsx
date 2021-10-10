import React from "react";
import { CircleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <CircleLoader color={"#36d7b7"} loading={true} size={80} />
    </div>
  );
}
