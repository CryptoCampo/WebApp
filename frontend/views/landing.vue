<template>
  <div class="main-content">
    Landing Page
    <AdminPanel />
  </div>
</template>

<script>
import AdminPanel from '../components/admin-panel.vue'
export default {
  components: {
    AdminPanel
  },
}
</script>

<style lang="css" scoped>
.main-content {
  min-height: 50vh;
  background-color: white;
}
</style>