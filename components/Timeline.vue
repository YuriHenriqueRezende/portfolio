<script lang="ts" setup>
import { ref } from 'vue'
import type { TimelineEvent } from '@/data/projetos'
const props = defineProps<{ eventos: TimelineEvent[] }>()

const expandedIdx = ref<number | null>(null)
function expandImage(idx: number, _url: string) {
  expandedIdx.value = idx
}
function closeImage() {
  expandedIdx.value = null
}
</script>

<template>
  <div class="timeline-wrapper">
    <div class="timeline-line"></div>
    <div
      v-for="(event, idx) in eventos"
      :key="idx"
      :class="['timeline-event', idx % 2 === 0 ? 'left' : 'right']"
    >
      <div class="timeline-content">
        <div class="timeline-year">{{ event.ano }}</div>
        <img
          v-if="event.imagem"
          class="timeline-icon"
          :src="event.imagem"
          :alt="event.titulo"
          @click="expandImage(idx, event.imagem)"
          style="cursor: pointer"
        />
        <div>
          <h3>{{ event.titulo }}</h3>
          <p>{{ event.descricao }}</p>
        </div>
      </div>
    </div>
    <!-- Modal de Imagem Expandida -->
    <div
      v-if="expandedIdx !== null"
      class="image-modal"
      @click.self="closeImage"
    >
      <img
        :src="eventos[expandedIdx].imagem"
        :alt="eventos[expandedIdx].titulo"
        class="expanded-img"
      />
      <button class="close-btn" @click="closeImage">×</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 60px auto;
  min-height: 500px;
  padding: 60px 0;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 100%;
  background: #16d1b6;
  transform: translateX(-50%);
  border-radius: 2px;
  z-index: 0;
}
.timeline-event {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 60px;
  z-index: 1;
}
.timeline-event.left {
  left: 0;
  flex-direction: row;
  .timeline-content {
    margin-right: 40px;
    align-items: flex-end;
    text-align: right;
  }
}
.timeline-event.right {
  left: 50%;
  flex-direction: row-reverse;
  justify-content: flex-start;
  .timeline-content {
    margin-left: 40px;
    align-items: flex-start;
    text-align: left;
  }
}
.timeline-content {
  background: #232b34;
  color: #fff;
  padding: 26px 38px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;
  max-width: 340px;
}
.timeline-year {
  color: #16d1b6;
  font-weight: bold;
  font-size: 1.5rem;
}
.timeline-icon {
  display: inline-block;
  padding: 26px 20px;
  min-width: 250px;
  max-width: 270px; 
  box-sizing: border-box;

  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px #16d1b6;
  }
}

/* Modal de Imagem Expandida */
.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0 }
  to   { opacity: 1 }
}
.expanded-img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 18px;
  border: 4px solid #16d1b6;
  box-shadow: 0 6px 40px #0008;
}
.close-btn {
  position: absolute;
  top: 32px;
  right: 40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  transition: color .2s;
  &:hover { color: #16d1b6; }
}

@media (max-width: 900px) {
  .timeline-content {
    min-width: 220px;
    max-width: 90vw;
    padding: 18px;
  }
  .timeline-event {
    margin-bottom: 30px;
  }
}
@media (max-width: 700px) {
  .timeline-wrapper {
    padding: 0;
  }
  .timeline-line {
    left: 8px;
    width: 3px;
  }
  .timeline-event, .timeline-event.left, .timeline-event.right {
    width: 100%;
    left: 0;
    flex-direction: row;
    justify-content: flex-start;
    .timeline-content {
      margin: 0 0 0 24px;
      align-items: flex-start;
      text-align: left;
    }
  }
}
</style>