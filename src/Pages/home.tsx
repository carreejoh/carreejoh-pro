import React from "react";
import { Zap, DollarSign, MonitorSmartphone, Wrench, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <main className="h-full flex flex-col pb-8 items-center bg-base-300 text-base-content     
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
      <section className="flex flex-col items-center text-center max-w-5xl space-y-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-exo font-medium">
          Quick, Beautiful Websites for Local Businesses
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
        pt-12
        sm:pt-16
        md:pt-26
        lg:pt-36
        pb-6
        sm:pb-8
        md:pb-14
        lg:pb-18
  "
      >
        {[
          { Icon: Zap, title: "Fast Turnaround", desc: "Most sites ready in under 14 days", color: "#FEF001" },
          { Icon: DollarSign, title: "Budget-Friendly", desc: "Flat rates with no hidden costs", color: "#69A430" },
          { Icon: MonitorSmartphone, title: "Mobile-Ready", desc: "Looks great on phones, tablets, and desktops", color: "#4B6FB7" },
          { Icon: Wrench, title: "Fully Customizable", desc: "Custom forms, booking systems, and more", color: "#C8C9C3" },
        ].map(({ Icon, title, desc, color }) => (
          <div key={title} className="card bg-base-100 shadow-md">
            <div className="card-body flex flex-col items-center space-y-2">
              <Icon size={32} color={color} />
              <h2 className="card-title text-lg">{title}</h2>
              <p className="text-center">{desc}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="divider"></div>

      <h2 className="text-3xl font-bold text-center pt-10 font-exo">Why Every Business Needs a Website</h2>
      <section className="w-full flex flex-col space-y-16 justify-center items-center pt-6 sm:pt-8 md:pt-14 lg:pt-18">


        <div className="flex flex-col max-w-3xl space-y-3 justify-center items-center">
          <h3 className="text-lg md:text-2xl italic text-base-content font-semibold text-center md:text-left">
            "No website, no deal for many shoppers."
          </h3>
          <div className="flex items-end">
            <span className="flex-shrink-0 text-3xl font-bold italic text-primary mr-2 mb-1 leading-none">
              62%
            </span>
            <p className="leading-relaxed flex items-center">
              of consumers will disregard a small business if they can’t find it online.
              <Link className="ml-3 mb-[2px]" to="https://js-interactive.com/local-seo-latest-statistics/#:~:text=%2A%2082,%E2%80%93%20BrightLocal">
                <ExternalLink color="#D8161A" size={17} />
              </Link>
            </p>
          </div>
          <p className="text-base-content/80 opacity-80 leading-relaxed indent-8">
            If a potential customer searches your name and nothing comes up (or only an outdated
            directory listing), there’s a high chance they’ll move on to a competitor. Being
            invisible online undermines confidence that your business is legitimate and reliable.
          </p>
        </div>

        <div className="flex flex-col max-w-3xl space-y-3 justify-center items-center">
          <h3 className="text-lg md:text-2xl italic text-base-content font-semibold text-center md:text-left">
            "Maps listings drive high-value customer engagement."
          </h3>

          <div className="flex items-end">
            <span className="flex-shrink-0 text-3xl font-bold italic text-primary mr-2 mb-1 leading-none">
              70%
            </span>
            <p className="leading-relaxed flex items-center">
              of users are more likely to visit a business that has a complete Google listing.
              <Link
                className="ml-3 mb-[2px]"
                to="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/online-search-trends-local-search/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink color="#D8161A" size={17} />
              </Link>
            </p>
          </div>
          <p className="text-base-content/80 opacity-80 leading-relaxed indent-8">
            Google and Apple Maps aren’t just about directions—they’re high-conversion platforms.
            When customers find your business on Google Maps with accurate info and a website link, they’re
            significantly more likely to take action. In fact, businesses with complete listings see 7x more
            clicks and are 2.7x more likely to be considered reputable.
          </p>
        </div>

        <div className="flex flex-col max-w-3xl space-y-3 justify-center items-center">
          <h3 className="text-lg md:text-2xl italic text-base-content font-semibold text-center md:text-left">
            "First impressions matter"
          </h3>
          <div className="flex items-end">
            <span className="flex-shrink-0 text-3xl font-bold italic text-primary mr-2 mb-1 leading-none">
              75%
            </span>
            <p className="leading-relaxed flex items-center">
              of people admit to judging a company’s credibility based on its website design.
              <Link className="ml-3 mb-[2px]" to="https://www.sweor.com/firstimpressions#:~:text=11">
                <ExternalLink color="#D8161A" size={17} />
              </Link>
            </p>
          </div>
          <p className="text-base-content/80 opacity-80 leading-relaxed indent-8">
            For those businesses with websites, the quality of the site matters for credibility. An outdated, hard-to-use site can be almost as damaging as having no site at all. On the flip side, a modern, informative website immediately conveys professionalism and trustworthiness.
          </p>
        </div>

      </section>


    </main>
  );
};

export default Homepage;
