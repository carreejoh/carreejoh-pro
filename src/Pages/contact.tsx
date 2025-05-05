import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";

const ContactPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

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
            name:       data.get("name")        as string,  // <-- matches {{ name }}
            user_email: data.get("user_email")  as string,  // <-- matches {{ user_email }}
            site_type:  data.get("site_type")   as string,
            message:    data.get("message")     as string,
            
            // These only matter if your template is *also* using them:
            reply_to:   data.get("user_email")  as string,
            // from_email is ignored if your template "Use Default Email Address"
            from_email: "carterjohnson@carreejoh.biz",
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
      

    const controlClass =
        "w-full input input-bordered " +
        "invalid:border-error invalid:ring-error invalid:ring-1";

    return (
        <main
            className="
        min-h-screen bg-base-200 flex flex-col items-center text-base-content
        pb-8 pt-10
        px-6 md:px-8 lg:px-32 xl:px-48 2xl:px-72
      "
        >
            <section className="w-full max-w-[700px] mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-center">Contact Me</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={controlClass}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className={controlClass}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Base Site</span>
                        </label>
                        <select
                            name="site_type"
                            className={
                                "w-full select select-bordered " +
                                "invalid:border-error invalid:ring-error invalid:ring-1"
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
                        <label className="label">
                            <span className="label-text">Questions or Comments</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Your message"
                            className={
                                "w-full textarea textarea-bordered " +
                                "invalid:border-error invalid:ring-error invalid:ring-1"
                            }
                            rows={4}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary flex items-center justify-center gap-2 w-48"
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
