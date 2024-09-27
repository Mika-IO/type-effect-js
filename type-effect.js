function typeWriter(elementId, words, speed, eraseEffect) {
    let wordIndex = 0;
    let charIndex = 0;
    const element = document.getElementById(elementId);
    element.textContent = "";

    function type() {
        const currentWord = words[wordIndex];
        if (charIndex < currentWord.length) {
            element.textContent += currentWord.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(erase, speed);
        }
    }

    function erase() {
        if (eraseEffect) {
            const currentWord = words[wordIndex];
            if (charIndex > 0) {
                element.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, speed);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, speed);
            }
        }
    }

    type();
}
