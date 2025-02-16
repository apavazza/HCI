import { Metadata } from "next"
import Link from "next/link"
import SignUpForm from "./_components/signUpForm"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Sign Up",
}

export default async function SignUp() {
  const session = await auth.api.getSession({
        headers: headers(),
      })
    
      if (session) {
        redirect("/profile")
      }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign up for free</h2>
        <SignUpForm />
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link href="/signin" className="text-brand-primary hover:text-green-950 text-sm font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

