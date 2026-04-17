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
                                Crafting Quality Print Experiences
                            </motion.h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <motion.h6 className="page-sub mt-1 mb-5 text-center"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}>
                                A team of dedicated print specialists and designers based in Chennai, India - turning your ideas into high-quality print solutions.                           </motion.h6></div>
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
                                        <div className="blob-icon mb-2">&#128424;</div>
                                        <h3>Printing Solutions Provider</h3>
                                        <p className="svc-big-desc">
                                            Custom printing & design experience<br />based in Chennai, India.
                                        </p>
                                    </div>
                                </div>

                                <div className="corner-badge cb1 position-absolute top-0 start-0 m-3">
                                    <div className="cb-val fw-bold">Chennai</div>
                                    <div className="cb-lbl small">Headquarters, India</div>
                                </div>

                                <div className="corner-badge cb2 position-absolute bottom-0 end-0 m-3">
                                    <div className="cb-val cb-1 fw-bold">2000</div>
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
                                    Where Every Print,<br />Speaks Quality
                                </h2>

                                <p className="svc-big-desc">
                                    The Designs Park is a trusted retailer based in Chennai, Tamil Nadu, specializing in high-quality printing services, BOPP tape, and stretch film rolls. We are committed to delivering products that meet the diverse needs of businesses and individuals.
                                </p>

                                <p className="svc-big-desc">
                                    Our printing services are designed to provide vibrant, durable, and cost-effective solutions for branding and packaging. With a focus on quality and timely delivery, we ensure that every product we supply adds value to our customers.
                                </p>

                                <p className="svc-big-desc mb-4">
                                    Backed by a customer-centric approach, we strive to build lasting relationships through reliability and excellence. At The Designs Park, innovation and service are at the heart of everything we do.                                </p>

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
                    <StatItem target={500} label="Completed Projects" suffix="+" />
                    <StatItem target={50} label="Happy Clients" suffix="+" />
                    <StatItem target={26} label="Years in Industry" suffix="+" />
                    <StatItem target={98} label="Client Satisfaction" suffix="%" />
                </div></section>

            {/* Values */}
            <section className="section container-fluid section-alt py-3 py-sm-5">
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
                                <div className="value-icon fs-2 mb-2">&#128161;</div>
                                <div className="mkt-title fw-bold mb-2">Innovation in Print</div>
                                <p className="section-sub">We adopt modern printing techniques and materials to deliver fresh, high-quality results for every project.</p>
                            </div>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">&#x1F91D;</div>
                                <div className="mkt-title fw-bold mb-2">Client Partnership</div>
                                <p className="section-sub">We work closely with every client, building lasting relationships based on trust, transparency, and consistent results.</p>
                            </div>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">&#127919;</div>
                                <div className="mkt-title fw-bold mb-2">Quality Focused</div>
                                <p className="section-sub">Every detail from design to final print is handled with precision and a commitment to excellence.</p>
                            </div>
                        </motion.div>

                        {/* CARD 4 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">&#128640;</div>
                                <div className="mkt-title fw-bold mb-2">On-Time Delivery</div>
                                <p className="section-sub">We value your deadlines. Our efficient process ensures every print job is delivered on time, every time.</p>
                            </div>
                        </motion.div>

                        {/* CARD 5 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">&#x1F464;</div>
                                <div className="mkt-title fw-bold mb-2">Customer-Centric Approach</div>
                                <p className="section-sub">We understand that great printing connects with people, every product is crafted with your audience in mind.</p>
                            </div>
                        </motion.div>

                        {/* CARD 6 */}
                        <motion.div className="flex-33 p-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.5 }}>
                            <div className="value-card p-4 h-100">
                                <div className="value-icon fs-2 mb-2">&#128200;</div>
                                <div className="mkt-title fw-bold mb-2">Scalable Solutions</div>
                                <p className="section-sub">As your business grows, our printing solutions evolve with you from small runs to large-scale production.</p>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
            {/* Process */}
            <section className="section section-process-bg py-3 py-sm-5">
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
                            <div className="process-step p-1 p-sm-4 h-100">
                                <div className="step-num mb-2">01</div>
                                <div className="step-title mb-2">Consult & Plan</div>
                                <p className="page-sub small">We understand your requirements, brand, and objectives to define the right printing approach and materials.</p>
                            </div>
                        </motion.div>

                        {/* STEP 2 */}
                        <motion.div className="flex-25 position-relative step-divider" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="process-step p-1 p-sm-4 h-100">
                                <div className="step-num mb-2">02</div>
                                <div className="step-title mb-2">Design & Proof</div>
                                <p className="page-sub small">Our team prepares precise designs and print-ready proofs, ensuring accuracy in layout, colors, and details.</p>
                            </div>
                        </motion.div>

                        {/* STEP 3 */}
                        <motion.div className="flex-25 position-relative step-divider" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="process-step p-1 p-sm-4 h-100">
                                <div className="step-num mb-2">03</div>
                                <div className="step-title mb-2">Print & Finish</div>
                                <p className="page-sub small">Using advanced printing techniques, we produce high-quality outputs with perfect finishing and attention to detail.</p>
                            </div>
                        </motion.div>

                        {/* STEP 4 */}
                        <motion.div className="flex-25 position-relative" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <div className="process-step p-1 p-sm-4 h-100">
                                <div className="step-num mb-2">04</div>
                                <div className="step-title mb-2">Deliver & Support</div>
                                <p className="page-sub small">We ensure timely delivery and provide ongoing support for all your future printing and branding needs.</p>
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
                            Our Capabilities
                        </motion.h2>

                        <motion.p
                            className="page-sub"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            We use advanced tools, premium materials, and modern printing techniques to deliver consistent, high-quality results.
                        </motion.p>
                    </div>

                    <div className="tech-grid">
                        <div className="tech-pill">Adobe Photoshop</div>
                        <div className="tech-pill">Adobe Illustrator</div>
                        <div className="tech-pill">CorelDRAW</div>

                        <div className="tech-pill">Offset Printing</div>
                        <div className="tech-pill">Digital Printing</div>
                        <div className="tech-pill">Large Format Printing</div>
                        <div className="tech-pill">UV Printing</div>

                        <div className="tech-pill">Brochures & Flyers</div>
                        <div className="tech-pill">Business Cards</div>
                        <div className="tech-pill">Banners & Hoardings</div>
                        <div className="tech-pill">Packaging & Labels</div>

                        <div className="tech-pill">Vinyl & Flex Printing</div>
                        <div className="tech-pill">Lamination (Matte/Gloss)</div>
                        <div className="tech-pill">Die Cutting</div>
                        <div className="tech-pill">Binding & Finishing</div>
                    </div>
                </div>
            </section>

            {/* CTA */}

            <div className="container-fluid cta-service-bg py-5 text-center cta-strip">
                <div className="container px-3 py-5 px-sm-0">
                    <h2 className="cta-service-title">
                        Let’s Bring Your <span className="text-gradient">Print Ideas to Life</span>
                    </h2>
                    <p className="mt-3 fs-6 cta-service-desc">We’re here to turn your ideas into high-quality print. Let’s talk!</p>

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
