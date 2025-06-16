
import { Link } from "react-router-dom"

const NotFoundPage: React.FC = () => {
    return (
        <div className="w-[100vw] h-[calc(100vh-96px)] overflow-hidden flex items-center justify-center bg-base-300">

            <div className="flex flex-col items-center -mt-12">
                <h1 className="text-5xl font-bold mb-4">404 – This page missed the deadline</h1>
                <p className="text-lg text-center max-w-2xl mb-6">
                    Looks like the page you're trying to reach doesn't exist or may have been moved.
                    Don’t worry — your dream website is still very real.
                </p>
                <Link to="/" className="btn btn-primary btn-lg">Take me home</Link>
            </div>

        </div>
    )
}

export default NotFoundPage