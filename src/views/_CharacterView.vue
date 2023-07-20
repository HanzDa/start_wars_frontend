<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="374">
                    <v-img height="300" lazy-src="@/assets/imgs/bb-yoda.jpg" :src="character.img_url"></v-img>

                    <v-card-title>{{ character.name }}</v-card-title>

                    <v-card-text>
                        <v-row class="">
                            <v-col v-for="item, index in characterAttrs" cols="6" class="text-md" :key="index">
                                <v-icon aria-hidden="false">
                                    {{ item.icon }}
                                </v-icon> <b>{{ item.title }}:</b> {{ item.attr }}
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <h3 class="text-5xl mb-6 rounded border-b-2 border-yellow-300">Stellar film appearances</h3>
                <loader-indicator v-if="!character.films"></loader-indicator>
                <v-data-table :headers="filmsTableHeaders" :items="character.films" :items-per-page="5"
                    class="shadow-sm shadow-slate-500">
                    <template v-slot:[`item.img_url`]="{item}">
                        <v-img class="m-2" lazy-src="@/assets/imgs/films_poster.jpeg" :src="item.img_url" width="160"></v-img>
                    </template>

                    <template v-slot:[`item.actions`]="{item}">
                        <router-link :to="{name: 'film_id', params: {id: item.id}}" class="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-50 p-2 rounded-md mr-2 text-lg">
                            More details
                        </router-link>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import LoaderIndicator from '@/components/LoaderIndicator'

export default {
    name: 'CharactersView',
    components: {
        LoaderIndicator
    },
    data() {
        return {
            character: {},
            filmsTableHeaders: [
                { text: 'Image', sortable: false, value: 'img_url' },
                { text: 'Title', sortable: false, value: 'title' },
                { text: 'Release date', value: 'release_date' },
                { text: 'Actions', value: 'actions', sortable: false },
            ]
        }
    },
    computed: {
        characterAttrs() {
            return [
                { attr: this.character.gender, icon: 'mdi-gender-male-female', title: 'Gender' },
                { attr: this.character.age, icon: 'mdi-cake-variant-outline', title: 'Age' },
                { attr: this.character.skin_color, icon: 'mdi-palette', title: 'Skin color' },
                { attr: this.character.eye_color, icon: 'mdi-eye-outline', title: 'Eye color' },
                { attr: this.character.height, icon: 'mdi-human-male-height', title: 'Height' },
                { attr: this.character.mass, icon: 'mdi-weight-kilogram', title: 'Mass' },
            ]
        },
    },
    methods: {
        getCharacter() {
            this.axios.get(`characters/${this.$route.params?.id}`).then(res => {
                this.character = res.data
            })
        }
    },
    mounted() {
        this.getCharacter();
    }
}
</script>
<style></style>