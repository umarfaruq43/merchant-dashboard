"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Table from "@/components/Table";
import Select from "@/components/Select";
import Button from "@/components/Button";
import type { Branch } from "@/types";
import { merchants } from "@/lib/site-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const ClientBranches: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialMerchantId = searchParams.get("merchantId") || "";
    const [selectedMerchant, setSelectedMerchant] =
        useState<string>(initialMerchantId);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBranches = async (merchantId: string) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/branches?merchantId=${merchantId}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const data: Branch[] = await res.json();
            setBranches(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedMerchant) {
            fetchBranches(selectedMerchant);
            // Update URL without reloading
            router.replace(`/branches?merchantId=${selectedMerchant}`);
        } else {
            setError("No merchant selected");
            setLoading(false);
        }
    }, [selectedMerchant, router]);

    const handleBack = () => {
        router.push("/");
    };

    if (error)
        return (
            <div className="p-8 text-center text-red-500">Error: {error}</div>
        );
    if (branches.length === 0 && !loading)
        return (
            <div className="p-8 text-center text-gray-600">
                No branches found.
            </div>
        );

    return (
        <div className="bg-purple-900 min-h-screen flex items-center">
            <div className="p-8 max-w-6xl mx-auto bg-white rounded-lg shadow border border-black/10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        POS Branches
                    </h1>
                    <Button
                        onClick={handleBack}
                        styles="bg-gray-500 hover:bg-gray-600"
                    >
                        Back to Selection
                    </Button>
                </div>
                <div className="mb-6 max-w-md">
                    <Select
                        label="Switch Merchant"
                        options={merchants.map((m) => ({
                            value: m.id,
                            label: m.name,
                        }))}
                        value={selectedMerchant}
                        onChange={(e) => setSelectedMerchant(e.target.value)}
                        allowDefault={false}
                    />
                </div>
                {loading ? <LoadingSkeleton /> : <Table data={branches} />}
            </div>
        </div>
    );
};

export default ClientBranches;
