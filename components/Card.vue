<template>
  <v-card
    :width="width"
    :loading="loading"
    :disabled="disabled"
    :raised="raised"
    :flat="flat"
    :light="light"
  >
    <v-flex
      v-if="!noTitle"
      class="sb-profile-header d-flex justify-space-between"
    >
      <v-container fluid>
        {{ title }}
        <slot name="custom-title" />
      </v-container>
      <v-card flat>
        <slot name="header-actions" />
      </v-card>
    </v-flex>
    <slot />
  </v-card>
</template>
<script>
export default {
  name: 'Card',
  props: {
    noTitle: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    width: {
      type: [String, Number],
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>
