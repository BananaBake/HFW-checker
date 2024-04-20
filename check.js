function check() {
  const text = textE.value;
  let included = [];
  words.forEach(word => {
    if (!word) return;
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (text.match(regex)) {
      included.push(word);
    }
  });
  included = [...new Set(included)];
  itc = included.join(sep);
  includedLabel.textContent = `Included: (${included.length})`;
  includedE.innerHTML = "";
  included.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    includedE.appendChild(li);
  });
}
