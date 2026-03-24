<script setup>
const logoSrc = "/images/logo.png";
const isMenu = ref(false);

const buttonClass = computed(() => {
  return isMenu.value ? "activeMenu" : "closeMenu";
});

const buttonStatus = computed(() => {
  return isMenu.value ? "close" : "menu";
});

const changeButton = () => {
  if (isMenu.value) {
    isMenu.value = false;
  } else {
    isMenu.value = true;
  }
};

const closeMenu = () => {
  isMenu.value = false;
};
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-60 flex items-center justify-center border w-full bg-black h-20"
  >
    <div class="flex justify-between w-11/12">
      <NuxtLink to="/">
        <img
          class="h-auto w-38 shrink-0 border-2 lg:w-42 xl:w-44"
          :src="logoSrc"
          alt="vartech logo"
          @click="closeMenu"
      /></NuxtLink>

      <button
        :class="buttonClass"
        class="inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 leading-none text-white"
        @click="changeButton"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
        <span
          class="font-roboto text-xl font-semibold capitalize leading-none md:text-lg lg:text-2xl"
          >{{ buttonStatus }}</span
        >
      </button>
    </div>
  </header>

  <Transition name="menu-roll">
    <div
      v-if="isMenu"
      class="menu-overlay px-4 pt-24 sm:px-8 sm:pt-28 lg:px-16 lg:pt-32 flex lg:justify-center"
    >
      <nav
        class="text-6xl text-center sm:text-left sm:text-8xl font-semibold sm:bg-yellow-950 md:bg-blue-950 lg:bg-red-950 w-full max-w-7xl"
      >
        <ul class="flex flex-col gap-4">
          <li>
            <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" @click="closeMenu">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" @click="closeMenu">Services</NuxtLink>
          </li>
          <li><NuxtLink to="/works" @click="closeMenu">Works</NuxtLink></li>
          <li>
            <NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" @click="closeMenu">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </Transition>
</template>
<style>
.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow-y: auto;
  background-color: rgb(0, 0, 0);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* ANIMATION */
.menu-roll-enter-active,
.menu-roll-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.menu-roll-enter-from,
.menu-roll-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.menu-roll-enter-to,
.menu-roll-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
