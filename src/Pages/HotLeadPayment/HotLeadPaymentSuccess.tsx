import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { CircleCheck, CheckCircle } from "lucide-react";

const HotLeadPaymentSuccess: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const htmlFormRef = useRef<HTMLFormElement>(null);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!htmlFormRef.current) return;

        const form = htmlFormRef.current;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setIsSending(true);
        try {
            await emailjs.sendForm(
                "service_rtgrwgp",        // your service ID
                "template_btc0esx",        // your template ID
                form,
                "IrswYhBEoIsRmZHAf"       // your public key
            );
            setIsSent(true);
        } catch (err) {
            console.error("EmailJS error:", err);
        } finally {
            setIsSending(false);
        }
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
                    <h2 className="text-xl font-semibold font-exo mb-4">Starter Form</h2>
                    <form
                        ref={htmlFormRef}
                        onSubmit={handleEmailSubmit}
                        className="space-y-4 flex flex-col"
                    >
                        <label className="label mb-1">
                            <span className="label-text">Basic Info</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            className="input input-bordered w-full"
                            placeholder="Email Address"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            className="input input-bordered w-full"
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="text"
                            name="business_name"
                            className="input input-bordered w-full"
                            placeholder="Business Name"
                            required
                        />
                        <select className="select" name="website_goals" required>
                            <option value="">What is the main purpose of your site?</option>
                            <option value="Showcase services/products">Showcase services/products</option>
                            <option value="Generate leads / contact information">Generate leads / contact information</option>
                            <option value="Display portfolio or gallery">Display portfolio or gallery</option>
                            <option value="Other (explain in notes)">Other (explain in notes)</option>
                        </select>
                        <label className="label mb-1">
                            <span className="label-text">Styling</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-12 w-full"
                            rows={5}
                            name="styling"
                            placeholder="Describe the style you want (clean, bold, modern, dark, etc.), or list some links to websites you like."
                        />
                        <textarea
                            className="textarea textarea-bordered h-12 w-full"
                            rows={5}
                            name="branding"
                            placeholder="List some preferred colors, or any existing brand guidelines (if any)"
                        />
                        <label className="label mb-1">
                            <span className="label-text">Site Layout</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-12 w-full"
                            rows={5}
                            name="layout"
                            placeholder="How many pages do you want? Would you prefer multiple pages (about, services, contact), or would you like to keep everything as-is?"
                        />
                        <label className="label mb-1">
                            <span className="label-text">General Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-32 w-full"
                            rows={5}
                            name="layout"
                            placeholder="Anything else you'd like to add? Describe your dream site"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg flex items-center justify-center gap-2 w-48"
                            disabled={isSent || isSending}
                        >
                            {isSent ? (
                                <>
                                    <CheckCircle size={20} /> Message Sent
                                </>
                            ) : isSending ? (
                                "Sending..."
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default HotLeadPaymentSuccess;
