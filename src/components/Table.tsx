import React from "react";
import type { Branch } from "@/types";
import QRCodeDownloader from "./QRCodeDownloader";

interface TableProps {
    data: Branch[];
}

const Table: React.FC<TableProps> = ({ data }) => (
    <div className="overflow-x-auto shadow-md rounded-lg">
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
                {data.map((branch, index) => (
                    <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors`}
                    >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                            {branch.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                            {branch.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                            {branch.accountName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                            {branch.accountNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b">
                            <QRCodeDownloader
                                qrData={branch.qrCodeData}
                                showImage={true}
                            />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b">
                            <QRCodeDownloader
                                qrData={branch.qrCodeData}
                                showImage={false}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Table;
