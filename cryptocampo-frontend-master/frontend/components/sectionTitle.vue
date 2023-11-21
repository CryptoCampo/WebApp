<template>
  <div class="container-fluid main-content d-flex" style="flex-direction: row; justify-content: flex-start"> 
    <div class="d-flex align-items-center sectionTitle sectionTitleMark"> 
    |
    </div>
    <div class="container-title d-flex align-items-center justify-content-between w-100" v-if="noFollowUp">
      <div class="d-flex container-section-title">
        <div class="sectionTitle">{{this.$route.meta.title ? this.$route.meta.title : 'Section name is missing'}}</div>
        <div class="sectionTitle separator-title" v-if="this.$route.meta.followUp">&nbsp;/&nbsp;</div>
        <div class="followUpTitle" v-show="this.$route.meta.followUp">{{this.$route.meta.followUp ? this.$route.meta.followUp : 'Follow up is missing'}}</div>
      </div>
      <div class="sectionDescription" v-show="this.$route.meta.description">{{this.$route.meta.description ? this.$route.meta.description : 'Description is missing'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noFollowUp: true
    }
  },
  created(){
    this.$route.name == "Seguí tu campaña" ? this.noFollowUp = false : this.noFollowUp = true
  }
}
</script>

<style scoped>
.main-content {
  min-height: 20vh;
  background-image: url(../assets/img/headerBackground.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
}
.sectionDescription {
  font-size: 32px;
  color: #F2CD32;
  font-weight: bold;
}

@media (max-width: 1000px) { 
  .sectionTitle{
    font-size: 35px;
  }
  .sectionDescription{
    font-size: 18px;
  }
}
@media (max-width: 700px) { 
  .container-title{
    flex-direction: column;
    justify-content: center!important;
    align-items: center!important;
  }
  .container-section-title{
    flex-direction: column;
  }
  .separator-title{
    display: none;
  }
}
</style>