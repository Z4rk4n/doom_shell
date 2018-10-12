function doom_shell(element, string) {
    var string = "Print this ...| Prepare to die";
    var cursor = 0;

    setInterval(print, 1000 / 30);

    function print() {
        if (cursor < string.length) {
            var char = string[cursor];
            switch (char) {
                case "|":
                    char = "<br>";
                    break;
            }
            element.innerHTML += char;
            cursor++;
        }
    }
}