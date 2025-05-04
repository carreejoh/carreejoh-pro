import React from "react";
import { Zap, DollarSign, MonitorSmartphone, Wrench } from "lucide-react";

const Homepage: React.FC = () => {
  return (
    <main className="h-full flex flex-col items-center overflow-y-scroll justify-between bg-base-200 text-base-content p-6 pt-24 sm:p-12 md:p-32 overflow-y-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center max-w-5xl space-y-6">
        <h1 className="text-4xl sm:text-7xl font-Gabarito font-medium">
          Dirt-Cheap, Beautiful Websites for Local Businesses
        </h1>
        <p className="text-lg sm:text-xl">
          Clean, mobile-friendly websites built fast — perfect for small business owners who just need a site that works.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="btn btn-lg btn-primary">
            Get a Free Quote
          </a>
          <a href="#packages" className="btn btn-lg btn-outline btn-primary">
            See Packages
          </a>
        </div>
      </section>

      {/* Why Choose Me */}
      <section
        id="why"
        className="grid grid-col-1 sm:grid-col-2 lg:grid-cols-4 justify-center gap-6 w-full py-16"
      >
        {[
          {
            Icon: Zap,
            title: "Fast Turnaround",
            desc: "Most sites ready in under 7 days",
            color: "#FEF001",
          },
          {
            Icon: DollarSign,
            title: "Budget-Friendly",
            desc: "Flat rates with no hidden costs",
            color: "#69A430",
          },
          {
            Icon: MonitorSmartphone,
            title: "Mobile-Ready",
            desc: "Looks great on phones, tablets, and desktops",
            color: "#4B6FB7",
          },
          {
            Icon: Wrench,
            title: "Fully Customizable",
            desc: "Custom forms, booking systems, and more",
            color: "#C8C9C3",
          },
        ].map(({ Icon, title, desc, color }) => (
          <div key={title} className="flex-shrink-0 col-span-1 card bg-base-100 shadow-sm">
            <div className="card-body flex flex-col items-center space-y-2">
              <Icon size={32} color={color} />
              <h2 className="card-title text-lg">{title}</h2>
              <p className="text-center">{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Homepage;
