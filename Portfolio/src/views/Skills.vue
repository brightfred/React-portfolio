<!-- src/views/Skills.vue -->
<template>
    <section class="skills">
      <h1 class="title">Languages Learned</h1>
      <div class="container">
        <SkillCard data-image="src/public/images/js.png">
          <template #header>
            <h1>JavaScript</h1>
          </template>
          <template #content>
            <p>Versatile language for web development.</p>
          </template>
        </SkillCard>
        <SkillCard data-image="src/public/images/vue.png">
          <template #header>
            <h1>Vue.js</h1>
          </template>
          <template #content>
            <p>Progressive framework for building UIs.</p>
          </template>
        </SkillCard>
        <SkillCard data-image="src/public/images/html.png">
          <template #header>
            <h1>HTML</h1>
          </template>
          <template #content>
            <p>The standard markup language for the web.</p>
          </template>
        </SkillCard>
        <SkillCard data-image="src/public/images/sass.png">
          <template #header>
            <h1>SCSS</h1>
          </template>
          <template #content>
            <p>CSS preprocessor with enhanced features.</p>
          </template>
        </SkillCard>
      </div>
    </section>
  </template>
  
  <script>
  import SkillCard from '../components/SkillCard.vue';
  
  export default {
    name: 'Skills',
    components: {
      SkillCard,
    },
  };
  </script>
  
  <style lang="scss">
  @import '../styles/variables';
  
  .skills {
    padding: 40px 20px;
    text-align: center;
    background-color: $background-color;
    color: $text-color;
  
    .title {
      font-size: 2rem;
      color: $accent-color;
      margin-bottom: 40px;
    }
  
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
  }
  </style>
  