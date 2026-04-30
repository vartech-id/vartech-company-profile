<script setup>
const logoSrc = "/images/logo.png";
const menuId = "primary-navigation";
const isMenu = ref(false);
const menuButtonRef = ref(null);
const menuPanelRef = ref(null);

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getMenuFocusableElements = () => {
  if (!menuPanelRef.value) {
    return [];
  }

  return [...menuPanelRef.value.querySelectorAll(focusableSelector)];
};

const closeMenu = ({ restoreFocus = true } = {}) => {
  isMenu.value = false;

  if (!restoreFocus || !import.meta.client) {
    return;
  }

  nextTick(() => {
    menuButtonRef.value?.focus();
  });
};

const openMenu = () => {
  isMenu.value = true;
};

const toggleMenu = () => {
  if (isMenu.value) {
    closeMenu();
    return;
  }

  openMenu();
};

const buttonStatus = computed(() => {
  return isMenu.value ? "close" : "menu";
});

const handleMenuKeydown = (event) => {
  if (!isMenu.value) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getMenuFocusableElements();

  if (!focusableElements.length) {
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements.at(-1);

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement?.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement?.focus();
  }
};

const closeMenuLogo = () => {
  closeMenu({ restoreFocus: false });
};

watch(isMenu, async (isOpen) => {
  if (!import.meta.client) {
    return;
  }

  document.body.style.overflow = isOpen ? "hidden" : "";

  if (!isOpen) {
    return;
  }

  await nextTick();
  const firstFocusableElement = getMenuFocusableElements()[0];
  firstFocusableElement?.focus();
});

onMounted(() => {
  window.addEventListener("keydown", handleMenuKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleMenuKeydown);

  if (import.meta.client) {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-60 flex items-center justify-center border w-full bg-black h-20"
  >
    <div class="flex justify-between w-11/12">
      <NuxtLink to="/">
        <img
          class="h-auto w-38 shrink-0 lg:w-42 xl:w-44"
          :src="logoSrc"
          alt="vartech logo"
          @click="closeMenuLogo"
      /></NuxtLink>

      <button
        ref="menuButtonRef"
        type="button"
        class="inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 leading-none text-white"
        :aria-controls="menuId"
        :aria-expanded="isMenu"
        :aria-label="isMenu ? 'Close primary navigation' : 'Open primary navigation'"
        @click="toggleMenu"
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
      class="menu-overlay px-4 pt-24 sm:px-8 sm:pt-28 lg:px-16 lg:pt-25 flex lg:justify-center"
    >
      <nav
        ref="menuPanelRef"
        :id="menuId"
        aria-label="Primary"
        class="text-6xl text-center sm:text-left sm:text-7xl font-semibold  w-full max-w-7xl"
      >
        <ul class="flex flex-col gap-4">
          <li>
            <NuxtLink to="/" @click="closeMenu({ restoreFocus: false })">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" @click="closeMenu({ restoreFocus: false })">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" @click="closeMenu({ restoreFocus: false })">Services</NuxtLink>
          </li>
          <li><NuxtLink to="/works" @click="closeMenu({ restoreFocus: false })">Works</NuxtLink></li>
          <li>
            <NuxtLink to="/blog" @click="closeMenu({ restoreFocus: false })">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" @click="closeMenu({ restoreFocus: false })">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </Transition>
</template>
<style scoped>
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
    transform 0.6s ease,
}

.menu-roll-enter-from,
.menu-roll-leave-to {
  transform: translateY(-100%);
}

.menu-roll-enter-to,
.menu-roll-leave-from {
  transform: translateY(0);
}
</style>
