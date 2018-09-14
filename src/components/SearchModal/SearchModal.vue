<template>
  <div class="modal">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-5">
            <SearchPanel></SearchPanel>
          </div>
          <div class="column is-2">
            test
          </div>
          <div class="column is-5">
            test
          </div>
        </div>
      </section>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ConditionPanel from './ConditionPanel'
import SearchPanel from './SearchPanel'

export default {
  components: {
    ConditionPanel,
    SearchPanel
  },
  methods: {
    ReflectCondition: function(){

    }
  }
}  
</script>


<style lang="stylus" scoped>
</style>
