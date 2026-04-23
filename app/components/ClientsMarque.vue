<script setup>
const clients = [
  {
    name: "Indomaret",
    src: "/clients/indomaret-logo.webp",
    alt: "Indomaret logo",
  },
  {
    name: "TAKEDA",
    src: "/clients/takeda-logo.webp",
    alt: "Takeda logo",
  },
  {
    name: "FIF",
    src: "/clients/fifgo-logo.webp",
    alt: "FIF logo",
  },
  {
    name: "blackmores",
    src: "/clients/blackmores-logo.webp",
    alt: "Blackmores logo",
  },
  {
    name: "CIMB Niaga",
    src: "/clients/cimbniaga-logo.webp",
    alt: "CIMB Niaga logo",
  },
  {
    name: "MSD",
    src: "/clients/msd-logo.webp",
    alt: "MSD logo",
  },
  {
    name: "Purina",
    src: "/clients/purina-logo.webp",
    alt: "Purina logo",
  },
  {
    name: "Systema",
    src: "/clients/systema-logo.webp",
    alt: "Systema logo",
  },
  {
    name: "BCA",
    src: "/clients/bca-logo.webp",
    alt: "BCA logo",
  },
  {
    name: "HIPMI",
    src: "/clients/hipmi-logo.webp",
    alt: "HIPMI logo",
  },
  {
    name: "Mandiri",
    src: "/clients/mandiri-logo.webp",
    alt: "Mandiri logo",
  },
  {
    name: "Plaza Indonesia",
    src: "/clients/plazaindonesia-logo.webp",
    alt: "Plaza Indonesia logo",
  },
  {
    name: "Toyota",
    src: "/clients/toyota-logo.webp",
    alt: "Toyota logo",
  },
];
</script>

<template>
  <div id="clients" class="clients-marquee">
    <div class="clients-marquee__viewport">
      <div class="clients-marquee__track">
        <!-- group 1 -->
        <ul class="clients-marquee__group" aria-label="Client logos">
          <li
            v-for="client in clients"
            :key="`group-a-${client.name}`"
            class="clients-marquee__item"
          >
            <NuxtImg
              :src="client.src"
              :alt="client.alt"
              width="400"
              height="200"
              class="clients-marquee__logo"
              loading="eager"
              draggable="false"
              format="webp"
              quality="80"
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
            <NuxtImg
              :src="client.src"
              :alt="client.alt"
              width="400"
              height="200"
              class="clients-marquee__logo"
              loading="lazy"
              draggable="false"
              format="webp"
              quality="80"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clients-marquee {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 0 0.75rem;
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
  height: 60px; /* Lebar baru untuk mobile */
  padding-inline: 0.5rem;
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
    height: 70px; /* Lebar baru untuk tablet */
    padding-inline: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .clients-marquee__item {
    height: 70px; /* Lebar baru untuk desktop */
    padding-inline: 2rem;
  }
}
</style>
