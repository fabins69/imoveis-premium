"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { mockProperties } from "@/lib/mock-data";

export default function AdminEditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/50">
        <AdminSidebar />
        <div className="flex-1 lg:ml-64 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Imóvel não encontrado
            </h1>
            <Link href="/admin/imoveis" className="text-amber-600 hover:text-amber-700">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          <Link
            href="/admin/imoveis"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-600 text-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Editar: {property.title}
          </h1>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              Este formulário de edição está conectado aos dados mock. Em produção,
              ele atualizará os dados no Firebase Firestore em tempo real.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Título
                </label>
                <input
                  type="text"
                  defaultValue={property.title}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Descrição
                </label>
                <textarea
                  defaultValue={property.description}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm resize-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preço
                  </label>
                  <input
                    type="number"
                    defaultValue={property.price}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    defaultValue={property.city}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Área (m²)
                  </label>
                  <input
                    type="number"
                    defaultValue={property.area}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
