const TableSkeletonLoader = () => {
  return (
    <div
      className="bg-white shadow-lg overflow-hidden border border-gray-100"
      dir="rtl"
    >
      {/* Header skeleton */}
      <div className="px-3 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div className="flex flex-col-2 gap-2">
              <div className="h-7 w-40 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-5 w-56 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Table skeleton */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-4 00">
            <tr>
              {[...Array(9)].map((_, i) => (
                <th key={i} className="px-2 py-3 text-center">
                  <div className="h-5 w-16 mx-auto bg-gray-4  00 rounded-md animate-pulse"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {[...Array(9)].map((_, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-4 text-center">
                    {cellIndex === 1 ? (
                      <div className="flex justify-center">
                        <div className="h-12 w-12 rounded-lg bg-gray-200 animate-pulse"></div>
                      </div>
                    ) : cellIndex === 8 ? (
                      <div className="flex justify-center space-x-4 space-x-reverse">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"
                          ></div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={`h-4 mx-auto ${
                          cellIndex === 2
                            ? "w-32"
                            : cellIndex === 6
                            ? "w-20"
                            : "w-16"
                        } bg-gray-200 rounded-md animate-pulse`}
                      ></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination skeleton */}
      <div className="px-6 py-4 border-t flex justify-center items-center bg-gray-50">
        <div className="inline-flex gap-1 shadow-sm rounded-lg overflow-hidden border border-gray-200 bg-white">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-10 w-10 bg-gray-200 animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSkeletonLoader;
