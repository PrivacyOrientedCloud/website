import Link from "next/link";

function Footer(): JSX.Element {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 pt-24 pb-4 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first space-y-2">

                    <div className="lg:w-1/4 md:w-1/2 w-full px-6 mb-10 mt-2">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <span className="ml-3 text-xl">PrivacyOrientedCloud</span>
                        </a>
                        <p className="mt-6 text-sm text-gray-500">Ceci est le slogan du site. Lorem ipsum dolor sit amet dolor sit amet</p>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-6">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-6 uppercase">A propos</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link href="/about">
                                    <a className="text-gray-600 hover:text-gray-800">Le projet</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/team">
                                    <a className="text-gray-600 hover:text-gray-800">Notre équipe</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sourcecode">
                                    <a className="text-gray-600 hover:text-gray-800">Code source</a>
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-6">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-6 uppercase">Aide</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link href="help-center">
                                    <a className="text-gray-600 hover:text-gray-800">Centre d'aide</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="documentation">
                                    <a className="text-gray-600 hover:text-gray-800">Documentation</a>
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-6">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-6 uppercase">Mentions légales</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link href="legal">
                                    <a className="text-gray-600 hover:text-gray-800">Mentions obligatoires</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="legal">
                                    <a className="text-gray-600 hover:text-gray-800">Conditions générales d'utilisation</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="legal">
                                    <a className="text-gray-600 hover:text-gray-800">Conditions générales de vente</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="legal">
                                    <a className="text-gray-600 hover:text-gray-800">Politique de confidentialité</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="legal">
                                    <a className="text-gray-600 hover:text-gray-800">Politique des cookies</a>
                                </Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="flex text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 980" className="h-5">
                            <circle cx="490" cy="490" r="440" fill="none" stroke="#333" />
                            <path d="M219,428H350a150,150 0 1 1 0,125H219a275,275 0 1 0 0-125z"/>
                        </svg>
                        <span>
                            Privacy Oriented Cloud est un outil libre sous licence <a href="#" rel="noopener noreferrer" className="text-gray-600" target="_blank">GNU GPL v.3.0</a>
                        </span>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                                <circle cx="4" cy="4" r="2" stroke="none"/>
                            </svg>
                        </a>
                      </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
