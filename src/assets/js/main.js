// document.onreadystatechange = function() {
//     if (document.readyState === "interactive") {

//     }
// }
window.addEventListener('load', function() {
    let $contentTitleWord = document.querySelector('.content__title-word');

    function autoPrintText(wordIndex, letterIndex, time) {
        setTimeout(function() {
            if ($contentTitleWord.dataset.word.split(' ').length === wordIndex) {
                wordIndex = 0;
                letterIndex = 0;
            }
            $contentTitleWord.innerHTML += $contentTitleWord.dataset.word.split(' ')[wordIndex][letterIndex];
            if ($contentTitleWord.dataset.word.split(' ')[wordIndex].length - 1 === letterIndex) autoDeleteFunction(wordIndex, letterIndex, 800);
            else autoPrintText(wordIndex, ++letterIndex, 350);
        }, time);
    }

    function autoDeleteFunction(wordIndex, letterIndex, time) {
        setTimeout(function() {
            $contentTitleWord.innerHTML = $contentTitleWord.innerHTML.replace($contentTitleWord.dataset.word.split(' ')[wordIndex][letterIndex], '');
            if ($contentTitleWord.innerHTML.length === 0) autoPrintText(++wordIndex, 0, 350);
            else autoDeleteFunction(wordIndex, --letterIndex, 350)
        }, time);
    }

    autoPrintText(0, 0, 200);
});