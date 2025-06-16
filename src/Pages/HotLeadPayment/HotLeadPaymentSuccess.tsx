import { useRef } from "react";
import { CircleCheck } from "lucide-react";

const HotLeadPaymentSuccess: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="bg-base-300 text-base-content px-6 md:px-8 lg:px-32 xl:px-48 2xl:px-72 py-16 min-h-screen flex flex-col items-center">
            <div className="max-w-[700px] w-full">
                {/* Success header */}
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-4xl mr-4 font-bold font-exo">Payment Successful!</h1>
                    <CircleCheck size={36} className="text-success" />
                </div>

                <p className="text-lg text-center text-base-content/80 leading-relaxed">
                    Thanks for starting your journey with{" "}
                    <strong className="text-primary font-exo">RevUpWeb</strong>! Your payment has been confirmed.
                    We're thrilled to begin working on your new website.
                </p>

                <div className="divider" />

                {/* Next Steps */}
                <h2 className="text-xl font-semibold font-exo mb-4">Next Steps</h2>
                <p className="text-base-content/80 opacity-80 leading-relaxed mt-3">
                    We'll need some additional details from you about your preferred layout, links, assets, and other design choices before your first revision.
                    You can either schedule a call with us, or submit details in the form below.
                </p>

                <div className="flex sm:flex-row sm:space-x-4 flex-col">
                    <a
                        href="https://calendly.com/jonny-revupwebsites/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-black btn-lg mt-4"
                    >
                        Schedule a Call
                    </a>
                    <button onClick={scrollToForm} className="btn bg-black btn-lg mt-4">
                        Complete Form
                    </button>
                </div>

                <div className="divider" />

                {/* Starter Form */}
                <div ref={formRef}>
                    <h2 className="text-xl font-semibold font-exo mb-4">Starter Form (Coming Soon)</h2>
                    <form className="space-y-4">
                        <label className="label mb-1">
                            <span className="label-text">Basic Info</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Email Address"
                            required
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Business Name"
                            required
                        />
                        <label className="label mb-1">
                            <span className="label-text">Assets</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Website Goals (e.g., bookings, leads, branding)"
                        />
                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows={5}
                            placeholder="Anything else you'd like us to know?"
                        />
                        <button type="submit" className="btn btn-primary btn-lg w-42 mt-2">
                            Submit Form
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default HotLeadPaymentSuccess;
