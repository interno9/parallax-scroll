"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "../../app/page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Index({
  images,
  title,
  date,
  paragraph,
  model,
  buttons,
  id,
}) {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const lettersRef = useRef([]);
  const imagesRef = useRef([]);
  const paragraphRef = useRef(null);
  const iframeRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      title1Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" },
      "+=0.5"
    );

    //  date letters
    lettersRef.current.forEach((letter, i) => {
      tl.fromTo(
        letter,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.5"
      );
    });

    // Animation for the paragraph
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" },
      "-=0.5"
    );

    // Animation for buttons
    buttonsRef.current.forEach((button, i) => {
      tl.fromTo(
        button,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
        `+=${i * 0.1}`
      );
    });
    // Animation for the images along the Y-axis
    imagesRef.current.forEach((image, i) => {
      tl.fromTo(
        image,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }
      );
    });

    // Define a ScrollTrigger for the whole container
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 100%",
      end: "bottom 130%",
      animation: tl,
      scrub: 0.1,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ marginTop: "10em" }}
    >
      <div className={styles.body} id="content">
        <h1 ref={title1Ref}>{title}</h1>
        <div className={styles.word}>
          <p>
            {[...date].map((letter, i) => (
              <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                {letter}
              </span>
            ))}
          </p>
        </div>
        <p
          ref={paragraphRef}
          style={{
            fontSize: "1em",
            maxWidth: "430px",
            margin: 0,
            color: "#111",
            fontWeight: "bold",
            opacity: 0,
          }}
        >
          {paragraph}
        </p>

        {buttons.map((button, index) => (
          <span
            key={index}
            ref={(el) => (buttonsRef.current[index] = el)}
            dangerouslySetInnerHTML={{ __html: button }}
            className={styles.button}
          />
        ))}
      </div>

      <div className={styles.images}>
        {images.map((image, i) => (
          <div
            key={`i_${i}`}
            ref={(el) => (imagesRef.current[i] = el)}
            className={styles.imageContainer}
          >
            <Image src={`/medias/${image}`} alt="image" fill />
          </div>
        ))}

        <iframe
          id={id}
          style={{
            pointerEvents: "none",
            width: "100vw",
            height: "90vh",
            border: "none",
          }}
          src={`https://app.badvisor.io/showcases/design/${model}`}
        />
      </div>
    </div>
  );
}
