<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <span class="brand-logo">MyProfile</span>
        </div>
        <div class="navbar-links">
          <router-link to="/MyProfile/" class="navbar-link">Home</router-link>
          <router-link to="/MyProfile/about" class="navbar-link">About Me</router-link>
          <router-link to="/MyProfile/projects" class="navbar-link">Projects</router-link>
          <router-link to="/MyProfile/contact" class="navbar-link">Contacts</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  background-color: #212529;
  color: #fff;
  padding: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.brand-logo {
  margin-right: 8px;
  font-size: 1.8rem;
}

.navbar-links {
  display: flex;
  align-items: center;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 4px;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #007bff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.navbar-link:hover,
.navbar-link.router-link-exact-active {
  color: #007bff;
}

.navbar-link:hover::after,
.navbar-link.router-link-exact-active::after {
  transform: scaleX(1);
}
</style>