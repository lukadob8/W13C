<template>
<div id="song-list">
    <h1>Songs</h1>
    <div id="songDiv" v-for="song in songs" :key="song.songName">
        <h2>{{ song.songName }}</h2>
        <h3>{{ song.artist }}</h3>
        <button @click="toPlaylist(song)" >Add to Playlist</button>
    </div>
    
    
</div>
    
</template>

<script>

export default {
    name: "song-list",
    components: {
    
    },

    computed:{
        songs: function() {
            return this.$store.state.songList;
        }
    },
    methods: {
        toPlaylist: function(song) {
            this.$store.commit('makePlaylist', song);
        }
    }

    
}
</script>

<style scoped>
    #song-list {
        display: grid;
        row-gap: 50px;
        
    }
    #songDiv {
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: burlywood;
    }
</style>