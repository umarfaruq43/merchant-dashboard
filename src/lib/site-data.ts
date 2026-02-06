import { Branch, Merchant } from "@/types";
import React from "react";

export const merchants: Merchant[] = [
    {
        id: "merchant1",
        name: "Sprinters Technologies Ltd",
    },
    {
        id: "merchant2",
        name: "NovaPay Services Limited",
    },
    {
        id: "merchant3",
        name: "QuickMart Retailers",
    },
    {
        id: "merchant4",
        name: "EdoFresh Foods Ltd",
    },
    {
        id: "merchant5",
        name: "CoalCity Stores",
    },
    {
        id: "merchant6",
        name: "PayWave Commerce",
    },
];

export const mockBranches: Record<string, Branch[]> = {
    merchant1: [
        {
            location: "Ikeja Main Branch",
            address: "12 Obafemi Awolowo Way, Ikeja, Lagos",
            accountName: "Sprinters Technologies Ltd",
            accountNumber: "0123456789",
            qrCodeData: "sprinters-ikeja-0123456789",
        },
        {
            location: "Victoria Island Branch",
            address: "45 Adeola Odeku Street, Victoria Island, Lagos",
            accountName: "Sprinters Technologies Ltd",
            accountNumber: "0123456790",
            qrCodeData: "sprinters-vi-0123456790",
        },
        {
            location: "Yaba Tech Hub",
            address: "3 Herbert Macaulay Way, Yaba, Lagos",
            accountName: "Sprinters Technologies Ltd",
            accountNumber: "0123456791",
            qrCodeData: "sprinters-yaba-0123456791",
        },
    ],

    merchant2: [
        {
            location: "Garki Branch",
            address: "18 Aminu Kano Crescent, Garki II, Abuja",
            accountName: "NovaPay Services Limited",
            accountNumber: "0234567891",
            qrCodeData: "novapay-garki-0234567891",
        },
        {
            location: "Wuse II Branch",
            address: "10 Adetokunbo Ademola Crescent, Wuse II, Abuja",
            accountName: "NovaPay Services Limited",
            accountNumber: "0234567892",
            qrCodeData: "novapay-wuse2-0234567892",
        },
    ],

    merchant3: [
        {
            location: "Bodija Branch",
            address: "7 Sango–Ojoo Road, Bodija, Ibadan",
            accountName: "QuickMart Retailers",
            accountNumber: "0345678912",
            qrCodeData: "quickmart-bodija-0345678912",
        },
        {
            location: "Akobo Outlet",
            address: "21 Akobo Road, Ibadan, Oyo State",
            accountName: "QuickMart Retailers",
            accountNumber: "0345678913",
            qrCodeData: "quickmart-akobo-0345678913",
        },
        {
            location: "Challenge Branch",
            address: "5 Challenge Roundabout, Ibadan",
            accountName: "QuickMart Retailers",
            accountNumber: "0345678914",
            qrCodeData: "quickmart-challenge-0345678914",
        },
    ],

    merchant4: [
        {
            location: "GRA Branch",
            address: "9 Stadium Road, GRA, Benin City, Edo State",
            accountName: "EdoFresh Foods Ltd",
            accountNumber: "0456789123",
            qrCodeData: "edofresh-gra-0456789123",
        },
        {
            location: "Ugbowo Outlet",
            address: "14 Ugbowo–Lagos Road, Benin City",
            accountName: "EdoFresh Foods Ltd",
            accountNumber: "0456789124",
            qrCodeData: "edofresh-ugbowo-0456789124",
        },
    ],

    merchant5: [
        {
            location: "Ogbete Market Branch",
            address: "1 Ogbete Main Market Road, Enugu",
            accountName: "CoalCity Stores",
            accountNumber: "0567891234",
            qrCodeData: "coalcity-ogbete-0567891234",
        },
        {
            location: "Independence Layout",
            address: "22 Nza Street, Independence Layout, Enugu",
            accountName: "CoalCity Stores",
            accountNumber: "0567891235",
            qrCodeData: "coalcity-independence-0567891235",
        },
    ],

    merchant6: [
        {
            location: "Ring Road Branch",
            address: "16 Ring Road, Ibadan",
            accountName: "PayWave Commerce",
            accountNumber: "0678912345",
            qrCodeData: "paywave-ringroad-0678912345",
        },
        {
            location: "Agodi Mall Kiosk",
            address: "Agodi Gardens, Ibadan, Oyo State",
            accountName: "PayWave Commerce",
            accountNumber: "0678912346",
            qrCodeData: "paywave-agodi-0678912346",
        },
        {
            location: "Dugbe Outlet",
            address: "4 Dugbe Alawo Street, Ibadan",
            accountName: "PayWave Commerce",
            accountNumber: "0678912347",
            qrCodeData: "paywave-dugbe-0678912347",
        },
    ],
};
