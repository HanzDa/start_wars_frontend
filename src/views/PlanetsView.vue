<template>
    <cards-group :items="planets" route-name="planet_id" v-slot="{item: planet}">
        <v-img class="white--text align-end" height="200px" lazy-src="@/assets/imgs/films_poster.jpeg"
            :src="planet.img_url">
        </v-img>

        <v-card-title class="truncate">{{ planet.name }}</v-card-title>
        
        <v-card-subtitle class="pb-0">
            Diameter: <b>{{ planet.diameter }}</b>
        </v-card-subtitle>
    </cards-group>
</template>
<script>
import CardsGroup from '@/components/CardsGroup.vue';

export default {
    name: 'PlanetsView',
    components: {
        CardsGroup
    },
    data() {
        return {
            planets: [],
        }
    },
    methods: {
        getPlanets() {
            this.$axios.get('planets').then(res => {
                this.planets = [...this.planets, ...res.data.results];
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getPlanets();
    }
}
</script>
<style></style>