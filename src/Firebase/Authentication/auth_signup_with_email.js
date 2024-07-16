import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmailAndPassword = async(auth, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    // const user = userCredential.user;
    alert('You have successfully signed up!');
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    alert('An error has occurred!');
  });
}
