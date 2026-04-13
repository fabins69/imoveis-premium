import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { BROKER_PHONE, BROKER_EMAIL, BROKER_NAME } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                RM <span className="text-amber-500">Imóveis</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em imóveis de alto padrão. Encontre a propriedade
              dos seus sonhos com quem entende do mercado.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/imoveis?type=sale" className="hover:text-amber-500 transition-colors">
                  Imóveis à Venda
                </Link>
              </li>
              <li>
                <Link href="/imoveis?type=rent" className="hover:text-amber-500 transition-colors">
                  Imóveis para Aluguel
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-amber-500 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-amber-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Tipos de Imóveis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/imoveis?propertyType=apartment" className="hover:text-amber-500 transition-colors">
                  Apartamentos
                </Link>
              </li>
              <li>
                <Link href="/imoveis?propertyType=house" className="hover:text-amber-500 transition-colors">
                  Casas
                </Link>
              </li>
              <li>
                <Link href="/imoveis?propertyType=commercial" className="hover:text-amber-500 transition-colors">
                  Comerciais
                </Link>
              </li>
              <li>
                <Link href="/imoveis?propertyType=land" className="hover:text-amber-500 transition-colors">
                  Terrenos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>({BROKER_PHONE.slice(0, 2)}) {BROKER_PHONE.slice(2, 7)}-{BROKER_PHONE.slice(7)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{BROKER_EMAIL}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">{BROKER_NAME}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RM Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
