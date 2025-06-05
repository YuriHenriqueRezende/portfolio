<script lang="ts" setup>
import type { Projeto } from '@/data/projetos'

defineProps<{ projeto: Projeto }>()

</script>

<template>
  <div class="project-card">
    <img :src="projeto.capa" :alt="projeto.titulo" />
    <h3>{{ projeto.titulo }}</h3>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  cursor: pointer;
  text-align: center;
  img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
  }
  h3 {
    margin-top: 1rem;
  }
}
</style>