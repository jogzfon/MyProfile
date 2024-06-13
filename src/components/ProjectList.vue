<template>
  <div class="project-page">
    <div class="button-container">
      <button
        class="category-button"
        :class="{ active: currentCategory === 'all' }"
        @click="filterProjects('all')"
      >
        All
      </button>
      <button
        class="category-button"
        :class="{ active: currentCategory === 'web' }"
        @click="filterProjects('web')"
      >
        Web Development
      </button>
      <button
        class="category-button"
        :class="{ active: currentCategory === 'game' }"
        @click="filterProjects('game')"
      >
        Game Development
      </button>
      <button
        class="category-button"
        :class="{ active: currentCategory === 'app' }"
        @click="filterProjects('app')"
      >
        Application Development
      </button>
      <button
        class="category-button"
        :class="{ active: currentCategory === 'misc' }"
        @click="filterProjects('misc')"
      >
        Miscellaneous Projects
      </button>
    </div>
    <div class="project-list">
      <ul>
        <li v-for="project in filteredProjects" :key="project.id" class="project-card">
          <div class="project-content">
            <h2 class="project-title">{{ project.title }}</h2>
            <h4 class="project-subtitle">{{ project.subtitle }}</h4>
            <p class="project-description">{{ project.description }}</p>
            <a :href="project.link" class="project-link" target="_blank">
              <i class="fas fa-globe"></i> {{ project.link }}
            </a>
            <p class="project-tools">{{ project.tools }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import Project from '@/projects/Project';

export default defineComponent({
  props: {
    projects: {
      required: true,
      type: Array as PropType<Project[]>
    }
  },
  setup(props) {
    const filteredProjects = ref<Project[]>(props.projects);
    const currentCategory = ref<string>('all');

    const filterProjects = (category: string) => {
      currentCategory.value = category;
      if (category === 'all') {
        filteredProjects.value = props.projects;
      } else {
        filteredProjects.value = props.projects.filter(project => project.category === category);
      }
    };

    return {
      filteredProjects,
      filterProjects,
      currentCategory
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.project-page {
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

.button-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.category-button {
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  background-color: #343a40;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category-button.active {
  background-color: #007bff;
}

.category-button:hover {
  background-color: #007bff;
}

.project-list {
  max-width: 800px;
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.project-card {
  margin-bottom: 40px;
  background-color: #343a40;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 24px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 8px;
}

.project-subtitle {
  font-size: 1.2rem;
  color: #adb5bd;
  margin-bottom: 8px;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 16px;
  color: #e9ecef;
}

.project-link {
  color: #007bff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  text-decoration: none;
}

.project-link:hover {
  color: #0056b3;
}

.project-link i {
  margin-right: 8px;
  
}

.project-tools {
  font-size: 0.9rem;
  color: #adb5bd;
  font-style: italic;
}
</style>