"use client";
import Article from "../components/GSAP";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import gsap, { wrap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const firstImageRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP animation for the first image (zoom-in effect)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstImageRef.current,
        start: "top 40%",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.fromTo(
      firstImageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "6em", margin: 0 }}>
        Vitra catalog
      </h1>

      <img
        ref={firstImageRef}
        src="/medias/home.jpg"
        style={{ borderRadius: "0", width: "100%", marginTop: "3em" }}
      />
      <main>
        <Article
          title={"Eames Plastic"}
          paragraph={`Getting the most of the best to the greatest number of people for the least': 
    with these words, Charles and Ray Eames described one of their main goals as furniture designers.
     None of their other designs come as close to achieving this ideal as the Plastic Chairs. 
     For years, the designer couple explored the fundamental idea of a one-piece seat shell
     moulded to fit the contours of the human body. `}
          date={"1945"}
          model={"plasticvitra"}
          images={["7.png", "9.jpg", "8.jpg"]}
          id={"badvisorChair"}
          buttons={[
            `<button
            onMouseEnter='
            document.getElementById("badvisorChair")
            .contentWindow.postMessage(
            { type: "startAction", name: "White"}, "*")'
            >
   
   <!-- White -->
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorChair")
            .contentWindow.postMessage(
            { type: "startAction", name: "Black"}, "*")'
            style="background-color: black;color: white;"
            >
        
        <!-- Black -->
            </button>`,
          ]}
        />
        <Article
          title={"Lounge Chair"}
          id={"badvisorLounge"}
          paragraph={`The Lounge Chair, created by Charles and Ray Eames in the 1950s, was designed with the aim of 
        combining an elegant appearance with ultimate comfort. It has been produced by Vitra using virtually 
        the same methods ever since, and is now recognised as a great classic of twentieth-century furniture design.`}
          date={"1956"}
          model={"loungevitra"}
          images={["4.jpg", "6.jpg", "5.jpg"]}
          buttons={[
            `<button
            onMouseEnter='
            document.getElementById("badvisorLounge")
            .contentWindow.postMessage(
            { type: "startAction", name: "Leather"}, "*")'
            style="background-color:black   ;color:white ;"   >
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorLounge")
            .contentWindow.postMessage(
            { type: "startAction", name: "Vakosametti"}, "*")'
            style="background-color:coral   ;color:white ;" >
           
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorLounge")
            .contentWindow.postMessage(
            { type: "startAction", name: " Leather green"}, "*")'
            style="background-color:darkgreen   ;color:white ;"
            >
    
            </button>`,
          ]}
        />
        <Article
          title={"Elephant Stool"}
          id={"badvisorStool"}
          paragraph={`The VITRA furniture company’s famous decorative elephant, a 1940’s
     creation by Charles and Ray Eames experimenting with their new
     technique for using a heated press to form plywood into curved shapes.
     The surface is covered in an american cherry veneer.`}
          date={"1945"}
          model={"elephantchair"}
          images={["1.png", "2.jpg", "3.jpg"]}
          buttons={[
            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "Oak"}, "*")'
            style="background-color: Brown ;color: white;" >
           <!-- Oak -->
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "Red"}, "*")'
            style="background-color:Crimson  ;color: white;" >
            
            <!-- Red -->
            </button>`,

            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "Black"}, "*")'
            style="background-color:black   ;color: white;" >
            
            <!-- Black -->
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "Azule"}, "*")'
            style="background-color:LightSteelBlue   ;color: white;" >
            
            <!-- Azule -->
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "Pine Green"}, "*")'

             
            style="background-color:DarkGreen   ;color: white;" >
           
            <!--  Pine Green -->
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "Yellow"}, "*")'

            
            style="background-color:yellow   ;color: black;" 
            >
            <!-- Yellow -->
            
            </button>`,
            `<button
            onMouseEnter='
            document.getElementById("badvisorStool")
            .contentWindow.postMessage(
            { type: "startAction", name: "White"}, "*")'
            >
            
            <!--  White -->
            </button>`,
          ]}
        />

        <a
          href="https://badvisor.io"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            fontSize: "1.2em",
            marginBottom: "4em",
            gap: ".75em",
            textDecoration: "none",
          }}
        >
          <b style={{ color: "black" }}>created with</b>
          <img
            src="./medias/logo.svg"
            style={{ width: "140px", borderRadius: 0 }}
          />
        </a>
      </main>
    </>
  );
}
