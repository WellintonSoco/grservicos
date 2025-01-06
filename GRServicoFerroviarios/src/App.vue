<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <FooterView />
  </v-app>
</template>

<script setup>
    import FooterView from '@/components/commons/FooterView.vue';

</script>
