import { useState } from "react";
import "../components/faq.css";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-list reveal">
            <div className="faq-item">
                <div className="faq-q" onClick={() => toggleFaq(0)}>
                    <span>What's included in the first-year pricing?</span>
                    <span
                        className="faq-arrow"
                        style={{
                            transform: activeIndex === 0 ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        ▼
                    </span>
                </div>
                <div className={`faq-a ${activeIndex === 0 ? "open" : ""}`}>
                    <p>
                        The first-year pricing is all-inclusive — it covers website design
                        and development, domain name registration (1 year), hosting server
                        (1 year), and all listed features. There are no hidden fees.
                    </p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-q" onClick={() => toggleFaq(1)}>
                    <span>How long does it take to build a website?</span>
                    <span
                        className="faq-arrow"
                        style={{
                            transform: activeIndex === 1 ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        ▼
                    </span>
                </div>
                <div className={`faq-a ${activeIndex === 1 ? "open" : ""}`}>
                    <p>
                        A Static website is typically ready in 7–10 working days. A CMS
                        website takes 2–4 weeks. An E-commerce project usually takes 4–6
                        weeks depending on the number of products and custom requirements.
                    </p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-q" onClick={() => toggleFaq(2)}>
                    <span>Do you offer customized pricing?</span>
                    <span
                        className="faq-arrow"
                        style={{
                            transform: activeIndex === 2 ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        ▼
                    </span>
                </div>
                <div className={`faq-a ${activeIndex === 2 ? "open" : ""}`}>
                    <p>
                        Absolutely! We offer tailored pricing for unique requirements,
                        large-scale projects, and long-term partnerships. Contact us with
                        your project brief and we'll create a custom quote for you.
                    </p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-q" onClick={() => toggleFaq(3)}>
                    <span>What payment methods do you accept?</span>
                    <span
                        className="faq-arrow"
                        style={{
                            transform: activeIndex === 3 ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        ▼
                    </span>
                </div>
                <div className={`faq-a ${activeIndex === 3 ? "open" : ""}`}>
                    <p>
                        We accept bank transfers, UPI, Razorpay, and major credit/debit
                        cards. For international clients, we accept wire transfers and
                        PayPal. Typically, we work on a 50% advance, 50% on delivery basis.
                    </p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-q" onClick={() => toggleFaq(4)}>
                    <span>Do you provide post-launch support?</span>
                    <span
                        className="faq-arrow"
                        style={{
                            transform: activeIndex === 4 ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        ▼
                    </span>
                </div>
                <div className={`faq-a ${activeIndex === 4 ? "open" : ""}`}>
                    <p>
                        Yes! All packages include a 30-day free support period after launch.
                        After that, we offer affordable annual maintenance packages to keep
                        your website updated, secure, and running smoothly.
                    </p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-q" onClick={() => toggleFaq(5)}>
                    <span>Can I upgrade my plan later?</span>
                    <span
                        className="faq-arrow"
                        style={{
                            transform: activeIndex === 5 ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        ▼
                    </span>
                </div>
                <div className={`faq-a ${activeIndex === 5 ? "open" : ""}`}>
                    <p>
                        Of course! You can upgrade from Static to CMS or from CMS to
                        E-commerce at any time. We'll migrate your content and add the new
                        features — you only pay the difference.
                    </p>
                </div>
            </div>
        </div>
    );
}