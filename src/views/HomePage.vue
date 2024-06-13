<template>
  <div class="home">
    <AboutPage />
    <ProjectPage />
    <ContactPage />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import AboutPage from '@/views/AboutPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ContactPage from '@/views/ContactPage.vue'

export default defineComponent({
  name: 'HomePage',
  components: { ProjectPage, AboutPage, ContactPage },
});
</script>

<style scoped>
.fullName {
    display: flex;
    justify-content: center;
    padding: 20px;
}
.projectListTitle{
  display: flex;
  justify-content: center;
}
</style>
