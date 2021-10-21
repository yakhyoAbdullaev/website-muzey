<template>
  <div id="app"> 
        <div class="boxed_wrapper">
<div class="preloader"></div> 
  <header-1></header-1>
<router-view/>
</div>

    </div>
</template>
 
<script>
import Header from './components/Header.vue'

export default {
    components: {
    'header-1':   Header
    },  
}
</script>
