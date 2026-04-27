export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.HUBSTAFF_TOKEN;
    const orgId = process.env.HUBSTAFF_ORG_ID;

    if (!token || !orgId) {
      return NextResponse.json(
        { error: "Missing environment variables" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.hubstaff.com/v2/organizations/${orgId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Hubstaff data", details: String(error) },
      { status: 500 }
    );
  }
}
