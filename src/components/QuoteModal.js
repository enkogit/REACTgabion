import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const QuoteModal = ({ isOpen, onClose, prefilledProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Retaining Wall',
    dimensions: '',
    message: prefilledProduct ? `I'm interested in: ${prefilledProduct}` : '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // === CHANGE THESE TO YOUR EMAILJS VALUES ===
      const serviceID = 'service_2ua9c7e';      // ← Your Service ID
      const templateID = 'template_rf3h2h6';    // ← Your Template ID
      const publicKey = 'URJFwRqp9FCfJwwAl'; // ← Your Public Key

      await emailjs.send(serviceID, templateID, {
        ...formData,
        to_name: 'Gabionca Team',
        from_email: 'gabionca.quotes@gmail.com',   // ← your Gmail address
        reply_to: 'gabionca@pm.me'                 // ← your Proton Mail
      }, publicKey);

      Notiflix.Notify.success('Quote request sent! We will reply within 24 hours.');
      onClose();
      setFormData({
        name: '', email: '', phone: '', location: '',
        projectType: 'Retaining Wall', dimensions: '', message: ''
      });
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong. Please email gabionca@pm.me directly.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1a3c34] text-white px-6 py-5 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">Get Your Free Quote</h3>
            <p className="text-sm opacity-80">We reply within 24 hours</p>
          </div>
          <button onClick={onClose} className="text-3xl leading-none hover:opacity-70">×</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City / Province *</label>
              <input type="text" name="location" required value={formData.location} onChange={handleChange}
                placeholder="Calgary, AB" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Type</label>
              <select name="projectType" value={formData.projectType} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]">
                <option>Retaining Wall</option>
                <option>Garden Feature / Fence</option>
                <option>Erosion Control / Slope</option>
                <option>Commercial / Municipal</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Dimensions or Project Details</label>
            <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange}
              placeholder="e.g. 12m long × 2.5m high" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional Message</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a3c34]" 
              placeholder="Any specific requirements or questions?"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#1a3c34] hover:bg-[#0f2a24] text-white font-semibold py-4 rounded-xl transition disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? 'Sending...' : 'Send Quote Request →'}
          </button>

          <p className="text-center text-xs text-gray-500">No obligation • Fast response from our Alberta team</p>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;