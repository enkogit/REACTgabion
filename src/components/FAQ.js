import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "How long do gabion walls last?",
            answer: "Our Galfan-coated gabion baskets are designed to last 50+ years with minimal maintenance, even in harsh Canadian winters."
        },
        {
            question: "What is the difference between Galfan and regular galvanized gabions?",
            answer: "Galfan coating (zinc-aluminum alloy) provides 2-3x better corrosion resistance than standard galvanized coating, making it ideal for Canadian weather conditions."
        },
        {
            question: "Do you deliver across Canada?",
            answer: "Yes! We offer fast nationwide delivery from our Calgary base, with 1-5 business day shipping to most Western Canadian locations."
        },
        {
            question: "Can I install gabion walls myself?",
            answer: "Absolutely. Gabions are one of the easiest retaining wall systems to install. We provide detailed installation guides and offer consultation services if needed."
        },
        {
            question: "What fill material should I use?",
            answer: "We recommend 4-8 inch angular stone for structural walls. For decorative applications, smaller decorative stone works beautifully. We can help you source local materials."
        },
        {
            question: "How much does a gabion retaining wall cost?",
            answer: "Costs typically range from $150-$400 per square meter installed, depending on height, design complexity, and stone type. Use our estimator for a quick ballpark."
        }
    ];

    return (
        <div id="faq" className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#1a3c34] font-semibold tracking-[3px]">GOT QUESTIONS?</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-[#f8f5f0] rounded-2xl p-6 cursor-pointer">
                            <summary className="font-semibold text-lg text-[#1a3c34] flex justify-between items-center">
                                {faq.question}
                                <span className="text-2xl group-open:rotate-45 transition">+</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600">Still have questions?</p>
                    <button 
                        onClick={() => {
                            const element = document.getElementById('calculator');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 bg-[#1a3c34] hover:bg-black text-white font-semibold px-8 py-3 rounded-2xl transition"
                    >
                        Get Your Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;