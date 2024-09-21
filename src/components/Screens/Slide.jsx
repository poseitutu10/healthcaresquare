import React from "react";
import Slidecard from "./Slidecard";
import doc1 from "../../assets/doc1.jpg"
import doc2 from "../../assets/doc2.jpg"
import doc3 from "../../assets/doc3.jpg"

const Slide = () => {
  return (
    <div className="contain mx-5 md:mx-20 my-5 md:mt-20 flex flex-col md:h-[50vh] md:flex-row justify-center items-center gap-5 md:gap-20">
      <Slidecard pic={doc1} />
      <Slidecard pic={doc2} />
      <Slidecard pic={doc3} />
    </div>
  );
};

export default Slide;
