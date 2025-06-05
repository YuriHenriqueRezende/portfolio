<script lang="ts" setup>
import { projetos } from '@/data/projetos'
import ProjectCard from './ProjectCard.vue'
import Carousel from 'primevue/carousel'
import { useRouter } from 'vue-router'

const router = useRouter()
function openProjeto(id: string) {
  router.push(`/projects/${id}`)
}
</script>

<template>
  <div>
    <Carousel :value="projetos" :numVisible="1" :circular="true" :autoplayInterval="3000">
      <template #item="{ data }">
        <ProjectCard :projeto="data" @click="openProjeto(data.id)" />
      </template>
    </Carousel>
  </div>
</template>