import { NextRequest, NextResponse } from "next/server";

export function GET( request: NextRequest ) {
    return NextResponse.json({ count: 1000 }, { status: 200 })
}