<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <!-- <div class="text-center">
        <logo />
        <vuetify-logo />
      </div> -->
      <!-- card -->
      <sb-card
        light
        title="Email Settings"
        class="mx-2 my-1"
        width="245"
      >
        <template #header-actions>
          <v-btn
            x-small
            outlined
            color="primary"
            class="my-4 mr-2"
            @click="send"
          >
            Send Email
          </v-btn>
        </template>
        <v-container
          :class="{active : value}"
          class="pa-0"
        >
          <v-col class="pa-0">
            <v-flex>
              <h1>SendGrid Email</h1>
            </v-flex>
          </v-col>
        </v-container>
      </sb-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import sendEmail from '../send-grid'
import SbCard from '@/components/Card'

export default {
  components: {
    // Logo,
    // VuetifyLogo,
    SbCard
  },
  data: () => ({
    value: false,
    image: 'https://github.com/sendgrid/sendgrid-python/raw/master/twilio_sendgrid_logo.png'
  }),
  methods: {
    send () {
      this.$axios.get('/nest')
    }
  }
}
</script>
