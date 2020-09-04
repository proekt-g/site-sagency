// document.onreadystatechange = function() {
//     if (document.readyState === "interactive") {

//     }
// }
window.addEventListener('load', function() {
    let $contentWord = document.querySelector('.content__word'),
        $contentTitle = document.querySelectorAll('.content__title');






    function autoPrintText(wordIndex, letterIndex, time) {
        setTimeout(function() {
            if ($contentTitle[wordIndex] !== undefined) {
                if ($contentTitle[wordIndex].dataset.text[letterIndex] !== undefined) {
                    $contentTitle[wordIndex].textContent += $contentTitle[wordIndex].dataset.text[letterIndex];
                    autoPrintText(wordIndex, ++letterIndex, 100);
                } else {
                    autoPrintText(++wordIndex, 0, 100);
                }
            } else {
                $contentTitle[$contentTitle.length - 1].insertAdjacentElement('beforeend', $contentWord);
                $contentWord.classList.add($contentWord.className + '--visibility');
                autoPrintWord(0, 0, 200);
            }
        }, time);
    }

    function autoPrintWord(wordIndex, letterIndex, time) {
        setTimeout(function() {
            if ($contentWord.dataset.word.split(' ').length === wordIndex) {
                wordIndex = 0;
                letterIndex = 0;
            }
            $contentWord.innerHTML += $contentWord.dataset.word.split(' ')[wordIndex][letterIndex];
            if ($contentWord.dataset.word.split(' ')[wordIndex].length - 1 === letterIndex) autoDeleteFunction(wordIndex, letterIndex, 800);
            else autoPrintWord(wordIndex, ++letterIndex, 350);
        }, time);
    }

    function autoDeleteFunction(wordIndex, letterIndex, time) {
        setTimeout(function() {
            $contentWord.innerHTML = $contentWord.innerHTML.replace($contentWord.dataset.word.split(' ')[wordIndex][letterIndex], '');
            if ($contentWord.innerHTML.length === 0) autoPrintWord(++wordIndex, 0, 350);
            else autoDeleteFunction(wordIndex, --letterIndex, 350)
        }, time);
    }





    if ($contentTitle.length) autoPrintText(0, 0, 100);
});