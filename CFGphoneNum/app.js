var rules = {
    "start": ["#NP# #VP#."],
   
let grammar = tracery.createGrammar(rules);
let expansion = grammar.flatten('#start#');
let sentences = []
function generate() {
    var data = {
    	"start": ["#NP#"],
    	"NP": ["#area# #N# #NL#"],
    	"area": ["787","939"],
    	"N": ["214","932","345","171","023"],
        "NL": ["2345", "2453", "5673", "2598"],
    }
    
    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);

    printSentences(sentences);
}
function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
function createNumber(){
    var Number = {

    }
}
