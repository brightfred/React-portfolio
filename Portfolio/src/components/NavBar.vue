<!-- src/components/NavBar.vue -->
<template>
    <nav class="navbar">
      <div class="container">
        <a href="#Home" class="logo">Frederick<span> Laroche</span></a>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/contact">Contact Me</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style lang="scss">
  @import '../styles/variables';
  
  .navbar {
    width: 100vw;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5); /* Transparent background */
    padding: 10px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    z-index: 1000;
  
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: $accent-color;
      text-decoration: none;
    }
  span{
    color: $primary-color;
  }
    .nav-links {
      list-style: none;
      display: flex;
      margin-right: 4rem;
  
      li {
        margin: 0 15px;
  
        a {
          text-decoration: none;
          color: $nav-text-color;
          font-size: 1rem;
          transition: color 0.3s;
  
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
  </style>
  