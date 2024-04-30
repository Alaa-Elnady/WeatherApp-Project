import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./navigation/Auth";
// import { HomePage , SignUp , SignIn } from "./screens";


export default function App(props) {
  return (
    <>

      <NavigationContainer>
        <Auth />
      </NavigationContainer>



      {/* <HomePage/> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}

    </>
  )
}