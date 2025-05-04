import { Check, X } from "lucide-react"

const ServicePriceCards: React.FC = () => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Static Site</h2>
                        <span className="text-xl">Base: $1500</span>
                    </div>
                    <p>Great for businesses with no user data, and minimal functionality.</p>
                    <ul className="mt-5 flex flex-col gap-2 text-xs">
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Custom domain and hosting</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>SEO optimization</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Responsive design</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Contact forms / info page</span>
                        </li>
                        <li>
                            <X
                                size={16}
                                className="inline-block mr-2"
                                color="#E72D1A"
                            />
                            <span>Admin login, basic server</span>
                        </li>
                        <li>
                            <X
                                size={16}
                                className="inline-block mr-2"
                                color="#E72D1A"
                            />
                            <span>User login with authentication</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm ml-6">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Interactive Site</h2>
                        <span className="text-xl">Base: $2500</span>
                    </div>
                    <p>For businesses that will need to regularly change page info, or give updates.</p>
                    <ul className="mt-5 flex flex-col gap-2 text-xs">
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Custom domain and hosting</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>SEO optimization</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Responsive design</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Contact forms / info page</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Admin login, basic server</span>
                        </li>
                        <li>
                            <X
                                size={16}
                                className="inline-block mr-2"
                                color="#E72D1A"
                            />
                            <span>User login with authentication</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-sm ml-6">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Server Site</h2>
                        <span className="text-xl">Base: $3500</span>
                    </div>
                    <p>A premium site for businesses that need to store user info, keep detailed records.</p>
                    <ul className="mt-5 flex flex-col gap-2 text-xs">
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Custom domain and hosting</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>SEO optimization</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Responsive design</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Contact forms / info page</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>Admin login, basic server</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span>User login with authentication</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default ServicePriceCards