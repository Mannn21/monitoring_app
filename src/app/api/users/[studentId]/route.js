import {
	doc,
	getDocs,
	collection,
	query,
	where,
	deleteDoc,
	updateDoc
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "@/utils/firebase";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const GET = async (req, context) => {
	const { params } = context;
	const studentId = params.studentId;

	try {
		const q = query(
			collection(db, "students"),
			where("studentId", "==", studentId)
		);
		const datas = await getDocs(q);
		const user = datas.docs.map(doc => ({
			id: doc.id,
			...doc.data(),
		}));

		if (user.length === 0) {
			return NextResponse.json(
				{ message: "No Data Student", success: false },
				{ status: 200 }
			);
		}
		if (user.length >= 1) {
			const data = {
				name: user[0].name,
				birthday: user[0].birthday,
				gender: user[0].gender,
				image: {
					URL: user[0].image.URL
				},
				phoneNumber: user[0].phoneNumber,
				address: user[0].address,
				class: {
					studentClass: user[0].class.studentClass,
					teacher: user[0].class.teacher,
				},
			};
			return NextResponse.json(
				{ message: "Request Data Success", data: data,success: true },
				{ status: 200 }
			);
		}
	} catch (error) {
		return NextResponse.json({ Error: error }, { status: 500 });
	}
};

export const DELETE = async (req, context) => {
	const { params } = context;
	const studentId = params.studentId;

	try {
		const q = query(
			collection(db, "students"),
			where("studentId", "==", studentId)
		);
		const datas = await getDocs(q);
		const user = datas.docs.map(doc => ({
			id: doc.id,
			...doc.data(),
		}));

		if (user.length === 0) {
			return NextResponse.json(
				{ message: "No Data Student", success: false },
				{ status: 200 }
			);
		}

		const [firstUser] = user;
		const desertRef = ref(storage, `${firstUser.phoneNumber}${firstUser.name}`);

		try {
			await deleteObject(desertRef);
			await deleteDoc(doc(db, "students", firstUser.id));

			return NextResponse.json(
				{ message: "Delete Student Success", success: true },
				{ status: 200 }
			);
		} catch (error) {
			return NextResponse.json(
				{ message: error.message, success: false },
				{ status: 400 }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occurred", success: false },
			{ status: 500 }
		);
	}
};

export const POST = async (req, context) => {
	const { params } = context;
	const studentId = params.studentId;
	const { phoneNumber, name, gender, address, studentClass, dateBirthday, password, imageURL, imageName } =
		await req.json();

	try {
		if (!password || !studentId || !phoneNumber)
			return NextResponse.json(
				{ message: "No Data Requirement" },
				{ status: 400 }
			);
		if (password && studentId && phoneNumber) {
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
				if (user.length < 1) {
						return NextResponse.json(
							{ message: "No Datas Student" },
							{ status: 200 }
						);
				}
				if (user.length >= 1) {
					const checkPassword = await bcrypt.compare(
						password,
						user[0].password
					);
					function determineTeacher(studentClass) {
						switch (studentClass) {
							case 'Pagi 1':
								return 'Aimanurrofi';
							case 'Pagi 2':
								return 'Joni Herlambang';
							case 'Siang 1':
								return 'Lani Maryani'
							case 'Siang 2':
								return 'Nisa Marnisa'
							default:
								return 'Unknown Teacher';
						}
					}
					if (checkPassword) {
						if (checkPassword) {
							const updateStudent = doc(db, "students", user[0].id);
							const student = await updateDoc(updateStudent, {
								name,
								gender,
								birthday: dateBirthday,
								address,
								class: {
									studentClass,
									teacher: determineTeacher(studentClass)
								},
								image: {
									URL: imageURL,
									name: imageName
								}
							});
							return NextResponse.json(
								{ message: "Update Students Success", student },
								{ status: 200 }
							);
						}
					}	
					if (!checkPassword) {
						return NextResponse.json(
							{ message: "Password Not Compare" },
							{ status: 401 }
						);
					}
				}
			}
		}
	} catch (error) {
		console.log(error)
		return NextResponse.json({ Error: error }, { status: 500 });
	}
};
