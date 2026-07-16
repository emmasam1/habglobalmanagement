"use client";

import { useState, useEffect, useRef } from "react";

import { process } from "@/data/process";

import SectionHeader from "../ui/SectionHeader";
import ProcessTimeline from "./ProcessTimeline";
import ProcessContent from "./ProcessContent";


export default function Process() {

  const [active, setActive] = useState(0);

  const [paused, setPaused] = useState(false);


  const timer = useRef(null);


  const changeStep = (index) => {

    setActive(index);

    // restart timer after manual click

  };


  useEffect(() => {


    if(paused) return;


    timer.current = setInterval(()=>{


      setActive((prev)=>{

        if(prev === process.length - 1){
          return 0;
        }

        return prev + 1;

      });


    },5000);



    return ()=>clearInterval(timer.current);


  },[paused]);



  return (

    <section
      className="section"
      onMouseEnter={()=>setPaused(true)}
      onMouseLeave={()=>setPaused(false)}
    >

      <div className="container">


        <SectionHeader
          center
          eyebrow="Our Process"
          title="A Strategic Process Designed For Success"
          description="We combine expertise, planning and execution to deliver solutions that help businesses grow."
        />



        <div
          className="
          mt-16
          grid
          gap-12
          lg:grid-cols-[220px_1fr]
          "
        >


          <ProcessTimeline

            steps={process}

            active={active}

            setActive={changeStep}

          />



          <ProcessContent

            step={process[active]}

          />


        </div>



      </div>


    </section>

  );
}