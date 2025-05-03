
const ContactPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-base-300 text-base-content p-6 sm:p-32 sm:pt-10">
            <section className="max-w-xl space-y-6 ">
                <h1 className="text-2xl font-bold">Contact Me</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Select Base Site</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option>Static Site</option>
                            <option>Interactive Site</option>
                            <option>Server Site</option>
                            <option>Not Sure</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Questions or Comments</span>
                        </label>
                        <textarea
                            placeholder="Your message"
                            className="textarea textarea-bordered w-full"
                            rows={4}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </form>
            </section>
        </main>
    )
}

export default ContactPage