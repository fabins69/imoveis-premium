"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { mockProperties } from "@/lib/mock-data";
import {
  formatCurrency,
  getPropertyTypeLabel,
  getTransactionTypeLabel,
} from "@/lib/utils";

export default function AdminImoveisPage() {
  const [properties, setProperties] = useState(mockProperties);
  const [search, setSearch] = useState("");

  const filtered = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase())
  );

  function toggleActive(id: string) {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  }

  function handleDelete(id: string) {
    if (confirm("Tem certeza que deseja excluir este imóvel?")) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Imóveis
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Gerencie seus imóveis cadastrados
              </p>
            </div>
            <Link
              href="/admin/imoveis/novo"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              Novo Imóvel
            </Link>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar imóveis..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Imóvel
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Tipo
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Preço
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Cidade
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Views
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {filtered.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={p.images[0]}
                              alt={p.title}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">
                            {p.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-0.5">
                          <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full">
                            {getTransactionTypeLabel(p.type)}
                          </span>
                          <p className="text-xs text-gray-500">
                            {getPropertyTypeLabel(p.propertyType)}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {formatCurrency(p.price)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                        {p.city}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                        {p.views}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            p.active
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {p.active ? "Ativo" : "Inativo"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => toggleActive(p.id)}
                            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title={p.active ? "Desativar" : "Ativar"}
                          >
                            {p.active ? (
                              <EyeOff className="w-4 h-4 text-gray-500" />
                            ) : (
                              <Eye className="w-4 h-4 text-gray-500" />
                            )}
                          </button>
                          <Link
                            href={`/admin/imoveis/${p.id}`}
                            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4 text-gray-500" />
                          </Link>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            title="Excluir"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Nenhum imóvel encontrado.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
