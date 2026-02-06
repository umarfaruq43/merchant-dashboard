"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { merchants } from "@/lib/site-data";

const HomePage: React.FC = () => {
    const [selectedMerchant, setSelectedMerchant] = useState<string>("");
    const router = useRouter();

    const handleFetch = () => {
        if (selectedMerchant) {
            router.push(`/branches?merchantId=${selectedMerchant}`);
        }
    };

    return (
        <div className="min-h-screen flex  items-center justify-center bg-purple-900">
            <div className="p-10 max-w-150 w-full mx-auto bg-white border-black/10 shadow-lg rounded-lg border space-y-20 ">
                <h1 className="text-2xl mb-4 font-bold text-center">
                    Merchant Selection
                </h1>

                <Select
                    label="Select Merchant"
                    options={merchants.map((m) => ({
                        value: m.id,
                        label: m.name,
                    }))}
                    value={selectedMerchant}
                    onChange={(e) => setSelectedMerchant(e.target.value)}
                    labelStyle="font-semibold"
                />

                <div className="w-full flex justify-center mt-6">
                    <Button
                        onClick={handleFetch}
                        disabled={!selectedMerchant}
                        styles="mx-auto"
                    >
                        Fetch POS Branch
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
