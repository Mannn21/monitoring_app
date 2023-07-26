"use client";
import {useState, useEffect} from "react"
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

import { auth, googleProvider, facebookProvider } from "./firebase.js";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
	GoogleAuthProvider,
	FacebookAuthProvider,
} from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState({})
  const [token, setToken] = useState(null)
	const handleFacebook = () => {
		signInWithPopup(auth, facebookProvider).then(result => {
			const credential = FacebookAuthProvider.credentialFromResult(result);
			const accessToken = credential.accessToken;
			console.log(result);
		});
	};

	const handleGoogle = () => {
    signInWithRedirect(auth, googleProvider);
  };
  
  useEffect(() => {
    getRedirectResult(auth)
      .then(result => {
        if (result) {
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   setToken(credential.accessToken);
        //   setUser(result.user);
        //   console.log({user, token})
		console.log(result.user);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [user, token]);


	return (
		<div>
			<div>
				<div onClick={() => handleGoogle()}>
					<AiOutlineGoogle />
					<span>Login With Google</span>
				</div>
				<div onClick={() => handleFacebook()}>
					<BiLogoFacebook />
					<span>Login With Facebook</span>
				</div>
			</div>
		</div>
	);
}
