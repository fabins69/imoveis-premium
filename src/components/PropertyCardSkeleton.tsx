export function PropertyCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 animate-pulse">
      <div className="h-64 bg-gray-200 dark:bg-gray-800" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
        <div className="flex gap-4 pt-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-12" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-12" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-12" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-16" />
        </div>
      </div>
    </div>
  );
}
