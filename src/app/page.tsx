import { SignedIn ,SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <SignInButton />
      </SignedIn>
    </div>
  );
}
