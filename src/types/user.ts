type Person = {
	firstName: string;
	lastName: string;
	birthday: Date;
	gender: Gender;
    phone: string;
    email: string;
};

type Gender = "male" | "female";
