"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Bed, Bath, Car, Maximize } from "lucide-react";
import { motion } from "framer-motion";
import { Property } from "@/lib/types";
import {
  formatCurrency,
  formatArea,
  getPropertyTypeLabel,
  getTransactionTypeLabel,
} from "@/lib/utils";
import { useFavorites } from "@/contexts/FavoritesContext";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[0] || "/images/placeholder.jpg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {getTransactionTypeLabel(property.type)}
          </span>
          <span className="bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
            {getPropertyTypeLabel(property.propertyType)}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(property.id);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:scale-110 transition-transform"
          aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart
            className={`w-5 h-5 ${
              favorite
                ? "fill-red-500 text-red-500"
                : "text-gray-600 dark:text-gray-400"
            }`}
          />
        </button>

        <div className="absolute bottom-3 left-3">
          <p className="text-white text-2xl font-bold">
            {formatCurrency(property.price)}
            {property.type === "rent" && (
              <span className="text-sm font-normal">/mês</span>
            )}
          </p>
        </div>
      </div>

      <Link href={`/imoveis/${property.id}`}>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {property.neighborhood}, {property.city} - {property.state}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span>{property.parkingSpaces}</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="w-4 h-4" />
              <span>{formatArea(property.area)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
