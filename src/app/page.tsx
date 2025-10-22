"use client";

import qrcode from "qrcode-generator";
import { useRef, useState } from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { IoQrCode } from "react-icons/io5";
import { MdTypeSpecimen } from "react-icons/md";

export default function Home() {
	const divRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const [prompt, setPrompt] = useState<string>("");
	const [dataUrl, setDataUrl] = useState<string>("");

	function generate() {
		if (prompt == "") { return; };

		var qr = qrcode(0, "L");
		qr.addData(prompt);
		qr.make();

		setDataUrl(qr.createDataURL(64));
	}

	return (
		<main className="h-screen">
			<section className="h-screen flex flex-col">
				<div className="container mx-auto flex flex-col items-center px-10 py-5">
					<h1 className="font-bold text-4xl">AxQR</h1>
					<p className="text-center">Generate your own QR Code for free!</p>
				</div>

				<div className="container mx-auto flex flex-col items-center text-black">
					<div className="bg-white lg:w-[500px] sm:w-[400px] h-[500px] px-5 py-5 rounded-xl
					flex flex-col items-stretch justify-stretch">

						<div className="h-full flex flex-col items-center">
							<label className="w-full">Type Here:</label>
							<div className="w-full relative">
								<MdTypeSpecimen className="absolute left-[10px] top-[17px]" fontSize={18} />
								<input type="text" className="border border-[#00000046] hover:border-black duration-500
						outline-none px-2 py-1 rounded-xl w-[100%] mt-[10px] pl-[36px]"
									onChange={(e) => { setPrompt(e.target.value); }} placeholder="Your text here..." />
							</div>

							<br />

							{
								dataUrl == "" && (
									<div className="w-[300px] h-[300px] flex flex-col items-center justify-center">
										<p>
											Type your text then click generate!
										</p>
									</div>
								)
							}
							{
								dataUrl && (
									<img className="w-[300px] h-[300px]" src={dataUrl} />
								)
							}

						</div>

						<br />

						<button className="bg-green-300 py-[5px] rounded-xl
						flex items-center justify-center gap-2
						hover:bg-green-400 hover:rounded-[0px] duration-300"
							onClick={generate}>
							<IoQrCode fontSize={18} />
							Generate
						</button>
					</div>
				</div>

				<div className="mt-auto mb-[32px] flex items-center justify-center gap-2">
					<FaConnectdevelop fontSize={18} />
					<a href="https://myporto.vercel.app" className="text-blue-500 underline">
						Made By Joel
					</a>
				</div>

			</section>
		</main>
	);
}
