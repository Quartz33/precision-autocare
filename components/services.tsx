import React from "react";
import { CheckCircle } from "lucide-react";
import img from "../images/1st.jpeg"
import Image from "next/image";

export function Services() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">All our Services</h1>

            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
                <Image
                    src={img}
                    alt="Valeted Car"
                    className="rounded-xl mb-6"
                />

                <h2 className="text-2xl font-bold text-gray-800">Exterior & Interior Valet</h2>
                <p className="text-xl font-semibold text-gray-700 mt-2">from £60</p>

                <p className="text-sm text-gray-600 mt-2 mb-4">
                    Exterior safe wash and protective sealant applied. Basic interior valet
                    leaving your vehicle refreshed inside and out.
                </p>

                <h3 className="text-green-700 font-semibold text-xl mb-4">What’s included?</h3>

                <ul className="text-left space-y-2 text-gray-700">
                    {[
                        'Wheels, tyres and arches deep cleaned',
                        'All door shuts cleaned',
                        'Snow foam/pre wash',
                        'Two bucket method safe contact wash',
                        'Towel dried',
                        'Hydrophobic sealant applied',
                        'Exterior glass cleaned',
                        'Tyres dressed'
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 mt-1" size={20} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};