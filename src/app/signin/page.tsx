import Link from "next/link"
import SignInForm from "./_components/signInForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In",
}

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign in to your account</h2>
        <SignInForm />
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Don&apos;t have an account yet?</p>
          <Link href="/signup" className="text-brand-primary hover:text-green-950 text-sm font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

