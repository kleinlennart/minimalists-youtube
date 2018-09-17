function validateForm() {
    var input = document.forms["YoutubeSearch"]["input"].value;
    var search = input.split(' ').join('+');
    var win = window.open("https://www.youtube.com/results?search_query=" + search, "_self")
}