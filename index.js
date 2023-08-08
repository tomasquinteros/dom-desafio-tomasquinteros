const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const ulElement = document.getElementsByClassName('lista')
  const liElements = document.getElementsByTagName('li')
  Array.from(liElements).forEach(list => {
    ulElement[0].removeChild(list)
  })
  const newList = () => {
    const array = []
    for (let i=0; i < cosasQueAprendimos.length; i++) {
      const li = document.createElement('li')
      li.textContent = cosasQueAprendimos[i].tema
      array.push(li)
    }
    return array
  }
  ulElement[0].append(...newList())
}

main();
