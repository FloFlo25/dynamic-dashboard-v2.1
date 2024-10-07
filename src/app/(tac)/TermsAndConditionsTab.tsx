import { TabsContent, TabsTrigger } from "~/components/ui/tabs";

type Props = { children: React.ReactNode; value: string };

const TermsAndConditionsTab = ({ children, value }: Props) => {
	return (
			<TabsTrigger className="w-full flex justify-start" value={value}>{children}</TabsTrigger>
	);
};

export default TermsAndConditionsTab;
