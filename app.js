function copyToClipboard() {
    const outputText = document.getElementById("outputText").textContent;
    if (outputText) {
        navigator.clipboard.writeText(outputText).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}

function encryptText() {
    const text = document.getElementById("inputText").value;
    const shift = 3;
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encryptedText += text.charAt(i);
        }
    }
         document.getElementById("outputText").textContent = encryptedText;
}

function decryptText() {
    const text = document.getElementById("inputText").value;
    const shift = 3;
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        
        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            decryptedText += text.charAt(i);
        }
    }
    document.getElementById("outputText").textContent = decryptedText;
}