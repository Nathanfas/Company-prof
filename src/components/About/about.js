import React,  { useEffect, useRef } from 'react';
import './about.css';
import visionImage from '../../assets/image/About/vision.jpeg'; // Example image import, replace with actual images
import missionImage from '../../assets/image/About/mission.jpeg';
import valueImage from '../../assets/image/About/value.jpeg';

const About = () => {
    const visionRef = useRef();
    const missionRef = useRef();
    const valueRef = useRef();

    useEffect(() => {
        const options = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const section = entry.target;
                if (entry.isIntersecting) {
                    section.classList.add('in-view');
                } else {
                    section.classList.remove('in-view');
                }
            });
        }, options);

        const currentVisionRef = visionRef.current;
        const currentMissionRef = missionRef.current;
        const currentValueRef = valueRef.current;

        if (currentVisionRef) observer.observe(currentVisionRef);
        if (currentMissionRef) observer.observe(currentMissionRef);
        if (currentValueRef) observer.observe(currentValueRef);

        return () => { 
            if (currentVisionRef) observer.unobserve(currentVisionRef);
            if (currentMissionRef) observer.unobserve(currentMissionRef);
            if (currentValueRef) observer.unobserve(currentValueRef);
        };
    }, []);

    return (
        <div className="about">
            <section className="about-section" ref={visionRef}>
                <h2>Vision</h2>
                <div className="about-content">
                    <p className="about-text">Your vision paragraph goes here...</p>
                    <img src={visionImage} alt="Vision" className="about-image" />
                </div>
            </section>
            <section className="about-section" ref={missionRef}>
                <h2>Mission</h2>
                <div className="about-content">
                    <img src={missionImage} alt="Mission" className="about-image" />
                    <p className="about-text">Your mission paragraph goes here...</p>
                </div>
            </section>
            <section className="about-section" ref={valueRef}>
                <h2>Value Added Services</h2>
                <div className="about-content">
                    <p className="about-text">Your value added services paragraph goes here...</p>
                    <img src={valueImage} alt="Value Added Services" className="about-image" />
                </div>
            </section>
        </div>
    );
}

export default About;