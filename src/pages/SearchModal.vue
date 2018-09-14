<template>
  <div id="SearchModal">
    <SearchPanel/>
  </div>
</template>

<script>
import SearchPanel from '@/components/SearchModal/SearchModal'
import {mapGetters} from 'vuex'

export default {
  components:{
    SearchPanel
  }
}  
</script>

<style lang="stylus" scoped>

</style>
