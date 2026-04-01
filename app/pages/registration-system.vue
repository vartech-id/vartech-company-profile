<template>
  <main class="pt-10">
    <article aria-labelledby="registration-system-title" class="w-5/6 xl:max-w-350 flex flex-col gap-5 mx-auto border-2 border-amber-600 sm:bg-pink-600 md:bg-green-500 lg:bg-blue-500 xl:bg-red-800">
      <header>
        <h1
          id="registration-system-title"
          class="text-3xl md:text-4xl uppercase font-bold text-center "
        >
          Registration System
        </h1>
      </header>

      <section aria-labelledby="overview-title" class="border-2 grid md:grid-cols-2 bg-amber-950">
        <figure class="border-2 border-red-700 bg-amber-100">
          <NuxtImg
            src="/services/regist-example.jpg"
            alt="Guests using a QR-based registration system during an event check-in"
            class="w-full object-cover sm:h-70 md:h-80"
            />
        </figure>

        <div class="border-2 bg-blue-900 flex flex-col gap-4">
          <h2 id="overview-title" class="text-2xl md:text-3xl font-medium border-2 max-w-60 bg-amber-500">
            Seamless Event Check-in Experience
          </h2>
          <p class="text-gray-400 font-normal text-normal">
            We design and build custom event registration systems that eliminate
            long queues and streamline guest check-in from pre-event
            registration to on-site execution, ensuring a smooth and
            professional experience for both organizers and attendees.
          </p>

          <ul
            aria-label="Registration system highlights"
            class="flex flex-col gap-4 bg-amber-700 w-5/6 sm:w-1/2 md:w-full md:max-w-xs"
          >
            <li>
              <div class="border border-amber-600 bg-red-900 flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 rounded-full items-center justify-center bg-gray-400/60 backdrop-blur-md shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p class="leading-5">
                  Guests register through a fully branded digital invitation
                </p>
              </div>
            </li>

            <li>
              <div class="border border-amber-600 bg-red-900 flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 rounded-full items-center justify-center bg-gray-400/60 backdrop-blur-md shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p class="leading-5">
                  Each attendee receives a unique QR code for fast verification
                </p>
              </div>
            </li>

            <li>
              <div class="border border-amber-600 bg-red-900 flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 rounded-full items-center justify-center bg-gray-400/60 backdrop-blur-md shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p>Instant check-in with high-speed and accurate scanning</p>
              </div>
            </li>

            <li>
              <div class="border border-amber-600 bg-red-900 flex gap-2">
                <span
                  aria-hidden="true"
                  class="flex h-5 w-5 rounded-full items-center justify-center bg-gray-400/60 backdrop-blur-md shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p class="leading-5">Real-time attendance tracking for organizers</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="key-features-title"
        class="flex flex-col border-2 items-center gap-5"
      >
        <h2 id="key-features-title" class="text-2xl uppercase font-bold">
          Key Features
        </h2>

        <section
          aria-labelledby="digital-invitation-title"
          class="flex flex-col gap-5 items-center border-2"
        >
          <h3 id="digital-invitation-title" class="text-xl font-semibold">
            Custom Digital Invitation
          </h3>

          <p>
            A fully customized digital invitation tailored to your event’s
            branding, allowing guests to register seamlessly through a
            mobile-friendly experience with a clean and intuitive interface.
          </p>
          <!-- CAROUSEL HERE -->
          <figure>
            <NuxtImg
              src="/services/invitation-preview.jpg"
              alt="Mobile interface of a digital invitation and registration form"
            />
          </figure>
        </section>

        <ul>
          <li>
            <article>
              <h3>Real-time Attendance Tracking Dashboard</h3>
              <p>
                Monitor guest attendance in real time through a clear and
                responsive dashboard, giving organizers instant visibility and
                full control during the event.
              </p>
            </article>
          </li>

          <li>
            <article>
              <h3>Exportable Reports</h3>
              <p>
                Easily generate and export structured attendance data for
                post-event analysis, reporting, and future event planning.
              </p>
            </article>
          </li>

          <li>
            <article>
              <h3>WhatsApp / Email Blast</h3>
              <p>
                Distribute invitations, confirmations, and event updates
                efficiently via WhatsApp or email with a streamlined
                communication flow.
              </p>
            </article>
          </li>

          <li>
            <article>
              <h3>Custom Domain for Each Event</h3>
              <p>
                Use a dedicated custom domain for each event to deliver a more
                professional, branded, and seamless experience for your guests.
              </p>
            </article>
          </li>

          <li>
            <article>
              <h3>On-site Support Team</h3>
              <p>
                Ensure smooth event operations with on-site technical support,
                handling everything from check-in systems to troubleshooting
                during live execution.
              </p>
            </article>
          </li>
        </ul>
      </section>

      <section aria-labelledby="related-projects-title">
        <h2 id="related-projects-title">Related Projects</h2>

        <ul>
          <li>
            <article>
              <figure>
                <NuxtImg
                  src="/works/project-1.jpg"
                  alt="QR registration system used in a corporate event"
                />
              </figure>
              <h3>BNI Banking Journey QR Registration</h3>
              <p>Registration System</p>
            </article>
          </li>

          <li>
            <article>
              <figure>
                <NuxtImg
                  src="/works/project-2.jpg"
                  alt="On-site guest registration system at an exhibition"
                />
              </figure>
              <h3>SRI Summit Indonesia 2025</h3>
              <p>Registration System</p>
            </article>
          </li>
        </ul>
      </section>
    </article>
  </main>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="16"
        y="10"
        width="32"
        height="40"
        rx="12"
        stroke="white"
        stroke-width="3"
      />
      <path
        d="M22 20h20"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <rect
        x="22"
        y="24"
        width="20"
        height="14"
        rx="3"
        stroke="white"
        stroke-width="3"
      />
      <path d="M26 28h4v4h-4z" fill="white" />
      <path
        d="M34 28h4"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M34 32h2"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M24 46h16"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M20 54h24"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="12"
        width="44"
        height="30"
        rx="6"
        stroke="white"
        stroke-width="3"
      />
      <path
        d="M20 48h24"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M32 42v6"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M18 34l8-8 6 5 12-12"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="18" cy="34" r="2" fill="white" />
      <circle cx="26" cy="26" r="2" fill="white" />
      <circle cx="32" cy="31" r="2" fill="white" />
      <circle cx="44" cy="19" r="2" fill="white" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 10h18l10 10v30a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
        stroke="white"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M38 10v10h10"
        stroke="white"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M24 30h16"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M24 38h16"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M24 46h10"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 30 52 12 40 52 30 36 10 30Z"
        stroke="white"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M52 12 30 36"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M24 42l6-6"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="20" stroke="white" stroke-width="3" />
      <path
        d="M12 32h40"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M32 12c6 6 9 13 9 20s-3 14-9 20c-6-6-9-13-9-20s3-14 9-20Z"
        stroke="white"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M18 22c4 2 9 3 14 3s10-1 14-3"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M18 42c4-2 9-3 14-3s10 1 14 3"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <!-- Headband -->
      <path
        d="M12 34a20 20 0 0 1 40 0"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- Left ear -->
      <rect
        x="10"
        y="32"
        width="10"
        height="16"
        rx="4"
        stroke="white"
        stroke-width="3"
      />

      <!-- Right ear -->
      <rect
        x="44"
        y="32"
        width="10"
        height="16"
        rx="4"
        stroke="white"
        stroke-width="3"
      />

      <!-- Mic arm -->
      <path
        d="M44 48c0 4-3 6-7 6h-3"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- Mic tip -->
      <circle cx="30" cy="54" r="2.5" fill="white" />
    </svg>
  </div>
</template>
