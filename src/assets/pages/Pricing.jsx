import React from 'react'
import { motion } from "framer-motion";
import "../pages/pricing.css";
import FAQ from '../components/FAQ.jsx';

export default function Pricing() {
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
        <div>
            {/* Header */}
            <section className="grid-section-bg">
                <div className="container d-flex flex-column py-5 page-hero-content px-3 gap-3 px-sm-0">
                    <div className="breadcrumb d-flex justify-content-center mt-3 mb-2">
                        <a href="/" className="home-sub-tag text-decoration-none">Home</a> <span className="mx-2 service-sub-tag">› Pricing</span>
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
                                Simple, Transparent Pricing
                            </motion.h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <motion.h6 className="page-sub mt-1 mb-5 text-center"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}>
                                All-inclusive first-year pricing with everything you need. No hidden fees, no surprises. Transparent renewal rates.
                            </motion.h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* Price Plans */}
            <section className='container-fluid price-section-bg px-3 px-sm-0 pb-3 pt-5'>
                <div className="text-center pt-3">
                    <div className="section-tag d-flex justify-content-center">Website Plans</div>
                    <h2 className="section-title">Choose Your Plan</h2>
                </div>
                <div className="container pricing-grid pt-3 pb-2">
                    {/* <!-- STATIC --> */}
                    <div className="price-card">
                        <div className="price-tier">Starter</div>
                        <div className="price-name">Static Website</div>
                        <div className="price-launch">All-inclusive first year: ₹14,000</div>
                        <div className="price-amount"><span className="currency">₹</span><span className="amount">14,000</span></div>
                        <div className="price-renewal">First year inclusive · Renewal: <span>₹7,000/year</span></div>
                        <div className="price-divider"></div>
                        <ul className="price-features">
                            <li>Up to 10 Pages</li>
                            <li>HTML, CSS & jQuery</li>
                            <li>Contact Form Included</li>
                            <li>Free Domain Name</li>
                            <li>Free Hosting Server</li>
                            <li>Mobile Responsive</li>
                            <li>Fast Page Speed</li>
                            <li>SSL Certificate</li>
                        </ul>
                        <a href="/Contact" className="btn-price">Get Started</a>
                    </div>
                    {/* <!-- CMS --> */}
                    <div className="price-card featured">
                        <div className="price-badge">Most Popular</div>
                        <div className="price-tier">Professional</div>
                        <div className="price-name">CMS Website</div>
                        <div className="price-launch">All-inclusive first year: ₹25,000</div>
                        <div className="price-amount"><span className="currency">₹</span><span className="amount">25,000</span></div>
                        <div className="price-renewal">First year inclusive · Renewal: <span>₹12,500/year</span></div>
                        <div className="price-divider"></div>
                        <ul className="price-features">
                            <li>Unlimited Pages</li>
                            <li>Unlimited Forms</li>
                            <li>WordPress CMS</li>
                            <li>Elementor Pro License</li>
                            <li>Crocoblock License</li>
                            <li>Free Domain & Hosting</li>
                            <li>SEO Setup Included</li>
                            <li>Priority Support</li>
                        </ul>
                        <a href="/Contact" className="btn-price">Get Started</a>
                    </div>
                    {/* <!-- ECOMM --> */}
                    <div className="price-card">
                        <div className="price-tier">Enterprise</div>
                        <div className="price-name">E-Commerce</div>
                        <div className="price-launch">All-inclusive first year: ₹45,000</div>
                        <div className="price-amount"><span className="currency">₹</span><span className="amount">45,000</span></div>
                        <div className="price-renewal">First year inclusive · Renewal: <span>₹20,000/year</span></div>
                        <div className="price-divider"></div>
                        <ul className="price-features">
                            <li>WooCommerce Full Setup</li>
                            <li>All E-Commerce Features</li>
                            <li>Payment Gateway Integration</li>
                            <li>Product Management System</li>
                            <li>Free Domain & Hosting</li>
                            <li>Elementor + Crocoblock</li>
                            <li>Order & Inventory Tracking</li>
                            <li>Dedicated Support</li>
                        </ul>
                        <a href="/Contact" className="btn-price">Get Started</a>
                    </div>
                </div>
                <div className='price-card-info pb-5 pb-sm-5'>
                    All prices in INR (Indian Rupees). International pricing available in USD.
                    <a href="/Contact" className='price-contact-btn'> Contact us →</a>
                </div>
            </section>

            {/* Package cards */}
            <section className="container-fluid market-section-bg py-5 section-alt">
                <div className="container mb-5 px-3 pt-3 px-sm-0">
                    <div className="section-tag">Add-on services</div>
                    <h2 className="mrkt-section-title">Enhance Your Package</h2>
                    <p className="section-sub">Add these services to any plan for a complete digital solution.</p>
                </div>
                <div class="addon-grid container px-3 pb-3 px-sm-0">
                    <div className="addon-card"><div className="addon-icon">📱</div><div className="addon-title">Mobile App Development</div><p className="addon-desc">iOS & Android app for your business. Flutter or React Native.</p><div className="addon-price">Starting ₹80,000</div></div>
                    <div className="addon-card"><div className="addon-icon">🔍</div><div className="addon-title">SEO Package</div><p className="addon-desc">On-page, off-page, and technical SEO with monthly reporting.</p><div className="addon-price">₹10,000/month</div></div>
                    <div className="addon-card"><div className="addon-icon">📣</div><div className="addon-title">Social Media Management</div><p className="addon-desc">Content creation and posting across all major platforms.</p><div className="addon-price">₹10,000/month</div></div>
                    <div className="addon-card"><div className="addon-icon">💰</div><div className="addon-title">Google & Meta Ads</div><p className="addon-desc">Paid advertising campaigns with targeting and optimization.</p><div className="addon-price">₹5,000/month + ad spend</div></div>
                    <div className="addon-card"><div className="addon-icon">🎨</div><div className="addon-title">Graphic Design Package</div><p className="addon-desc">Monthly batch of social media creatives, banners, and more.</p><div className="addon-price">₹10,000/month</div></div>
                    <div className="addon-card"><div className="addon-icon">🎬</div><div className="addon-title">Video Production</div><p className="addon-desc">Promo videos, product demos, and explainer animations.</p><div className="addon-price">Starting ₹15,000</div></div>
                </div>
            </section>

            {/* faq */}
            <section className='container-fluid py-5 faq-bg'>
                <div className="container px-3 px-sm-0">
                    <div className="section-tag pt-2">FAQ</div>
                    <h2 className="mrkt-section-title">Frequently Asked Questions</h2>
                </div>
                <div className='container px-3 pb-3 pb-sm-5 px-sm-0'>
                    <FAQ />
                </div>
            </section>

            {/* CTA */}
            <div className="container-fluid px-3 px-sm-0 cta-service-bg py-5 text-center">
                <div className='py-3 py-sm-5'>
                    <div className="container custom-q-bg px-3 py-5 px-sm-3">
                        <div className='d-flex justify-content-center'>
                            <div className="section-tag">custom quote</div>
                        </div>
                        <h2 className="cta-service-title">
                            Need Something Tailored?
                        </h2>
                        <p className="mt-3 fs-6 cta-service-desc">Every business is unique. Let's discuss your specific requirements and create a package that perfectly fits your budget and goals.</p>

                        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                            <a href="/Contact" onMouseMove={handleMove}
                                onMouseLeave={handleLeave} className="btn btn-primary service-btn">Get a Custom Quote →</a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
