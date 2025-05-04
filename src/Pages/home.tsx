import React from "react";
import { Zap, DollarSign, MonitorSmartphone, Wrench } from "lucide-react";

const Homepage: React.FC = () => {
    return (
        <main className="h-full bg-base-200 text-base-content p-6 sm:p-32 space-y-32 overflow-y-scroll flex flex-col items-center">
            {/* Hero Section */}
            <section className="space-y-4 mt-6 text-center">
                <h1 className="text-3xl sm:text-7xl font-Gabarito font-medium">
                    Dirt-Cheap, Beautiful Websites <br /> for Local Businesses
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    Clean, mobile-friendly websites built fast — perfect for small business owners who just need a site that works.
                </p>
                <div className="flex mt-6 flex-wrap justify-center">
                    <a href="#contact" className="btn btn-lg btn-primary mr-4">Get a Free Quote</a>
                    <a href="#packages" className="btn btn-lg btn-outline btn-primary">See Packages</a>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="grid sm:grid-cols-4 gap-6 text-center justify-items-center w-full max-w-6xl" id="why">
                <div className="card bg-base-100 card-md shadow-sm w-64">
                    <div className="card-body flex flex-col items-center">
                        <Zap size={32} color="#FEF001" />
                        <h2 className="card-title text-lg mt-2">Fast Turnaround</h2>
                        <p className="text-center">Most sites ready in under 7 days</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-md shadow-sm w-64">
                    <div className="card-body flex flex-col items-center">
                        <DollarSign size={32} color="#69A430" />
                        <h2 className="card-title text-lg mt-2">Budget-Friendly</h2>
                        <p className="text-center">Flat rates with no hidden costs</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-md shadow-sm w-64">
                    <div className="card-body flex flex-col items-center">
                        <MonitorSmartphone size={32} color="#4B6FB7" />
                        <h2 className="card-title text-lg mt-2">Mobile-Ready</h2>
                        <p className="text-center">Looks great on phones, tablets, and desktops</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-md shadow-sm w-64">
                    <div className="card-body flex flex-col items-center">
                        <Wrench size={32} color="#C8C9C3" />
                        <h2 className="card-title text-lg mt-2">Fully Customizable</h2>
                        <p className="text-center">I can build whatever you need — custom forms, booking systems, and more</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Homepage;
