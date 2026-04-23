<script setup>
defineProps({
  heading: {
    type: Array,
    default: () => ["Share your ideas", "Let's make them real !"],
  },
  address: { type: String, default: "" },
  emails: { type: Array, default: () => [] },
  phones: { type: Array, default: () => [] },
  socials: { type: Array, default: () => [] },
});

const CONTACT_FIELDS = ["name", "email", "subject", "message"];

const contactForm = reactive({ name: "", email: "", subject: "", message: "" });
const contactErrors = reactive({ name: "", email: "", subject: "", message: "" });
const contactFeedback = ref("");
const hasSubmittedContactForm = ref(false);

const clearContactFeedback = () => { contactFeedback.value = ""; };

const validateContactField = (field) => {
  const value = contactForm[field].trim();
  if (!value) { contactErrors[field] = "This field is required."; return false; }
  if (field === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      contactErrors.email = "Enter a valid email address."; return false;
    }
  }
  contactErrors[field] = "";
  return true;
};

const validateContactForm = () => {
  let isValid = true;

  CONTACT_FIELDS.forEach((field) => {
    if (!validateContactField(field)) {
      isValid = false;
    }
  });

  return isValid;
};

const handleContactInput = (field) => {
  clearContactFeedback();

  if (!hasSubmittedContactForm.value) {
    return;
  }

  validateContactField(field);
};

const handleContactSubmit = () => {
  hasSubmittedContactForm.value = true;
  clearContactFeedback();
  contactFeedback.value = validateContactForm()
    ? "Form validation passed. Connect this form to your backend or email service to receive submissions."
    : "Please complete the required fields before submitting.";
};
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="w-full flex flex-col lg:flex-row gap-12"
  >
    <div class="flex flex-col gap-6 text-center lg:text-left flex-1">
      <h2 id="contact-title" class="font-black md:text-4xl">
        <span v-for="line in heading" :key="line" class="block text-3xl lg:text-5xl">{{ line }}</span>
      </h2>
      <div class="flex flex-col gap-6">
        <div v-if="address">
          <h3 class="font-bold uppercase text-xl">Address</h3>
          <address class="not-italic font-normal text-sm">{{ address }}</address>
        </div>
        <div v-if="emails.length">
          <h3 class="font-bold uppercase text-xl">Email</h3>
          <a
            v-for="email in emails"
            :key="email"
            class="block font-normal text-sm"
            :href="`mailto:${email}`"
          >{{ email }}</a>
        </div>
        <div v-if="phones.length">
          <h3 class="font-bold uppercase text-xl">Phone</h3>
          <a
            v-for="phone in phones"
            :key="phone.number"
            class="block font-normal text-sm"
            :href="`tel:${phone.number}`"
          >{{ phone.label }}</a>
        </div>
        <div v-if="socials.length" class="flex flex-col gap-2">
          <h3 class="font-bold text-xl">SOCIAL MEDIA</h3>
          <div class="flex justify-center lg:justify-start gap-1">
            <div
              v-for="social in socials"
              :key="social.href"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-md shadow-lg"
            >
              <a class="block w-8 h-8" :href="social.href" :aria-label="social.label">
                <span v-html="social.icon" class="block h-full w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form class="grid grid-cols-2 gap-4 font-normal flex-1" novalidate @submit.prevent="handleContactSubmit">
      <div class="flex flex-col col-span-2 lg:col-start-1 lg:col-span-1 gap-2">
        <label class="sr-only" for="contact-name">Name</label>
        <input
          id="contact-name" v-model="contactForm.name" name="name" autocomplete="name"
          placeholder="Name" class="text-xl p-4 border-2 h-12 lg:h-14"
          :aria-describedby="contactErrors.name ? 'contact-name-error' : undefined"
          :aria-invalid="contactErrors.name ? 'true' : 'false'"
          required type="text"
          @input="handleContactInput('name')"
        />
        <p v-if="contactErrors.name" id="contact-name-error" class="text-sm text-red-300">{{ contactErrors.name }}</p>
      </div>
      <div class="flex flex-col col-span-2 lg:col-span-1 lg:col-start-2 gap-2">
        <label class="sr-only" for="contact-email">Your Email</label>
        <input
          id="contact-email" v-model="contactForm.email" name="email" autocomplete="email"
          placeholder="Your Email" class="text-xl p-4 border-2 h-12 lg:h-14"
          :aria-describedby="contactErrors.email ? 'contact-email-error' : undefined"
          :aria-invalid="contactErrors.email ? 'true' : 'false'"
          required type="email"
          @input="handleContactInput('email')"
        />
        <p v-if="contactErrors.email" id="contact-email-error" class="text-sm text-red-300">{{ contactErrors.email }}</p>
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label class="sr-only" for="contact-subject">Subject</label>
        <input
          id="contact-subject" v-model="contactForm.subject" name="subject"
          placeholder="Subject" class="text-xl p-4 border-2 col-span-2 h-12 lg:h-14"
          :aria-describedby="contactErrors.subject ? 'contact-subject-error' : undefined"
          :aria-invalid="contactErrors.subject ? 'true' : 'false'"
          required type="text"
          @input="handleContactInput('subject')"
        />
        <p v-if="contactErrors.subject" id="contact-subject-error" class="text-sm text-red-300">{{ contactErrors.subject }}</p>
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label class="sr-only" for="contact-message">Message</label>
        <textarea
          id="contact-message" v-model="contactForm.message" name="message"
          placeholder="Messages ..." class="text-xl p-4 border-2 col-span-2"
          :aria-describedby="contactErrors.message ? 'contact-message-error' : undefined"
          :aria-invalid="contactErrors.message ? 'true' : 'false'"
          required rows="10"
          @input="handleContactInput('message')"
        ></textarea>
        <p v-if="contactErrors.message" id="contact-message-error" class="text-sm text-red-300">{{ contactErrors.message }}</p>
      </div>
      <p v-if="contactFeedback" class="col-span-2 text-sm" aria-live="polite">{{ contactFeedback }}</p>
      <button type="submit" class="place-self-end w-30 col-start-2 inline-flex h-12 items-center justify-center border-2 border-white font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black">
        Reach Us
      </button>
    </form>
  </section>
</template>
