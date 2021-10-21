<template>
    <div>
    <div class="gradus">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div :v-slot="header">
  <div class="v360-header text-light bg-yellow" loading="lazy">
      <span class="v360-header-title">image</span>
      <span class="v360-header-description"></span>
  </div>
  <vue-three-sixty 
  :amount=24
  imagePath="./images/1"
  fileName="{index}.jpg"
/>
</div>
  </div>
    <div class="col-md-4">
            <div :v-slot="header">
  <div class="v360-header text-light bg-yellow" loading="lazy">
      <span class="v360-header-title">image</span>
      <span class="v360-header-description"></span>
  </div>
  <vue-three-sixty 
  :amount=24
  imagePath="./images/11"
  fileName="{index}.jpg"
/>
</div>
  </div> 
    <div class="col-md-4">
            <div :v-slot="header">
  <div class="v360-header text-light bg-yellow" loading="lazy">
      <span class="v360-header-title">image</span>
      <span class="v360-header-description"></span>
  </div>
  <vue-three-sixty 
  :amount=24
  imagePath="./images/9"
  fileName="{index}.jpg"
/>
</div>
  </div> 
</div>
  </div>
     </div>
        </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.gradus {
  margin-bottom: 5rem;
    width: 100%;
    background: #f0f0f3;
    height: 762px;
}
</style>