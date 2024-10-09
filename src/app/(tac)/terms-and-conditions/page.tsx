"use client";
import { Tabs, TabsContent, TabsList } from "~/components/ui/tabs";
import TermsAndConditionsContent from "../TermsAndConditions";
import TermsAndConditionsTab from "../TermsAndConditionsTab";

import Link from "next/link";
import BackIcon from "~/app/_components/Icons/BackIcon";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import GdprContent from "../GdprContent";
import RulesContent from "../RulesContent";

const TermsAndConditions = () => {

	return (
		<div
			className="flex h-full flex-col items-start gap-6 bg-cover bg-center"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<Tabs
				defaultValue="terms"
				className="flex h-full w-full flex-col sm:flex-row sm:gap-8 sm:p-8"
			>
				<TabsList className="flex h-fit flex-row gap-2 rounded-none bg-[#94949457] bg-opacity-25 backdrop-blur-sm sm:h-full sm:w-[356px] sm:flex-col sm:justify-start sm:rounded-[24px] sm:p-8">
					<TermsAndConditionsTab value="terms">
						Terms & Conditions
					</TermsAndConditionsTab>
					<TermsAndConditionsTab value="rules">Rules</TermsAndConditionsTab>
					<TermsAndConditionsTab value="gdpr">GDPR</TermsAndConditionsTab>
					<PrimaryButton icon={<BackIcon fill="white" />} variant="tertiary">
						<Link href="/register">Register</Link>
					</PrimaryButton>
				</TabsList>
				<div className="h-[calc(100vh_-_50px)] w-full rounded-none bg-[#94949457] bg-opacity-25 p-2 text-white backdrop-blur-sm sm:h-full sm:rounded-[24px] sm:p-8">
					<TabsContent className="h-full" value="terms">
						<TermsAndConditionsContent />
					</TabsContent>
					<TabsContent className="h-full" value="rules">
						<RulesContent />
					</TabsContent>
					<TabsContent className="h-full" value="gdpr">
						<GdprContent />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
};

export default TermsAndConditions;
