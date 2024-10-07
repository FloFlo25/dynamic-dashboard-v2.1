import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const TermsAndConditions = () => {
	return (
		<div>
			<Tabs defaultValue="account" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
					<TabsTrigger value="rules">Rules</TabsTrigger>
					<TabsTrigger value="gdpr">GDPR</TabsTrigger>
				</TabsList>
				<TabsContent value="terms">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="rules">Change your password here.</TabsContent>
				<TabsContent value="gdpr">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
};

export default TermsAndConditions;
