import React from "react";
import { Zap, DollarSign, MonitorSmartphone, Wrench } from "lucide-react";

const Homepage: React.FC = () => {
    return (
        <main className="h-full bg-base-300 text-base-content p-6 sm:p-32 space-y-32 overflow-y-scroll">
            {/* Hero Section */}
            <section className=" space-y-4 mt-6">
                <h1 className="text-3xl sm:text-6xl font-semibold">Affordable, Beautiful Websites <br></br> for Local Businesses</h1>
                <p className="text-lg sm:text-xl max-w-2xl mt-6">
                    Clean, mobile-friendly websites built fast — perfect for small business owners who just need a site that works.
                </p>
                <div className="flex mt-6 flex-wrap">
                    <a href="#contact" className="btn btn-primary mr-4">Get a Free Quote</a>
                    <a href="#packages" className="btn btn-outline btn-primary">See Packages</a>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="grid sm:grid-cols-4 gap-6 text-center" id="why">
                <div className="card col-span-1 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center">
                            <Zap size={22} color="#FEF001" />
                            <h2 className="card-title text-lg ml-4">Fast Turnaround</h2>
                        </div>
                        <p className="text-left">Most sites ready in under 7 days</p>
                    </div>
                </div>
                <div className="card col-span-1 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center">
                            <DollarSign size={22} color="#69A430" />
                            <h2 className="card-title text-lg ml-4">Budget-Friendly</h2>
                        </div>
                        <p className="text-left">Flat rates with no hidden costs</p>
                    </div>
                </div>
                <div className="card col-span-1 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center">
                            <MonitorSmartphone size={22} color="#4B6FB7" />
                            <h2 className="card-title text-lg ml-4">Mobile-Ready</h2>
                        </div>
                        <p className="text-left">Looks great on phones, tablets, and desktops</p>
                    </div>
                </div>
                <div className="card col-span-1 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center">
                            <Wrench size={22} color="#C8C9C3" />
                            <h2 className="card-title text-lg ml-4">Fully Customizable</h2>
                        </div>
                        <p className="text-left">I can build whatever you need — custom forms, booking systems, and more</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Homepage;
