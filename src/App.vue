<template>
  <div id="grid">
    <song-list> </song-list>
    <play-list> </play-list>
  </div>
</template>

<script>
import SongList from "./components/songList.vue"
import PlayList from "./components/playList.vue"



export default {
  name: "App",
  components: {
    SongList,
    PlayList
    
  }
};
</script>

<style>
#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
};

</style>
