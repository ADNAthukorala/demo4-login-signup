import { signInWithEmailAndPassword } from "firebase/auth";

export const signInWithEmailAndPasswordd = async(auth, email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    alert('You have successfully signed in!');
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    alert('An error has occurred!');
  });
}
