<script setup lang="ts">

import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
</script>

<template>
  <SectionContainer id="legal">
    <!-- Rely on SectionContainer for horizontal padding; keep vertical spacing here -->
    <div class="w-full py-8 space-y-12">
      <h1 class="text-4xl font-bold mb-8">Legal Information</h1>

      <!-- Privacy Policy -->
      <section>
        <h2 class="text-3xl font-semibold mb-4">Privacy Policy</h2>
        <div class="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Last updated:</strong> October 11, 2025
          </p>
          <p>
            This privacy policy describes how we collect, use, and protect your personal information when you visit our website.
          </p>
          <h3 class="text-xl font-semibold mt-4">Information Collection</h3>
          <p>
            [Placeholder] We may collect information such as your IP address, browser type, and usage data through analytics tools.
          </p>
          <h3 class="text-xl font-semibold mt-4">Use of Information</h3>
          <p>
            [Placeholder] The information collected is used to improve our services and understand user behavior.
          </p>
          <h3 class="text-xl font-semibold mt-4">Data Protection</h3>
          <p>
            [Placeholder] We implement appropriate security measures to protect your personal information.
          </p>
          <h3 class="text-xl font-semibold mt-4">Contact</h3>
          <p>
            [Placeholder] For questions about this privacy policy, please contact us through the contact section.
          </p>
        </div>
      </section>

      <!-- General Terms and Conditions -->
      <section>
        <h2 class="text-3xl font-semibold mb-4">General Terms and Conditions (GTC)</h2>
        <div class="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Last updated:</strong> October 11, 2025
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of this website.
          </p>
          <h3 class="text-xl font-semibold mt-4">Acceptance of Terms</h3>
          <p>
            [Placeholder] By accessing this website, you accept these terms and conditions in full.
          </p>
          <h3 class="text-xl font-semibold mt-4">Intellectual Property</h3>
          <p>
            [Placeholder] All content on this website is the property of the owner unless otherwise stated.
          </p>
          <h3 class="text-xl font-semibold mt-4">Limitation of Liability</h3>
          <p>
            [Placeholder] We shall not be liable for any damages arising from the use of this website.
          </p>
          <h3 class="text-xl font-semibold mt-4">Changes to Terms</h3>
          <p>
            [Placeholder] We reserve the right to modify these terms at any time without prior notice.
          </p>
        </div>
      </section>

      <!-- Impressum -->
      <section>
        <h2 class="text-3xl font-semibold mb-4">Impressum</h2>
        <div class="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Information in accordance with legal requirements</strong>
          </p>
          <h3 class="text-xl font-semibold mt-4">Website Owner</h3>
          <p>
            [Placeholder] Keresztes Zsolt<br />
            [Placeholder Address]<br />
            [Placeholder City, Country]
          </p>
          <h3 class="text-xl font-semibold mt-4">Contact Information</h3>
          <p>
            Email: [Placeholder Email]<br />
            Phone: [Placeholder Phone]
          </p>
          <h3 class="text-xl font-semibold mt-4">Responsible for Content</h3>
          <p>
            [Placeholder] Keresztes Zsolt
          </p>
          <h3 class="text-xl font-semibold mt-4">Disclaimer</h3>
          <p>
            [Placeholder] Despite careful content control, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.
          </p>
        </div>
      </section>

      <SectionDivider />
    </div>
  </SectionContainer>
</template>

<style scoped>

</style>