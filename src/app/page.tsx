"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
import { HeroSearch } from "@/components/HeroSearch";
import { PropertyCard } from "@/components/PropertyCard";
import { mockProperties, mockTestimonials } from "@/lib/mock-data";
import { generateWhatsAppLink, BROKER_PHONE } from "@/lib/utils";

export default function HomePage() {
  const featured = mockProperties.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Imóvel de luxo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-amber-600/90 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Imóveis de Alto Padrão
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Encontre o Imóvel
              <br />
              <span className="text-amber-400">dos Seus Sonhos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Imóveis exclusivos nas melhores localizações do Brasil.
              Experiência premium em cada detalhe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroSearch />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-gray-950 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Imóveis Vendidos" },
              { value: "98%", label: "Clientes Satisfeitos" },
              { value: "15+", label: "Anos de Experiência" },
              { value: "R$2B+", label: "em Transações" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-amber-600">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Imóveis em <span className="text-amber-600">Destaque</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Seleção exclusiva dos melhores imóveis disponíveis no mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/imoveis"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Ver Todos os Imóveis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Por que <span className="text-amber-600">Nos Escolher</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Segurança Total",
                desc: "Todas as transações são verificadas e documentadas, garantindo sua segurança jurídica em cada negociação.",
              },
              {
                icon: Award,
                title: "Experiência Premium",
                desc: "Mais de 15 anos no mercado imobiliário de alto padrão, com atendimento personalizado e exclusivo.",
              },
              {
                icon: TrendingUp,
                title: "Melhor Investimento",
                desc: "Assessoria completa para escolher o imóvel ideal, com análise de valorização e retorno financeiro.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-800 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              O que Nossos <span className="text-amber-600">Clientes Dizem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {t.image && (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">Cliente</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
          alt="Interior luxuoso"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Encontrar seu Imóvel Ideal?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Entre em contato agora e receba atendimento personalizado de um
              especialista em imóveis de alto padrão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppLink(
                  BROKER_PHONE,
                  "Olá! Gostaria de conversar sobre imóveis disponíveis."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-medium transition-colors"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-xl font-medium transition-colors"
              >
                Enviar Mensagem
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
