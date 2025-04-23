import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const createNewUser = async (email, password) => {
    let successfullyLoggedIn = false, 
    errorMessage = null;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            successfullyLoggedIn = true;
            // console.log('successfully sign up  in then', successfullyLoggedIn, ' , errorMessage:', errorMessage);
        })
        .catch((error) => {
            const errorCode = error.code;
            errorMessage = error.message;
            // console.log('successfully sign up in catch', successfullyLoggedIn, ' , errorMessage:', errorMessage);
        });

    return {
        successfullyLoggedIn,
        errorMessage
    }
}

export const signInUser = async (email, password) => {
    let successfullyLoggedIn = false, 
    errorMessage = null;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            successfullyLoggedIn = true;
            // console.log('successfullyLoggedIn in then', successfullyLoggedIn, ' , errorMessage:', errorMessage);
        })
        .catch((error) => {
            const errorCode = error.code;
            errorMessage = error.message;
            // console.log('successfullyLoggedIn in catch', successfullyLoggedIn, ' , errorMessage:', errorMessage);
        });


    return {
        successfullyLoggedIn,
        errorMessage
    }
};
