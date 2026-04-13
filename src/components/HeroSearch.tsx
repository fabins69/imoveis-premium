"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSearch() {
  const router = useRouter();
  const [type, setType] = useState("sale");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (search) params.set("search", search);
    if (propertyType) params.set("propertyType", propertyType);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (bedrooms) params.set("bedrooms", bedrooms);
    router.push(`/imoveis?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setType("sale")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            type === "sale"
              ? "bg-amber-600 text-white"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() => setType("rent")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            type === "rent"
              ? "bg-amber-600 text-white"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Alugar
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Busque por cidade, bairro ou tipo de imóvel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 outline-none text-gray-800 dark:text-gray-200 bg-transparent placeholder:text-gray-400"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Filtros"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Buscar
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 border-t border-gray-100 dark:border-gray-800">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none"
                >
                  <option value="">Tipo de Imóvel</option>
                  <option value="apartment">Apartamento</option>
                  <option value="house">Casa</option>
                  <option value="commercial">Comercial</option>
                  <option value="land">Terreno</option>
                </select>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Preço mín."
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Preço máx."
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none"
                  />
                </div>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none"
                >
                  <option value="">Quartos</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
