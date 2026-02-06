export interface Merchant {
    id: string;
    name: string;
}

export interface Branch {
    location: string;
    address: string;
    accountName: string;
    accountNumber: string;
    qrCodeData: string;
}
