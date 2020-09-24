<template>
<div id="playlist">
    <h1>Your Playlist</h1>
    <div id="songDiv" v-for="song in songs" :key="song.songName">
        <h2>{{ song.songName }}</h2>
        <h3>{{ song.artist }}</h3>
        <button @click="fromPlaylist(song)" >Remove from Playlist</button>

    </div>
    
</div>
    
</template>

<script>

export default {
    name: "play-list",
    components: {
        
    },
    computed: {
        songs: function() {
            return this.$store.state.playList;
        }
    },
    methods: {
        fromPlaylist: function(song) {
            this.$store.commit('deletePlaylist', song);
        }
    }
}
</script>

<style scoped>
    #playlist {
        display: grid;
        row-gap: 50px;
    }
    #songDiv {
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: turquoise;
    }

</style>