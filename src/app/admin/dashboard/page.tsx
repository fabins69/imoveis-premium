"use client";

import { Eye, MousePointerClick, Building2, Users, TrendingUp } from "lucide-react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { mockProperties, mockLeads } from "@/lib/mock-data";
import { formatCurrency, getStatusLabel, getStatusColor } from "@/lib/utils";

export default function AdminDashboardPage() {
  const totalViews = mockProperties.reduce((sum, p) => sum + p.views, 0);
  const totalClicks = mockProperties.reduce((sum, p) => sum + p.clicks, 0);

  const metrics = [
    {
      label: "Imóveis Ativos",
      value: mockProperties.filter((p) => p.active).length.toString(),
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      label: "Total de Leads",
      value: mockLeads.length.toString(),
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      label: "Visualizações",
      value: totalViews.toLocaleString("pt-BR"),
      icon: Eye,
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      label: "Cliques",
      value: totalClicks.toLocaleString("pt-BR"),
      icon: MousePointerClick,
      color: "text-amber-600",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
  ];

  const topProperties = [...mockProperties]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Visão geral do seu negócio imobiliário
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {m.label}
                  </span>
                  <div
                    className={`w-10 h-10 ${m.bg} rounded-lg flex items-center justify-center`}
                  >
                    <m.icon className={`w-5 h-5 ${m.color}`} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {m.value}
                </p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +12% vs mês anterior
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Properties */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  Imóveis Mais Visualizados
                </h2>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {topProperties.map((p) => (
                  <div key={p.id} className="p-4 flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {p.city} | {formatCurrency(p.price)}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {p.views}
                      </p>
                      <p className="text-xs text-gray-500">views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Leads */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  Leads Recentes
                </h2>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {mockLeads.map((lead) => (
                  <div key={lead.id} className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {lead.name}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(lead.status)}`}
                      >
                        {getStatusLabel(lead.status)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {lead.message}
                    </p>
                    {lead.propertyTitle && (
                      <p className="text-xs text-amber-600 mt-1">
                        {lead.propertyTitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
