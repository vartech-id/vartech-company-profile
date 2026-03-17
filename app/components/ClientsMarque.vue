<script setup lang="ts">
const clients = [
  {
    name: "Indomaret",
    src: "/clients/Indomaret.png",
    alt: "Indomaret logo",
  },
  {
    name: "TAKEDA",
    src: "/clients/takeda.png",
    alt: "Takeda logo",
  },
  {
    name: "FIF",
    src: "/clients/fifgo.png",
    alt: "FIF logo",
  },
  {
    name: "blackmores",
    src: "/clients/blackmores.png",
    alt: "Blackmores logo",
  },
  {
    name: "CIMB Niaga",
    src: "/clients/cimbniaga.png",
    alt: "CIMB Niaga logo",
  },
  {
    name: "MSD",
    src: "/clients/msd.png",
    alt: "MSD logo",
  },
  {
    name: "Purina",
    src: "/clients/purina.png",
    alt: "Purina logo",
  },
  {
    name: "Systema",
    src: "/clients/systema.png",
    alt: "Systema logo",
  },
  {
    name: "BCA",
    src: "/clients/bca.png",
    alt: "BCA logo",
  },
  {
    name: "HIPMI",
    src: "/clients/hipmi.png",
    alt: "HIPMI logo",
  },
  {
    name: "Mandiri",
    src: "/clients/mandiri.png",
    alt: "Mandiri logo",
  },
  {
    name: "Plaza Indonesia",
    src: "/clients/plaza-indonesia.png",
    alt: "Plaza Indonesia logo",
  },
  {
    name: "Toyota",
    src: "/clients/toyota.png",
    alt: "Toyota logo",
  },
];
</script>

<template>
  <section id="clients" class="clients-marquee">
    <div class="clients-marquee__viewport">
      <div class="clients-marquee__track">
        <!-- group 1 -->
        <ul class="clients-marquee__group" aria-label="Client logos">
          <li
            v-for="client in clients"
            :key="`group-a-${client.name}`"
            class="clients-marquee__item"
          >
            <img
              :src="client.src"
              :alt="client.alt"
              class="clients-marquee__logo"
              loading="lazy"
              draggable="false"
            />
          </li>
        </ul>

        <!-- group 2 (exact duplicate) -->
        <ul class="clients-marquee__group" aria-hidden="true">
          <li
            v-for="client in clients"
            :key="`group-b-${client.name}`"
            class="clients-marquee__item"
          >
            <img
              :src="client.src"
              :alt="client.alt"
              class="clients-marquee__logo"
              loading="lazy"
              draggable="false"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients-marquee {
  width: 100%;
}

.clients-marquee__viewport {
  overflow: hidden;
}

.clients-marquee__track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee-scroll 50s linear infinite;
  animation-play-state: running;
}

.clients-marquee__group {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.clients-marquee__item {
  height: 32px;
  padding-inline: 1rem;
}

.clients-marquee__logo {
  height: 100%;
  width: auto;
  object-fit: contain;
  display: block;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (min-width: 768px) {
  .clients-marquee__item {
    height: 40px;
    padding-inline: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .clients-marquee__item {
    height: 48px;
    padding-inline: 1.5rem;
  }
}
</style>
