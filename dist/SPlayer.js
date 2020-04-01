/**
   _____   _____    _                               
  / ____| |  __ \  | |                              
 | (___   | |__) | | |   __ _   _   _    ___   _ __ 
  \___ \  |  ___/  | |  / _` | | | | |  / _ \ | '__|
  ____) | | |      | | | (_| | | |_| | |  __/ | |   
 |_____/  |_|      |_|  \__,_|  \__, |  \___| |_|   
                                 __/ |              
                                |___/               
 ----------------------------------------------------
 * SPlayer's JavaScript
 * Last Update: 2020/03/31 [0.2.0]
 * Author: 小太 (https://713.moe/)
 * GitHub: https://github.com/SatoSouta/SPlayer
 * LICENSE: MIT License
 **/
var content = document.getElementById('splayer');
window.content.innerHTML = '<audio id="audio" src=""></audio>\n' +
						   '<div id="cover" style="background-image: url()">\n' +
						   '<div id="black">\n' +
						   '<p id="title">Loading...</p><span id="artist">Loading...</span>\n' +
						   '</div>\n' +
						   '</div>\n' +
						   '<div id="btn_play" onclick="m.play();"></div>\n' +
						   '<div id="btn_pause" onclick="m.pause();" style="display: none;"></div>';
var id = document.getElementById("splayer").getAttribute("netease");
var type = document.getElementById("splayer").getAttribute("type");
var server = document.getElementById("splayer").getAttribute("server");
var m = document.getElementById('audio');
var play = document.getElementById('btn_play');
var pause = document.getElementById('btn_pause');
var black = document.getElementById('black');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var cover = document.getElementById('cover');
var link = document.getElementById('audio');
if(server == '1' || server == null){
	fetch("https://api.i-meto.com/meting/api?server=netease&type=song&id="+id+"").then((res) => {
		return res.json();
	}).then((i) => {
		i = i[0];
		window.title.innerHTML = i.name;
		window.artist.innerHTML = i.artist;
		window.cover.style = 'background-image: url('+i.cover+')';
		window.link.src = i.url;
	});
}
if(server == '2'){
	fetch("https://api.ohmyga.cn/netease/?type=song&id="+id+"").then((res) => {
		return res.json();
	}).then((i) => {
		window.title.innerHTML = i.title;
		window.artist.innerHTML = i.artist;
		window.cover.style = 'background-image: url('+i.cover+')';
		window.link.src = i.link;
	});
}
window.m.load();
var timeout,timeout2,repeat;
function hide() {
	clearTimeout(timeout2);
	timeout = setTimeout(function(){
		black.style.opacity = '0';
		pause.style.top = '95px';
		pause.style.left = "95px";
		play.style.top = '95px';
		play.style.left = "95px";
	}, 3000);
}
function show() {
	clearTimeout(timeout);
	timeout2 = setTimeout(function(){
		play.style.display = 'block';
		pause.style.display = 'none';
	},300);
}
audio.addEventListener('play', function () {  
	play.style.display = 'none';
	pause.style.display = 'block';
	hide();
}, false);
audio.addEventListener('pause', function () {  
	show();
	pause.style.top = '53px';
	pause.style.left = "53px";
	play.style.top = '53px';
	play.style.left = "53px";
	black.style.opacity = '1';
}, false);
audio.addEventListener('ended', function () {  
	show();
	pause.style.top = '53px';
	pause.style.left = "53px";
	play.style.top = '53px';
	play.style.left = "53px";
	black.style.opacity = '1';
}, false);