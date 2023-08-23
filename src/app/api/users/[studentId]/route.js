import {
	doc,
	getDocs,
	collection,
	query,
	where,
	deleteDoc,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "@/utils/firebase";
import { NextResponse } from "next/server";

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
	  console.error(error);
	  return NextResponse.json(
		{ message: "An error occurred", success: false },
		{ status: 500 }
	  );
	}
  };
  
