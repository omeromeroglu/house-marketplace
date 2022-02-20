import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {db} from "../firebase.config"
import {setDoc, doc, serverTimestamp} from "firebase/firestore"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"
import { toast } from "react-toastify"
import OAuth from "../components/OAuth"
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name : "",
    email: "",
    password: "",
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      }))
    }
    const onSubmit = async(e) => {
      e.preventDefault()

      try {
        const auth =  getAuth()

        const userCredential = await createUserWithEmailAndPassword(auth,email, password)

        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName: name
          })
          const formDataCopy = {...formData}
          delete formDataCopy.password
          formDataCopy.timestamp = serverTimestamp()

          await setDoc(doc(db,"users",user.uid),formDataCopy)


          navigate("/")
      } catch (error) {
        toast.error("Someting went wrong")
      }
    }

    
    
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
        <input
            type="text"
            id="name"
            className="nameInput"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            id="email"
            className="emailInput"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="passwordInput"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}

            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon
                fill="#fffff"
                width="34px"
                height="34px"
                className="arrowRightIcon"
              />
            </button>
          </div>
        </form>

        <OAuth/>
        <Link to="/signin" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp
