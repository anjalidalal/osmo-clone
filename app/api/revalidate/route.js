import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  const buildTime = new Date().toISOString();
  console.log("Manual Revalidation Triggered. New Build Time:", buildTime);
  revalidatePath("/");

  return NextResponse.json({ message: "Revalidation triggered", buildTime });
}
