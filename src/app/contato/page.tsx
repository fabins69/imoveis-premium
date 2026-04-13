import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { BROKER_PHONE, BROKER_EMAIL, BROKER_NAME, generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato conosco. Atendimento personalizado para encontrar o imóvel ideal para você.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <div className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Entre em <span className="text-amber-600">Contato</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar o imóvel perfeito.
            Preencha o formulário ou use um dos canais abaixo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Telefone",
                value: `(${BROKER_PHONE.slice(0, 2)}) ${BROKER_PHONE.slice(2, 7)}-${BROKER_PHONE.slice(7)}`,
                href: `tel:+55${BROKER_PHONE}`,
              },
              {
                icon: Mail,
                title: "Email",
                value: BROKER_EMAIL,
                href: `mailto:${BROKER_EMAIL}`,
              },
              {
                icon: MapPin,
                title: "Endereço",
                value: "Av. Paulista, 1000 - São Paulo, SP",
                href: "#",
              },
              {
                icon: Clock,
                title: "Horário",
                value: "Seg - Sex: 9h às 18h | Sáb: 9h às 13h",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-800 transition-colors"
              >
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <a
              href={generateWhatsAppLink(
                BROKER_PHONE,
                `Olá ${BROKER_NAME}! Gostaria de mais informações.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-medium transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Envie sua mensagem
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
