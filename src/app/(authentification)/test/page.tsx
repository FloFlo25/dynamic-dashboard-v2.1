"use client";

import React from "react";

const LegacyPage = () => {
	const access_token = localStorage.getItem("access_token")!;
	const refresh_token = localStorage.getItem("refresh_token")!;

	console.log(access_token);
	console.log(refresh_token);

	return (
		<iframe
			src="https://test.dynamicapp.ro"
			title="Unique"
			width="100%"
			height="100%"
			allowFullScreen
			onEnded={() => {
				localStorage.setItem(
					"access_token",
					access_token,
				);
				localStorage.setItem(
					"refresh_token",
					refresh_token,
				);
			}}
		></iframe>
	);
};

export default LegacyPage;
