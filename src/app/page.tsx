import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  console.log("SALAM");
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-red-500 rounded-md p-2 px-4">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
