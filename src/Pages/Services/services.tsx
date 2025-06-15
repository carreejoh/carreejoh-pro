import React from "react";
import ServicePriceCards from "./components/servicesPriceCards";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
    return (
        <main
            id="services"
            className="min-h-screen bg-base-300 text-base-content pb-8 pt-10 flex flex-col items-center 
            px-6
        md:px-8    /* 2rem on ≥768px */
        lg:px-32   /* 8rem on ≥1024px */
        xl:px-48   /* 10rem on ≥1280px */
        2xl:px-72"
        >
            {/* Services Hero */}
            <section className="text-center mb-10">
            <h1 className="text-3xl font-bold font-exo text-center">Services & Pricing</h1>
            </section>

            {/* Base Sites */}
            {/* <h2 className="mt-10 text-xl font-semibold text-center">Base Sites</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-1 justify-center">
                <ServicePriceCards />
            </div>

            {/* Add-Ons */}
            <h2 className="mt-10 text-xl font-semibold text-center">Additional Fees</h2>
            <section className="max-w-3xl text-left mx-auto">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li className="font-regular">
                        <strong>Domain/Hosting/Maintenance Fee:</strong> $30/Month
                    </li>
                    <li className="font-regular">
                        <strong>Custom Features:</strong> $50–$200 (complex forms, maps, dynamic)
                    </li>
                    <li className="font-regular">
                        <strong>Backend & Server Hosting:</strong> $10-$200/month (user data, receipts, uploaded images)
                    </li>
                    {/* <li className="font-regular">
                        <strong>Third-Party API Fees:</strong> $3-$100/month (live yelp reviews, custom data)
                    </li> */}
                </ul>
            </section>

            {/* Contact CTA */}
            <h2 className="mt-10 text-xl font-semibold text-center">Ready to Get Started?</h2>
            <p className="text-center">Contact me for a custom quote or questions.</p>
            <Link to="/contact" className="mt-4 btn btn-lg btn-primary">Request Quote</Link>
        </main>
    );
};

export default Services;
