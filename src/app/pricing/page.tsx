import { Metadata } from "next"
import Link from "next/link"
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing",
}

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "€0",
      description: "Get started with a free blog",
      features: [
        { text: "10 posts per day", included: true },
        { text: "10 GB storage", included: true },
        { text: "1 user", included: true },
        { text: "No ads", included: false },
        { text: "Basic analytics", included: false },
      ],
    },
    {
      name: "Plus",
      price: "€0",
      description: "Get WriteWarp Plus",
      features: [
        { text: "100 posts per day", included: true },
        { text: "100 GB storage", included: true },
        { text: "5 users", included: true },
        { text: "No ads", included: true },
        { text: "Basic analytics", included: true },
      ],
    },
    {
      name: "Unlimited",
      price: "€0",
      description: "Get WriteWarp Unlimited",
      features: [
        { text: "Unlimited posts per day", included: true },
        { text: "500 GB storage", included: true },
        { text: "15 users", included: true },
        { text: "No ads", included: true },
        { text: "Advanced analytics", included: true },
      ],
    },
  ]

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Choose Your Plan</h2>
          <p className="mt-4 text-xl text-gray-600">Select the perfect plan for your writing needs</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-green-100 text-green-800"
                    id={`${plan.name}-plan`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                  {plan.price}
                  <span className="ml-1 text-2xl font-medium text-gray-500">/month</span>
                </div>
                <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
              </div>
              <div className="px-6 pt-6 pb-8 sm:px-10 sm:pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        {feature.included ? (
                          <Check className="h-6 w-6 text-green-500" />
                        ) : (
                          <X className="h-6 w-6 text-red-500" />
                        )}
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="block w-full bg-green-600 border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:bg-green-700 transition-colors duration-200"
                    aria-describedby={`${plan.name}-plan`}
                  >
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

