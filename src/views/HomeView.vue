<template>
    <div class="home">
      <h1>Bienvenido a la página de inicio</h1>
      <button @click="redirectToSurprise">¡Sorpresa!</button>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
  import { auth } from "@/firebaseConfig";
  
  export default {
    methods: {
      logout() {
        auth.signOut().then(() => {
          console.log("User logged out.");
          this.$router.push("/login"); // devuelta al login
        }).catch(error => {
          console.error("Error during logout:", error);
        });
      },
      redirectToSurprise() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // completamente necesario (?)
      }
    }
  };
  </script>
  
  <style scoped>
  .home {
    background-image: url('@/assets/dots.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  h1 {
    font-size: 4rem;
    color: #000000; 
    font-weight: bold;
    text-shadow: 
      8px 8px 0 #fff, 
      -8px 8px 0 #fff, 
      8px -8px 0 #fff, 
      -8px -8px 0 #fff; 
    margin: 20px; 
    text-align: center;
  }
  
  button {
    margin: 10px; 
    padding: 10px 20px; 
    border: none;
    border-radius: 5px;
    background-color: #4CAF50; 
    color: white; 
    cursor: pointer;
    font-size: 16px; 
  }
  
  button:hover {
    background-color: #45a049; 
  }
  </style>
  