<template>
    <div>
        <button @click="temp()" class="bg-blue-500 rounded-lg p-2">Click me please!</button>
    </div>
</template>
<script>
export default {
    name: 'PlanetsView',
    methods: {
        temp() {
            this.axios.get('api/v1/characters').then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
}
</script>
<style></style>