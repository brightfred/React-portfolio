<!-- src/views/Home.vue -->
<template>
  <section class="home">
    <div class="hero-container">
      <div class="hero">
        <h1 ref="intro">Hi, I am Frederick Laroche,</h1>
        <h2 ref="typewriter"></h2>
        <p>Discover my projects, skills, and contact information.</p>
        <router-link to="/projects" class="btn">View Projects</router-link>
      </div>
      <div class="img-container">
        <img src="/images/background7.jpg" alt="Frederick Laroche">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.typewriterEffect();
  },
  methods: {
    typewriterEffect() {
      const element = this.$refs.typewriter;
      const texts = ["Front end developer.", "Aiming to become a Full stack developer."];
      let index = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      const type = () => {
        let currentText = texts[index];
        if (isDeleting) {
          charIndex--;
          typeSpeed = 50;
        } else {
          charIndex++;
          typeSpeed = 100;
        }

        element.innerHTML = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % texts.length;
          typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
      };

      type();
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.home {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-color;
  text-align: center;

  

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
  }

  .hero {
    position: relative;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    max-width: 700px;
    width: 100%;

    h1, h2 {
      font-size: 2rem;
      color: $accent-color;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.15em solid $accent-color;
      animation: blink-caret 0.75s step-end infinite;
    }
    

    h2 {
      white-space: normal; /* Ensure text wraps */
      border: none; /* Remove caret for h2 */
      animation: none; /* Remove blinking caret for h2 */
      color: $primary-color;
    }

    p {
      margin-top: 40px;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    .btn {
      margin-top: 20px;
      padding: 10px 20px;
      background: $secondary-color;
      color: $text-color;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s;

      &:hover {
        background: $primary-color;
      }
    }
  }

  .img-container {
    margin-left: 40px;
    max-width: 300px;
  }

  .img-container img {
    width: 100%;
    border-radius: 70px 10px 70px 10px;
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: $accent-color;
  }
}
</style>
