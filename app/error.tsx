"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div>Unexpected Error has happened</div>
      <button className="btn btn-secondary" onClick={()=>reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
