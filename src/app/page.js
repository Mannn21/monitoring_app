"use client"

import {AiOutlineGoogle} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import {Button} from "react-bootstrap"

import { auth, googleProvider, facebookProvider } from "./firebase.js"
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

export default function Home () {
  const handleFacebook = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user
      const credential = FacebookAuthProvider.credentialFromResult(result)
      const accessToken = credential.accessToken
    })
  }
  
  return (
    <div>
      <div>
        <Button>
          <AiOutlineGoogle />
          <span>Login With Google</span>
        </Button>
        <Button>
          <BiLogoFacebook />
          <span>Login With Facebook</span>
        </Button>
      </div>
    </div>
  )
}