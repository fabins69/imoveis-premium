"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  Heart,
  Share2,
  ArrowLeft,
  Check,
} from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";
import { ContactForm } from "@/components/ContactForm";
import { mockProperties } from "@/lib/mock-data";
import {
  formatCurrency,
  formatArea,
  getPropertyTypeLabel,
  getTransactionTypeLabel,
  generateWhatsAppLink,
  BROKER_PHONE,
} from "@/lib/utils";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = mockProperties.find((p) => p.id === id);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Imóvel não encontrado
          </h1>
          <Link
            href="/imoveis"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Voltar para imóveis
          </Link>
        </div>
      </div>
    );
  }

  const whatsappLink = generateWhatsAppLink(
    BROKER_PHONE,
    `Olá! Tenho interesse no imóvel "${property.title}" (Ref: ${property.id}). Gostaria de mais informações.`
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <Link
          href="/imoveis"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para imóveis
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery images={property.images} title={property.title} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Title & Actions */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {getTransactionTypeLabel(property.type)}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {getPropertyTypeLabel(property.propertyType)}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {property.title}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {property.address}, {property.neighborhood},{" "}
                    {property.city} - {property.state}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Favoritar"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite(property.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500"
                      }`}
                    />
                  </button>
                  <button
                    onClick={() =>
                      navigator.share?.({
                        title: property.title,
                        url: window.location.href,
                      })
                    }
                    className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Compartilhar"
                  >
                    <Share2 className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 mb-6">
                <p className="text-3xl font-bold text-amber-600">
                  {formatCurrency(property.price)}
                  {property.type === "rent" && (
                    <span className="text-lg font-normal text-gray-500">
                      /mês
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-6 mt-4 text-gray-600 dark:text-gray-400">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5" />
                      <span>
                        {property.bedrooms}{" "}
                        {property.bedrooms === 1 ? "Quarto" : "Quartos"}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5" />
                    <span>
                      {property.bathrooms}{" "}
                      {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    <span>
                      {property.parkingSpaces}{" "}
                      {property.parkingSpaces === 1 ? "Vaga" : "Vagas"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5" />
                    <span>{formatArea(property.area)}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Descrição
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Características
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                    >
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              {property.latitude && property.longitude && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Localização
                  </h2>
                  <div className="rounded-xl overflow-hidden h-80">
                    <iframe
                      src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do imóvel"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 sticky top-24"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Interessado neste imóvel?
              </h3>
              <ContactForm
                propertyId={property.id}
                propertyTitle={property.title}
              />
              <div className="mt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
