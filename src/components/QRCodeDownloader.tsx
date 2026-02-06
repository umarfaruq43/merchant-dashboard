"use client";

import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeProps {
    qrData: string;
    showImage: boolean;
}

const QRCodeDownloader: React.FC<QRCodeProps> = ({ qrData, showImage }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (showImage && canvasRef.current) {
            QRCode.toCanvas(
                canvasRef.current,
                qrData,
                { width: 100 },
                (err) => {
                    if (err) console.error(err);
                },
            );
        }
    }, [qrData, showImage]);

    const downloadQR = () => {
        QRCode.toDataURL(qrData, { width: 200 }, (err, url) => {
            if (err) return console.error(err);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${qrData}.png`;
            a.click();
        });
    };

    return showImage ? (
        <canvas ref={canvasRef} className="mx-auto" />
    ) : (
        <button
            onClick={downloadQR}
            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
            Download
        </button>
    );
};

export default QRCodeDownloader;
