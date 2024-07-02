import React, { useEffect, useRef } from 'react';
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
                    observer.unobserve(section); // Unobserve after first intersection
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
        <div className="about" id='about'>
            <section className="about-section" ref={visionRef}>
                <h2>Vision</h2>
                <div className="about-content">
                    <p className="about-text">
                        At RETA TAMIRE TOLLOSSA, our vision is to be the premier provider of exceptional value through an
                        unparalleled combination of competitive pricing,
                        efficient sourcing, and the widest product range.
                        We are dedicated to delivering personalized,
                        friendly, and efficient service,
                        supported by a team of knowledgeable and effective staff.
                        Our commitment to service delivery with a sense of urgency,
                        best-in-time delivery,
                        and uncompromising quality ensures that our customers always receive the highest standards of excellence.</p>
                    <img src={visionImage} alt="Vision" className="about-image" />
                </div>
            </section>
            <section className="about-section" ref={missionRef}>
                <h2>Mission</h2>
                <div className="about-content">
                    <img src={missionImage} alt="Mission" className="about-image" />
                    <p className="about-text">We are dedicated to becoming the top choice for office product supplies,
                        striving to consistently exceed the expectations of our discerning customers.
                        With a commitment to excellence and attention to detail,
                        we aim to deliver exceptional quality and service with every interaction.
                        Our goal is to build lasting relationships with our clients,
                        earning their trust through our reliability and dedication to their satisfaction.
                        By continuously innovating and adapting to meet the evolving needs of the market,
                        we ensure that we remain the preferred supplier for all office essentials.
                        With our passion for customer service and our focus on quality,
                        we are confident in our ability to fulfil the diverse requirements of our valued customers.</p>
                </div>
            </section>
            <section className="about-section" ref={valueRef}>
                <h2>Value Added Services</h2>
                <div className="about-content">
                    <p className="about-text">At RETA TAMIRE TOLLOSSA,
                        we prioritize our customers' needs by listening attentively,
                        showing genuine care, and consistently surpassing expectations.
                        With an extensive selection of office supplies and expertise in crafting tailored office systems,
                        we ensure your specific requirements are met comprehensively.
                        Our adaptability to market dynamics underscores our commitment to innovation and relevance.

                        What sets us apart is our customer-centric approach, 
                        treating each client uniquely and addressing individual preferences while maintaining cost efficiency.
                         From product excellence to swift delivery, dedicated after-sales support, and expert advice,
                          our holistic focus on customer satisfaction remains unwavering.</p>
                    <img src={valueImage} alt="Value Added Services" className="about-image" />
                </div>
            </section>
        </div>
    );
}

export default About;