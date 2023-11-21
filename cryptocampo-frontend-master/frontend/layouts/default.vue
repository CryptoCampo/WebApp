<template>
    <Navbar class="fixed-at-top"/>
    <div class="top-spacer"></div>
    <SectionTitle class="section-padding"/>
    <router-view class="section-padding"></router-view>
    <StartToday v-if="this.$route.meta.title == 'CAMPAÑA 1.0'" class="my-5"/>
    <Newsletter class="section-padding"/>
    <div class="bottom-spacer"></div>
    <Footer class="section-padding fixed-at-bottom"/>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Newsletter from '../components/newsletter.vue';
import Footer from '../components/footer.vue';
import SectionTitle from '../components/sectionTitle.vue';
import StartToday from '../views/start-today.vue';

export default {
  components: {
    Navbar,
    Newsletter,
    Footer,
    SectionTitle,
    StartToday
},
}
</script>

<style>
  .section-padding{
    padding: 0 5vw
  }

  .fixed-at-top{
    position:fixed; width: 100%; top: 0; z-index: 10
  }

  .top-spacer{
    padding-top: 6vh
  }
  @media (max-width: 1600px) { 
    .section-padding{
      padding: 0 5vw
    }
  }
  @media (max-width: 1000px) { 
    .top-spacer{
      padding-top: 48px;
    }
  }
</style>