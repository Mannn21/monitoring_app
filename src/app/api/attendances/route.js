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

export const GET = async () => {
	try {
		const datas = await getDocs(collection(db, "attendances"));
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
}

export const POST = async (req, res) => {
	const datas = await req.json();
	try {
		if(!datas) return NextResponse.json({message: "No Datas"}, {status: 400})
		if(datas) {
			const dateNow = dayjs().startOf("day");
			const today = dateNow.format("YYYY-MM-DD");
			const createAttendance = doc(db, "attendances", today);
			await setDoc(createAttendance, datas);
			return NextResponse.json({message: "Create Datas Success", datas}, {status: 200})
		}
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
};
