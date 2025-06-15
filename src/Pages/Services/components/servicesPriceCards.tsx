import { Check, X } from "lucide-react"

const ServicePriceCards: React.FC = () => {
    return (
        <>
            <div className="card w-full bg-base-100 col-span-1 shadow-md">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Static Site</h2>
                        <span className="text-xl text-[#65A77F] font-semibold ">$800</span>
                    </div>
                    <p className="text-base-content/80">Great for businesses with no user data, and minimal functionality.</p>
                    <ul className="mt-5 flex flex-col gap-2 text-xs">
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Custom domain and hosting</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">SEO optimization</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Responsive design</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Contact forms / info page</span>
                        </li>
                        <li>
                            <X
                                size={16}
                                className="inline-block mr-2"
                                color="#E72D1A"
                            />
                            <span className="text-base-content/80">Admin login, basic server</span>
                        </li>
                        <li>
                            <X
                                size={16}
                                className="inline-block mr-2"
                                color="#E72D1A"
                            />
                            <span className="text-base-content/80">User login with authentication</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card w-full bg-base-100 col-span-1 shadow-md">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Interactive Site</h2>
                        <span className="text-xl text-[#65A77F] font-semibold ">$1500</span>
                    </div>
                    <p className="text-base-content/80">For businesses that will need to regularly change page info, or give updates.</p>
                    <ul className="mt-5 flex flex-col gap-2 text-xs">
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Custom domain and hosting</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">SEO optimization</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Responsive design</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Contact forms / info page</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Admin login, basic server</span>
                        </li>
                        <li>
                            <X
                                size={16}
                                className="inline-block mr-2"
                                color="#E72D1A"
                            />
                            <span className="text-base-content/80">User login with authentication</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card w-full bg-base-100 col-span-1 shadow-md">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Server Site</h2>
                        <span className="text-xl text-[#65A77F] font-semibold ">$2500</span>
                    </div>
                    <p className="text-base-content/80">A premium site for businesses that need to store user info, keep detailed records.</p>
                    <ul className="mt-5 flex flex-col gap-2 text-xs">
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Custom domain and hosting</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">SEO optimization</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Responsive design</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Contact forms / info page</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">Admin login, basic server</span>
                        </li>
                        <li>
                            <Check
                                size={16}
                                className="inline-block mr-2"
                                color="#65A77F"
                            />
                            <span className="text-base-content/80">User login with authentication</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default ServicePriceCards