import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songList: [
      {
        songName: "Song1",
        artist: "Musician1"
      },
      {
        songName: "Song2",
        artist: "Musician2"
      },
      {
        songName: "Song3",
        artist: "Musician3"
      },
      {
        songName: "Song4",
        artist: "Musician4"
      },
      {
        songName: "Song5",
        artist: "Musician5"
      },
      {
        songName: "Song6",
        artist: "Musician6"
      },
      
    ],
    playList: []
  },
  mutations: {
    makePlaylist: function(state, song) {
      state.playList.push(song);
      for(let i = 0; i < state.songList.length; i++) {
        if(state.songList[i] == song) {
          state.songList.splice(i, 1);
        }
      }
    },

    deletePlaylist: function(state, deleteSong) {
      state.songList.push(deleteSong);
      for(let i = 0; i < state.playList.length; i++) {
        if(state.playList[i] == deleteSong) {
          state.playList.splice(i, 1);
        }
      }
    }
  },
  actions: {},
  modules: {}
});
