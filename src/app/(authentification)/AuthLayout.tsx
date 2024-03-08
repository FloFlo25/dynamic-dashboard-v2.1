type Props = { children: React.ReactNode };

const AuthLayout = ({ children }: Props) => {
	return (
		<div
			className="flex flex-col items-start gap-6 bg-cover bg-center h-full"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<div
				className="flex flex-col justify-start items-center gap-48 bg-[#1f222d57]
       bg-opacity-25 backdrop-blur-sm rounded-none drop-shadow-lg px-0 py-12 m-0 h-full w-full sm:px-16 sm:m-7 sm:rounded sm:w-[500px]"
			>
				{children};
			</div>
		</div>
	);
};

export default AuthLayout;
