import {
	doc,
	setDoc,
	getDocs,
	updateDoc,
	collection,
	query,
	where,
	deleteDoc,
} from "firebase/firestore";
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
		data,
		// imageURL,
		// name,
		// phoneNumber,
		// address,
		// studentClass,
		// teacher,
		// password,
		// confirmPassword,
	} = await req.json();

	console.log(data)

	// try {
	// 	if (password !== confirmPassword)
	// 		return NextResponse.json(
	// 			{ message: "Password Not Compare" },
	// 			{ status: 404 }
	// 		);
	// 	const salt = await bcrypt.genSalt(10);
	// 	const encryptedPassword = await bcrypt.hash(confirmPassword, salt);
	// 	const studentData = {
	// 		name,
	// 		studentId: uuidv4(),
	// 		phoneNumber,
	// 		imageURL,
	// 		address,
	// 		class: {
	// 			studentClass,
	// 			teacher,
	// 		},
	// 		password: encryptedPassword,
	// 	};
	// 	const studentRef = doc(db, "students", uuidv4());
	// 	await setDoc(studentRef, studentData);
	// 	const data = {
	// 		name,
	// 		imageURL,
	// 		phoneNumber,
	// 		address,
	// 		class: {
	// 			studentClass,
	// 			teacher,
	// 		},
	// 	};
	// 	return NextResponse.json(
	// 		{ message: "Created Student is Success", data },
	// 		{ status: 200 }
	// 	);
	// } catch (error) {
	// 	return NextResponse.json({ Error: error }, { status: 500 });
	// }
};

export const PUT = async (req, res) => {
	const {phoneNumber, password, newPassword, confirmPassword} = await req.json()
	try {
		if(!password || !newPassword || !confirmPassword) return NextResponse.json({message: "No Data Requirement"}, {status: 400})
		if(password && newPassword && confirmPassword) {
			const q = query(
				collection(db, "students"),
				where("phoneNumber", "==", phoneNumber)
			);
			const datas = await getDocs(q);
			const data = [];
			datas.forEach(doc => {
				data.push({
					id: doc.id,
					...doc.data(),
				});
			});
			if (data.length < 1)
			return NextResponse.json(
				{ message: "No Datas Student" },
				{ status: 200 }
			);
			if (data.length >= 1) {
			const user = data.filter(item => item.phoneNumber === phoneNumber);
			if (user.length < 1)
				return NextResponse.json(
					{ message: "No Datas Student" },
					{ status: 200 }
				);
			if(user.length >= 1) {
				if(newPassword !== confirmPassword) return NextResponse.json({message: "Confirm Password Not Compare"}, {status: 400})
				const checkOldPassword = await bcrypt.compare(confirmPassword, user[0].password)
				if(checkOldPassword) return NextResponse.json({message: "Password Up To Date"}, {status: 200})
				if(!checkOldPassword) {
					const checkPassword = await bcrypt.compare(password, user[0].password)
					if(!checkPassword) return NextResponse.json({message: "Wrong Password"}, {status: 400})
					if(checkPassword) {
						const salt = await bcrypt.genSalt(10)
						const encryptedPassword = await bcrypt.hash(confirmPassword, salt)
						const updateStudent = doc(db, "students", user[0].id);
						const student = await updateDoc(updateStudent, {
							password: encryptedPassword
						});
						return NextResponse.json({message: "Update Students Success", student}, {status: 200})	  
					}
				}
			}
			}
		}
	} catch (error) {
		return NextResponse.json({ Error: error }, { status: 500 });
	}
}

export const DELETE = async (req, res) => {
	const { phoneNumber } = await req.json();
	try {
		const q = query(
			collection(db, "students"),
			where("phoneNumber", "==", phoneNumber)
		);
		const datas = await getDocs(q);
		const data = [];
		datas.forEach(doc => {
			data.push({
				id: doc.id,
				...doc.data(),
			});
		});
		if (data.length < 1)
			return NextResponse.json(
				{ message: "No Datas Student" },
				{ status: 200 }
			);
		if (data.length >= 1) {
			const user = data.filter(item => item.phoneNumber === phoneNumber);
			if (user.length < 1)
				return NextResponse.json(
					{ message: "No Datas Student" },
					{ status: 200 }
				);
			if(user.length >= 1) {
				deleteDoc(doc(db, "students", user[0].id))
				return NextResponse.json({message: "Delete Student Success"}, {status: 200})
			}
		}
	} catch (error) {
		return NextResponse.json({ Error: error }, { status: 500 });
	}
};
