<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="374">
                    <v-img height="300" lazy-src="@/assets/imgs/films_poster.jpeg" :src="character.img_url"></v-img>

                    <v-card-title>{{ character.name }}</v-card-title>

                    <v-card-text>
                        <v-row class="">
                            <v-col v-for="item, index in characterAttrs"
                            cols="6" class="text-md" :key="index">
                                <v-icon aria-hidden="false">
                                    {{ item.icon }}
                                </v-icon> <b>{{ item.title }}:</b> {{ item.attr }}
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                {{ character.mix }}
                {{ character.films }}
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'CharactersView',
    data() {
        return {
            character: {}
        }
    },
    computed: {
        characterAttrs() {
            return [
                {attr: this.character.gender, icon: 'mdi-gender-male-female', title: 'Gender'},
                {attr: this.character.age, icon: 'mdi-cake-variant-outline', title: 'Age'},
                {attr: this.character.skin_color, icon: 'mdi-palette', title: 'Skin color'},
                {attr: this.character.eye_color, icon: 'mdi-eye-outline', title: 'Eye color'},
                {attr: this.character.height, icon: 'mdi-human-male-height', title: 'Height'},
                {attr: this.character.mass, icon: 'mdi-weight-kilogram', title: 'Mass'},
            ]
        }
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