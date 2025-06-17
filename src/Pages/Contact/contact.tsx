import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";

const ContactPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});

    const getInputClass = (field: string) =>
        "w-full input input-bordered bg-base-100 focus:bg-base-100" +
        (touchedFields[field] ? "invalid:border-error invalid:ring-error invalid:ring-1" : "");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current!;

        // 1) run native validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setIsSending(true);
        try {
            // 2) pull values out with FormData
            const data = new FormData(form);
            const params = {
                name: data.get("name") as string,
                user_email: data.get("user_email") as string,
                site_type: data.get("site_type") as string,
                message: data.get("message") as string,
                reply_to: data.get("user_email") as string,
                from_email: "carterjohnson@carreejoh.biz",
                to_email: "carter@revupwebsites.com,jonny@revupwebsites.com", 
            };
            await emailjs.send(
                "service_ei0rkde",
                "template_pp4ml6l",
                params,
                "IrswYhBEoIsRmZHAf"
            );


            setIsSent(true);
        } catch (err) {
            console.error("Send error:", err);
        } finally {
            setIsSending(false);
        }
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
                <h1 className="text-3xl font-bold font-exo text-center">Contact Us</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
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
            </section>
        </main>
    );
};

export default ContactPage;
