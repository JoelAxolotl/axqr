import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "AxQR",
	description: "AxQR is a free online QR code generator that lets you create custom QR codes for links, text, Wi-Fi, and more. Generate and download your QR codes instantly — fast, secure, and 100% free.",
	keywords: [
		"Free QR Code Generator",
		"QR Code Maker",
		"Custom QR Code",
		"Online QR Generator",
		"QR Code Creator",
		"QR Code for URL",
		"QR Code for Wi-Fi",
		"QR Code for Text",
		"Free QR Download",
		"AxQR",
		"QR Maker Online",
		"QR Code Tool",
		"No Watermark QR Generator",
		"Business QR Code",
		"Quick QR Generator",
		"QR Design Maker",
		"QR Code Generator Website",
		"QR Generator for Links",
		"QR Code Builder",
		"QR Code App"
	],
	authors: [
		{
			name: "Joel Mikha",
			url: "https://www.linkedin.com/in/joeldev04"
		}
	],
	robots: {
		index: true,
		follow: true
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
