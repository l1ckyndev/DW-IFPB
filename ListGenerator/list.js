// Criando e gerando lista
export function createList(quantity, text = "Text") {
    let list = "<ul>\n";

    for (let i = 1; i <= quantity; i++) {
      list += `  <li>${text} ${i}</li>\n`;
    }

    list += "</ul>";

    return list;
}