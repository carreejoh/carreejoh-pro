import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const HotLeadLanding: React.FC = () => {

    const { businessName, deployedURL } = useParams()

    const formattedBusinessName = businessName ? businessName.replace(/_/g, " ") : ""
    const formattedSiteURL = `https://${deployedURL}.vercel.app`

    return (
        <main
            className="
         bg-base-300 flex flex-col items-center text-base-content
        pb-8 pt-10
        px-6 md:px-8 lg:px-32 xl:px-48 2xl:px-72
      "
        >
            <h1 className="text-3xl font-bold font-exo text-center mb-12">Getting {formattedBusinessName} Online</h1>
            <section className="w-full max-w-[700px] mx-auto">

                {/* <p className="text-base-content/80 opacity-80 leading-relaxed indent-8">
                    Hello {formattedBusinessName}, 
                </p> */}

                <h2 className="text-lg md:text-xl text-base-content font-semibold text-left font-exo">
                    Client details:
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-3">
                    <li className="font-regular text-base-content/80 opacity-80">
                        <strong className="text-base-content">Business:</strong> {formattedBusinessName}
                    </li>
                    <li className="font-regular text-base-content/80 opacity-80">
                        <strong className="text-base-content">Site:</strong> <Link to={formattedSiteURL}>{formattedSiteURL}</Link>
                    </li>
                </ul>

                <h2 className="text-lg md:text-xl text-base-content font-semibold text-left font-exo mt-6">
                    First steps:
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-3">
                    <li className="font-regular text-base-content/80 opacity-80">
                        Pay and we begin — no tech hassle
                    </li>
                    <li className="font-regular text-base-content/80 opacity-80">
                        Book a quick kickoff call, or complete the "first site" form
                    </li>
                    <li className="font-regular text-base-content/80 opacity-80">
                        We'll get your site live in just days, ready for your first revision
                    </li>
                </ul>

                <div className="divider"></div>

                <h2 className="text-lg md:text-xl text-base-content font-semibold text-left font-exo">
                    Ready to get started?
                </h2>
                <p className="text-base-content/80 opacity-80 leading-relaxed mt-3">
                    After successfully submitting your first payment you'll be directed to either fill out a form,
                    or schedule a Calendly call. If you'd prefer to talk details before paying we can do that as well.
                </p>

                <div className="flex sm:flex-row flex-col gap-y-4 gap-x-4 mt-6">

                    <Link className="btn btn-primary btn-lg max-w-56" to="https://buy.stripe.com/bJecN5d7W7UY1wj3S25AQ00">
                        Purchase Your Site
                    </Link>
                    <Link className="btn btn-lg" to="/">
                        I'd prefer to schedule a call first
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default HotLeadLanding