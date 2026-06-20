// components/Hero.js
import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [sectionTop, setSectionTop] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const targetFog = useRef({ x: 0, y: 0 });
  const currentFog = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setSectionTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;
    let cancelled = false;

    const initVanta = async () => {
      try {
        const [THREE, { default: FOG }] = await Promise.all([
          import("three"),
          import("vanta/dist/vanta.fog.min"),
        ]);

        if (cancelled || !heroRef.current) {
          return;
        }

        vantaEffect = FOG({
          el: heroRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xd2c6c4,
          midtoneColor: 0x95b6d2,
          lowlightColor: 0x637beb,
          baseColor: 0xffeeee,
          speed: 2.25,
          zoom: 1.4,
        });
      } catch (error) {
        console.error(error);
      }
    };

    initVanta();

    return () => {
      cancelled = true;
      vantaEffect?.destroy();
    };
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;

    if (!heroElement) {
      return;
    }

    let frameId = 0;

    const applyFogPosition = () => {
      currentFog.current.x += (targetFog.current.x - currentFog.current.x) * 0.09;
      currentFog.current.y += (targetFog.current.y - currentFog.current.y) * 0.09;

      const x = currentFog.current.x;
      const y = currentFog.current.y;

      heroElement.style.setProperty("--fog-x", `${x * -190}px`);
      heroElement.style.setProperty("--fog-y", `${y * -130}px`);
      heroElement.style.setProperty("--fog-soft-x", `${x * 92}px`);
      heroElement.style.setProperty("--fog-soft-y", `${y * 68}px`);
      heroElement.style.setProperty("--fog-depth-x", `${x * -56}px`);
      heroElement.style.setProperty("--fog-depth-y", `${y * -42}px`);
      heroElement.style.setProperty("--fog-sheen-x", `${x * -30}px`);
      heroElement.style.setProperty("--fog-sheen-y", `${y * -18}px`);

      frameId = window.requestAnimationFrame(applyFogPosition);
    };

    const handlePointerMove = (event: MouseEvent | PointerEvent) => {
      const rect = heroElement.getBoundingClientRect();
      const isInsideHero =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInsideHero) {
        targetFog.current = { x: 0, y: 0 };
        return;
      }

      targetFog.current = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      };
    };

    const resetFogPosition = () => {
      targetFog.current = { x: 0, y: 0 };
    };

    frameId = window.requestAnimationFrame(applyFogPosition);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mousemove", handlePointerMove);
    heroElement.addEventListener("pointerleave", resetFogPosition);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      heroElement.removeEventListener("pointerleave", resetFogPosition);
    };
  }, []);

  const dynamicStyle = {
    top: `-${sectionTop}px`,
  };

  return (
    <section ref={heroRef} className={styles.heroSection} style={dynamicStyle}>
      <div className={styles.fogDepth} aria-hidden="true" />
      <div className={styles.fogSheen} aria-hidden="true" />
      <div className={styles.heroContent}>
        <h1>Hi, my name is</h1>
        <h2>Ayush Dodia.</h2>
        {/* <h3>I'm a Software Engineer.</h3> */}
        <p className={styles.pStyle}>
          I'm a Software Engineer and MSCS student at Rutgers University, with experience shipping production features. I occasionally participate in hackathons for fun.
        </p>
        <a
          className={styles.emailLink}
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Check out my Resume!
        </a>
      </div>
    </section>
  );
};

export default Hero;
