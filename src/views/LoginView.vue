<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input
          v-model="password"
          type="password"
          placeholder="contraseña"
          required
        />
        <button type="submit">Login</button>
  
      </form>
      <!-- en caso de haber algún error -->
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
      <p>¿No tienes una cuenta? <router-link to="/signup">Regístrate aquí</router-link></p>
    </div>
  </template>
  
  <script>
  import { auth } from "@/firebaseConfig"; 
  import { signInWithEmailAndPassword } from "firebase/auth"; 
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async login() {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            this.email,
            this.password
          );
          console.log("User logged in:", userCredential.user);
          this.$router.push("/home"); // redirige al home
        } catch (error) {
          console.error("Error during login:", error);
          // errores
          if (error.code === "auth/wrong-password") {
            this.errorMessage =
              "La contraseña es incorrecta. Intenta nuevamente.";
          } else if (error.code === "auth/invalid-credential") {
            this.errorMessage =
              "La contraseña es incorrecta. Intenta nuevamente.";
          } else if (error.code === "auth/user-not-found") {
            this.errorMessage =
              "No se encontró un usuario con este correo electrónico.";
          } else if (error.code === "auth/invalid-email") {
            this.errorMessage =
              "El formato del correo electrónico es incorrecto.";
          } else {
            this.errorMessage =
              "Ha ocurrido un error. Por favor, intenta nuevamente.";
          }
        }
      },
    },
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
  