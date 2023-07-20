<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="374">
                    <v-img height="300" lazy-src="@/assets/imgs/planet.webp" :src="planet.img_url"></v-img>

                    <v-card-title>{{ planet.name }}</v-card-title>

                    <v-card-text>
                        <v-row class="">
                            <v-col v-for="item, index in planetAttrs" cols="6" class="text-md" :key="index">
                                <v-icon aria-hidden="false">
                                    {{ item.icon }}
                                </v-icon> <b>{{ item.title }}:</b> {{ item.attr }}
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <h3 class="text-5xl mb-6 rounded border-b-2 border-yellow-300">Planet description</h3>
                <p class="mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quo, porro eius, ad atque iste amet sequi perferendis ipsam suscipit ea impedit non aliquam tempore commodi reiciendis recusandae vitae inventore ipsum hic mollitia, accusamus perspiciatis incidunt at. Excepturi ipsum necessitatibus debitis sint corporis exercitationem similique quam hic nesciunt adipisci cumque eveniet, est quisquam recusandae inventore iusto dicta fuga fugit nihil repellendus architecto possimus nostrum reiciendis commodi. Facere delectus nostrum, quod soluta similique sit rerum iusto fugiat temporibus a quisquam deleniti quis exercitationem adipisci magnam ipsa maxime voluptas ad! Aperiam animi eum illo laudantium ipsum id quidem rem sed reprehenderit quae?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae id alias corrupti iusto culpa quo, est sed, esse eveniet nulla accusantium similique, aliquid asperiores veritatis neque quibusdam non facilis ex optio debitis amet ad velit quasi? Mollitia dolor maxime sit possimus doloremque laudantium vel reprehenderit voluptatibus ipsam natus, architecto placeat rem harum ad atque suscipit? Illum unde itaque temporibus ut reiciendis corrupti fugiat nulla iure. Ea, incidunt temporibus illum vero, deserunt, provident cupiditate commodi sunt unde amet nobis perferendis mollitia.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'PlanetsView',
    data() {
        return {
            planet: {}
        }
    },
    computed: {
        planetAttrs() {
            return [
                { attr: this.planet.diameter, icon: 'mdi-diameter-outline', title: 'Diameter' },
                { attr: this.planet.climate, icon: 'mdi-weather-cloudy', title: 'Climate' },
                { attr: this.planet.gravity, icon: 'mdi-weight-gram', title: 'Gravity' },
                { attr: this.planet.population, icon: 'mdi-alien-outline', title: 'Population' },
            ]
        },
    },
    methods: {
        async getPlanet() {
            this.axios.get(`planets/${this.$route.params?.id}`).then(res => {
                this.planet = res.data
            })
        }
    },
    mounted() {
        this.getPlanet();
    },
}
</script>
<style></style>