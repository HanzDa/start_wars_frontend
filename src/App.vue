<template>
  <div id="app" class="bg-gray-100">
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
</style>
