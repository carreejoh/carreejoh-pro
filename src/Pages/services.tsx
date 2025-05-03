
import ServicePriceCards from "./components/servicesPriceCards"

const Services: React.FC = () => {
    return (
        <main className="h-full overflow-y-scroll bg-base-300 text-base-content p-6 sm:p-32 sm:pt-10" id="services">
            {/* Services Hero */}
            <section className="">
                <h1 className="text-2xl font-bold">Services & Pricing</h1>
                {/* <p className="text-md">
                    Choose from base packages and add-ons to fit your exact needs.
                </p> */}
            </section>

            <h2 className="mt-10 text-xl font-semibold">Base Sites</h2>
            <div className="flex flex-wrap mt-1">
                <ServicePriceCards />
            </div>

            {/* Add-Ons */}
            <h2 className="mt-10 text-xl font-semibold">Additional Fees</h2>
            <section className="max-w-3xl text-left">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li className="font-regular"><strong>Custom Domain Registration:</strong> ~$20/year</li>
                    <li className="font-regular"><strong>Custom Features:</strong> $50–$200 (complex forms, maps, dynamic)</li>
                    <li className="font-regular"><strong>Backend & Server Hosting:</strong> $10-$200/month (user data, receipts, uploaded images)</li>
                    <li className="font-regular"><strong>Third-Party API Fees:</strong> $3-$100/month (live yelp reviews, custom data)</li>
                </ul>
            </section>

            {/* Contact CTA */}
            <h2 className="mt-10 text-xl font-semibold">Ready to Get Started?</h2>
            <p>Contact me for a custom quote or questions.</p>
            <button className="mt-4 btn btn-primary">Request Quote</button>
        </main>
    )
}

export default Services