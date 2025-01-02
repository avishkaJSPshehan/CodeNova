import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
        <button className="bg-blue-500 hover:bg-blue-700 text-white front-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </SignedOut>

      <SignedIn>
        <SignInButton />
      </SignedIn>
    </div>
  );
}
