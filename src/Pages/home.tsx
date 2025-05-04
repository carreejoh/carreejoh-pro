import React from "react";
import { Zap, DollarSign, MonitorSmartphone, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <main className="h-full flex flex-col items-center justify-between bg-base-200 text-base-content     
     /* 1rem on very small */
     

        pt-12
        sm:pt-16
        md:pt-26
        lg:pt-36

        px-6
        md:px-8    /* 2rem on ≥768px */
        lg:px-32   /* 8rem on ≥1024px */
        xl:px-48   /* 10rem on ≥1280px */
        2xl:px-72
         overflow-y-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center max-w-5xl space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-Gabarito font-medium">
          Affordable, Aesthetic Websites for Local Businesses
        </h1>
        <p className="text-lg sm:text-xl">
          Clean, mobile-friendly websites built fast — perfect for small business owners who just need a site that works.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn btn-lg btn-primary">
            Get a Free Quote
          </Link>
          <Link to="/services" className="btn btn-lg btn-outline btn-primary">
            See Packages
          </Link>
        </div>
      </section>

      {/* Why Choose Me */}
      <section
  id="why"
  className="
    grid
    grid-cols-1       /* default: 1 column */
    sm:grid-cols-2    /* ≥640px: 2 columns */
    md:grid-cols-3    /* ≥768px: 3 columns (optional) */
    lg:grid-cols-4    /* ≥1024px: 4 columns */
    gap-6
    w-full
    mt-6
    sm:mt-20
    py-16
  "
>
  {[
    { Icon: Zap, title: "Fast Turnaround", desc: "Most sites ready in under 7 days", color: "#FEF001" },
    { Icon: DollarSign, title: "Budget-Friendly", desc: "Flat rates with no hidden costs", color: "#69A430" },
    { Icon: MonitorSmartphone, title: "Mobile-Ready", desc: "Looks great on phones, tablets, and desktops", color: "#4B6FB7" },
    { Icon: Wrench, title: "Fully Customizable", desc: "Custom forms, booking systems, and more", color: "#C8C9C3" },
  ].map(({ Icon, title, desc, color }) => (
    <div key={title} className="card bg-base-100 shadow-sm">
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
