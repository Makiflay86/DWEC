<template>
    <PropsHijo nombre="Jordi the boy **" edad="109" /><br>
    <PropsHijo2 estado="inmortal" programa="VUE" />
</template>

<script>
    import PropsHijo from './PropsHijo.vue';
    import PropsHijo2 from './PropsHijo2.vue';
    export default { components: { PropsHijo, PropsHijo2 } }
</script>