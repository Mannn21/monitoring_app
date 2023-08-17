import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { db } from "@/utils/firebase";

export const GET = async () => {
	try {
		const datas = await getDocs(collection(db, "students"));
		const data = [];

		datas.forEach(doc => {
			const docData = doc.data();
			const { password, studentId, ...restData } = docData;

			data.push({
				id: doc.id,
				...restData,
			});
		});
		return NextResponse.json(
			{ message: "Get Data Success", data },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
};

export const POST = async (req, res) => {
	const {
		firstName,
		lastName,
		phoneNumber,
		address,
		studentClass,
		teacher,
		password,
		confirmPassword,
	} = await req.json();

	try {
		if (password !== confirmPassword)
			return NextResponse.json(
				{ message: "Password Not Compare" },
				{ status: 404 }
			);
		const salt = await bcrypt.genSalt(10);
		const encryptedPassword = await bcrypt.hash(confirmPassword, salt);
		const studentData = {
			name: {
				firstName,
				lastName,
			},
			studentId: uuidv4(),
			phoneNumber,
			address,
			class: {
				studentClass,
				teacher,
			},
			password: encryptedPassword,
		};
		const studentRef = doc(db, "students", uuidv4());
		const student = await setDoc(studentRef, studentData);
		const data = {
			name: {
				firstName,
				lastName,
			},
			phoneNumber,
			address,
			class: {
				studentClass,
				teacher,
			},
		};
		return NextResponse.json(
			{ message: "Created Student is Success", data },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ Error: error }, { status: 500 });
	}
};
