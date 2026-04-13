"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AdminSidebar } from "@/components/AdminSidebar";
import toast from "react-hot-toast";

export default function AdminNovoImovelPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    type: "sale",
    propertyType: "apartment",
    address: "",
    city: "",
    state: "",
    neighborhood: "",
    zipCode: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    parkingSpaces: "",
    features: "",
    featured: false,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleImageUpload() {
    // Demo: add a placeholder image
    setImages((prev) => [
      ...prev,
      `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&t=${Date.now()}`,
    ]);
    toast.success("Imagem adicionada!");
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Demo: simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Imóvel cadastrado com sucesso!");
    router.push("/admin/imoveis");
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm";
  const labelClass =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <Link
              href="/admin/imoveis"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-600 text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Novo Imóvel
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
            {/* Basic Info */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 space-y-4">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
                Informações Básicas
              </h2>

              <div>
                <label className={labelClass}>Título</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex: Cobertura Duplex com Vista para o Mar"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Descrição</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder="Descreva o imóvel em detalhes..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Preço (R$)</label>
                  <input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="0"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Transação</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="sale">Venda</option>
                    <option value="rent">Aluguel</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Tipo de Imóvel</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="apartment">Apartamento</option>
                    <option value="house">Casa</option>
                    <option value="commercial">Comercial</option>
                    <option value="land">Terreno</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 space-y-4">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
                Localização
              </h2>

              <div>
                <label className={labelClass}>Endereço</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Rua, Av., etc."
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className={labelClass}>Bairro</label>
                  <input
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Cidade</label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Estado</label>
                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={inputClass}
                    maxLength={2}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>CEP</label>
                  <input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 space-y-4">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">
                Detalhes
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className={labelClass}>Área (m²)</label>
                  <input
                    name="area"
                    type="number"
                    value={formData.area}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Quartos</label>
                  <input
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Banheiros</label>
                  <input
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Vagas</label>
                  <input
                    name="parkingSpaces"
                    type="number"
                    value={formData.parkingSpaces}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Características (separadas por vírgula)
                </label>
                <input
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Piscina, Churrasqueira, Automação..."
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Imóvel em destaque
                </span>
              </label>
            </div>

            {/* Images */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
                Imagens
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {images.map((img, i) => (
                  <div key={i} className="relative h-28 rounded-lg overflow-hidden group">
                    <Image
                      src={img}
                      alt={`Imagem ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleImageUpload}
                  className="h-28 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center gap-1 hover:border-amber-500 transition-colors text-gray-400 hover:text-amber-500"
                >
                  <Upload className="w-6 h-6" />
                  <span className="text-xs">Upload</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {loading ? "Salvando..." : "Cadastrar Imóvel"}
              </button>
              <Link
                href="/admin/imoveis"
                className="px-8 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
