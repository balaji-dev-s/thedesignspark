import React, { useRef } from "react";
import "../pages/service.css";
import { motion } from "framer-motion";

export default function Services() {
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
    return (
        <>
            {/* HERO */}
            <section className="grid-section-bg">
                <div className="container d-flex flex-column py-5 page-hero-content px-3 gap-3 px-sm-0">
                    <div className="breadcrumb d-flex justify-content-center mt-3 mb-2">
                        <a href="/" className="home-sub-tag text-decoration-none">Home</a> <span className="mx-2 service-sub-tag">› Services</span>
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
                                Results-Driven Printing Services
                            </motion.h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <motion.h6 className="page-sub mt-1 mb-5 text-center"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}>
                                End-to-end printing solutions from design to final production, crafted to elevate your brand with high-quality print materials.                            </motion.h6></div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="container-fluid section-service-bg py-5 px-3 px-sm-0">

                {/* 01 */}
                <motion.div className="container service-block mt-5 mb-5"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">01</div>
                        <div className="section-tag">Printing Services</div>
                        <h2 className="svc-big-title">High-Quality Prints That Elevate Your Brand</h2>
                        <p className="svc-big-desc">
                            Our printing services go beyond just production, we deliver complete print solutions from design to final output.
                            Whether you need marketing materials or large-format prints, we ensure precision, quality, and timely delivery for every project.
                        </p>
                        <ul className="tech-grid list-unstyled d-flex flex-wrap">
                            <li className="tech-pill">Question Paper Printing</li>
                            <li className="tech-pill">Prescription Pad Printing</li>
                            <li className="tech-pill">Umbrella Printing</li>
                            <li className="tech-pill">Canopy Printing</li>
                            <li className="tech-pill">Tag Printing</li>
                            <li className="tech-pill">Pen Printing</li>

                            <li className="tech-pill">Pamphlet Printing</li>
                            <li className="tech-pill">Poster Printing</li>
                            <li className="tech-pill">Bill Book Printing</li>
                            <li className="tech-pill">Diary Printing</li>
                            <li className="tech-pill">Envelope Printing</li>
                            <li className="tech-pill">Digital Banner Printing</li>
                            <li className="tech-pill">Keychain Printing</li>

                            <li className="tech-pill">Flex Printing</li>
                            <li className="tech-pill">Sticker Printing</li>
                            <li className="tech-pill">Label Printing</li>
                            <li className="tech-pill">Menu Card Printing</li>
                            <li className="tech-pill">Notepad Printing</li>
                            <li className="tech-pill">Calendar Printing</li>
                            <li className="tech-pill">Promotional Table Printing</li>
                            <li className="tech-pill">Folder Printing</li>

                            <li className="tech-pill">Magazine Printing</li>
                            <li className="tech-pill">Printing Materials</li>
                            <li className="tech-pill">Brochure Printing</li>
                            <li className="tech-pill">Catalog Printing</li>
                            <li className="tech-pill">Coupons Printing</li>
                            <li className="tech-pill">Visiting Cards Printing</li>
                            <li className="tech-pill">Display Boards Printing</li>
                            <li className="tech-pill">Leaflet Printing</li>

                            <li className="tech-pill">ID Card Printing</li>
                            <li className="tech-pill">Letter Pad Printing</li>
                            <li className="tech-pill">Digital Poster Printing</li>
                            <li className="tech-pill">Standees Printing</li>
                            <li className="tech-pill">Black & White Bill Book Printing</li>
                            <li className="tech-pill">File Printing</li>
                            <li className="tech-pill">Text Book Printing</li>
                            <li className="tech-pill">Invoice Printing</li>
                            <li className="tech-pill">Dangle Printing</li>
                        </ul>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary service-btn mt-3">Start Your Print Project →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">&#128424;</div>
                        <div className="svc-visual-label">printing Service</div>
                    </div>
                </motion.div>

                {/* 02 */}
                <motion.div className="container service-block reverse mt-5 mb-5"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">02</div>
                        <div className="section-tag">Graphic Design Services</div>
                        <h2 className="svc-big-title">Creative Designs That Define Your Brand</h2>
                        <p className="svc-big-desc">
                            Our graphic design services go beyond visuals, we create impactful designs that communicate your brand message effectively. From branding to marketing materials, we ensure every design is crafted with creativity, consistency, and attention to detail.                        </p>
                        <ul className="tech-grid list-unstyled d-flex flex-wrap">
                            <li className="tech-pill">Logo Design</li>
                            <li className="tech-pill">Brand Identity</li>
                            <li className="tech-pill">Brochure Design</li>
                            <li className="tech-pill">Catalog Design</li>
                            <li className="tech-pill">Poster Design</li>
                            <li className="tech-pill">Banner Design</li>
                            <li className="tech-pill">Social Media Creatives</li>
                            <li className="tech-pill">Advertisement Design</li>
                            <li className="tech-pill">Packaging Design</li>
                            <li className="tech-pill">Label Design</li>
                            <li className="tech-pill">Business Card Design</li>
                            <li className="tech-pill">Stationery Design</li>
                            <li className="tech-pill">Menu Card Design</li>
                        </ul>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary mt-3 service-btn">Build Your Brand →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">&#127912;</div>
                        <div className="svc-visual-label">Graphic Design</div>
                    </div>
                </motion.div>

                {/* 03 */}
                <motion.div className="container service-block mt-5 mb-5"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">03</div>
                        <div className="section-tag">Inserting Service</div>
                        <h2 className="svc-big-title">Reliable, Easy-to-Execute Inserting Services</h2>
                        <p className="svc-big-desc">
                            Delivering professional Newspaper Inserting Services with precise execution, wide coverage, and guaranteed timely delivery for your marketing needs.                        </p>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary mt-3 service-btn">Book Service →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">&#128240;</div>
                        <div className="svc-visual-label">Newspaper Inserting Service</div>
                    </div>
                </motion.div>

            </section>

            {/* CTA */}

            <div className="container-fluid cta-service-bg py-5 text-center cta-strip">
                <div className="container px-3 py-5 px-sm-0">
                    <h2 className="cta-service-title">
                        Not Sure Which Service <br /> You <span className="text-gradient">Need?</span>
                    </h2>
                    <p className="mt-3 fs-6 cta-service-desc">Let’s have a free consultation and find the best solution.</p>

                    <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary service-btn">Free Consultation →</a>
                        <a href="/Pricing" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-outline-dark see-pricing-btn">See Pricing</a>
                    </div>
                </div>
            </div>
        </>
    );
}