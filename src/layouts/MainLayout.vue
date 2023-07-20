<template>
    <div>
        <nav-bar />
        <!-- Main content -->
        <main class="min-h-screen pb-10">
            <slot />
        </main>
        <custom-footer />

    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default {
    name: 'MainLayout',
    components: {
        NavBar,
        CustomFooter
    },
    data() {
        return {
            
        }
    },
}
</script>
<style></style>