function doom_shell(element, string) {
    var cursor = 0;

    var proc = setInterval(print, 1000 / 60);
    var open = false;
    var balise;

    function print() {
        if (cursor < string.length) {
            var char = string[cursor];
            switch (char) {
                case "|":
                    char = "<br>";
                    break;
                case "[":
                    createDoomShellElement();
                    char='';
                    break;
                case "]":
                    char = '';
                    open = false ;
                    break;
            }
            if (!open) {
                element.innerHTML += char;
            } else {
                balise.innerHTML += char;
            }
            cursor++;
        } else {
            proc.cleanInterval;
        }
    }

    function createDoomShellElement() {
        cursor++;
        var str = "";
        while (string[cursor] != ']') {
            str += string[cursor];
            cursor++;
        }

        switch(str) {
            case 'clear':
                element.innerHTML='';
                break;
            default:
                balise = document.createElement('span');
                balise.style = 'color:' + str;
                element.append(balise);
                open = true;
                break;
        }

    }


}
