import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../pages/work.css";
export default function Work() {
    const [activeFilter, setActiveFilter] = useState("all");
    const works = [
        { id: 1, title: "Richmond Medicare", url: "richmondhealth.in", image: "https://source.unsplash.com/600x400/?medical,website", category: "cms", tags: ["Healthcare", "CMS"] },
        { id: 2, title: "Urban Threads", url: "urbanthreads.com", image: "https://source.unsplash.com/600x400/?fashion,ecommerce", category: "ecommerce", tags: ["Fashion", "E-Commerce"] },
        { id: 3, title: "Nova Portfolio", url: "nova.dev", image: "https://source.unsplash.com/600x400/?portfolio,website", category: "web", tags: ["Portfolio", "Web"] },
        { id: 4, title: "BrandForge Studio", url: "brandforge.io", image: "https://source.unsplash.com/600x400/?branding,design", category: "branding", tags: ["Branding", "Identity"] },
        { id: 5, title: "GreenLeaf Organics", url: "greenleaf.in", image: "https://source.unsplash.com/600x400/?organic,website", category: "cms", tags: ["Organic", "CMS"] },
        { id: 6, title: "TechGear Shop", url: "techgear.store", image: "https://source.unsplash.com/600x400/?electronics,ecommerce", category: "ecommerce", tags: ["Electronics", "Shop"] },
        { id: 7, title: "Pixel Agency", url: "pixelagency.io", image: "https://source.unsplash.com/600x400/?agency,website", category: "web", tags: ["Agency", "Web"] },
        { id: 8, title: "StartupX Branding", url: "startupx.co", image: "https://source.unsplash.com/600x400/?startup,branding", category: "branding", tags: ["Startup", "Brand"] },
        { id: 9, title: "MediCare Plus", url: "medicareplus.in", image: "https://source.unsplash.com/600x400/?hospital,website", category: "cms", tags: ["Medical", "CMS"] },
        { id: 10, title: "Sneaker Hub", url: "sneakerhub.com", image: "https://source.unsplash.com/600x400/?shoes,ecommerce", category: "ecommerce", tags: ["Shoes", "E-Commerce"] },
        { id: 11, title: "Devfolio", url: "devfolio.dev", image: "https://source.unsplash.com/600x400/?developer,portfolio", category: "web", tags: ["Developer", "Portfolio"] },
        { id: 12, title: "LogoCraft", url: "logocraft.io", image: "https://source.unsplash.com/600x400/?logo,branding", category: "branding", tags: ["Logo", "Branding"] },
        { id: 13, title: "Wellness Clinic", url: "wellnessclinic.in", image: "https://source.unsplash.com/600x400/?clinic,website", category: "cms", tags: ["Clinic", "CMS"] },
        { id: 14, title: "Gadget World", url: "gadgetworld.store", image: "https://source.unsplash.com/600x400/?gadgets,ecommerce", category: "ecommerce", tags: ["Gadgets", "Shop"] },
        { id: 15, title: "Creative Studio", url: "creativestudio.io", image: "https://source.unsplash.com/600x400/?design,website", category: "web", tags: ["Design", "Web"] },
        { id: 16, title: "BrandNova", url: "brandnova.co", image: "https://source.unsplash.com/600x400/?brand,identity", category: "branding", tags: ["Identity", "Brand"] }
    ];

    // FILTER
    const filtered =
        activeFilter === "all"
            ? works
            : works.filter((item) => item.category === activeFilter);

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


            {/* HEADER */}
            <section className="section container-fluid section-alt py-3 py-sm-5">
                <div className="container py-5 px-3 px-sm-0">
                    <div className="text-center">
                        <div className="d-flex justify-content-center mb-2">
                            <motion.div
                                className="section-tag"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                portfolio
                            </motion.div>
                        </div>

                        <motion.h2
                            className="section-title"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            All Projects
                        </motion.h2>
                    </div>

                    <div className="container py-4">
                        {/* FILTER */}
                        <div className="filter-tabs">
                            <button className={`filter-btn ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>
                                All ({works.length})
                            </button>
                            <button className={`filter-btn ${activeFilter === "web" ? "active" : ""}`} onClick={() => setActiveFilter("web")}>
                                Web Design
                            </button>
                            <button className={`filter-btn ${activeFilter === "cms" ? "active" : ""}`} onClick={() => setActiveFilter("cms")}>
                                CMS / WordPress
                            </button>
                            <button className={`filter-btn ${activeFilter === "ecommerce" ? "active" : ""}`} onClick={() => setActiveFilter("ecommerce")}>
                                E-Commerce
                            </button>
                            <button className={`filter-btn ${activeFilter === "branding" ? "active" : ""}`} onClick={() => setActiveFilter("branding")}>
                                Branding
                            </button>
                        </div>

                        {/* CARDS */}
                        <div className="works-grid px-3 px-sm-0">
                            {filtered.map(work => (
                                <a
                                    key={work.id}
                                    href={`https://${work.url}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-decoration-none"
                                >
                                    <div key={work.id} className="work-card">

                                        <div className="work-thumb">
                                            <img src={work.image} alt={work.title} />
                                            <div className="work-overlay">
                                                <div className="work-overlay-text">View Project</div>
                                            </div>
                                        </div>

                                        <div className="work-meta">
                                            <h1 className="work-title mb-0">{work.title}</h1>


                                            <div className='work-url'>
                                                {work.url}
                                            </div>


                                            <div className="work-tags mt-2">
                                                {work.tags.map((tag, i) => (
                                                    <span key={i} className="work-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


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
