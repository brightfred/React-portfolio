<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'ThreeBackground',
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const container = this.$refs.threeContainer;
  
        // Scene
        const scene = new THREE.Scene();
  
        // Camera
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 10, 20);
        camera.lookAt(0, 0, 0);
  
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
  
        // Resize handling
        window.addEventListener('resize', () => {
          const width = container.clientWidth;
          const height = container.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        });
  
        // Light
        const pointLight = new THREE.PointLight(0xffffff, 3);
        scene.add(pointLight);
  
        // Geometry and Materials
        const radius = 1;
        const widthSegments = 32;
        const heightSegments = 32;
        const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  
        const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 });
        const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244 });
        const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
  
        // Sun
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        sunMesh.scale.set(5, 5, 5);
        scene.add(sunMesh);
  
        // Earth Orbit
        const earthOrbit = new THREE.Object3D();
        earthOrbit.position.x = 15;
        scene.add(earthOrbit);
  
        // Earth
        const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
        earthMesh.position.x = 10;
        earthOrbit.add(earthMesh);
  
        // Moon Orbit
        const moonOrbit = new THREE.Object3D();
        moonOrbit.position.x = 2;
        earthOrbit.add(moonOrbit);
  
        // Moon
        const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
        moonMesh.scale.set(0.5, 0.5, 0.5);
        moonOrbit.add(moonMesh);
  
        // Animation loop
        const animate = (time) => {
          time *= 0.001; // convert time to seconds
  
          sunMesh.rotation.y = time;
  
          earthOrbit.rotation.y = time * 0.5;
          earthMesh.rotation.y = time * 2;
  
          moonOrbit.rotation.y = time * 2;
          moonMesh.rotation.y = time * 4;
  
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
  
        requestAnimationFrame(animate);
      }
    }
  };
  </script>
  
  <style>
  .three-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  