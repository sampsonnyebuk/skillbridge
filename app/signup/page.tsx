'use client';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Create Your Account</h1>
        {/* TODO: Replace with <SignUpForm /> */}
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-green-600 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
