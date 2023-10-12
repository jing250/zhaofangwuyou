function downloadClose() {
    var download = document.querySelector('.download');
    var close_ = document.querySelector('.close');
    console.log(download);
    download.parentNode.removeChild(download);
    close_.parentNode.removeChild(close_);
}

