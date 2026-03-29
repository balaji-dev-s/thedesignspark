import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Work() {
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
                        <a href="/" className="home-sub-tag text-decoration-none">Home</a> <span className="mx-2 service-sub-tag">› Our Work</span>
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <div className="d-flex justify-content-center">
                            <motion.h1
                                className="section-title"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                Our Portfolio
                            </motion.h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <motion.h6 className="page-sub mt-1 mb-5 text-center"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}>
                                Real screenshots from real websites we've designed, developed, and launched - across industries and borders.
                            </motion.h6></div>
                    </div>
                </div>
            </section>

            {/* Stats Band */}
            <section className="section stats-band about-story-bg">
                <div className="container d-flex justify-content-between flex-wrap">
                    <StatItem target={50} label="Projects Delivered" suffix="+" />
                    <StatItem target={8} label="Industries Served" suffix="+" />
                    <StatItem target={5} label="Countries" suffix="" />
                    <StatItem target={98} label="Client Satisfaction" suffix="%" />
                </div></section>


            {/* CTA */}
            <div className="container-fluid cta-service-bg py-5 text-center cta-strip">
                <div className="container px-3 py-5 px-sm-0">
                    <h2 className="cta-service-title">
                        Want Your Project
                        in <span className="text-gradient">Our Portfolio?</span>
                    </h2>
                    <p className="mt-3 fs-6 cta-service-desc">Let's create something remarkable together.</p>

                    <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary service-btn">Start Your Project →</a>
                        <a href="/Pricing" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-outline-dark see-pricing-btn">See Pricing</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
