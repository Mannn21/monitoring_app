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
import dayjs from "dayjs";
import { db } from "@/utils/firebase";

// export const GET = async () => {

// }

export const POST = async (req, res) => {
	const { firstName, lastName, studentClass, attendance, grade, attitude } =
		await req.json();
	try {
		const q = query(
			collection(db, "students"),
			where("name.firstName", "==", firstName)
		);
		const datas = await getDocs(q);
		const data = [];
		datas.forEach(doc => {
			data.push({
				id: doc.id,
				...doc.data(),
			});
		});
		if (data.length < 1) {
			console.log("GADA USER");
			return NextResponse.json(
				{ message: "No Datas Student" },
				{ status: 200 }
			);
		}
		if (data.length >= 1) {
			const user = data.filter(item => item.name.lastName === lastName);
			if (user.length < 1)
				return NextResponse.json(
					{ message: "No Datas Student" },
					{ status: 200 }
				);
			if (user.length >= 1) {
				// Buat data tanggal hari ini untuk nama field
				const dateNow = dayjs().startOf("day");
				const today = dateNow.format("YYYY-MM-DD");
				// Buat data
                // [
                //     user[0].id: {
                //         attendance: user.attendance,
                //         grade: user.grade,
                //         attitude: user.attitude
                //     },
                //     user[1].id: {
                //         attendance: user.attendance,
                //         grade: user.grade,
                //         attitude: user.attitude
                //     },
                //     user[2].id: {
                //         attendance: user.attendance,
                //         grade: user.grade,
                //         attitude: user.attitude
                //     },
                //     user[3].id: {
                //         attendance: user.attendance,
                //         grade: user.grade,
                //         attitude: user.attitude
                //     },
                // ]
			}
		}
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
};