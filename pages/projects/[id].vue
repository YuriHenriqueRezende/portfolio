<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { projetos } from '@/data/projetos'
import Timeline from '@/components/Timeline.vue'

const route = useRoute()
const projeto = projetos.find(p => p.id === route.params.id)

</script>

<template>
  <NuxtLink to="/">Voltar</NuxtLink>
  <div class="container">
    <div v-if="projeto" class="conteudo">
      <h2>{{ projeto.titulo }}</h2>
      <p>{{ projeto.descricao }}</p>
      <h3>Tecnologias:</h3>
      <img :src="projeto.tecnologias" :alt="projeto.titulo" />
      <h2>Linha do tempo</h2>
      <Timeline :eventos="projeto.timeline" />
    </div>
    <div v-else class="conteudo">
      <p>Projeto não encontrado.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: flex-start; /* alinha no topo */
  min-height: 100vh;
  padding-top: 2rem;
}

.conteudo {
  text-align: center;
}
</style>
