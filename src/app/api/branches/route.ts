import { mockBranches } from "@/lib/site-data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const merchantId = searchParams.get("merchantId");

    if (!merchantId) {
        return NextResponse.json(
            { error: "Merchant ID required" },
            { status: 400 },
        );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const branches = mockBranches[merchantId] || [];
    return NextResponse.json(branches);
}
