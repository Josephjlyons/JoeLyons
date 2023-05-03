import React, { useState, useRef, useEffect } from "react";
import '../src/sass/_fadein.scss';

const FadeInSections = (props) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
  
      if (entries[0].isIntersecting) {
       
        setVisible(true);


        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);


  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}

const FadeInSideLTR = (props) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
  
      if (entries[0].isIntersecting) {
       
        setVisible(true);


        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);


  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-sideLTR ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}


const FadeInSideRTL = (props) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
  
      if (entries[0].isIntersecting) {
       
        setVisible(true);


        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);


  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-sideRTL ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}


const FadeInDown = (props) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
  
      if (entries[0].isIntersecting) {
       
        setVisible(true);


        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);


  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-down ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}
export {FadeInSections, FadeInSideLTR, FadeInSideRTL, FadeInDown};