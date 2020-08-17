let api = "https://api.lyrics.ovh/suggest/";
let api2="https://api.lyrics.ovh/v1/";
// searchLyric
let SearchButton = document.getElementById('Search');
SearchButton.addEventListener('click', function(){
    let SearchBox = document.getElementById('SearchBox');
    getResults(SearchBox.value);
});
// api1 Fetch
function getResults(Search){
    fetch(`${api}${Search}`)
    .then(res => res.json())
    .then(displayResult)
}
// Api1 Display
function displayResult(data){
    console.log(data);
    let classNameAlbum = document.getElementsByClassName('Artist');
    for(let i = 0; i < classNameAlbum.length; i++){
       let elements =  classNameAlbum[i];
       elements.innerHTML = data.data[i].album.title;
    }
    let classNameArtist = document.getElementsByClassName("Album");
    for(let i = 0; i < classNameArtist.length; i++){
        let elements2 = classNameArtist[i];
        elements2.innerHTML = data.data[i].artist.name;
    }
}
// LyricButton
let GetLyrics = document.getElementsByClassName('getLyrics');
for(let i = 0; i < GetLyrics.length; i++){
    let elements3 = GetLyrics[i];
    elements3.addEventListener('click', function(){
         let ArtistName = document.getElementsByClassName('Album');
         for(let j = 0; j < ArtistName.length; j++){
             let elements4 = ArtistName[i];
            lyrics(elements4.innerHTML)
             
         }
        let title = document.getElementsByClassName('SearchBox');
        lyrics(title.value)
       function lyrics(data){
        fetch(`${api2}${data}/${data}`)
        .then(res => res.json())
        .then(data => console.log(data))
       }
      



    })
}
