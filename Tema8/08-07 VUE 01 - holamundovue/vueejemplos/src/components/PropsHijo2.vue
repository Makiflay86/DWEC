<template>
    <div>
        <h3>Soy {{ estado }} </h3>
        <h4>Yo uso {{ programa }}</h4>
    </div>
</template>

<script>
    export default {
        props: {
            estado: { type: String, required: true },
            programa: { type: String, required: true }
        }
    }
</script>

<style scoped>
    h3 
    {
        color: green;
    }

    h4
    {
        color: yellow;
    }
</style>