import React from "react";

const Active = () => {
  return (
    <div className="bg-primary flex text-white justify-between px-10 md:px-20 py-3 md:py-5 text-sm xl:px-40">
      <div className="left sm:flex gap-10 hidden">
        <h2>555-0198</h2>
        <h2>123 Mapple Street, Spriengfield, IL 62701</h2>
      </div>
      <div className="right">
        <h2>Monday - Saturday: 9 am - 11.30 pm</h2>
      </div>
    </div>
  );
};

export default Active;
