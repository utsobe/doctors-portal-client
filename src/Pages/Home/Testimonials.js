import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
        <section>
            <div className='flex'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonials;