import React from "react";
import { FiEye } from "react-icons/fi";
import { GiHeartOrgan } from "react-icons/gi";
import { PiBrain } from "react-icons/pi";
import { BsLungs } from "react-icons/bs";
import { GiStomach } from "react-icons/gi";
import { LiaToothSolid } from "react-icons/lia";
import Card from "./Card";

const Sections = () => {
  return (
    <div className="px-5 md:px-20 my-5 md:my-10 flex flex-col md:grid md:grid-cols-3 gap-5">
      <div className="card border border-primary space-y-5 p-3">
        <GiHeartOrgan
          size={40}
          className="text-primary rounded-full border w-15 h-15 p-1"
        />
        <Card header="Cardiology" />
      </div>
      <div className="card border border-primary  space-y-5 p-3">
        <FiEye
          size={40}
          className="text-primary rounded-full border w-15 h-15 p-1"
        />
        <Card header="Ophthalmologists" />
      </div>
      <div className="card border border-primary space-y-5 p-3">
        <PiBrain
          size={40}
          className="text-primary rounded-full border w-15 h-15 p-1"
        />
        <Card header="Neurology" />
      </div>
      <div className="card border border-primary space-y-5 p-3">
        <BsLungs
          size={40}
          className="text-primary rounded-full border w-15 h-15 p-1"
        />
        <Card header="Pulmonology" />
      </div>
      <div className="card border border-primary space-y-5 p-3">
        <GiStomach
          size={40}
          className="text-primary rounded-full border w-15 h-15 p-1"
        />
        <Card header="Gastroenterologist" />
      </div>
      <div className="card border border-primary space-y-5 p-3">
        <LiaToothSolid
          size={40}
          className="text-primary rounded-full border w-15 h-15 p-1"
        />
        <Card header="Orthodontics" />
      </div>
    </div>
  );
};

export default Sections;
