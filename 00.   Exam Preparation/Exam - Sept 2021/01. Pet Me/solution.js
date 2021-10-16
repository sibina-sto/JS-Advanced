function solve() {
  let addContainer = document.getElementById("container");
  let adoptionContainer = document.getElementById("adoption");
  let adoptedContainer = document.getElementById("adopted");
  let addButton = addContainer.children.item(4);

  addButton.addEventListener("click", addPet);

  function addPet(e) {
    e.preventDefault();
    let name = addContainer.children.item(0).value.trim();
    let age = Number(addContainer.children.item(1).value);
    let kind = addContainer.children.item(2).value.trim();
    let currentOwner = addContainer.children.item(3).value.trim();


    let contactButton = el('button', "Contact with owner");
    let takeItButton = el('button', "Yes! I take it!")
    let checkedButton = el('button', "Checked");

    if (name.length > 0 && typeof age === "number" && kind.length > 0 && currentOwner.length > 0) {
      const pet = el("li", [
        el('p', [
          el('strong', name),
          " is a ",
          el('strong', (String)(age)),
          " year old ",
          el('strong', kind)
        ]),
        el('span', `Owner: ${currentOwner}`),
        contactButton
      ])

      contactButton.addEventListener("click", contact);

      function contact() {
        contactButton.remove();
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.placeholder = "Enter your names";
        div.appendChild(input);
        div.appendChild(takeItButton);
        pet.appendChild(div)
      }

      takeItButton.addEventListener("click", takePet);

      function takePet() {
        // let newOwner = adoptionContainer.children.item(1).children.item(2).children.item(0);
        let newOwner = adoptionContainer.querySelector("input");
        if (newOwner.value.trim().length > 0) {
          adoptedContainer.children.item(1).appendChild(pet);
          takeItButton.remove();
          adoptedContainer.querySelector("span").textContent = `New Owner: ${newOwner.value}`;
          newOwner.remove();
          adoptedContainer.querySelector("li").appendChild(checkedButton);
        }
      }

      checkedButton.addEventListener("click", checkOut);

      function checkOut() {
        pet.remove();
      }


      adoptionContainer.children.item(1).appendChild(pet);
      addContainer.children.item(0).value = "";
      addContainer.children.item(1).value = "";
      addContainer.children.item(2).value = "";
      addContainer.children.item(3).value = "";
    }




    function el(type, content, attributes) {
      const result = document.createElement(type);

      if (attributes !== undefined) {
        Object.assign(result, attributes);
      }

      if (Array.isArray(content)) {
        content.forEach(append);
      } else {
        append(content);
      }

      function append(node) {
        if (typeof node === 'string') {
          node = document.createTextNode(node);
        }
        result.appendChild(node);
      }
      return result;
    }
  }
}
