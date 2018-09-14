<template>
  <div id="Home">
    <ChartPanel/>
    <img
    class="logoutIcon"
    src="@/assets/Logout_icon.png"
    @click="$router.push({name: 'Login'})"
    >
  </div>
</template>

<script>
import ChartPanel from '@/components/Home/ChartPanel'

export default {
  components:{
    ChartPanel
  }
}
</script>

<style scopped>
#Home{
  height: 100%;
  width: 100%;
  background-color: darkslategray;
}
.logoutIcon{
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>


