<!-- src/views/AboutMe.vue -->
<template>
  <section class="about">
    <h1>About Me</h1>
    <div id="timeline">
      <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index"
        :class="{ 'show': showTimeline[index] }">
        <div class="timeline-icon">
          <svg v-if="item.type === 'education'" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="10px" width="21px" height="20px" viewBox="0 0 21 20"
            enable-background="new 0 0 21 20" xml:space="preserve">
            <g>
              <path fill="#000000" d="M17.92,3.065l-1.669-2.302c-0.336-0.464-0.87-0.75-1.479-0.755C14.732,0.008,7.653,0,7.653,0v5.6
                c0,0.096-0.047,0.185-0.127,0.237c-0.081,0.052-0.181,0.06-0.268,0.02l-1.413-0.64C5.773,5.183,5.69,5.183,5.617,5.215l-1.489,0.65
                c-0.087,0.038-0.19,0.029-0.271-0.023c-0.079-0.052-0.13-0.141-0.13-0.235V0H2.191C1.655,0,1.233,0.434,1.233,0.97
                c0,0,0.025,15.952,0.031,15.993c0.084,0.509,0.379,0.962,0.811,1.242l2.334,1.528C4.671,19.905,4.974,20,5.286,20h10.307
                c1.452,0,2.634-1.189,2.634-2.64V4.007C18.227,3.666,18.12,3.339,17.92,3.065z M16.42,17.36c0,0.464-0.361,0.833-0.827,0.833H5.341
                l-1.675-1.089h10.341c0.537,0,0.953-0.44,0.953-0.979V2.039l1.459,2.027V17.36L16.42,17.36z" />
            </g>
          </svg>
          <svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20"
            xml:space="preserve">
            <path fill="#000000" d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999
              c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499
              l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822
              c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345
              c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z" />
          </svg>
        </div>
        <div class="timeline-content" :class="{ 'right': index % 2 !== 0 }">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
          <div class="skills">
            <span v-for="(skill, skillIndex) in item.skills" :key="skillIndex" class="skill" :title="skill.title">
              {{ skill.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'AboutMe', // Changed to a multi-word name
  setup() {
    const timelineItems = ref([
  { title: "2023-2026: Diploma in Information Technology", content: "I pursued a diploma in Information Technology at NMIT, New Zealand. Preparing me for new challenges and opportunities.", type: "education", skills: [{ title: "Technical skills", icon: "fas fa-laptop-code" }, { title: "Problem-solving", icon: "fas fa-lightbulb" }, { title: "Self-teaching", icon: "fas fa-book-reader" }] },
  { title: "2023-2024: Front-End Developer at Cawthron Institute in Nelson", content: "Focused on Web App Creation. Main tasks included front-end development using HTML, CSS, Chart.js, and Vue.Js, collaborating with designers and back-end developers, and ensuring responsive design and API integration.", type: "work", skills: [{ title: "Problem-solving", icon: "fas fa-lightbulb" }, { title: "Adaptability", icon: "fas fa-sync-alt" }] },
  { title: "2015-2022: Agricultural Accounting and Management at Renaud Laroche Pig Farm", content: "Honed financial acumen and strategic insights within the dynamic agricultural sector. Main tasks included financial analysis, budgeting, and resource management.", type: "work", skills: [{ title: "Critical thinking", icon: "fas fa-brain" }, { title: "Public speaking", icon: "fas fa-microphone" }] },
  { title: "2014-2019: Firefighter", content: "Explored firefighting in Canada, nurturing resilience and teamwork. Gained crisis management skills that amplify my adaptability.", type: "work", skills: [{ title: "Resilience", icon: "fas fa-heartbeat" }, { title: "Teamwork", icon: "fas fa-users" }] },
  { title: "2015-2017: Diploma in Business Management", content: "Pursed in Canada, this program equipped me with business and financial knowledge.", type: "education", skills: [{ title: "Leadership", icon: "fas fa-chess-king" }, { title: "Financial literacy", icon: "fas fa-chart-line" }, { title: "Public speaking", icon: "fas fa-microphone" }] },
  { title: "2011-2014: Diploma in Fire Science", content: "I undertook a Diploma in Fire Science, where I gained essential insights into fire safety and emergency management.", type: "education", skills: [{ title: "Crisis management", icon: "fas fa-exclamation-triangle" }, { title: "Teamwork", icon: "fas fa-users" }, { title: "Resilience", icon: "fas fa-heartbeat" }] }
]);


    const showTimeline = ref(new Array(timelineItems.value.length).fill(false));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elements = document.querySelectorAll('.timeline-item');

      elements.forEach((element, index) => {
        if (element.offsetTop < scrollPosition - 50) {
          showTimeline.value[index] = true;
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      timelineItems,
      showTimeline,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.about {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: $background-color;
}

#timeline {
  width: 100%;
  margin: 30px auto;
  position: relative;
  padding: 0 10px;
  transition: all 2s ease;
margin-top: 5rem;
  &:before {
    content: "";
    width: 3px;
    height: 100%;
    background: $accent-color;
    left: 50%;
    top: 0;
    position: absolute;
    transition: all 2s ease;
  }

  &:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
  }
}

.timeline-item {
  margin-bottom: 50px;
  position: relative;
  clear: both;
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  .timeline-icon {
    background: $accent-color;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    margin-left: -23px;
    border-radius: 50%;

    svg {
      position: relative;
      top: 14px;
      left: 14px;
    }
  }

  .timeline-content {
    width: 40%;
    background: #fff;
    padding: 20px;
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    transition: all 2s ease;

    h2 {
      padding: 15px;
      background: $primary-color;
      color: #fff;
      margin: -20px -20px 0 -20px;
      font-weight: 300;
      border-radius: 3px 20px 0 0;
    }

    &:before {
      content: '';
      position: absolute;
      left: 45%;
      top: 20px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 7px solid $primary-color;
    }

    &.right {
      float: right;

      &:before {
        content: '';
        right: 45%;
        left: inherit;
        border-left: 0;
        border-right: 7px solid $primary-color;
      }
    }

    .skills {
      display: flex;
      gap: 10px;
      background-color: $text-color;
      padding: 0;

      .skill {
        display: inline-block;
        padding: 5px 10px;
        background: $primary-color;
        color: #fff;
        border-radius: 20px;
        font-size: 0.8rem;
        transition: background 0.3s;

        &:hover {
          background: $secondary-color;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #timeline {
    margin: 30px;
    padding: 0px;
    width: 90%;

    &:before {
      left: 0;
    }

    .timeline-item {
      .timeline-content {
        width: 100%;
        float: right;
        margin-top: 50px;
        /* Add margin to prevent overlap */

        &:before,
        &.right:before {
          left: 10%;
          margin-left: -6px;
          border-left: 0;
          border-right: 7px solid $primary-color;
        }
      }

      .timeline-icon {
        left: 0;
        margin-left: 0;
      }
    }
  }
}
</style>
