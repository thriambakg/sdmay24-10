<script lang="ts">
import { goto } from "$app/navigation";
import { authHandlers, authStore } from "../../stores/authStore";
import { derived } from "svelte/store";

let register = false;
let email = "";
let password = "";
let confirmPassword = "";
let errorMessage = "";
let message = "";
const isLoggedIn = derived(authStore, ($authStore) => !!$authStore);

async function handleSubmit() {
    if (!email || !password || (register && !confirmPassword)) {
        return;
    }

    try {
        if (register) {
            if (password !== confirmPassword) {
                errorMessage = "Passwords do not match";
                return;
            }
            await authHandlers.signup(email, password);
        } else {
            await authHandlers.login(email, password);
            goto("/model1");
        }
        resetForm();
    } catch (err) {
        console.log(err);
        if (err instanceof Error) {
            errorMessage = err.message;
        } else {
            errorMessage = "An error occurred";
        }
    }
}

function registerStatus()
{
    
       register = !register;
    

}

function resetForm() {
    register = false;
    email = "";
    password = "";
    confirmPassword = "";
    errorMessage = "";
}

// function getErrorMessage(message: String) {
//     switch (message) {
//         case "Firebase: Error (auth/email-already-in-use).":
//             return "Email already in use";
//         case "Firebase: Error (auth/invalid-email).":
//             return "Invalid email";
//         case "Firebase: Password should be at least 6 characters (auth/weak-password).":
//             return "Password must be at least 6 characters";
//         default:
//             return "Incorrect Email or Password";
//     }
// }
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
    <h1 class="text-2xl font-bold mb-4">{register ? "Register" : "Log in"}</h1>
    <style> 
    input[type=email] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 3px solid #ccc;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      outline: none;
    }
    
    input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 3px solid #ccc;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      outline: none;
    }
    </style>
    <form on:submit|preventDefault={handleSubmit}>
        <label class="text-gray-600 mb-4">
            <input bind:value={email} type="email" placeholder="Email" required />
        </label>
        <div />
        <label class="text-gray-600 mb-4">
            <input
                bind:value={password}
                type="password"
                placeholder="Password"
                required
            />
        </label>
        <div />
        {#if register}
            <label class="text-gray-600 mb-4">
                <input
                    bind:value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    required
                />
            </label>
        {/if}
        {#if errorMessage}
            <div class="text-red-500 text-sm mb-4">{errorMessage}</div>
        {/if}
        <div></div>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
        >
            Submit
        </button>
    </form>
    <div class="mt-4 cursor-pointer text-blue-500" on:click={registerStatus}>
        {register ? "Already have an account? Log in" : "Don't have an account? Sign Up"}
    </div>
</div>
