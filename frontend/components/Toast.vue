<template>
  <div class="toast show" v-if="showToast">
    <div class="toast-header ">
      {{ header }}
      <button type="button" class="btn-close" data-bs-dismiss="toast" data-bs-animation="true" @click="close"></button>
    </div>
    <div class="toast-body">{{ message }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    header: " ",
    message: "",
    showToast: false,
  }),
  methods: {
    close(){
      this.showToast = false;
    },
    show(message, timeOut = 3000, title ){
      this.close();
      this.header = title || "Cryptocampo" ;
      this.message = message;
      this.showToast = true;
      setTimeout(this.close, timeOut);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed !important;
  right: 15px !important;
  top: 60px !important;
  z-index: 999999;
}
</style>
