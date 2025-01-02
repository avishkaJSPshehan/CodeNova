import { SignedIn ,SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
    {/* Testing Route */}
      <SignedOut>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <SignInButton />
      </SignedIn>
    </div>
  );
}
