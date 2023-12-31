import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Link className={buttonVariants()} href={"/admin"}>
        Open My Admin
      </Link>
    </div>
  );
}
