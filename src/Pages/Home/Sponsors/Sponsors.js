import React from 'react';
import bizli from '../../../assets/sponsors/Bizli.png';
import brb from '../../../assets/sponsors/brb.png';
import electra from '../../../assets/sponsors/electra.png';
import energypac from '../../../assets/sponsors/energypac.png';
import ensysco from '../../../assets/sponsors/ensysco.png';
import jamuna from '../../../assets/sponsors/jamuna.png';
import jrc from '../../../assets/sponsors/jrc.jpg';
import newton from '../../../assets/sponsors/newton-logo.png';
import rangs from '../../../assets/sponsors/rangs.png';
import walton from '../../../assets/sponsors/walton.png';


const Sponsors = () => {
      return (
            <div className='my-10'>
                  <h2 className='text-4xl font-semibold text-center mb-3'>Sponsors</h2>
                  <marquee behavior="string" direction="string">
                        <div className='flex'>
                              <img className='mx-4 w-28 h-20' src={bizli} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={brb} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={electra} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={energypac} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={ensysco} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={jamuna} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={jrc} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={newton} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={rangs} alt="Sponsor Logo" />
                              <img className='mx-4 w-28 h-20' src={walton} alt="Sponsor Logo" />
                        </div>
                  </marquee>
            </div>
      );
};

export default Sponsors;