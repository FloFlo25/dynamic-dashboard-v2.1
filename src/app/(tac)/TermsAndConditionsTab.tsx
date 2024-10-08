import { TabsTrigger } from "~/components/ui/tabs";

type Props = { children: React.ReactNode; value: string };

const TermsAndConditionsTab = ({ children, value }: Props) => {
	return (
		<TabsTrigger
			className="text-md  relative flex bg-[#ffffff80] px-4 py-2 text-black data-[state=active]:bg-[#ffffff80] data-[state=active]:font-bold data-[state=active]:text-black
		 data-[state=active]:shadow-[0_2px_3px_#00000080] data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:top-1/2 data-[state=active]:before:h-3/5 data-[state=active]:before:w-1 data-[state=active]:before:-translate-y-1/2 data-[state=active]:before:transform data-[state=active]:before:rounded-r-lg data-[state=active]:before:bg-black data-[state=active]:before:content-[''] sm:w-full sm:justify-start"
			value={value}
		>
			{children}
		</TabsTrigger>
	);
};

export default TermsAndConditionsTab;
