<template>
  <div class="home">
    <ProjectList :projects="projects"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import ProjectList from '@/components/ProjectList.vue'
import Project from '@/projects/Project'

export default defineComponent({
  name: 'ProjectPage',
  components: { ProjectList
  },
  setup() {
    const projects = ref<Project[]>([
      {title: 'CODE Interpreter', 
      subtitle: 'Programming Languages : Java', 
      description: 'Developed a custom interpreter in Java from the ground up. Designed and implemented language grammars, data types, operators, if statements, while statements, declarations, and more. The code consisted of a Tokenizer, a Parser, Calculators, Exception Handlers, and Validators', 
      link: 'https://github.com/jogzfon/Interpreter-CODE',
      tools: 'IntelliJ IDEA',
      category: 'misc',
      id: '0'},
      {title: 'RSCPU CARP Simulator', 
      subtitle: 'Applications Development and Emerging Technologies : C# - .NET Framework', 
      description: 'Designed and developed a relatively simple computer system simulator Windows Application based on Carpinelli’s RSCPU Simulator. Users can program assembly code instructions and visualize how data communicates within a CPU. The simulator allows users to create, assemble, and run their own programs. Essentially, it\'s an upgraded version of Carpinelli’s Simulator with bug fixes and performance enhancements for improved user experience. My responsibilities included converting Carpinelli’s Assembler from Java to C# and optimizing it for better performance. Additionally, I was in charge of creating the wireframe for the project and implementing an AI to the project to aid in instruction set code generation.', 
      link: 'https://github.com/jogzfon/CARP-GODOT.git',
      tools: 'GODOT, Visual Studio', 
      category: 'app',
      id: '1'},
      {title: 'E-commerce Site for School Merchandise', 
      subtitle: 'Industry Elective 1 : Java - JavaScript - MySQL - React - Spring Boot', 
      description: 'Developed an e-commerce site for school merchandise. Users can register, browse items, and make purchases securely. There\'s also an admin section for managing products. Security is ensured with Spring Security and JWT authentication. Implemented the user login/logout, product category and product transactions',
      link: 'https://github.com/jogzfon/CSIT-340-Final-Project', 
      tools: 'Intellij, Postman, Visual Studio Code', 
      category: 'web',
      id: '2'},
      {title: 'CITGo', 
      subtitle: 'Information Management 2  : Python - MySQL - Django - HTML - CSS', 
      description: 'Developed an event management system for the campus. Teachers can organize events that students can join and evaluate. My role focused on enabling student registration for events and creating evaluation forms for them, including doing the database table relationships according to the transaction.',
      link: 'https://github.com/jogzfon/CITGO', 
      tools: 'Pycharm', 
      category: 'web',
      id: '3'},
      {title: 'PICast', 
      subtitle: 'Platform-based Development 3 (Mobile) : Java', 
      description: 'Developed an online mobile app for artists to post and sell their 2D artworks online. My role included designing the UI/UX, managing Firebase, artwork display, and creating use cases and relationship diagrams.', 
      link: 'https://github.com/jogzfon/PICastRevised',
      tools: 'Android, Firebase', 
      category: 'app',
      id: '4'},
      {title: 'SunderForge', 
      subtitle: 'Object Oriented Programming  2 : Java - Apache - MySQL', 
      description: 'Created a Watchlist System using NetBeans and MySQL. My tasks involved designing the main page to display all movies and their details. I also added important features like adding, removing, and updating entries in the watchlist stored in the database. Additionally, I developed detailed Use Cases and Wireframes for the project.', 
      link: 'None',
      tools: 'Apache Netbeans IDE 17', 
      category: 'web',
      id: '5'},
      {title: 'Reminiscence', 
      subtitle: 'Brackeys Game Jam 2024.1 : C#', 
      description: ' Developed and launched on itch.io, a pixel art platformer. Crafted during a game jam with the theme "What’s behind the door?", this project showcases my prowess in game development as it is a single weeklong development. I meticulously created all assets except for the audio, ensuring players immerse themselves in a cohesive and unforgettable experience', 
      link: 'https://jogzfon.itch.io/reminis',
      tools: 'Unity, Aseprite, Audacity', 
      category: 'game',
      id: '6'},
      {title: 'Kartenon', 
      subtitle: 'Boss Rush Jam 2024 : C#', 
      description: 'Released on itch.io, a boss rush pixel art game. This was my entry for a month long game jam with the theme “Exchange”. Skillfully utilized online assets to create an engaging gaming experience. Developed four levels and three unique bosses, demonstrating my skills in game design', 
      link: 'https://jogzfon.itch.io/kartenon',
      tools: 'Unity, Aseprite, Audacity', 
      category: 'game',
      id: '7'},
      {title: 'Automata Factory', 
      subtitle: 'Passion Project : C#', 
      description: 'Created and published on itch.io, a 3D educational game designed to teach Automata Theory and Formal Language. The game covers three key topics: Regular Expressions (Regex), Deterministic Finite Automata (DFA), and Non-deterministic Finite Automata (NFA)', 
      link: 'https://jogzfon.itch.io/automata-factory',
      tools: 'Unity, Aseprite, Blender, Audacity', 
      category: 'game',
      id: '8'},
      {title: 'Obesity Classification AI', 
      subtitle: 'Software Engineering 1 : python - scikit-learn', 
      description: 'Developed an Obesity Classification tool and deployed it on Streamlit. This AI tool considers age, gender, height, weight, and BMI to classify obesity levels. It uses a Random Forest model for training and classification.', 
      link: 'https://github.com/jogzfon/DelaTorreAbellaPiodos_Streamlit',
      tools: 'Streamlit, Visual Studio Code', 
      category: 'misc',
      id: '9'},
      // {title: 'Kartenon', 
      // subtitle: 'Brackeys Game Jam 2024.1', 
      // description: '', 
      // link: 'https://jogzfon.itch.io/reminis',
      // tools: 'Unity, Aseprite, Audacity', 
      // category: 'game',
      // id: '5'},
    ])

    return { projects }
  },
  data() {
    return {

    }
  },
  methods: {
    
  }
});
</script>

<style scoped>
.fullName {
    display: flex;
    justify-content: center;
    padding: 20px;
}
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #007bff;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #007bff;
}
</style>
