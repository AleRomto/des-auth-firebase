<template>
    <div>
      <h2>Registrarse</h2>
      <form @submit.prevent="signUp">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
    </div>
  </template>
  
  <script>
  import { auth } from "@/firebaseConfig";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async signUp() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log("User registered:", userCredential.user);
          this.$router.push("/login"); // volver al login para inciiar sesión
        } catch (error) {
          console.error("Error during sign up:", error);
          if (error.code === "auth/email-already-in-use") {
            this.errorMessage = "Este correo electrónico ya está en uso. Intenta con otro.";
          } else {
            this.errorMessage = "Error durante el registro: " + error.message;
          }
        }
      }
    }
  };
  </script>
  
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column; 
  }
  
  input {
    margin: 10px 0; 
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
  }
  
  button {
    padding: 10px; 
    background-color: #007bff;
    color: white; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3; 
  }
  
  .error-message {
    color: red;
    margin-top: 10px; 
  }
  </style>
  