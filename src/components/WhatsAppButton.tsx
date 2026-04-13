"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, BROKER_PHONE } from "@/lib/utils";

export function WhatsAppButton() {
  const link = generateWhatsAppLink(
    BROKER_PHONE,
    "Olá! Gostaria de mais informações sobre os imóveis disponíveis."
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
