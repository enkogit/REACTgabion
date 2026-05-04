import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Project",
      desc: "Use our estimator or request a quote."
    },
    {
      number: "02",
      title: "Receive Your Custom Quote",
      desc: "Get a clear, no-obligation quote within 24 hours (usually much faster)."
    },
    {
      number: "03",
      title: "We Handle Everything",
      desc: "We coordinate with our trusted partners for reliable delivery across Canada."
    },
    {
      number: "04",
      title: "Build With Confidence",
      desc: "Your gabions arrive ready to assemble."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#1a3c34] font-semibold tracking-[3px]">SIMPLE PROCESS</span>
          <h2 className="text-4xl font-bold mt-3">How It Works</h2>
          <p className="mt-4 max-w-md mx-auto text-gray-600">We made ordering gabions easy and stress-free.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-[#1a3c34] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#1a3c34] font-medium">Still have questions? → <span className="underline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get in touch with our team</span></p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;