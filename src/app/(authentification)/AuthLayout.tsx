import DynamicLogo from "../_components/Others/DynamicLogo";

type Props = { children: React.ReactNode };

const AuthLayout = ({ children }: Props) => {
	return (
		<div
			className="flex flex-col items-start gap-6 bg-cover bg-center h-full"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<div className="flex flex-col justify-start gap-[48px] items-center bg-[#94949457] bg-opacity-25 backdrop-blur-sm rounded-none drop-shadow-lg sm:m-7 px-14 py-16 h-full w-full sm:px-16 sm:rounded sm:w-[500px]">
				<DynamicLogo />
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
