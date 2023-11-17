<script setup lang="ts">
import Chess from "../classes/Board";
const checss = new Chess();
</script>

<template>
  <div class="board">
    <div class="row" v-for="(row, rowIndex) in checss.get()" :key="rowIndex">
      <div
        v-for="(cell, cellIndex) in row"
        :key="`${rowIndex}-${cellIndex}`"
        class="cell"
        :class="cell.color"
        @click="cell.show()"
      >
        {{ cell.position[0] }} | {{ cell.position[1] }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.board {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
.cell {
  width: 40px;
  height: 40px;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px black solid;
  cursor: pointer;

  &.black {
    color: white;
    background-color: grey;
  }
}
</style>
