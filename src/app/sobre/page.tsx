import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Shield, TrendingUp } from "lucide-react";
import { BROKER_NAME, BROKER_CRECI } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o corretor de imóveis de alto padrão. Experiência, dedicação e profissionalismo para encontrar o imóvel dos seus sonhos.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop"
          alt="Escritório"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Sobre <span className="text-amber-400">Nós</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Compromisso com excelência no mercado imobiliário de alto padrão
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
                alt={BROKER_NAME}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-amber-600 font-medium text-sm">
                {BROKER_CRECI}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                {BROKER_NAME}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Com mais de 15 anos de experiência no mercado imobiliário de
                  alto padrão, sou especialista em propriedades exclusivas nas
                  melhores localizações do Brasil.
                </p>
                <p>
                  Minha missão é proporcionar uma experiência excepcional de
                  compra e venda de imóveis, unindo conhecimento de mercado,
                  atendimento personalizado e resultados superiores.
                </p>
                <p>
                  Ao longo da minha carreira, já realizei mais de 500
                  transações imobiliárias, movimentando mais de R$ 2 bilhões
                  em negócios. Cada cliente é tratado de forma única, com
                  dedicação total para encontrar a propriedade perfeita.
                </p>
                <p>
                  Formado em Administração de Empresas pela USP, com MBA em
                  Gestão Imobiliária pela FGV e certificações internacionais em
                  Real Estate Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-14">
            Nossos <span className="text-amber-600">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparência",
                desc: "Honestidade e clareza em todas as negociações, sem surpresas.",
              },
              {
                icon: Award,
                title: "Excelência",
                desc: "Padrão de qualidade superior em cada etapa do processo.",
              },
              {
                icon: Users,
                title: "Relacionamento",
                desc: "Construímos relações duradouras baseadas em confiança.",
              },
              {
                icon: TrendingUp,
                title: "Resultados",
                desc: "Foco em entregar os melhores resultados para nossos clientes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800"
              >
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
