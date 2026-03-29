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
                                Services Focused on Results
                            </motion.h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <motion.h6 className="page-sub mt-1 mb-5 text-center"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}>
                                End-to-end digital solutions - from design to development to marketing - crafted to grow your business in the digital age.
                            </motion.h6></div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="container-fluid section-service-bg py-5 px-3 px-sm-0">

                {/* 01 */}
                <motion.div className="container service-block"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">01</div>
                        <div className="section-tag">E-Commerce Development</div>
                        <h2 className="svc-big-title">Online Stores That Convert Visitors to Customers</h2>
                        <p className="svc-big-desc">
                            Our E-commerce service includes not only building an online shop but also creating your entire digital infrastructure, frontend and backend. Our team will assist your business scale up with your online business.
                        </p>
                        <ul className="svc-features">
                            <li>WooCommerce & Custom E-commerce Platforms</li>
                            <li>Payment Gateway Integration (Razorpay, Paytm, Stripe)</li>
                            <li>Product & Inventory Management</li>
                            <li>Mobile-Optimized Shopping Experience</li>
                            <li>Order Tracking & Customer Dashboard</li>
                            <li>SEO-Ready Product Pages</li>
                        </ul>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary service-btn mt-3">Discuss Your Store →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">🛒</div>
                        <div className="svc-visual-label">E-Commerce Solutions</div>
                    </div>
                </motion.div>

                {/* 02 */}
                <motion.div className="container service-block reverse"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">02</div>
                        <div className="section-tag">Web Application</div>
                        <h2 className="svc-big-title">Custom Web Apps Built to Scale</h2>
                        <p className="svc-big-desc">
                            TheDesignSpark provides web application development services for companies looking to create and improve web-based software products and solutions with innovative features and attractive appearance.
                        </p>
                        <ul className="svc-features">
                            <li>Custom Business Logic & Workflows</li>
                            <li>Admin Dashboards & Analytics Panels</li>
                            <li>API Development & Integrations</li>
                            <li>Database Design & Optimization</li>
                            <li>Cloud Hosting & Deployment</li>
                            <li>Maintenance & Support</li>
                        </ul>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary mt-3 service-btn">Start Building →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">⚙️</div>
                        <div className="svc-visual-label">Web Application Development</div>
                    </div>
                </motion.div>

                {/* 03 */}
                <motion.div className="container service-block"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">03</div>
                        <div className="section-tag">Mobile Application</div>
                        <h2 className="svc-big-title">Stellar Mobile Experiences for iOS & Android</h2>
                        <p className="svc-big-desc">
                            We assist brands across the globe to design, build, and maintain stellar digital products, enabling seamless user experiences across all modern platforms and devices.
                        </p>
                        <ul className="svc-features">
                            <li>iOS (Swift) & Android (Kotlin)</li>
                            <li>Flutter / React Native</li>
                            <li>UI/UX Design</li>
                            <li>App Store Optimization</li>
                            <li>Push Notifications</li>
                            <li>App Deployment</li>
                        </ul>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary mt-3 service-btn">Build Your App →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">📱</div>
                        <div className="svc-visual-label">Mobile App Development</div>
                    </div>
                </motion.div>

                {/* 04 */}
                <motion.div className="container service-block reverse"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <div className="svc-text">
                        <div className="svc-num">04</div>
                        <div className="section-tag">CMS Website</div>
                        <h2 className="svc-big-title">Powerful, Easy-to-Manage Websites</h2>
                        <p className="svc-big-desc">
                            TheDesignSpark provides the best CMS web development solutions available in the market - from large enterprise portals to small business websites, knowledge base systems, and more.
                        </p>
                        <ul className="svc-features">
                            <li>WordPress + Elementor</li>
                            <li>Custom Themes</li>
                            <li>Plugin Development</li>
                            <li>Multi-language Support</li>
                            <li>Landing Pages</li>
                            <li>Speed & Security Optimization</li>
                        </ul>
                        <a href="/Contact" onMouseMove={handleMove}
                            onMouseLeave={handleLeave} className="btn btn-primary mt-3 service-btn">Build My Website →</a>
                    </div>

                    <div className="svc-visual">
                        <div className="svc-visual-icon">🖥️</div>
                        <div className="svc-visual-label">CMS Development</div>
                    </div>
                </motion.div>

            </section>

            {/* MARKETING */}
            <section className="container-fluid market-section-bg py-5 section-alt">
                <div className="container mb-5 px-3 px-sm-0">
                    <div className="section-tag">Marketing Services</div>
                    <h2 className="mrkt-section-title">Creating Value Through Marketing</h2>
                    <p className="section-sub">We work with our customers to create online and offline marketing strategies that match the organization's vision and ethos - driving measurable ROI.</p>
                </div>
                <div className="container mb-5 px-3 px-sm-0">
                    <div className="mkt-wrapper">

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">🔍</div>
                                <div className="mkt-title mt-2">SEO & Content Marketing</div>
                                <div className="section-sub">Rank higher on Google with on-page, off-page, and SEO combined with compelling content strategy.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">📱</div>
                                <div className="mkt-title mt-2">Social Media Marketing</div>
                                <div className="section-sub">Grow your brand presence on Facebook, Instagram, LinkedIn, and more with consistent, creative content.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">💰</div>
                                <div className="mkt-title mt-2">Google & Meta Ads</div>
                                <div className="section-sub">Data-driven paid ad campaigns that target the right audience and maximize your return on ad spend.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">📧</div>
                                <div className="mkt-title mt-2">Email Marketing</div>
                                <div className="section-sub">Automated email sequences and newsletters that nurture leads and keep your customers engaged.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">🎨</div>
                                <div className="mkt-title mt-2">Graphic Design</div>
                                <div className="section-sub">Stunning visuals - from social media creatives to brochures, banners, and brand identity assets.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">🎬</div>
                                <div className="mkt-title mt-2">Video Production</div>
                                <div className="section-sub">Promotional videos, product demos, explainer animations, and reels that captivate your audience.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">🖨️</div>
                                <div className="mkt-title mt-2">Print & Branding</div>
                                <div className="section-sub">Business cards, flyers, banners, packaging design, and full brand identity kits</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">📊</div>
                                <div className="mkt-title mt-2">Analytics & Reporting</div>
                                <div className="section-sub">Transparent monthly reports with actionable insights on traffic, conversions, and growth metrics.</div>
                            </div>
                        </div>

                        <div className="mkt-col">
                            <div className="mkt-card p-3 h-100">
                                <div className="mkt-icon fs-3">🌐</div>
                                <div className="mkt-title mt-2">Local SEO</div>
                                <div className="section-sub">Dominate local search results with Google Business Profile optimization and local citation building.</div>
                            </div>
                        </div>

                    </div>
                </div>
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