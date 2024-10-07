import { TabsContent, TabsTrigger } from "~/components/ui/tabs";

type Props = { children: React.ReactNode; value: string };

const TermsAndConditionsTab = ({ children, value }: Props) => {
	return (
		<TabsTrigger
			className="w-full  relative flex text-md py-2 px-4 justify-start bg-[#ffffff80] data-[state=active]:bg-[#ffffff80] text-black
		 data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-[0_2px_3px_#00000080] data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:top-1/2 data-[state=active]:before:transform data-[state=active]:before:-translate-y-1/2 data-[state=active]:before:w-1 data-[state=active]:before:h-3/5 data-[state=active]:before:bg-black data-[state=active]:before:rounded-r-lg"
			value={value}
		>
			{children}
		</TabsTrigger>
	);
};

export default TermsAndConditionsTab;
