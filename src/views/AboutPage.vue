<template>
  <div class="profile-page">
    <header class="profile-header">
      <div class="header-content">
        <img src="@/assets/profile.png" alt="Profile Picture" class="profile-picture">
        <div class="profile-info">
          <h1 class="full-name">Sheer Jay A. Piodos</h1>
          <p class="headline">Software Developer</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/sheer-jay-piodos-87711329a/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/jogzfon" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="profile-body">
      <section class="profile-section">
        <h2 class="section-header">⚒️ Languages, Frameworks & Tools ⚒️</h2>
        <div class="skill-list">
          <img src="https://skillicons.dev/icons?i=java,cs,cpp,c,py,js,ts,html,css,regex" alt="Languages">
          <img src="https://skillicons.dev/icons?i=dotnet,unity,godot,mui,react,vue,ps,pycharm,vscode,visualstudio,arduino,blender,maven" alt="Frameworks & Tools">
          <img src="https://skillicons.dev/icons?i=github,git,figma,tensorflow,firebase,mysql,npm,notion,postman" alt="Other Tools">
        </div>
      </section>

      <section class="profile-section">
        <h2 class="section-header">Experience</h2>
        <div class="experience-item">
          <div class="experience-header">
            <img src="@/assets/sparksoft-logo.png" alt="SparkSoft Solutions Logo" class="company-logo">
            <div class="experience-info">
              <h3 class="item-header">SparkSoft Solutions, Inc.</h3>
              <p class="item-subheader">AI Research Intern</p>
            </div>
          </div>
          <p class="item-date">July 2024 - August 2024</p>
          <p class="experience-description">
            During our internship, our team had the opportunity to work on several innovative projects that allowed us to apply our skills in software development and AI integration. I spearheaded the development of customized plugins for TaskWeaver, ensuring they were precisely tailored to meet the company's needs. We also built a Generative AI-aided Library Management system, which significantly streamlined the process of cataloging and managing resources. I led the team in creating an AI-powered Research Paper Summarizer, which enabled quicker and more efficient review of academic papers. Additionally, we designed and implemented AI-assisted Database Management tools, improving data handling and overall system performance. This experience allowed me to lead a talented group, deepening our understanding of AI applications in real-world scenarios while fostering a collaborative and innovative environment.
          </p>
          <div class="key-projects">
            <h4 class="projects-header">🚀 Internship Projects</h4>
            <div class="project-grid">
              <div v-for="(project, index) in projects" :key="index" class="project-card">
                <div class="project-icon">
                  <i :class="project.icon"></i>
                </div>
                <h5 class="project-title">{{ project.title }}</h5>
                <p class="project-description">{{ project.description }}</p>
                <a :href="project.link" class="project-link" target="_blank" rel="noopener noreferrer">
                  <!-- Learn More <i class="fas fa-arrow-right"></i> -->
                </a>
              </div>
            </div>
          </div>
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
  name: 'AboutPage',
  data() {
    return {
      projects: [
        {
          icon: 'fas fa-book',
          title: 'Generative AI-aided Library Management',
          description: 'An innovative system leveraging AI to streamline library operations and enhance user experience.',
          link: '#'
        },
        {
          icon: 'fas fa-file-alt',
          title: 'Research Paper Summarizer',
          description: 'AI-powered tool that creates concise summaries of complex research papers, saving time for researchers.',
          link: '#'
        },
        {
          icon: 'fas fa-database',
          title: 'AI-assisted Database Management',
          description: 'Intelligent system for optimizing database performance and automating routine management tasks.',
          link: '#'
        }
      ]
    };
  }
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
  background: linear-gradient(135deg, #1a1e21 0%, #2c3e50 100%);
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
  transition: transform 0.3s ease;
}

.profile-picture:hover {
  transform: scale(1.05);
}

.profile-info {
  flex: 1;
}

.full-name {
  font-size: 2.5rem;
  margin-bottom: 8px;
  color: #00aaff;
}

.headline {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: #adb5bd;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-link {
  color: #00aaff;
  font-size: 1.2rem;
  margin: 0 8px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  color: #0056b3;
  transform: translateY(-3px);
}

.profile-body {
  max-width: 800px;
  text-align: center;
}

.section-header {
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  color: #00aaff;
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
  background-color: #00aaff;
}

.profile-section {
  margin-bottom: 60px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 0;
}

.skill-list img {
  transition: transform 0.3s ease;
}

.skill-list img:hover {
  transform: translateY(-5px);
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

.experience-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.company-logo {
  width: 40px;
  height: 40px;
  margin-right: 16px;
}

.item-header {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 4px;
  color: #00aaff;
}

.item-subheader {
  font-size: 1.1rem;
  color: #adb5bd;
  margin-bottom: 8px;
}

.item-description {
  line-height: 1.6;
  margin-bottom: 8px;
}

.item-date {
  font-style: italic;
  margin-bottom: 16px;
  color: #adb5bd;
}
.experience-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 20px;
  text-align: justify;
}

.key-projects {
  background-color: #2a2f35;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.projects-header {
  font-size: 1.8rem;
  color: #00aaff;
  margin-bottom: 24px;
  text-align: center;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: #3a3f45;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.project-icon {
  font-size: 2.5rem;
  color: #00aaff;
  margin-bottom: 16px;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
}

.project-description {
  font-size: 0.9rem;
  color: #adb5bd;
  margin-bottom: 16px;
  flex-grow: 1;
}

.project-link {
  color: #00aaff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #0077cc;
}

.project-link i {
  margin-left: 6px;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>