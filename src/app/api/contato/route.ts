import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, propertyId, propertyTitle } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // In production, save to Firebase Firestore and send email
    console.log("New contact lead:", {
      name,
      email,
      phone,
      message,
      propertyId,
      propertyTitle,
      source: propertyId ? "property_page" : "contact_form",
      status: "new",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
