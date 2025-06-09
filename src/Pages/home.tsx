import React from "react";
import { Zap, DollarSign, MonitorSmartphone, Wrench } from "lucide-react";
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
      <section className="flex flex-col items-center text-center max-w-5xl space-y-6">
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
          <div key={title} className="card bg-base-100 shadow-sm">
            <div className="card-body flex flex-col items-center space-y-2">
              <Icon size={32} color={color} />
              <h2 className="card-title text-lg">{title}</h2>
              <p className="text-center">{desc}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="divider"></div>

      <h2 className="text-2xl font-bold text-center pt-10">Why Every Business Needs a Website</h2>
      <section className="w-full pt-6 sm:pt-8 md:pt-14 lg:pt-18">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-8">

          {/* Left column */}
          <div className="flex-1 basis-full md:basis-1/3 space-y-4">
            <h3 className="text-md md:text-xl italic text-base-content font-semibold text-center md:text-left">
              "No website, no deal for many shoppers."
            </h3>

            {/* Stat + sentence—all flex, no floats */}
            <div className="flex items-start">
              <span className="flex-shrink-0 text-5xl font-bold italic text-primary mr-4 leading-none">
                62%
              </span>
              <p className="leading-relaxed">
                Of consumers will disregard a small business if they can’t find it online.
              </p>
            </div>

            <div className="text-right">
              <a
                href="https://js-interactive.com/local-seo-latest-statistics/#:~:text=%2A%2082,%E2%80%93%20BrightLocal"
                className="text-sm font-semibold underline"
              >
                – js-interactive
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex self-stretch">
            <div className="border-l border-base-300 h-full" />
          </div>

          {/* Right column */}
          <div className="flex-1 basis-full md:basis-2/3 p-6 rounded-lg">
            <p className="text-base-content/80 opacity-80 leading-relaxed">
              If a potential customer searches your name and nothing comes up (or only an outdated
              directory listing), there’s a high chance they’ll move on to a competitor. Being
              invisible online undermines confidence that your business is legitimate and reliable.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse md:flex-row items-start md:items-center gap-8 mt-16 md:mt-24 lg:mt-24">

          <div className="flex-1 basis-full md:basis-2/3 p-6 rounded-lg">
            <p className="text-base-content/80 leading-relaxed">
              For those businesses with websites, the quality of the site matters for credibility. An outdated, hard-to-use site can be almost as damaging as having no site at all. On the flip side, a modern, informative website immediately conveys professionalism and trustworthiness.
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:flex self-stretch">
            <div className="border-l border-base-300 h-full" />
          </div>

          {/* Left column */}
          <div className="flex-1 basis-full md:basis-1/3 space-y-4">
            <h3 className="text-lg text-base-content md:text-xl italic font-semibold text-center md:text-left">
              "First impressions matter"
            </h3>

            {/* Stat + sentence—all flex, no floats */}
            <div className="flex items-start">
              <span className="flex-shrink-0 text-5xl font-bold italic text-primary mr-4 leading-none">
                75%
              </span>
              <p className="leading-relaxed">
                Of people admit to judging a company’s credibility based on its website design.
              </p>
            </div>

            <div className="text-right">
              <a
                href="https://www.sweor.com/firstimpressions#:~:text=11"
                className="text-sm font-semibold underline"
              >
                – sweor
              </a>
            </div>
          </div>
        </div>
        {/* Right column */}

        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-8 mt-16 md:mt-24 lg:mt-24">

          {/* Left column */}
          <div className="flex-1 basis-full md:basis-1/3 space-y-4">
            <h3 className="text-lg text-base-content md:text-xl italic font-semibold text-center md:text-left">
              "Websites help you rank better in search results."
            </h3>

            {/* Stat + sentence—all flex, no floats */}
            <div className="flex items-start">
              <span className="flex-shrink-0 text-5xl font-bold italic text-primary mr-4 leading-none">
              92%
              </span>
              <p className="leading-relaxed">
              Of searchers select a business on the first page of results.
              </p>
            </div>

            <div className="text-right">
              <a
                href="https://js-interactive.com/local-seo-latest-statistics/#:~:text=%2A%2082,%E2%80%93%20BrightLocal"
                className="text-sm font-semibold underline"
              >
                – js-interactive
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex self-stretch">
            <div className="border-l border-base-300 h-full" />
          </div>

          {/* Right column */}
          <div className="flex-1 basis-full md:basis-2/3 p-6 rounded-lg">
            <p className="text-base-content/80 opacity-80 leading-relaxed">
            Simply having a website (with proper keywords and content about your business) makes it easier for search engines to index your business and show it to searchers.
            This matters because 92% of searchers select a business on the first page of results.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Homepage;
