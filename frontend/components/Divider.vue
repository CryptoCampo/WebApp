<template>
    <div class="campaigns-divider">
      <h3 className="mb-0">{{ text }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Divider',
    props: {
        text: String,
    }
}
</script>

<style scoped>
  .campaigns-divider {
    background-color: #157116;
    color: #ffffff;
    width: 100%;
    padding: 16px ;
    font-family: Lato;
    margin: 40px 0 0;
  }

  .campaigns-divider h3 {
    font-weight: bold;
    font-size: 25px;
  }

</style>
