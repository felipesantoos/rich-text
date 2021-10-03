// Desabilitar rolagem da página.
function disableScrolling(){
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){
        window.scrollTo(x, y);
    };
}

// Habilitar rolagem da página.
function enableScrolling(){
    window.onscroll = function(){};
}

// Modelo de botão padrão de formatação.
function defaultButtons(id, icon, format) {
    var button = document.getElementById(id);
    button.classList.add("option");
    button.setAttribute("onclick", "format('" + format + "')");
    var i = document.createElement("i");
    i.classList = icon;
    button.appendChild(i);
}

// Contrução de botões-padrão de formatação.
defaultButtons("bold", "fa fa-bold", "bold");
defaultButtons("italic", "fa fa-italic", "italic");
defaultButtons("underline", "fa fa-underline", "underline");
defaultButtons("strikethrough", "fa fa-strikethrough", "strikethrough");
defaultButtons("superscript", "fa fa-superscript", "superscript");
defaultButtons("subscript", "fa fa-subscript", "subscript");
defaultButtons("unordered-list", "fa fa-list-ul", "insertUnorderedList");
defaultButtons("ordered-list", "fa fa-list-ol", "insertOrderedList");
defaultButtons("align-left", "fa fa-align-left", "justifyLeft");
defaultButtons("align-center", "fa fa-align-center", "justifyCenter");
defaultButtons("align-right", "fa fa-align-right", "justifyRight");
defaultButtons("align-justify", "fa fa-align-justify", "justifyFull");
defaultButtons("indent", "fa fa-indent", "indent");
defaultButtons("outdent", "fa fa-outdent", "outdent");
defaultButtons("horizontal-rule", "fa fa-horizontal-rule", "insertHorizontalRule");
defaultButtons("eraser", "fa fa-eraser", "removeFormat");
// Ícone pago.
function createHorizontalRuleIcon() {
    $(".fa-horizontal-rule").append(document.createTextNode("—"));
}

// Contruir ícone de linha horizonal.
createHorizontalRuleIcon();

// Modelo de botão para invocar funções variadas.
function button(id, icon, func) {
    var button = document.getElementById(id);
    button.classList.add("option");
    button.setAttribute("onclick", func);
    var i = document.createElement("i");
    i.classList = icon;
    button.appendChild(i);
}

// Construção dos botões para invocar funções variadas.
button("url", "fa fa-link", "setUrl()");
button("checkbox", "fa fa-check-square", "addCheckbox()");
button("quote", "fa fa-quote-left", "addQuote()");

// Modelo de dropdown de cores.
function ddColors(id, classes, iconClasses, contentClasses, contentId) {
    var button = document.getElementById(id);
    button.classList = classes;
    var divIcon = document.createElement("div");
    var i = document.createElement("i");
    i.classList = iconClasses;
    divIcon.appendChild(i);
    button.appendChild(divIcon);
    var divContent = document.createElement("div");
    divContent.classList = contentClasses;
    var table = document.createElement("table");
    table.id = contentId;
    divContent.appendChild(table);
    button.appendChild(divContent);
}

// Construção dos dropdowns de cor do texto e de fundo.
ddColors("dd-fore-color", "dd-clrs option", "fa fa-font i-fore-color", "dd-clrs-cont", "table-fore-colors");
ddColors("dd-back-color", "dd-clrs option", "fa fa-pencil-square i-back-color", "dd-clrs-cont", "table-back-colors");

// Função de contrução do botão de alteração do tamanho da fonte.
function ddFontSize(){
    var button = document.getElementById("font-size");
    button.classList = "dd-def option";
    var smallT = document.createElement("span");
    smallT.classList = "i-small-t";
    smallT.appendChild(document.createTextNode("T"));
    button.appendChild(smallT);
    var bigT = document.createElement("span");
    bigT.classList = "i-big-t";
    bigT.appendChild(document.createTextNode("T"));
    button.appendChild(bigT);
    var divContent = document.createElement("div");
    divContent.classList = "dd-def-cont";
    divContent.style.width = "270px";

    // Opções.
    for (var i = 1; i <= 7; i++) {
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("onclick", "setFontSize(" + i + ")");
        var font = document.createElement("font");
        font.setAttribute("size", i);
        var fontText = document.createTextNode("Tamanho " + i);
        font.appendChild(fontText)

        // Tamanho padrão.
        if(i == 3) {
            var spanDef = document.createElement("span");
            spanDef.style.float = "right";
            spanDef.style.fontSize = "12px";
            spanDef.style.fontStyle = "italic";
            spanDef.style.color = "grey";
            spanDef.appendChild(document.createTextNode("(padrão)"));
            font.appendChild(spanDef);
        }

        a.appendChild(font);
        divContent.appendChild(a);
    }

    button.appendChild(divContent);
}

// Contrução do botão de alteração do tamanho da fonte.
ddFontSize();

// Função de contrução do botão de alteração do família da fonte.
function ddFontFamily(){

    var fontFamilyList = [
        "Arial", 
        "Courier New", 
        "Impact", 
        "monospace", 
        "Open Sans", 
        "Times New Roman", 
        "Ubuntu",
    ];

    var button = document.getElementById("font-family");
    button.classList = "dd-def option";
    var imgF = document.createElement("img");
    imgF.classList = "i-font-family";
    imgF.src = "icons/icon-choose-font.png";
    button.appendChild(imgF);
    var divContent = document.createElement("div");
    divContent.classList = "dd-def-cont";
    divContent.style.minWidth = "190px";

    // Opções.
    for (var i = 0; i < 7; i++) {
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("onclick", "format('fontName', '" + fontFamilyList[i] + "')");
        var span = document.createElement("span");
        span.style.fontFamily = fontFamilyList[i];
        var spanText = document.createTextNode(fontFamilyList[i]);
        span.appendChild(spanText)

        // Tamanho padrão.
        if(i == 0) {
            var spanDef = document.createElement("span");
            spanDef.style.float = "right";
            spanDef.style.fontSize = "12px";
            spanDef.style.fontStyle = "italic";
            spanDef.style.color = "grey";
            spanDef.appendChild(document.createTextNode("(padrão)"));
            span.appendChild(spanDef);
        }

        a.appendChild(span);
        divContent.appendChild(a);
    }

    button.appendChild(divContent);
}

// Contrução do botão de alteração da familía da fonte.
ddFontFamily();

// Função de contrução do botão de adição de cabeçalhos.
function ddHeading(){
    var button = document.getElementById("heading");
    button.classList = "dd-def option";
    var icon = document.createElement("i");
    icon.classList = "fa fa-header";
    button.appendChild(icon);
    var divContent = document.createElement("div");
    divContent.classList = "dd-def-cont";
    divContent.style.minWidth = "200px";

    // Opções.
    for (var i = 1; i <= 6; i++) {
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("onclick", "addHeading("+ i + ")");
        var h = document.createElement("h" + i);
        var hText = document.createTextNode("Cabeçalho " + i);
        h.appendChild(hText)
        a.appendChild(h);
        divContent.appendChild(a);
    }

    button.appendChild(divContent);
}

// Contrução do botão de adição de cabeçalho.
ddHeading();

// Função de contrução do botão de adição de imagem e GIF.
function buttonImage() {
    var button = document.getElementById("image");
    button.classList = "option";
    button.style.padding = "0px";
    var label = document.createElement("label");
    label.classList = "i-image";
    label.setAttribute("for", "up-img");
    button.appendChild(label);
    var icon = document.createElement("i");
    icon.classList = "fa fa-image";
    label.appendChild(icon);
    var input = document.createElement("input");
    input.setAttribute("id", "up-img");
    input.setAttribute("type", "file");
    input.setAttribute("onchange", "addImage(event)");
    label.appendChild(input);
}

// Construção do botão de adição de imagem e GIF.
buttonImage();

// Função de construção do botão da tabela de emojis.
function buttonEmojis() {
    var button = document.getElementById("emojis");
    button.setAttribute("class", "dd-emjs option");
    var divIcon = document.createElement("div");
    button.appendChild(divIcon);
    var icon = document.createElement("i");
    divIcon.appendChild(icon);
    icon.setAttribute("class", "fa fa-smile-o");
    var divContent = document.createElement("div");
    button.appendChild(divContent);
    divContent.setAttribute("class", "dd-emjs-cont");
    var table = document.createElement("table");
    divContent.appendChild(table);
    table.setAttribute("id", "table-emojis");
}

// Construção do botão da tabela de emojis.
buttonEmojis();

// Execução de formatação.
function format(command, value) {
    disableScrolling();
    document.execCommand(command, false, value);
    setTimeout(enableScrolling, 1);
}

// Adição de URL.
function setUrl() {
    var sel = document.getSelection();
    var url = prompt("Digite a URL:");
    var link = '<a href="' + url + '" target="_blank">' + sel + '</a>';
    document.execCommand("insertHTML", false, link);
}

// Alteração do tamanho da fonte.
function setFontSize(size) {
    var sel = document.getSelection();
    disableScrolling();
    document.execCommand("fontSize", false, size);
    setTimeout(enableScrolling, 1);
    if (size != 3) {
        setQuoteSize();
    }
}

// Adição de diferentes tipos de cabeçalho.
function addHeading(h) {
    var sel = document.getSelection();
    var heading = "<h" + h + ">";
    disableScrolling();
    document.execCommand('formatBlock', false, heading);
    setTimeout(enableScrolling, 1);
}

// Adição de caixas de seleção.
function addCheckbox() {
    var sel = document.getSelection().toString();
    sel = sel.split("\n");
    var checkbox = "";
    for(var i = 0; i < sel.length; i++) {
        checkbox += `<input type='checkbox'> ${sel[i]}<br>`;
    }
    document.execCommand('insertHTML', false, checkbox);
}

// Adição de imagem.
function addImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var br = document.createElement("br");
        var texto = document.getElementById("main");
        var img = document.createElement("img");
        texto.appendChild(br);
        texto.appendChild(img);
        img.src = reader.result;
        img.style.width = "50%";
        img.style.margin = "5px 0px";
        img.classList.add("image");
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Permitição de redimensionamento de imagem.
$(document).on("click", ".image", function (e) {
    $("#resizable").removeAttr("id");
    $(this).css("border", "1px solid blue");
    $(this).attr("id", "resizable");
    $(this).resizable();
    $(this).css("display", "inline");
    $(".ui-wrapper").css("display", "inline-block");
});

// Bloqueio de redimensionamento de imagem no campo de pergunta.
$("#main").click(function(e) {
    if(e.target.id !== "resizable") {
        $("#resizable").resizable("destroy");
        $("#resizable").removeAttr("id");
        $(".image").css("border", "1px solid transparent");
        $(".image").css("display", "inline");
    }
});

// Códigos hexadecimais das cores-padrão.
var colors = [
    "000000", "414141", "666666", "9a9a9a", "b8b8b8", "cdcdcd", "dadada", "efefef", "f3f3f3", "ffffff",
    "9b3216", "ed5127", "f39820", "fdf400", "72ea12", "6cf6fd", "4987e8", "2458ff", "a065ff", "eb74fe",
    "e7bab1", "f4cdcd", "fce6ce", "fef2cd", "daead5", "d1e0e3", "cadbf8", "d0e3f3", "dad3ea", "ebd2dd",
    "de7e6b", "ea9a9a", "f9cc9d", "fde69a", "b7d8a9", "a3c5ca", "a6c3f4", "a0c6e9", "b6a9d8", "d6a7bf",
    "ce4522", "e16566", "f6b36b", "fcd966", "94c57e", "76a6b1", "6e9feb", "6faadd", "8f7dc4", "c37ca2",
    "a93719", "ce4521", "e69235", "f1c32e", "6aa94e", "43828f", "3978d9", "3a86c8", "674da8", "a84c79",
    "872a11", "9c3216", "b55f18", "c19110", "377716", "1c4e5c", "0554cd", "125395", "342776", "752945",
    "5c1a08", "671e0b", "783d0c", "806007", "244d0a", "0f313b", "154388", "083463", "1c164c", "4c182c"
];

// Modelo de tabela de cores.
function tableColors(id, ground) {
    var table = document.getElementById(id);
    var ctrl = 0;
    for (var i = 0; i < 8; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < 10; j++) {
            var cell = row.insertCell(j);
            var button = document.createElement("button");
            button.setAttribute("onclick", "format('" + ground + "', '#" + colors[j + ctrl] + "')");
            button.classList.add("btn-clr");
            button.style.backgroundColor = "#" + colors[j + ctrl];
            cell.appendChild(button);
        }
        ctrl += 10;
    }
}

// Contrução das tabelas de cores do texto e de fundo.
tableColors("table-fore-colors", "foreColor");
tableColors("table-back-colors", "backColor");

// Lista de emojis-padrão.
var people_and_faces = "😄 😃 😀 😊 ☺ 😉 😍 😘 😚 😗 😙 😜 😝 😛 😳 😁 😔 😌 😒 😞 😣 😢 😂 😭 😪 😥 😰 😅 😓 😩 😫 😨 😱 😠 😡 😤 😖 😆 😋 😷 😎 😴 😵 😲 😟 😦 😧 😈 👿 😮 😬 😐 😕 😯 😶 😇 😏 😑 👲 👳 👮 👷 💂 👶 👦 👧 👨 👩 👴 👵 👱 👼 👸 👹 👺 💀 👽 💩";
var animals = "😺 😸 😻 😽 😼 🙀 😿 😹 😾 🐵 🙈 🙉 🙊 🐶 🐺 🐱 🐭 🐹 🐸 🐯 🐨 🐻 🐷 🐽 🐮 🐗 🐒 🐴 🐑 🐘 🐼 🐧 🐦 🐤 🐥 🐣 🐔 🐍 🐢 🐛 🐝 🐜 🐞 🐌 🐙 🐚 🐠 🐟 🐬 🐳 🐋 🐄 🐏 🐀 🐃 🐅 🐇 🐉 🐎 🐐 🐓 🐕 🐖 🐁 🐂 🐲 🐡 🐊 🐫 🐪 🐆 🐈 🐩 🐾";
var plants_and_flowers = "💐 🌸 🌷 🍀 🌹 🌻 🌺 🍁 🍃 🍂 🌿 🌾 🍄 🌵 🌴 🌲 🌳 🌰 🌱 🌼 🍎 🍏 🍊 🍋 🍒 🍇 🍉 🍓 🍑 🍈 🍌 🍐 🍍 🍠 🍆 🍅 🌽 💮";
var fashion_and_accessories = "🎩 👑 👒 👟 👞 👡 👠 👢 👕 👔 👚 👗 🎽 👖 👘 👙 💼 👜 👝 👛 👓 🎀 🌂 💄";
var hearts_and_love = "💛 💙 💜 💚 ❤ 💔 💗 💓 💕 💖 💞 💘 💌 💋 💍 💎 👤 👥 💬 👣 💭 💝 👫 👪 👬 👭 💏 💑 💟";
var weather_and_time = "🌐 🌞 🌝 🌚 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌜 🌛 🌙 🌍 🌎 🌏 🌋 🌌 🌠 ⭐ ☀ ⛅ ☁ ⚡ ☔ ❄ ⛄ 🌀 🌁 🌈 🌊 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕖 🕗 🕘 🕙 🕚 🕡 🕢 🕣 🕤 🕥 🕦";
var food_and_drinks = "☕ 🍵 🍶 🍼 🍺 🍻 🍸 🍹 🍷 🍴 🍕 🍔 🍟 🍗 🍖 🍝 🍛 🍤 🍱 🍣 🍥 🍙 🍘 🍚 🍜 🍲 🍢 🍡 🍳 🍞 🍩 🍮 🍦 🍨 🍧 🎂 🍰 🍪 🍫 🍬 🍭 🍯";
var sports_games_and_hobbies = "🎨 🎬 🎤 🎧 🎼 🎵 🎶 🎹 🎻 🎺 🎷 🎸 👾 🎮 🃏 🎴 🀄 🎲 🎯 🏈 🏀 ⚽ ⚾ 🎾 🎱 🏉 🎳 ⛳ 🚵 🚴 🏁 🏇 🏆 🎿 🏂 🏊 🏄 🎣";
var buildings_locations_and_landmarks = "🏠 🏡 🏫 🏢 🏣 🏥 🏦 🏪 🏩 🏨 💒 ⛪ 🏬 🏤 🌇 🌆 🏯 🏰 ⛺ 🏭 🗼 🗾 🗻 🌄 🌅 🌃 🗽 🌉 🎠 🎡 ⛲ 🎢";
var transport = "🚢 ⛵ 🚤 🚣 ⚓ 🚀 ✈ 💺 🚁 🚂 🚊 🚉 🚞 🚆 🚄 🚅 🚈 🚇 🚝 🚋 🚃 🚎 🚌 🚍 🚙 🚘 🚗 🚕 🚖 🚛 🚚 🚨 🚓 🚔 🚒 🚑 🚐 🚲 🚡 🚟 🚠 🚜 💈 🚏 🎫 🚦 🚥 ⚠ 🚧 🔰 ⛽ 🏮 🎰 ♨ 🗿 🎪 🎭 📍 🚩";
var books_envelopes_and_stationery = "📧 📥 📤 ✉ 📩 📨 📯 📫 📪 📬 📭 📮 📦 📝 📄 📃 📑 📊 📈 📉 📜 📋 📅 📆 📇 📁 📂 ✂ 📌 📎 ✒ ✏ 📏 📐 📕 📗 📘 📙 📓 📔 📒 📚 📖 🔖 📛 📛 🔭 📰 💰 💴 💵 💷 💶 💳 💸";
var technology = "🎥 📷 📹 📼 💿 📀 💽 💾 💻 📱 ☎ 📞 📟 📠 📡 📺 📻 🔊 🔉 🔈 🔇 🔔 🔕 📢 📣 ⏳ ⌛ ⏰ ⌚ 🔓 🔒 🔏 🔐 🔑 🔎 💡 🔦 🔌 🔋 🔍 🔧 🔩 🔨 📲 📶 🎦 📳 📴";
var numbers_and_letters = "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ 🔡 🔤 ℹ 🆗 🆕 🆙 🆒 🆓 🆖 🅿 Ⓜ 🆑 🆘 🆔 🆚 🅰 🅱 🆎 🅾 © ® 💯 ™ 🔠 🏧 ‼ ⁉ ❗ ❓ ❕ ❔";
var hand_signs_and_arrows = "👍 👎 👌 👊 ✊ ✌ 👋 ✋ 👐 👆 👇 👉 👈 🙌 🙏 ☝ 👏 💪 💅 ⬇ ⬅ ➡ ↗ ↖ ↘ ↙ ↔ ↕ 🔄 ◀ ▶ 🔼 🔽 ↩ ↪ ⏪ ⏩ ⏫ ⏬ ⤵ ⤴ 🔀 🔁 🔂 🔝 🔚 🔙 🔛 🔜 🔃 🔺 🔻 ⬆";
var zodiac_signs_and_flags = "♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🇯🇵 🇰🇷 🇩🇪 🇨🇳 🇺🇸 🇫🇷 🇪🇸 🇮🇹 🇷🇺 🇬🇧";
var symbols = "🚻 🚹 🚺 🚼 🚾 🚰 🚮 ♿ 🚭 🛂 🛄 🛅 🛃 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ♻ 💠 ➿";
var other = "🎍 🎎 🎒 🎓 🎏 🎆 🎇 🎐 🎑 🎃 👻 🎅 🎄 🎁 🎋 🎉 🎊 🎈 🎌 🔮 🔆 🔅 🛁 🛀 🚿 🚽 🚪 🚬 💣 🔫 🔪 💊 💉 🔥 ✨ 🌟 💫 💥 💢 💦 💧 💤 💨 👂 👀 👃 👅 👄 🚶 🏃 💃 👯 🙆 🙅 💁 🙋 💆 💇 👰 🙎 🙍 🙇 🔯 💹 💲 💱 ❌ ⭕ ✖ ➕ ➕ ➗ ♠ ♥ ♣ ♦ ✔ ☑ 🔘 🔗 ➰ 〰 〽 🔱 ◼ ◻ ◾ ◽ ▪ ▫ 🔲 🔳 ⚫ ⚪ 🔴 🔵 ⬜ ⬛ 🔶 🔷 🔸 🔹 🈁 🈯 🈳 🈵 🈴 🈲 🉐 🈹 🈺 🈶 🈚 🈷 🈸 🈂 🉑 ㊙ ㊗ ✳ ❇ ✴ ❎ ✅";

// Modelo de tabela de emojis.
function emojisTable(textTitle, emojis) {
    emojis = emojis.split(" ");
    var table = document.getElementById("table-emojis");
    var ctrl = 0;
    var title = document.createElement("div");
    title.style.margin = "10px 5px";
    title.style.textAlign = "left";
    title.style.fontWeight = "bold";
    title.style.fontSize = "16px";
    title.appendChild(document.createTextNode(textTitle));
    var r = table.insertRow(-1);
    var c = r.insertCell(0);
    c.colSpan = 10;
    c.appendChild(title);
    for (var i = 0; i < 11; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < 10; j++) {
            if(emojis[j + ctrl] != null){
                var cell = row.insertCell(j);
                var button = document.createElement("button");
                var span = document.createElement("span");
                span.classList.add("emoji");
                span.appendChild(document.createTextNode(emojis[j + ctrl]));
                button.appendChild(span);
                button.setAttribute("onclick", "addEmoji('" + emojis[j + ctrl] + "')");
                cell.appendChild(button);
            }
        }
        ctrl += 10;
    }
}

// Construção da tabela de emojis.
emojisTable("Pessoas e faces", people_and_faces);
emojisTable("Animais", animals);
emojisTable("Plantas e flores", plants_and_flowers);
emojisTable("Modas e acessórios", fashion_and_accessories);
emojisTable("Corações e amor", hearts_and_love);
emojisTable("Clima e tempo", weather_and_time);
emojisTable("Comidas e bebidas", food_and_drinks);
emojisTable("Esportes, jogos e hobbies", sports_games_and_hobbies);
emojisTable("Locais e pontos de referência de edifícios", buildings_locations_and_landmarks);
emojisTable("Transporte", transport);
emojisTable("Livros, envelopes e papelaria", books_envelopes_and_stationery);
emojisTable("Tecnologia", technology);
emojisTable("Números e letras", numbers_and_letters);
emojisTable("Sinais de mão e setas", hand_signs_and_arrows);
emojisTable("Signos do zodíaco e bandeiras", zodiac_signs_and_flags);
emojisTable("Símbolos", symbols);
emojisTable("Outros", other);

// Adição de emoji.
function addEmoji(emoji) {
    var sel = document.getSelection();
    document.execCommand('insertText', false, emoji);
}

function addQuote() {
    var sel = document.getSelection();
    var new_quote = '<div class="quote">' + sel + '</div>';
    document.execCommand("insertHTML", false, new_quote);
    var quotes = document.getElementsByClassName("quote");
    for(var i = 0; i < quotes.length; i++) {
        quotes[i].style.backgroundColor = "rgb(240, 250, 255)";
        quotes[i].style.borderLeft = "3px solid black";
        quotes[i].style.paddingLeft = "10px";
        quotes[i].style.paddingTop = "5px";
        quotes[i].style.height = "25px";
        quotes[i].style.verticalAlign = "middle";
        quotes[i].style.margin = "10px 0px";
        quotes[i].style.fontSize = "16px";
    }
}

function setQuoteSize() {
    var quotes = document.getElementsByClassName("quote");
    for(var i = 0; i < quotes.length; i++) {
        var size = quotes[i].children[0].size;
        if (size == 1) {
            quotes[i].style.height = "10px";
            quotes[i].style.padding = "2px 5px 6px 5px";
            quotes[i].style.lineHeight = "10px";
            quotes[i].style.borderLeftWidth = "3px";
        } else if (size == 2) {
            quotes[i].style.height = "15px";
            quotes[i].style.padding = "2px 5px 6px 5px";
            quotes[i].style.lineHeight = "15px";
            quotes[i].style.borderLeftWidth = "3px";
        } else if (size == 3) {
            quotes[i].style.height = "20px";
            quotes[i].style.padding = "2px 5px 6px 5px";
            quotes[i].style.lineHeight = "20px";
            quotes[i].style.borderLeftWidth = "3px";
        } else if (size == 4) {
            quotes[i].style.height = "20px";
            quotes[i].style.padding = "4px 7.5px 8px 7.5px";
            quotes[i].style.lineHeight = "20px";
            quotes[i].style.borderLeftWidth = "4px";
        } else if (size == 5) {
            quotes[i].style.height = "30px";
            quotes[i].style.padding = "4px 15px 6px 15px";
            quotes[i].style.lineHeight = "30px";
            quotes[i].style.borderLeftWidth = "4px";
        } else if (size == 6) {
            quotes[i].style.height = "50px";
            quotes[i].style.padding = "4px 15px 8px 15px";
            quotes[i].style.lineHeight = "50px";
            quotes[i].style.borderLeftWidth = "5px";
        } else {
            quotes[i].style.height = "60px";
            quotes[i].style.padding = "4px 20px 8px 20px";
            quotes[i].style.lineHeight = "60px";
            quotes[i].style.borderLeftWidth = "5px";
        }
    }
}
