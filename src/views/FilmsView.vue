<template>
    <cards-group :items="films" route-name="film_id" md="4" v-slot="{ item: film }">
        <v-img class="white--text align-end" height="200px" lazy-src="@/assets/imgs/films_poster.jpeg" :src="film.img_url">
        </v-img>

        <v-card-title class="truncate">{{ film.title }}</v-card-title>
        <v-card-subtitle class="pb-0">
            <b>Release date:</b> {{ getCoolDateFormat(film.release_date) }}
        </v-card-subtitle>

        <v-card-text class="h-[90px] overflow-hidden">
            {{ film.opening_crawl }}
        </v-card-text>
    </cards-group>
</template>
<script>
import CardsGroup from '@/components/CardsGroup.vue';
import formatters from '@/mixins/formatters'

export default {
    name: 'FilmsView',
    mixins: [formatters],
    components: {
        CardsGroup
    },
    data() {
        return {
            films: [],
        }
    },
    methods: {
        getFilms() {
            this.axios.get('films').then(res => {
                this.films = [...this.films, ...res.data];
            })
        }
    },
    mounted() {
        this.getFilms();
    },
}
</script>
<style lang="">
    
</style>