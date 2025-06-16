import { TfiEye } from "react-icons/tfi";
import { GoDatabase } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Privacy() {
    return (
        <div className="bg-[#f7f9fc] min-h-screen px-4 py-10 sm:px-8 lg:px-24 text-sm text-gray-700">
            <div className="max-w-4xl mx-auto">
                <Link to={"/"}>
                    <div className="text-sm flex items-center gap-3 text-gray-500 mb-4 cursor-pointer">
                        <FaLongArrowAltLeft size={23} color="gray" /> Back to InterviewQ
                    </div>
                </Link>

                <div className="p-6 rounded-xl text-center mb-6">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#635BFF] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
                        <p className="text-gray-500 text-sm mt-1">InterviewQ Extension</p>
                        <p className="text-gray-400 text-sm">Last updated: December 2024</p>
                    </div>
                </div>

                <div className="space-y-6">

                    <div className="bg-white  rounded-lg p-5 shadow-md shadow-slate-200">
                        <h2 className="text-gray-800 text-xl font-semibold mb-2 flex items-center gap-3"><TfiEye size={25} color="blue" /> Overview</h2>
                        <p>
                            InterviewQ Extension is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                            and safeguard your information when you use our browser extension designed to generate interview questions
                            based on job descriptions.
                        </p>
                    </div>

                    <div className="bg-white  rounded-lg p-5 shadow-md shadow-slate-200">
                        <h2 className="text-gray-800 flex items-center gap-3 font-semibold my-6 text-xl"><GoDatabase size={25} color="purple" /> Information We Collect</h2>
                        <ul className="space-y-8">
                            <li>
                                <strong>Job Description Data</strong><br />
                                We process job descriptions that you provide or that are scraped from job posting websites to generate relevant interview questions. This data is processed locally and is not permanently stored on our servers.
                            </li>
                            <li>
                                <strong>Saved Applications</strong><br />
                                Information about job applications you choose to save, including job titles, company names, and generated questions, is stored locally in your browser's storage.
                            </li>
                            <li>
                                <strong>Usage Analytics</strong><br />
                                We may collect anonymous usage statistics to improve the extension’s functionality, such as the number of questions generated and feature usage patterns.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white  rounded-lg p-5 shadow-md shadow-slate-200">
                        <h2 className="text-gray-800 font-semibold mb-2 text-xl flex items-center gap-3"><CiShare2 size={25} color="green" /> Data Sharing and Disclosure</h2>
                        <p className="mb-2">We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>With your explicit consent</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and safety</li>
                            <li>In connection with a business transfer or merger</li>
                        </ul>
                    </div>

                    <div className="bg-white  rounded-lg p-5  shadow-slate-200">
                        <h2 className="text-gray-800 font-semibold mb-2 text-xl">Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Your saved applications are stored locally in your browser and are not transmitted to external servers unless explicitly required for generating questions.
                        </p>
                    </div>

                    <div className="bg-white  rounded-lg p-5 shadow-md shadow-slate-200">
                        <h2 className="text-gray-800 font-semibold mb-2 text-xl">Your Rights</h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Access and review your saved data</li>
                            <li>Delete your saved applications at any time</li>
                            <li>Disable or uninstall the extension</li>
                            <li>Request information about data processing</li>
                        </ul>
                    </div>

                    <div className="bg-white  rounded-lg p-5 shadow-md shadow-slate-200">
                        <h2 className="text-gray-800 font-semibold mb-2 text-xl">Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                        <div className="bg-gray-50 p-4 rounded-md mt-2  text-sm">
                            <p><strong>Email:</strong>chrahulofficial@gmail.com</p>
                            <p><strong>Support:</strong>chrahulofficial@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
