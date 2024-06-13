<template>
  <div class="profile-page">
    <header class="profile-header">
      <div class="header-content">
        <img src="@/assets/profile.png" alt="Profile Picture" class="profile-picture">
        <div class="profile-info">
          <h1 class="full-name">Sheer Jay A. Piodos</h1>
          <p class="headline">Software Developer | Game Developer</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/sheer-jay-piodos-87711329a/" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/jogzfon" class="social-link"><i class="fab fa-github"></i></a>
            <a href="https://jogzfon.itch.io" class="social-link"><i class="fab fa-itch-io"></i></a>
          </div>
        </div>
      </div>
    </header>

    <main class="profile-body">
      <section class="profile-section">
        <h2 class="section-header">⚒️ Languages-Frameworks-Tools ⚒️</h2>
        <ul class="skill-list">
          <div align="center">
              <img src="https://skillicons.dev/icons?i=java,cs,cpp,c,py,js,ts,html,css,regex" /><br>
              <img src="https://skillicons.dev/icons?i=dotnet,unity,godot,mui,react,ps,pycharm,vscode,visualstudio,arduino,blender,maven" /><br>
              <img src="https://skillicons.dev/icons?i=github,git,figma,tensorflow,firebase,mysql,npm,notion,postman" />
              <br>
          </div>
        </ul>
      </section>

      <section class="profile-section">
        <h2 class="section-header">Experience</h2>
        <div class="experience-item">
          <h3 class="item-header">Game Developer</h3>
          <p class="item-description">I've had the opportunity to develop games across various platforms, including mobile and Windows. Through these experiences, I've continuously learned and grown, gaining valuable insights along the way. Game development has become a passion of mine that I enjoy pursuing in my spare time. I've had the privilege of publishing some of my work on platforms like itch.io and have participated in game jams, where I've learned from and collaborated with talented developers.</p>
          <p class="item-date">August 2019 - Present</p>
        </div>
      </section>

      <section class="profile-section">
        <h2 class="section-header">Education</h2>
        <div class="education-item">
          <h3 class="item-header">Bachelor of Science in Computer Science</h3>
          <p class="item-description">Cebu Institute of Technology University, June 2025</p>
          <p class="item-date">2021 - Present</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.profile-page {
  font-family: 'Roboto', sans-serif;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  padding: 40px;
}

.profile-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}

.header-content {
  display: flex;
  align-items: center;
  max-width: 800px;
  text-align: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.profile-info {
  flex: 1;
}

.full-name {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

.headline {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-link {
  color: #007bff;
  font-size: 1.2rem;
  margin: 0 8px;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #0056b3;
}

.profile-body {
  max-width: 800px;
  text-align: center;
}

.section-header {
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  color: #007bff;
  font-size: 1.8rem;
}

.section-header::before {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #007bff;
}

.profile-section {
  margin-bottom: 60px;
}

.skill-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-list li {
  display: flex;
  align-items: center;
  margin: 8px 16px;
  font-size: 1.1rem;
}

.icon {
  margin-right: 8px;
}

.experience-item,
.education-item,
.project-item {
  margin-bottom: 40px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.item-header {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #007bff;
}

.item-description {
  line-height: 1.6;
  margin-bottom: 8px;
}

.item-date {
  font-style: italic;
  margin-bottom:0;
}
@media (max-width: 768px) {
.profile-header {
flex-direction: column;
text-align: center;
}
.profile-picture {
margin-right: 0;
margin-bottom: 20px;
}
.social-links {
margin-top: 16px;
}
}
.skill-categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.skill-category {
  margin: 0 20px;
  max-width: 300px;
}

.category-header {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 16px;
  color: #007bff;
}

.skill-graph {
  margin-bottom: 16px;
}

.skill-bar {
  width: 100%;
  height: 20px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background-color: #007bff;
  transition: width 0.5s ease;
}

label {
  font-size: 0.9rem;
  margin-top: 4px;
  display: block;
}
</style>