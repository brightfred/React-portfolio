<!-- src/components/SkillCard.vue -->
<template>
    <div
      class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card"
    >
      <div class="card" :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header" class="card-header"></slot>
          <slot name="content" class="card-content"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillCard',
    props: ['dataImage'],
    data() {
      return {
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null,
      };
    },
    computed: {
      mousePX() {
        return this.mouseX / this.width;
      },
      mousePY() {
        return this.mouseY / this.height;
      },
      cardStyle() {
        const rX = this.mousePX * 30;
        const rY = this.mousePY * -30;
        return {
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        };
      },
      cardBgTransform() {
        const tX = this.mousePX * -40;
        const tY = this.mousePY * -40;
        return {
          transform: `translateX(${tX}px) translateY(${tY}px)`,
        };
      },
      cardBgImage() {
        return {
          backgroundImage: `url(${this.dataImage})`,
        };
      },
    },
    mounted() {
      this.width = this.$refs.card.offsetWidth;
      this.height = this.$refs.card.offsetHeight;
    },
    methods: {
      handleMouseMove(e) {
        this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
        this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
      },
      handleMouseEnter() {
        clearTimeout(this.mouseLeaveDelay);
      },
      handleMouseLeave() {
        this.mouseLeaveDelay = setTimeout(() => {
          this.mouseX = 0;
          this.mouseY = 0;
        }, 1000);
      },
    },
  };
  </script>
  
  <style lang="scss">
  @import '../styles/variables';
  
  .card-wrap {
    margin: 10px;
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;
  
    &:hover {
      .card-info {
        transform: translateY(0);
      }
      .card-info p {
        opacity: 1;
      }
      .card-info,
      .card-info p {
        transition: 0.6s $hoverEasing;
      }
      .card-info:after {
        transition: 5s $hoverEasing;
        opacity: 1;
        transform: translateY(0);
      }
      .card-bg {
        transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
        opacity: 0.8;
      }
      .card {
        transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
        box-shadow: rgba($text-color, 0.2) 0 0 40px 5px,
          rgba($text-color, 1) 0 0 0 1px, rgba($background-color, 0.66) 0 30px 60px 0,
          inset $background-color 0 0 0 5px, inset $text-color 0 0 0 6px;
      }
    }
  }
  
  .card {
    position: relative;
    flex: 0 0 240px;
    width: 240px;
    height: 320px;
    background-color: $background-color;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba($background-color, 0.66) 0 30px 60px 0,
      inset $background-color 0 0 0 5px, inset rgba($text-color, 0.5) 0 0 0 6px;
    transition: 1s $returnEasing;
  }
  
  .card-bg {
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%; /* Ensure proper fit */
    transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
    pointer-events: none;
  }
  
  .card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: $text-color;
    transform: translateY(40%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  
    .card-header {
      display: block; 
      margin-bottom: 10px; 
    }
  
    .card-content {
      display: block; 
    }
  
    p {
      opacity: 0;
      text-shadow: rgba($background-color, 1) 0 2px 3px;
      transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    * {
      position: relative;
      z-index: 1;
    }
  
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        rgba($background-color, 0.6) 100%
      );
      background-blend-mode: overlay;
      opacity: 0;
      transform: translateY(100%);
      transition: 5s 1s $returnEasing;
    }
  }
  </style>
  