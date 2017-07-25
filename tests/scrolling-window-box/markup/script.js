var filler = '';

for (var i = 0; i < 20000; i++) {
  filler += 'b';
}

document.getElementById('scrollable').innerText = filler;
