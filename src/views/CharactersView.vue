<template>
    <cards-group :items="characters" route-name="character_id" v-slot="{item: character}">
        <v-img class="white--text align-end" height="200px" lazy-src="@/assets/imgs/films_poster.jpeg"
            :src="character.img_url">
        </v-img>

        <v-card-title class="truncate">{{ character.name }}</v-card-title>
        <v-card-subtitle class="pb-0">
            Gender: <b>{{ character.gender }}</b>
        </v-card-subtitle>
    </cards-group>
</template>
<script>
import CardsGroup from '@/components/CardsGroup.vue'

export default {
    name: 'CharactersView',
    components: {
        CardsGroup
    },
    data() {
        return {
            characters: [],
        }
    },
    methods: {
        getCharacters() {
            this.axios.get('characters').then(res => {
                this.characters = [...this.characters, ...res.data]
            })
        }
    },
    mounted() {
        this.getCharacters();
    },
}
</script>
<style></style>