
import { useParams } from "react-router-dom"

const HotLeadLanding: React.FC = () => {

    const { businessName } = useParams()

    const formattedBusinessName = businessName ? businessName.replace(/_/g, " ") : ""

    return (
        <main
            className="
         bg-base-300 flex flex-col items-center text-base-content
        pb-8 pt-10
        px-6 md:px-8 lg:px-32 xl:px-48 2xl:px-72
      "
        >
            <h1 className="text-3xl font-bold font-exo text-center mb-12">Getting {formattedBusinessName} Online</h1>
            <section className="w-full max-w-[700px] mx-auto space-y-3">

                {/* <p className="text-base-content/80 opacity-80 leading-relaxed indent-8">
                    Hello {formattedBusinessName}, 
                </p> */}
                <h2 className="text-lg md:text-xl text-base-content font-semibold text-left">
                    Your first steps:
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li className="font-regular">
                        Pay and we begin — no tech hassle
                    </li>
                    <li className="font-regular">
                        Book a quick kickoff call, or complete the "first site" form
                    </li>
                    <li className="font-regular">
                        We'll get your site live in just days
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default HotLeadLanding