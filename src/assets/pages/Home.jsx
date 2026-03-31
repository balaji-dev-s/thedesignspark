import React from 'react'
import { motion } from "framer-motion";

export default function Home() {
    const fadeUp = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <section>
            {/* hero */}
            <section className='grid-bg'>
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="hero container justify-content-between d-flex flex-wrap py-5 px-3 px-sm-0">
                    <div className="hero-content">
                        <div className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>Chennai-Based Digital Agency</div>
                        <h1 className="hero-h1"><span className="h1-line1">We Build<br />Digital</span></h1>
                        <p className="hero-sub">
                            <span>
                                E-Commerce · Web Apps · Mobile Apps · Branding|CMS Websites · SEO · Digital Marketing|FoodBilling POS for Restaurants
                            </span>
                        </p>
                        <div className="hero-actions">
                            <a href="/contact" className="btn-primary ">Start Your Project →</a>
                            <a href="/our-work" className="btn-outline ">View Our Work</a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-card spotlight-card">
                            <div className="hc-dots">
                                <div className="hc-dot" style={{ background: "#ff5f57" }}></div>
                                <div className="hc-dot" style={{ background: "#febc2e" }}></div>
                                <div className="hc-dot" style={{ background: "#28c840" }}></div>
                                <span
                                    style={{
                                        marginLeft: "auto",
                                        fontSize: ".65rem",
                                        color: "var(--muted)",
                                        letterSpacing: ".06em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Live Metrics
                                </span>
                            </div>

                            <div className="hc-stat-grid">
                                <div className="hcs">
                                    <div className="hcs-val c-c">50+</div>
                                    <div className="hcs-lbl">Projects</div>
                                </div>
                                <div className="hcs">
                                    <div className="hcs-val c-p">98%</div>
                                    <div className="hcs-lbl">Satisfied</div>
                                </div>
                                <div className="hcs">
                                    <div className="hcs-val c-g">10+</div>
                                    <div className="hcs-lbl">Years</div>
                                </div>
                                <div className="hcs">
                                    <div className="hcs-val c-gr">40+</div>
                                    <div className="hcs-lbl">Clients</div>
                                </div>
                            </div>

                            <div className="hc-prog">
                                <div className="prog-row">
                                    <div className="prog-meta">
                                        <span>Web Design</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="prog-bar">
                                        <div
                                            className="prog-fill"
                                            style={{
                                                width: "95%",
                                                background:
                                                    "linear-gradient(90deg,var(--accent),var(--accent2))",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="prog-row">
                                    <div className="prog-meta">
                                        <span>Mobile Apps</span>
                                        <span>88%</span>
                                    </div>
                                    <div className="prog-bar">
                                        <div
                                            className="prog-fill"
                                            style={{
                                                width: "88%",
                                                background:
                                                    "linear-gradient(90deg,var(--accent2),var(--gold))",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="prog-row">
                                    <div className="prog-meta">
                                        <span>Marketing</span>
                                        <span>92%</span>
                                    </div>
                                    <div className="prog-bar">
                                        <div
                                            className="prog-fill"
                                            style={{
                                                width: "92%",
                                                background:
                                                    "linear-gradient(90deg,var(--gold),var(--green))",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>

            {/* marquee-service */}
            <div className="marquee-band">
                <div className="marquee-outer">
                    <div class="marquee-inner">
                        <span className="marquee-item"><span className="mi-dot">✦</span> E-Commerce</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Web Design</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Mobile Apps</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Branding & Identity</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Digital Marketing</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> CMS Development</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> SEO Optimization</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Graphic Design</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> FoodBilling POS</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Chennai, India</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> E-Commerce</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Web Design</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Mobile Apps</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Branding & Identity</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Digital Marketing</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> CMS Development</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> SEO Optimization</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Graphic Design</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> FoodBilling POS</span>
                        <span className="marquee-item"><span className="mi-dot">✦</span> Chennai, India</span>
                    </div>
                </div>
            </div>

            {/* stats band */}
            <section className="stats-section py-5 px-3 px-sm-0">
                <div className='py-5'>
                    <div className="stats-inner fade-content container">
                        <div className="stat-box"><span class="stat-num-val" data-count="50" data-suffix="+">50+</span><div class="stat-lbl">Completed Projects</div></div>
                        <div className="stat-box"><span class="stat-num-val" data-count="40" data-suffix="+">40+</span><div class="stat-lbl">Happy Clients</div></div>
                        <div className="stat-box"><span class="stat-num-val" data-count="10" data-suffix="+">10+</span><div class="stat-lbl">Years in Industry</div></div>
                        <div className="stat-box"><span class="stat-num-val">98%</span><div class="stat-lbl">Client Satisfaction</div></div>
                    </div>
                </div>
            </section>

            <section className="stats-section py-5">
                <div className="container pb-5 px-3 px-sm-0">
                    {/* HEADER */}
                    <div className="mb-5">
                        <motion.div
                            className="section-tag"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            What We Do
                        </motion.div>

                        <motion.h2
                            className="section-title"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Full-Stack Digital Solutions
                        </motion.h2>

                        <motion.p
                            className="page-sub"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            From concept to launch - every layer of your digital presence, crafted to perfection.
                        </motion.p>
                    </div>
                </div>
            </section>

        </section>
    )
}
