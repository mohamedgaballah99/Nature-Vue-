<template>
  <div class="about">
    <about></about>
    <contact></contact>
  </div>
</template>
<script>
import about from '@/components/about';
import contact from '@/components/contact';
export default {
  name: "About",
  components:{
    about,
    contact,
  }

};
</script>
