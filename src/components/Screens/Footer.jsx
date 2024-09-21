import React from "react";
import logo from "../../../public/altlogo.svg";

const Footer = () => {
  return (
    <footer className=" bg-primary mt-10 md:mt-40 md:py-20 md:px-40 p-10">
      <div className="top flex gap-5 md:gap-10 border-b pb-5 md:pb-10 border-white flex-col md:flex-row">
        <div className="left space-y-5 md:space-y-10 md:w-1/2 w-full">
          <img src={logo} alt="" className="w-32" />
          <div className="head">
            <h2 className="md:text-5xl text-white font-semibold">
              Transform Your world
            </h2>
            <h2 className="md:text-5xl text-white font-semibold">
              with HealthSquare
            </h2>
          </div>
          <div className="para md:text-2xl text-xs">
            <p className="text-white">
              Aliquam et tellus urna. Phasellus egetadipiscing elit.
            </p>
            <p className="text-white">
              {" "}
              Mauris id nunc odio.Aliquam et tellus urna.
            </p>
          </div>
        </div>
        <div className="right md:w-1/2 w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 space-y-2 md:space-y-5 text-white">
            <h2 className="md:text-2xl font-semibold">MAIN PAGES</h2>
            <div className="rest grid grid-cols-2 gap-3">
              <h2 className="md:text-xl text-xs">Home (Sales)</h2>
              <h2 className="md:text-xl text-xs">Blog Post</h2>
              <h2 className="md:text-xl text-xs">Home V1</h2>
              <h2 className="md:text-xl text-xs">Contact V1</h2>
              <h2 className="md:text-xl text-xs">Home V2</h2>
              <h2 className="md:text-xl text-xs">Contact V2</h2>
              <h2 className="md:text-xl text-xs">Home V3</h2>
              <h2 className="md:text-xl text-xs">Contact V3</h2>
              <h2 className="md:text-xl text-xs">About</h2>
              <h2 className="md:text-xl text-xs">Pricing</h2>
              <h2 className="md:text-xl text-xs">Blog V1</h2>
              <h2 className="md:text-xl text-xs">Blog V2</h2>
              <h2 className="md:text-xl text-xs">Blog V3</h2>
            </div>
          </div>
          <div className="rest w-full md:w-1/2 text-white flex justify-between flex-col gap-5 my-5 md:my-0 md:flex-row">
            <div className="social-media flex flex-col gap-2">
              <h2 className="md:text-xl text-sm">SOCIAL MEDIA</h2>
              <h2 className="md:text-xl text-xs">Instagram</h2>
              <h2 className="md:text-xl text-xs">Facebook</h2>
              <h2 className="md:text-xl text-xs">Linkedin</h2>
              <h2 className="md:text-xl text-xs">Twitter</h2>
            </div>
            <div className="social-media flex flex-col gap-2">
              <h2 className="md:text-xl text-sm">WEBFLOW STUFF</h2>
              <h2 className="md:text-xl text-xs">Style Guide</h2>
              <h2 className="md:text-xl text-xs">Licensing</h2>
              <h2 className="md:text-xl text-xs">Change Log</h2>
              <h2 className="md:text-xl text-xs">Instructions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom pt-5 md:pt-10 text-white flex justify-between">
        <h2 className="md:text-xl text-xs">
          CREATED BY <span className="underline">OVERSIGHT</span>
        </h2>
        <h2 className="md:text-xl text-xs">
          POWERED BY <span className="underline">WEBFLOW</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
