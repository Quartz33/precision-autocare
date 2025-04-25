import React from 'react';
import { CheckCircle } from 'lucide-react';
import img from "../images/deep-clean.jpeg"
import Image from 'next/image';

export function Services2() {
    return(
        <div className="bg-[#1e293b] min-h-screen flex flex-col items-center px-4 py-10 text-white">
        <div className="bg-[#1e293b] max-w-md w-full text-center">
          <Image
            src={img}
            alt="Deep Clean Interior"
            className="rounded-xl mb-6 w-100 object-cover"
          />
  
          <h2 className="text-2xl font-bold">Deep Clean Detail</h2>
          <p className="text-xl font-semibold mt-2">from £120</p>
  
          <p className="text-sm text-gray-300 mt-2 mb-6">
            The deep clean detail provides a total reset of your vehicle,
            exterior and interior deep cleaned back to a factory fresh finish
          </p>
  
          <ul className="text-left space-y-3 text-gray-100">
            {[
              'Wheels, tyres and arches deep cleaned',
              'All door shuts cleaned',
              'Snow foam/pre wash',
              'Two bucket method safe contact wash',
              'Towel dried',
              'Hydrophobic sealant applied',
              'Exterior glass cleaned',
              'Tyres dressed',
              'Thorough hover to all surfaces',
              'All surfaces deep cleaned',
              'Seats steam cleaned and extracted',
              'Carpets and matts steam cleaned and extracted'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}