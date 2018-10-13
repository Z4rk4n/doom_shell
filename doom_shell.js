function doom_shell(element, string) {
    var cursor = 0;

    var proc = setInterval(print, 1000 / 30);
    var open = false ;
    var balise ;

    function print() {
        if (cursor < string.length) {
            var char = string[cursor];
            switch (char) {
                case "|":
                    char = "<br>";
                    break;
                case "%":
                  if(!open) {
                    balise = document.createElement('span');
                    balise.style = 'color:red';
                    element.append(balise);
                    open = true ;
                  } else {
                    open = false ;
                  }
                  char = '' ;
                  break ;
            }
            if(!open) {
              element.innerHTML += char;
            } else {
              balise.innerHTML += char ;
            }
            cursor++;
        } else {
          proc.cleanInterval;
        }
    }


}
