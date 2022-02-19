const ITEM_TYPES = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo,
}

function drawImage(item) {
    const imageItem = document.createElement('img');
    imageItem.className = 'item-img';
    imageItem.src = item.res;

    return imageItem;
}

function drawAudio(item) {
    const audioItem = document.createElement('audio');
    audioItem.className = 'item-audio';
    audioItem.src = item.res;
    audioItem.controls = true;

    return audioItem;
}

function drawVideo(item) {
    const videoItem = document.createElement('video');
    videoItem.className = 'item-video';
    videoItem.src = item.res;
    videoItem.controls = true;

    return videoItem;
}

export function drawGallery(item) {
    const galleryItem = document.createElement('article');
    galleryItem.className = 'gallery__item';

    const wrapperElement = document.createElement('div');
    wrapperElement.className = 'wrapper';

    const drawForType = ITEM_TYPES[item.type];
    wrapperElement.appendChild(drawForType(item));
    /* galleryItem.appendChild(drawForType(item)); */

    const titleItem = document.createElement('span');
    titleItem.className = 'item-title';
    titleItem.textContent = item.title;

    galleryItem.appendChild(wrapperElement);
    galleryItem.appendChild(titleItem);

    return galleryItem;
}