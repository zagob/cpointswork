import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";

import { Dashboard } from "./dashboard";

export default async function Home() {
  const session = await auth();

  console.log(session);
  if (session) {
    return <Dashboard session={session} />
  }

  return (
    <div>
      <p>Your are not signed in</p>
      <SignIn />
    </div>
  );
}
