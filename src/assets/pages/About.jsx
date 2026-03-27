import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../pages/about.css"

export default function About() {

    const fadeUp = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };
    const handleMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleLeave = (e) => {
        const btn = e.currentTarget;
        btn.style.transform = `translate(0px, 0px)`;
    };
    const StatItem = ({ target, label, suffix = "" }) => {
        const [count, setCount] = useState(0);
        const ref = useRef(null);
        const started = useRef(false);

        useEffect(() => {
            const el = ref.current;
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;

                        let start = 0;
                        const duration = 1500;
                        const increment = target / (duration / 16);

                        const counter = setInterval(() => {
                            start += increment;
                            if (start >= target) {
                                setCount(target);
                                clearInterval(counter);
                            } else {
                                setCount(Math.floor(start));
                            }
                        }, 16);
                    }
                },
                { threshold: 0.4 }
            );

            observer.observe(el);

            return () => {
                observer.unobserve(el);
                observer.disconnect();
            };
        }, [target]);

        return (
            <div className="stat-item" ref={ref}>
                <div className="stat-num">{count}{suffix}</div>
                <div className="stat-label">{label}</div>
            </div>
        );
    };


    return (
        <div>
            <section className="grid-section-bg">
                <div className="container d-flex flex-column py-5 page-hero-content px-3 gap-3 px-sm-0">
                    <div className="breadcrumb d-flex justify-content-center mt-3 mb-2">
                        <a href="/" className="home-sub-tag text-decoration-none">Home</a> <span className="mx-2 service-sub-tag">› About</span>
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <div className="d-flex justify-content-center">
                            <motion.h1
                                className="section-title text-center"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                Where Dreams MeetDigital Reality
                            </motion.h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <motion.h6 className="page-sub mt-1 mb-5"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}>
                                A team of passionate technologists, designers, and marketers based in Chennai, India - turning your vision into powerful digital products                            </motion.h6></div>
                    </div>
                </div>
            </section>

            {/* About Story */}
            <section className="section about-story-bg py-5">
                <div className="container py-5 px-3 px-sm-0">

                    <div className="d-flex flex-column flex-lg-row align-items-center gap-5">

                        {/* LEFT */}
                        <div className="w-100">
                            <div className="blob-wrap d-flex justify-content-center reveal position-relative text-center">

                                <div className="about-blob p-4">
                                    <div className="blob-inner">
                                        <div className="blob-icon mb-2">🧠</div>
                                        <h3>Technology Disruptor</h3>
                                        <p className="svc-big-desc">
                                            Custom development & design experience based in Chennai, India
                                        </p>
                                    </div>
                                </div>

                                <div className="corner-badge cb1 position-absolute top-0 start-0 m-3">
                                    <div className="cb-val fw-bold">Chennai</div>
                                    <div className="cb-lbl small">Headquarters, India</div>
                                </div>

                                <div className="corner-badge cb2 position-absolute bottom-0 end-0 m-3">
                                    <div className="cb-val cb-1 fw-bold">2016</div>
                                    <div className="cb-lbl cb-2 small">Year Founded</div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="w-100">
                            <div className="fade-content">

                                <div className="section-tag text-uppercase   mb-2">
                                    Our Story
                                </div>

                                <h2 className="section-title mb-3">
                                    Built on Belief,<br />Driven by Innovation
                                </h2>

                                <p className="svc-big-desc">
                                    The Design Saprk is a technology disruptor in custom development and design experience, based in Chennai, India. We deliver high-quality work while leveraging the newest and best techniques available in the market.
                                </p>

                                <p className="svc-big-desc">
                                    We've created a process and methodology that combines the aspects of analysis, research, creativity, technology, and branding together. Each project at Dream Infomatrix begins with a belief that the human factor can change the growth of our clients' businesses.
                                </p>

                                <p className="svc-big-desc mb-4">
                                    We believe branding is more about human emotion than just selling. We assist you in attaining the human factor with our knowledge of the latest technologies.
                                </p>

                                <a href="/contact" onMouseMove={handleMove}
                                    onMouseLeave={handleLeave} className="btn btn-primary service-btn">
                                    Work With Us →
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* Stats Band */}
            <section className="section stats-band about-story-bg">
                <div className="container d-flex justify-content-between flex-wrap">
                    <StatItem target={50} label="Completed Projects" suffix="+" />
                    <StatItem target={40} label="Happy Clients" suffix="+" />
                    <StatItem target={8} label="Years in Industry" suffix="+" />
                    <StatItem target={98} label="Client Satisfaction" suffix="%" />
                </div></section>

            {/* Values */}
            <section className="section container-fluid section-alt py-5">
                <div className="container py-5 px-3 px-sm-0">


                    {/* HEADER */}
                    <div className="text-center mb-5">
                        <div className="d-flex justify-content-center mb-2">
                            <motion.div
                                className="section-tag"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                What Drives Us
                            </motion.div>
                        </div>

                        <motion.h2
                            className="section-title"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Our Core Values
                        </motion.h2>
                    </div>


                    <div className="d-flex justify-content-center flex-wrap">

                        {/* CARD 1 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">💡</div>
                                <div className="mkt-title fw-bold mb-2">Innovation First</div>
                                <p className="section-sub">We constantly explore cutting-edge technologies and methodologies to bring fresh solutions to every project.</p>
                            </div>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">🤝</div>
                                <div className="mkt-title fw-bold mb-2">Client Partnership</div>
                                <p className="section-sub">We treat every client as a partner, building long-lasting relationships built on trust, transparency, and results.</p>
                            </div>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">🎯</div>
                                <div className="mkt-title fw-bold mb-2">Quality Obsessed</div>
                                <p className="section-sub">Every pixel, every line of code, every campaign is crafted with meticulous attention to detail and quality.</p>
                            </div>
                        </motion.div>

                        {/* CARD 4 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">🚀</div>
                                <div className="mkt-title fw-bold mb-2">On-Time Delivery</div>
                                <p className="section-sub">We respect your timeline. Our streamlined process ensures projects are delivered on schedule, every time.</p>
                            </div>
                        </motion.div>

                        {/* CARD 5 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">❤️</div>
                                <div className="mkt-title fw-bold mb-2">Human-Centered</div>
                                <p className="section-sub">We believe branding is about emotion and connection -     every solution is designed with real people in mind.</p>
                            </div>
                        </motion.div>

                        {/* CARD 6 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.5 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">📈</div>
                                <div className="mkt-title fw-bold mb-2">Growth Mindset</div>
                                <p className="section-sub">We grow with our clients - our solutions scale as your business evolves, never leaving you behind.</p>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
            {/* Process */}
            <section className="section section-process-bg py-5">
                <div className="container py-5 px-3 px-sm-0">

                    {/* HEADER */}
                    <div className="mb-5">
                        <motion.div
                            className="section-tag"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            How We Work
                        </motion.div>

                        <motion.h2
                            className="section-title"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Our Process
                        </motion.h2>

                        <motion.p
                            className="page-sub"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            A proven 4-step methodology that ensures every project succeeds.
                        </motion.p>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center align-items-stretch">

                        {/* STEP 1 */}
                        <motion.div className="flex-25 position-relative step-divider" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <div className="process-step p-4 h-100">
                                <div className="step-num mb-2">01</div>
                                <div className="step-title mb-2">Discover & Analyse</div>
                                <p className="page-sub small">We dive deep into your business, goals, competitors, and target audience to shape a clear digital strategy.</p>
                            </div>
                        </motion.div>

                        {/* STEP 2 */}
                        <motion.div className="flex-25 position-relative step-divider" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="process-step p-4 h-100">
                                <div className="step-num mb-2">02</div>
                                <div className="step-title mb-2">Design & Prototype</div>
                                <p className="page-sub small">Our designers craft wireframes and high-fidelity prototypes that balance aesthetics with user experience.</p>
                            </div>
                        </motion.div>

                        {/* STEP 3 */}
                        <motion.div className="flex-25 position-relative step-divider" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="process-step p-4 h-100">
                                <div className="step-num mb-2">03</div>
                                <div className="step-title mb-2">Develop & Test</div>
                                <p className="page-sub small">Our engineers build with best-in-class technologies, rigorously tested across all devices and browsers.</p>
                            </div>
                        </motion.div>

                        {/* STEP 4 */}
                        <motion.div className="flex-25 position-relative" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <div className="process-step p-4 h-100">
                                <div className="step-num mb-2">04</div>
                                <div className="step-title mb-2">Launch & Grow</div>
                                <p className="page-sub small">We deploy, monitor, and continue to support your digital product as your business scales and evolves.</p>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>

            <section className="section section-tech-bg py-5">
                <div className="container py-5 px-3 px-sm-0">
                    {/* HEADER */}
                    <div className="mb-5">
                        <motion.div
                            className="section-tag"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Technologies
                        </motion.div>

                        <motion.h2
                            className="section-title"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Our Tech Stack
                        </motion.h2>

                        <motion.p
                            className="page-sub"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            We work with the best tools in the industry to build robust, scalable digital products.
                        </motion.p>
                    </div>

                    <div className="tech-grid">
                        <div className="tech-pill">WordPress</div>
                        <div className="tech-pill">WooCommerce</div>
                        <div className="tech-pill">Elementor Pro</div>
                        <div className="tech-pill">Crocoblock</div>
                        <div className="tech-pill">React.js</div>
                        <div className="tech-pill">Node.js</div>
                        <div className="tech-pill">PHP / Laravel</div>
                        <div className="tech-pill">MySQL</div>
                        <div className="tech-pill">Flutter</div>
                        <div className="tech-pill">React Native</div>
                        <div className="tech-pill">Adobe XD</div>
                        <div className="tech-pill">Figma</div>
                        <div className="tech-pill">Adobe Photoshop</div>
                        <div className="tech-pill">Google Ads</div>
                        <div className="tech-pill">Meta Ads</div>
                        <div className="tech-pill">SEO Tools</div>
                    </div>
                </div>
            </section>

            {/* CTA */}

            <div className="container-fluid cta-service-bg py-5 text-center cta-strip">
                <div className="container px-3 py-5 px-sm-0">
                    <h2 className="cta-service-title">
                        Let's Build Your <span className="text-gradient">Dream Project</span>
                    </h2>
                    <p className="mt-3 fs-6 cta-service-desc">We're excited to hear about your next project. Let's talk!</p>

                    <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary service-btn">Get In Touch →</a>
                        <a href="/Services" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-outline-dark see-pricing-btn">Our Services</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
