import React from "react";

const LoadingSkeleton = () => {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg w-250">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Account Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Account Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            QR Code
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                            <td className="px-6 py-4 whitespace-nowrap border-b">
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b">
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b">
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b">
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b">
                                <div className="h-16 w-16 bg-gray-200 rounded animate-pulse mx-auto"></div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b">
                                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mx-auto"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoadingSkeleton;
