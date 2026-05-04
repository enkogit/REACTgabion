import React from 'react';

const TrustBar = () => {
  return (
    <div className="bg-[#1a3c34] text-white py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>100% Canadian Owned</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Canada-Wide Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span>★</span>
            <span>4.75/5 from 87 customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;