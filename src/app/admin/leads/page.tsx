"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { mockLeads } from "@/lib/mock-data";
import { getStatusLabel, getStatusColor } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

export default function AdminLeadsPage() {
  const [leads] = useState(mockLeads);
  const [statusFilter, setStatusFilter] = useState("");

  const filtered = statusFilter
    ? leads.filter((l) => l.status === statusFilter)
    : leads;

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Leads
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Gerencie seus contatos e potenciais clientes
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["", "new", "contacted", "negotiating", "closed", "lost"].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    statusFilter === s
                      ? "bg-amber-600 text-white"
                      : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {s ? getStatusLabel(s) : "Todos"}
                </button>
              )
            )}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((lead) => (
              <div
                key={lead.id}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {lead.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(lead.status)}`}
                  >
                    {getStatusLabel(lead.status)}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {lead.message}
                </p>

                {lead.propertyTitle && (
                  <p className="text-xs text-amber-600 mb-3 truncate">
                    Imóvel: {lead.propertyTitle}
                  </p>
                )}

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-1 hover:text-amber-600 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {lead.email}
                  </a>
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-1 hover:text-amber-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {lead.phone}
                  </a>
                </div>

                <p className="text-xs text-gray-400 mt-3">
                  {new Date(lead.createdAt).toLocaleDateString("pt-BR")}
                </p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Nenhum lead encontrado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
