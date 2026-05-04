import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael T.",
      location: "Edmonton, AB",
      text: "Excellent service and fast delivery. The gabion baskets were exactly as described and the quote process was very smooth.",
      project: "Retaining wall for backyard"
    },
    {
      name: "Sarah K.",
      location: "Calgary, AB",
      text: "Clear communication, delivered within a week, easy assembly and the baskets look fantastic.",
      project: "Garden planters + seating wall"
    },
    {
      name: "David R.",
      location: "Red Deer, AB",
      text: "Used them for a commercial erosion control project. Clear pricing and good selection to choose the right size for our project.",
      project: "Commercial slope stabilization"
    }
  ];

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#1a3c34] font-semibold">REAL CUSTOMERS, REAL RESULTS</span>
          <h2 className="text-4xl font-bold mt-3">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed">“{t.text}”</p>
              
              <div className="mt-8 pt-6 border-t flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a3c34] rounded-full flex items-center justify-center text-white font-semibold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location} • {t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          Join happy customers across Canada
        </div>
      </div>
    </section>
  );
};

export default Testimonials;