<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="374">
                    <v-img height="200" lazy-src="@/assets/imgs/bb-yoda.jpg" :src="film.img_url"></v-img>

                    <v-card-title>{{ film.title }}</v-card-title>
                    <v-card-subtitle class="pb-0">
                        <b>Release date:</b> {{ getCoolDateFormat(film.release_date) }}
                    </v-card-subtitle>

                    <v-card-text>
                        <v-row class="text-slate-900">
                            <v-col cols="12" class="text-md">
                                <v-icon aria-hidden="false">
                                    mdi-account-tie
                                </v-icon> <b>Directors:</b>
                                <ul>
                                    <li v-for="director, index in film.directors" :key="index" class="ml-6">
                                        - {{ director }}
                                    </li>
                                </ul>
                            </v-col>
                            <v-col cols="12" class="text-md">
                                <v-icon aria-hidden="false">
                                    mdi-video-vintage
                                </v-icon> <b>Producers:</b>
                                <ul>
                                    <li v-for="producer, index in film.producers" :key="index" class="ml-6">
                                        - {{ producer }}
                                    </li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <h3 class="text-5xl mb-6 rounded border-b-2 border-yellow-300">Opening crawl</h3>
                <div class="bg-white p-3 shadow-sm shadow-slate-500">
                    <p class="min-h-[45vh] rounded" v-text="film.opening_crawl"></p>

                    <div class="rounded shadow shadow-slate-300">
                        <p class="text-center text-slate-950 text-2xl font-serif">Planets</p>
                        <v-sheet max-width="800">
                            <v-slide-group mandatory show-arrows>
                                <v-slide-item v-for="planet, index in film.planets" :key="index">
                                    <router-link :to="{ name: 'planet_id', params: { id: planet.id } }">
                                        <v-scale-transition>
                                            <v-img class="rounded-sm mx-0.5" height="130" width="180"
                                                lazy-src="@/assets/imgs/planet.webp" :src="planet.img_url">
                                                <small class="py-[0.2px] px-2 rounded-xl bg-white font-semibold">{{ planet.name }}</small>
                                            </v-img>
                                        </v-scale-transition>
                                    </router-link>
                                </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import formatters from '@/mixins/formatters';

export default {
    name: 'FilmsView',
    mixins: [formatters],
    data() {
        return {
            film: {},
        }
    },
    methods: {
        getFilm() {
            this.axios.get(`films/${this.$route.params?.id}`).then(res => {
                this.film = res.data;
            })
        }
    },
    mounted() {
        this.getFilm();
    }
}
</script>
<style></style>