import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { CheckCircle } from "lucide-react";
import { useParams } from "react-router-dom";

const HotLeadPayment: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    // const [isSending, setIsSending] = useState(false);
    // const [isSent, setIsSent] = useState(false);
    const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});

    const { businessName, deployedURL } = useParams()

    // <-------- FORM VARIABLES ---------->

    const [business_Name, setBusiness_Name] = useState<string>(businessName ? businessName.replace(/_/g, " ") : "")

    const formattedSiteURL = `https://${deployedURL}.vercel.app`
    const [siteURL, setSiteURL] = useState<string>(formattedSiteURL ? formattedSiteURL : "")



    console.log(businessName)

    const getInputClass = (field: string) =>
        "w-full input input-bordered bg-base-100 focus:bg-base-100" +
        (touchedFields[field] ? "invalid:border-error invalid:ring-error invalid:ring-1" : "");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // const form = formRef.current!;

        // // 1) run native validation
        // if (!form.checkValidity()) {
        //     form.reportValidity();
        //     return;
        // }

        // setIsSending(true);
        // try {
        //     console.log("submitted")
        // } catch (err) {
        //     console.error("Send error:", err);
        // } finally {
        //     setIsSending(false);
        // }
    };

    return (
        <main
            className="
         bg-base-300 flex flex-col items-center text-base-content
        pb-8 pt-10
        px-6 md:px-8 lg:px-32 xl:px-48 2xl:px-72
      "
        >
            <section className="w-full max-w-[700px] mx-auto space-y-6">
                <h1 className="text-3xl font-bold font-exo text-center">Get Started</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    {/* Business name */}

                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text">Business Name</span>
                        </label>
                        <input
                            className={getInputClass("name")}
                            onBlur={() =>
                                setTouchedFields((prev) => ({ ...prev, name: true }))
                            }
                            value={business_Name}
                            onChange={(e) => setBusiness_Name(e.target.value)}
                            type="text"
                            name="name"
                            placeholder="Your Business Name"
                            required
                        />
                    </div>

                    {/* Starter site */}

                    <div className="form-control flex flex-col">
                        <label className="label mb-1">
                            <span className="label-text">Starter Site URL</span>
                        </label>
                        <label className="input ">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </g>
                            </svg>
                            <input
                                type="url"
                                required
                                placeholder="https://"
                                onChange={(e) => setSiteURL(e.target.value)}
                                value={siteURL}
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                            />
                        </label>
                        {/* <p className="validator-hint">Must be valid URL</p> */}
                    </div>

                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            className={getInputClass("name")}
                            onBlur={() =>
                                setTouchedFields((prev) => ({ ...prev, name: true }))
                            }
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            className={getInputClass("user_email")}
                            onBlur={() =>
                                setTouchedFields((prev) => ({ ...prev, user_email: true }))
                            }
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text">Select Base Site</span>
                        </label>
                        <select

                            name="site_type"
                            className={getInputClass("site_type")}
                            onBlur={() =>
                                setTouchedFields((prev) => ({ ...prev, site_type: true }))
                            }
                            required
                        >
                            <option value="">— choose one —</option>
                            <option>Static Site</option>
                            <option>Interactive Site</option>
                            <option>Server Site</option>
                            <option>Not Sure</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text">Questions or Comments</span>
                        </label>
                        <textarea
                            onBlur={() =>
                                setTouchedFields((prev) => ({ ...prev, name: true }))
                            }
                            name="message"
                            placeholder="Your message"
                            className={`${getInputClass("message")} textarea h-36`}
                            rows={4}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-lg flex items-center justify-center gap-2 w-36"
                        // disabled={isSent || isSending}
                    >
                        {/* {isSent ? (
                            <>
                                <CheckCircle size={20} /> Message Sent
                            </>
                        ) : isSending ? (
                            "Sending..."
                        ) : (
                            "Submit"
                        )} */}
                        Submit
                    </button>
                </form>
            </section>
        </main>
    );
};

export default HotLeadPayment;
