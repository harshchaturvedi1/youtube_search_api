async function getData() {
    let videodiv = document.getElementById('feed');
    videodiv.innerHTML = null;

    let search = document.getElementById('inputText').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search/?q=${search}&key=[enter_key_here]&maxResults=22`)
    let data = await res.json();

    let { items } = data;
    console.log(items);
    items = items.filter((el) => {
        return el.id.videoId != undefined;
    })
    items.forEach(({ id: { videoId } }) => {
        // console.log(videoId);
        let div = document.createElement('div');
        div.style.marginTop = '20px';
        div.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0"></iframe>`;
        videodiv.append(div)
    });
}