import {
	doc,
	setDoc,
	getDocs,
	collection,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export const GET = async () => {
	try {
		const datas = await getDocs(collection(db, "students"));
		const data = [];
		datas.forEach(doc => {
			const docData = doc.data();
			const { password, ...restData } = docData;

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

export const POST = async req => {
	const {
		imageURL,
		imageName,
		name,
		gender,
		phoneNumber,
		address,
		studentClass,
		teacher,
		password,
		confPassword,
	} = await req.json();

	try {
		if (password !== confPassword)
			return NextResponse.json(
				{ message: "Password Not Compare" },
				{ status: 404 }
			);
		const salt = await bcrypt.genSalt(10);
		const encryptedPassword = await bcrypt.hash(confPassword, salt);
		const studentData = {
			name,
			gender,
			studentId: uuidv4(),
			phoneNumber,
			address,
			password: encryptedPassword,
			class: {
				studentClass,
				teacher,
			},
			image: {
				URL: imageURL,
				name: imageName 
			},
		};
		const studentRef = doc(db, "students", uuidv4());
		await setDoc(studentRef, studentData);
		const data = {
			name,
			gender,
			phoneNumber,
			address,
			class: {
				studentClass,
				teacher,
			},
			image: {
				URL: imageURL,
				name: imageName 
			}
		};
		return NextResponse.json(
			{ message: "Created Student is Success", data },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ Error: error }, { status: 500 });
	}
};