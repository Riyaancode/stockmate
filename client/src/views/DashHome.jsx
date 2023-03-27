export default function DashHome(params) {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 md:grid-cols-2">
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-blue-500 truncate">
          Total users
        </div>
        <div className="mt-1 text-3xl font-semibold text-blue-900">12,00</div>
      </div>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-blue-500 truncate">
          Total Profit
        </div>
        <div className="mt-1 text-3xl font-semibold text-blue-900">$ 450k</div>
      </div>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-blue-500 truncate">
          Total Orders
        </div>
        <div className="mt-1 text-3xl font-semibold text-blue-900">20k</div>
      </div>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-blue-500 truncate">
          Total Orders
        </div>
        <div className="mt-1 text-3xl font-semibold text-blue-900">20k</div>
      </div>
    </div>
  );
}
