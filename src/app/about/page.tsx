import Link from "next/link";

import { request } from "./actions";
import CustomButton from "@/components/button";
export default async function Page() {
  const data = await request({
    id: 1,
  });

  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
      <CustomButton />
      <p>Page About</p>
      <div>{data}</div>
    </div>
  );
}
