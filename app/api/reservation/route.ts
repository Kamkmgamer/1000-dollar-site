import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, occasion, requests } = body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const reservationDate = new Date(date);
    if (reservationDate < new Date()) {
      return NextResponse.json(
        { error: "Invalid date - cannot be in the past" },
        { status: 400 }
      );
    }

    console.log("Reservation submission:", {
      name,
      email,
      phone,
      date,
      time,
      guests,
      occasion,
      requests,
      status: "pending",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true,
      message: "Reservation request received" 
    });
  } catch (error) {
    console.error("Reservation API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
