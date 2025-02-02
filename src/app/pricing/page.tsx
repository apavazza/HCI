import Link from "next/link";

export default function Pricing() {
    return (
        <div className="flex flex-wrap justify-center mt-10 md:h-screen">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 bg-brand-stroke-weak w-60 h-80 m-10">
                <h2 className="text-3xl">Free</h2>
                <p className="tex-l mb-3">€0/month</p>
                <p className="text-l">Get started with a free blog</p>
                <ul>
                    <li>✅ 10 posts per day</li>
                    <li>✅ 10 GB storage</li>
                    <li>✅ 1 user</li>
                    <li>❌ Ads</li>
                    <li>❌ No analytics</li>
                </ul>
            <Link 
            href={'/signup'}
            className="block w-48 mt-5 m-2 p-3 border bg-brand-primary text-white text-center hover:bg-green-800 active:bg-green-700"
            >Sign Up Now</Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 bg-brand-stroke-weak w-60 h-80 m-10">
                <h2 className="text-3xl">Plus</h2>
                <p className="tex-l mb-3">€0/month</p>
                <p className="text-l">Get writewarp plus</p>
                <ul>
                    <li>✅ 100 posts per day</li>
                    <li>✅ 100 GB storage</li>
                    <li>✅ 5 users</li>
                    <li>✅ No Ads</li>
                    <li>✅ Basic analytics</li>
                </ul>
                <Link 
                href={'/signup'}
                className="block w-48 mt-5 m-2 p-3 border bg-brand-primary text-white text-center hover:bg-green-800 active:bg-green-700"
                >Sign Up Now</Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 bg-brand-stroke-weak w-60 h-80 m-10">
                <h2 className="text-3xl">Unlimited</h2>
                <p className="tex-l mb-3">€0/month</p>
                <p className="text-l">Get writewarp unlimited</p>
                <ul>
                    <li>✅ Unlimited posts per day</li>
                    <li>✅ 500 GB storage</li>
                    <li>✅ 15 users</li>
                    <li>✅ No Ads</li>
                    <li>✅ Advanced analytics</li>
                </ul>
                <Link 
                href={'/signup'}
                className="block w-48 mt-5 m-2 p-3 border bg-brand-primary text-white text-center hover:bg-green-800 active:bg-green-700"
                >Sign Up Now</Link>
            </div>
        </div>
    );
}