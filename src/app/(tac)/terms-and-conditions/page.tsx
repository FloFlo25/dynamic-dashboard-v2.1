import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import TermsAndConditionsContent from "../TermsAndConditions";
import TermsAndConditionsTab from "../TermsAndConditionsTab";

import RulesContent from "../RulesContent";
import GdprContent from "../GdprContent";
import { useWindowSize } from '@uidotdev/usehooks';

const TermsAndConditions = () => {
	const size = useWindowSize()

	return (
		<div
			className="flex flex-col items-start gap-6 bg-cover bg-center h-full"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<Tabs defaultValue="terms" className="w-full p-8 flex h-full gap-8">
				<TabsList className="flex justify-start w-[356px] gap-2 p-8 rounded-[24px] h-full flex-col bg-[#94949457] bg-opacity-25 backdrop-blur-sm">
					<TermsAndConditionsTab value="terms">
						Terms & Conditions
					</TermsAndConditionsTab>
					<TermsAndConditionsTab value="rules">Rules</TermsAndConditionsTab>
					<TermsAndConditionsTab value="gdpr">GDPR</TermsAndConditionsTab>
				</TabsList>
				<div className="bg-[#94949457] rounded-[24px] p-8 bg-opacity-25 w-full backdrop-blur-sm text-white">
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
