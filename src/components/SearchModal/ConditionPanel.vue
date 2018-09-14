<template>
  <div class="Condition">
    <p class="Head">
      {{Title}}
      <span class="icon">
        <i class="fas fa-edit" @clike="alert()"></i>
      </span>
    </p>
    <div class="PanelContent">
      <div class="panel-block">
        <span class="tag is-dark">
          Hello World
          <button class="delete is-small"></button>
        </span>
      </div>
      <div class="panel-block">
        <span class="tag is-success">
          Hello World
          <button class="delete is-small"></button>
        </span>
      </div>
      <div class="panel-block">
        <span class="tag is-success">
          Hello World
          <button class="delete is-small"></button>
        </span>
      </div>
      <div class="panel-block">
        <span class="tag is-success">
          Hello World
          <button class="delete is-small"></button>
        </span>
      </div>
      <div class="panel-block">
        <span class="tag is-success">
          Hello World
          <button class="delete is-small"></button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Title'],
}
</script>


<style lang="stylus" scoped>
p{
  font-size:20px;
}
.Condition {
  border:solid 3px #fff;
  border-radius:8px;
  width: 16vw;
  height: 32vh;
  margin: 2vh 1vw;
  position:relative;
  display:inline-block;
  background: #fff;
}
.Head {
  font: bold;
  background: #fff;
  padding: 5px;
}
.PanelContent {
  width: 100%;
  height: 80%;
  overflow: visible scroll;
}
.icon {
  float: right;
  padding: 3px 5px 0px 0px;
  cursor: pointer;
}
.panel{
  &-Condition {
    border:solid 3px #fff;
    border-radius:8px;
    width: 16vw;
    height: 32vh;
    margin: 2vh 1vw;
    position:relative;
    display:inline-block;
  }
  &-block {
    border: none;
  }
}
</style>
