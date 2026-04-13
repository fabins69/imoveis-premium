export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatArea(value: number): string {
  return `${value}m²`;
}

export function getPropertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    apartment: "Apartamento",
    house: "Casa",
    commercial: "Comercial",
    land: "Terreno",
    other: "Outro",
  };
  return labels[type] || type;
}

export function getTransactionTypeLabel(type: string): string {
  return type === "sale" ? "Venda" : "Aluguel";
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    new: "Novo",
    contacted: "Contatado",
    negotiating: "Em negociação",
    closed: "Fechado",
    lost: "Perdido",
  };
  return labels[status] || status;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    contacted:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    negotiating:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    closed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    lost: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };
  return colors[status] || "";
}

export function generateWhatsAppLink(
  phone: string,
  message: string
): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/55${cleanPhone}?text=${encodedMessage}`;
}

export const BROKER_PHONE = "11999999999";
export const BROKER_NAME = "Ricardo Mendes";
export const BROKER_EMAIL = "contato@ricardomendes.com.br";
export const BROKER_CRECI = "CRECI 123456-F";
