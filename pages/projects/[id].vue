<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { projetos } from '@/data/projetos'
import Timeline from '@/components/Timeline.vue'

const route = useRoute()
const projeto = projetos.find(p => p.id === route.params.id)

</script>

<template>
  <main class="main">
    <NuxtLink to="/" class="btn-voltar">Voltar</NuxtLink>

    <h2 v-if="projeto" class="titulo-projeto">{{ projeto.titulo }}</h2>

    <div class="container">
      <div v-if="projeto" class="conteudo">
        <h2>Descrição:</h2>
        <p class="descricao">{{ projeto.descricao }}</p>
        <h3>Tecnologias:</h3>
        <img :src="projeto.tecnologias" :alt="projeto.titulo" />
        <Timeline :eventos="projeto.timeline" />
      </div>
      <div v-else class="conteudo">
        <p>Projeto não encontrado.</p>
      </div>
    </div>
  </main>
</template>


<style scoped lang="scss">
.main {
  background-color: #a5bedf82;
  min-height: 100vh;
  position: relative;
  padding-top: 4rem; // espaço para o título
}

.btn-voltar {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
}

.titulo-projeto {
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: #1e293b;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.container {
  display: flex;
  justify-content: center; 
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 4rem;
}

.conteudo {
  text-align: center;
}
.descricao {
  margin-bottom: 1.5rem; // espaço abaixo do texto de descrição
}

h3 {
  margin-top: 1rem; // opcional: empurra o título "Tecnologias" para baixo
  margin-bottom: 1rem; // espaço abaixo do "Tecnologias"
}

img {
  margin-bottom: 2rem; // espaço abaixo dos ícones de tecnologias, se desejar
}
</style>
