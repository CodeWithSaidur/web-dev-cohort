// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
  this.songs = [];
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
  return this.songs;
};

let n = new Playlist();
n.addSong('a')
console.log(n);
