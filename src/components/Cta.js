import React from 'react';

const Cta = () => {
    // Inline style for the background image
    const sectionStyle = {
        backgroundImage: `url('/images/gabion-fence-wall.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="w-full flex items-center justify-center text-blue-900" style={sectionStyle}>
            <div className="container mx-auto p-12 text-center lg:text-left flex flex-col  items-center justify-between bg-gray-100 bg-opacity-80 rounded-lg">
                <div className="flex flex-col justify-center text-center">
                    <h2 className='text-3xl md:text-5xl font-bold mb-4'>Contact Us</h2>
                    <p className="text-lg md:text-xl">Have a question or need a quote? Reach out to us and let's discuss how we can help with your gabion needs.</p>
                    <p className="mt-4">Email: <a href="mailto:contact.aggie@pm.me" className="text-blue-900 underline">gabionca@pm.me</a></p>
                    <p className="mt-4">Phone: <a href="tel:+14039690333" className="text-blue-900 underline">(403)-969-0333</a></p>
                </div>
            </div>
        </div>
    );
}


export default Cta;
