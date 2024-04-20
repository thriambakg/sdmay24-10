import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebaseClient";

export const authStore = writable({
    isLoading: true,
    currentUser: null
})

export const authHandlers = {
    login: async (/** @type {string} */ email, /** @type {string} */ password) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    signup: async (/** @type {string} */ email, /** @type {string} */ password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    logout: async () => {
        await signOut(auth)
    },
    resetPassword: async (/** @type {string} */ email) => {
        console.log('WE ARE HERE', email)
        if (!email) {
            console.log('inHERE')
            return
        }
        await sendPasswordResetEmail(auth, email)
    },
    updateEmail: async (/** @type {string} */ email) => {
        authStore.update(curr => {
            return {
                ...curr, currentUser: {
                    // @ts-ignore
                    ...curr.currentUser, email: email
                }
            }
        })
        // @ts-ignore
        await updateEmail(auth.currentUser, email)
    },
    updatePassword: async (/** @type {string} */ password) => {
        // @ts-ignore
        await updatePassword(auth.currentUser, password)
    }
}
