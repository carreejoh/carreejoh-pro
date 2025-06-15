

const HotLeadPaymentSuccess: React.FC = () => {
    return (
        <main
            className="
         bg-base-300 flex flex-col items-center text-base-content
        pb-8 pt-10
        px-6 md:px-8 lg:px-32 xl:px-48 2xl:px-72
      "
        >
            <h1 className="text-3xl font-bold font-exo text-center mb-12">Success!</h1>
            <p className="text-base-content/80 opacity-80 leading-relaxed indent-8">
                After successfully submitting your first payment you'll be directed to either fill out a form,
                or schedule a Calendly call. If you'd prefer to talk details before paying we can do that as well.
            </p>
        </main>
    )
}

export default HotLeadPaymentSuccess