let rawtext = document.getElementById("input-text");
let outputText = document.getElementById("output-text");
let botoncopy = document.getElementById("btn-copy");
let noteLeft = document.getElementById("text-info");
let noteRight = document.getElementById("right-msg");
let encodeInput = document.getElementById("boton-encriptar");
let decodeoutput = document.getElementById("boton-desencriptar");
const code = ["enter","imes","ober","ai","ufat"];
const uncode = ["e","i","o","a","u"];

function encodeTex() {
    let text = rawtext.value.trim().replaceAll(/\s+/g," ");
    let decodetext = outputText;

    if (isChecked(text)){
        decodetext.value = "";
        noteLeft.className = "";
        noteRight.style.display = "none";
        botoncopy.style.display = "flex";
        decodetext.className = "right-textarea";
        for (let i = 0; i < uncode.length; i ++) {
            text = text.replaceAll(uncode[i],code[i]);
        }
        decodetext.value += text;
    } else {
        text.value = "";
        noteLeft.className = "Show";

        alert("solo minusculas sin acentos o simbolos");
    }
}

function decodeTxt() {
    let encodeTex = rawtext.value.trim().replaceAll(/\s+/g," ");
    let decodeText = outputText;

    if (isChecked(encodeTex)){
        decodeText.value = "";
        noteLeft.className = "";
        noteRight.style.display = "none";
        botoncopy.style.display = "flex";
        decodeText.className = "right-textarea";
        for (let i = 0; i < uncode.length; i ++) {
            encodeTex = encodeTex.replaceAll(code[i], uncode[i]);
        }
        decodeText.value = encodeTex;
    } else {
        decodeText.value = "";
        noteLeft.className = "show";

        alert("solo minusculas sin acentos o simbolos");
    }
}

function copy(){
    let encodeTex = rawtext;
    let decodetext = outputText;

    encodeTex,value="";
    decodetext.select();
    document.execCommand('copy');
    encodeTex.value = decodetext.value;
    alert("Copiado");
}

function isChecked(text) {
    return !/[^a-z\sñ]/.test(text);
}

encodeInput.addEventListener("click",encodeTex);
decodeoutput.addEventListener("click",decodeTxt);
botoncopy.addEventListener("click",copy);

