<template>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col v-for="item, index in items" :key="index" cols="12" :md="md">
                    <v-item>
                        <v-card>
                            <slot :item="item">
                            </slot>

                            <v-card-actions class="flex justify-end">
                                <router-link :to="{name: routeName, params: {id: item.id}}" class="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-50 p-2 rounded-md mr-2 text-lg">
                                    More details
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>
<script>
export default {
    name: 'CardsGroup',
    props: {
        md: {
            type: Number,
            default: 3
        },
        items: {
            type: Array,
            required: true
        },
        routeName: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
    
</style>