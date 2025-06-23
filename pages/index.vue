<script lang="ts" setup>
import Button from 'primevue/button'
import { ref, onMounted } from 'vue'

const bgCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = bgCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  let w = canvas.width = window.innerWidth
  let h = canvas.height = window.innerHeight

  const resize = () => {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)

  const points = Array.from({ length: 32 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    dx: (Math.random()-0.5) * 0.5,
    dy: (Math.random()-0.5) * 0.5
  }))

  function animate() {
    ctx.clearRect(0, 0, w, h)
    for (const p of points) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = "#fff"
      ctx.fill()
    }
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j]
        const dist = Math.hypot(a.x - b.x, a.y - b.y)
        if (dist < 170) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = "rgba(255,50,70,0.25)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }
    for (const p of points) {
      p.x += p.dx
      p.y += p.dy
      if (p.x < 0 || p.x > w) p.dx *= -1
      if (p.y < 0 || p.y > h) p.dy *= -1
    }
    requestAnimationFrame(animate)
  }
  animate()
})


</script>

<template>
  <div>
    <div class="animated-bg">
      <canvas ref="bgCanvas" class="bg-canvas"></canvas>
      <div class="cube-group cube-group--bottom-left">
        <div class="cube" v-for="i in 6" :key="i"></div>
      </div>
      <div class="cube-group cube-group--top-right">
        <div class="cube" v-for="i in 3" :key="i"></div>
      </div>
      <div class="dots-grid dots--top-left"></div>
      <div class="dots-grid dots--top-right"></div>
      <div class="dots-grid dots--bottom-right"></div>
    </div>
    <div class="home">
      <header class="navbar">
        <div class="navbar__logo"></div>
        <nav class="navbar__menu">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section class="main-section" id="home">
        <div class="main-section__left">
          <div class="greeting">
            <span class="emoji">👋</span> <span>Hey</span>
          </div>
          <h1 class="name-title">I'm Jigar Sable</h1>
          <h2 class="subtitle">
            I am into
            <span class="typewriter purple">Frontend Development</span>
          </h2>
          <p class="desc">
            I focus on developing user-friendly web applications that meet the client's requirements,
            with attention to detail, scalability, and performance.
          </p>
          <Button label="About Me" class="about-btn" />
          <div class="socials">
            <a href="#" class="socials__link"><i class="pi pi-linkedin"></i></a>
            <a href="#" class="socials__link"><i class="pi pi-github"></i></a>
            <a href="#" class="socials__link"><i class="pi pi-instagram"></i></a>
            <a href="#" class="socials__link"><i class="pi pi-twitter"></i></a>
          </div>
        </div>
        <div class="main-section__right">
          <div class="avatar-card">
            <img src="/images/perf/perfil1.jpg" alt="Avatar" class="avatar-img" />
          </div>
        </div>
      </section>
      <section id="about" class="section about-section">
        <h2>About</h2>
        <p>
          Desenvolvedor Frontend apaixonado por tecnologia. Experiência em Vue, Nuxt, SCSS, e interfaces modernas.
        </p>
      </section>
      <section id="projects" class="section projects-section">
        <h2>Projects</h2>
        <ProjectCarousel />
      </section>
      <section id="experience" class="section experience-section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Frontend Developer</strong> — Empresa X (2021-2024)<br>
            Desenvolvimento de aplicações SPA, integrações e UI/UX.
          </li>
          <li>
            <strong>Web Designer</strong> — Empresa Y (2019-2021)<br>
            Criação de landing pages, prototipação e design responsivo.
          </li>
        </ul>
      </section>
      <section id="contact" class="section contact-section">
        <h2>Contact</h2>
        <form class="contact-form">
          <input type="text" placeholder="Seu nome" required>
          <input type="email" placeholder="Seu e-mail" required>
          <textarea placeholder="Mensagem" required></textarea>
          <Button label="Enviar" />
        </form>
      </section>
      <footer class="footer">
        &copy; {{ new Date().getFullYear() }} Yuri Henrique Rezende - Todos os direitos reservados.
      </footer>
    </div>
  </div>
</template>

