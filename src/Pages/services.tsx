import React from "react";
import ServicePriceCards from "./components/servicesPriceCards";

const Services: React.FC = () => {
    return (
        <main
            id="services"
            className="min-h-screen bg-base-200 text-base-content p-6 sm:p-32 sm:pt-10 overflow-y-scroll flex flex-col items-center"
        >
            {/* Services Hero */}
            <section className="text-center mb-10">
                <h1 className="text-3xl font-semibold">Services & Pricing</h1>
            </section>

            {/* Base Sites */}
            {/* <h2 className="mt-10 text-xl font-semibold text-center">Base Sites</h2> */}
            <div className="flex flex-wrap mt-1 justify-center">
                <ServicePriceCards />
            </div>

            {/* Add-Ons */}
            <h2 className="mt-10 text-xl font-semibold text-center">Additional Fees</h2>
            <section className="max-w-3xl text-left mx-auto">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li className="font-regular">
                        <strong>Custom Domain Registration:</strong> ~$20/year
                    </li>
                    <li className="font-regular">
                        <strong>Custom Features:</strong> $50–$200 (complex forms, maps, dynamic)
                    </li>
                    <li className="font-regular">
                        <strong>Backend & Server Hosting:</strong> $10-$200/month (user data, receipts, uploaded images)
                    </li>
                    <li className="font-regular">
                        <strong>Third-Party API Fees:</strong> $3-$100/month (live yelp reviews, custom data)
                    </li>
                </ul>
            </section>

            {/* Contact CTA */}
            <h2 className="mt-10 text-xl font-semibold text-center">Ready to Get Started?</h2>
            <p className="text-center">Contact me for a custom quote or questions.</p>
            <button className="mt-4 btn btn-primary">Request Quote</button>
        </main>
    );
};

export default Services;
