const N_of_cases = 25; //spremeni gledena število znakov (število znako + 1)
const max_questionsn = 9; //maksimalno stevilo vprasanj v eni igri

let znaki_za_vode_list = 24;
let znaki_iz_nautike = [];

let case_number;
let random_number;
let question;
let correct_awnser;
let correct_awnser2;
let correct_awnser3;
let correct_awnser4;
let awnsered_questions = [];  //[1, 2, 3 ,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let number_of_questions = 0;

let narobno_imageID = [];
let narobno_pravi_odgovor = [];
let narobno_moj_odgovor = [];

let tocke = 0;
let Stevilo_vprasanj;
let Stevilo_pravilnih_odgovorov;


let opsen1;
let opsen2;
let opsen3;
let opsen4;
let awnserID;
let seconds = 0;
let minutes = 0;
let time;

let izbrane_kategorije = localStorage.getItem('Awnsered_questions_localstorage');
let selected_categorys = JSON.parse(izbrane_kategorije);
awnsered_questions.push(...selected_categorys);

console.log(awnsered_questions);

let odstrani_kategorije = localStorage.getItem('removed_questions_localstorage');
let remove_categories = [];

if (odstrani_kategorije) {
    try {
        remove_categories = JSON.parse(odstrani_kategorije);
    } catch (e) {
        console.error("Napaka pri razčlenjevanju JSON-a: ", e);
    }
}
console.log(awnsered_questions);

for (let i = 0; i < remove_categories.length; i++) {
    let category = remove_categories[i];
    while (awnsered_questions.indexOf(category) !== -1) {
        awnsered_questions.splice(awnsered_questions.indexOf(category), 1);
    }
}
console.log(awnsered_questions);


///////////////////ne odsgtrani





function update_time(){
    seconds++;
    //console.log(awnsered_questions);
    //seconds = seconds/2;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
    //console.log(seconds);
    let time = minutes + ":" + seconds;
    //console.log("ČAS REŠEVANJA: " + time);
    document.getElementById("time").innerHTML = "ČAS REŠEVANJA: " + time;
    localStorage.setItem("max_cas", time);
}

setInterval(update_time, 1000);
new_number();

//izbere število vprašanja
function new_number(){
    //setInterval(update_time, 1000);
    random_number = Math.random();
    random_number = random_number * N_of_cases;
    case_number = Math.floor(random_number);
    if (awnsered_questions.includes(case_number)){
        new_number();
    }
    else {
        awnsered_questions.push(case_number);
        console.log(awnsered_questions);
        updateContent();
        if(number_of_questions === max_questionsn) {
            awnsered_questions = [];
            Stevilo_vprasanj = "ŠTEVILO VPRAŠANJ: " + (max_questionsn - 1);
            localStorage.setItem("stevilo_vprasanj", Stevilo_vprasanj);
            Stevilo_pravilnih_odgovorov = "ŠTEVILO PRAVILNIH ODGOVOROV: " + tocke;
            localStorage.setItem("stevilo_pravilnih_odgovorov", Stevilo_pravilnih_odgovorov);
            window.location.href = "prikaz_rezultatov.html";
        }
    }
    
}

function updateContent() {
switch (case_number){
    case 0:
        imaeID = "topografski_znaki/trigonomer.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "VRH GORE";
        opsen2 = "TRIGONOMER";
        opsen3 = "TV ODDAJNIK";
        opsen4 =  "METEOROLOŠKA POSTAJA";
        correct_awnser = "TRIGONOMER";
        correct_awnser_select = "Awnser2";
        break;
    case 1:
        imaeID = "topografski_znaki/antenski_stolp-radijska_postaja.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "TRIGONOMER";
        opsen2 = "METEOROLOŠKA POSTAJA";
        opsen3 = "ANTENSKI STOLP";
        opsen4 =  "CERKEV";
        correct_awnser_select = "Awnser3";
        correct_awnser = "ANTENSKI STOLP";
        correct_awnser2 = "RADIJSKA POSTAJA";
        correct_awnser3 = "RELEJNA POSTAJA";
        correct_awnser4 = "TELEVIZIJSKA POSTAJA";
    break;
    case 2:
        imaeID = "topografski_znaki/cerkev_z_dvema_zvonikoma.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "KAPELA";
        opsen2 = "CERKEV";
        opsen3 = "CERKEV Z DVEMA ALI VEČ ZVONIKI";
        opsen4 =  "OSAMLJEN GROB";
        correct_awnser = "CERKEV Z DVEMA ALI VEČ ZVONIKI";
        correct_awnser_select = "Awnser3";
    break;
    case 3:
        imaeID = "topografski_znaki/cerkev_z_enim_zvonikom.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "CERKEV Z ENIM ZVONIKOM";
        opsen2 = "KAPELA";
        opsen3 = "POKOPALIŠČE";
        opsen4 =  "RELEJNA POSTAJA";
        correct_awnser = "CERKEV Z ENIM ZVONIKOM";
        correct_awnser_select = "Awnser1";
        break;
    case 4:
        imaeID = "topografski_znaki/grad.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "RAZVALINA";
        opsen2 = "HIŠA";
        opsen3 = "STOLP";
        opsen4 =  "GRAD";
        correct_awnser = "GRAD";
        correct_awnser_select = "Awnser4";
        break;
    case 5:
        imaeID = "topografski_znaki/kapela.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "OSAMLJEN GROB";
        opsen2 = "CERKEV Z ENIM ZVONIKOM";
        opsen3 = "KAPELA";
        opsen4 =  "VERSKO ZNAMENJE";
        correct_awnser = "KAPELA";
        correct_awnser_select = "Awnser3";
        break;
    case 6:
        imaeID = "topografski_znaki/kozolec.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "GRAD";
        opsen2 = "KOZOLEC";
        opsen3 = "MOST";
        opsen4 =  "TUNEL";
        correct_awnser = "KOZOLEC";
        correct_awnser_select = "Awnser2";
        break;
    case 7:
        imaeID = "topografski_znaki/meteorološka_postaja.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "RADIJSKA POSTAJA";
        opsen2 = "TRIGONOMER";
        opsen3 = "TV POSTAJA";
        opsen4 =  "METEROLOŠKA POSTAJA";
        correct_awnser = "METEROLOŠKA POSTAJA";
        correct_awnser_select = "Awnser4";
        break;
    case 8:
        imaeID = "topografski_znaki/mlin_na_veter.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "MLIN NA VETER";
        opsen2 = "ŽAGA";
        opsen3 = "GRAD";
        opsen4 =  "VETERNA ELEKTRARNA";
        correct_awnser = "MLIN NA VETER";
        correct_awnser_select = "Awnser1";
        break;
    case 9:
        imaeID = "topografski_znaki/osamljen_grob.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "KAPELA";
        opsen2 = "VERSKO ZNAMENJE";
        opsen3 = "POKOPALIŠČE";
        opsen4 =  "OSAMLJEN GROB";
        correct_awnser = "OSAMLJEN GROB";
        correct_awnser_select = "Awnser4";
        break;
    case 10:
        imaeID = "topografski_znaki/pokopališče.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "KAPELA";
        opsen2 = "SPOMINJSKO POKOPALIŠČE";
        opsen3 = "DALJNOVOD";
        opsen4 =  "POKOPALIŠČE";
        correct_awnser = "POKOPALIŠČE";
        correct_awnser_select = "Awnser4";
        break;
    case 11:
        imaeID = "topografski_znaki/razgledni_stolp.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "RAZGLEDNI STOLP";
        opsen2 = "GRAD";
        opsen3 = "STOLP ZA OSTALE NAMENE";
        opsen4 =  "STOLPNICA";
        correct_awnser = "RAZGLEDNI STOLP";
        correct_awnser_select = "Awnser1";
        break;
    case 12:
        imaeID = "topografski_znaki/razvalina-ruševina.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "ŠPORTNA DVORANA";
        opsen2 = "RUŠEVINA";
        opsen3 = "KMETIJA";
        opsen4 =  "OBZIDJE";
        correct_awnser = "RUŠEVINA";
        correct_awnser2 = "RAZVALINA";
        correct_awnser_select = "Awnser2";
        break;
    case 13:
        imaeID = "topografski_znaki/samostan.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "KAPELA";
        opsen2 = "CERKEV";
        opsen3 = "SAMOSTAN";
        opsen4 =  "SPOMENIK";
        correct_awnser = "SAMOSTAN";
        correct_awnser_select = "Awnser3";
        break;
    case 14:
        imaeID = "topografski_znaki/spomenik.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "SPOMIJSKA PLOŠČA";
        opsen2 = "STOLP";
        opsen3 = "TRIGONSKA TOČKA";
        opsen4 =  "SPOMENIK";
        correct_awnser = "SPOMENIK";
        correct_awnser_select = "Awnser4";
    break;
    case 15:
        imaeID = "topografski_znaki/spominska_plošča.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "SPOMINSKA PLOŠČA";
        opsen2 = "SPOMENIK";
        opsen3 = "BOJA";
        opsen4 =  "LOVSKA OPAZOVALNICA";
        correct_awnser = "SPOMINSKA PLOŠČA";
        correct_awnser2 = "SPOMINJSKA PLOŠČA";
        correct_awnser_select = "Awnser1";
    break;
    case 16:
        imaeID = "topografski_znaki/spominsko_pokopališče.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "POKOPALIŠČE";
        opsen2 = "SPOMINSKO POKOPALIŠČE";
        opsen3 = "OSAMLJEN GROB";
        opsen4 =  "VERSKO ZNAMENJE";
        correct_awnser = "SPOMINSKO POKOPALIŠČE";
        correct_awnser_select = "Awnser2";
    break;
    case 17:
        imaeID = "topografski_znaki/stadion-športno_igrišče.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "PRIREDITVENI PROSTOR";
        opsen2 = "TRAVNIK";
        opsen3 = "ŠPORTNA DVORANA";
        opsen4 =  "NASELJE";
        correct_awnser = "ŠPORTNA DVORANA";
        correct_awnser2 = "STADION";
        correct_awnser_select = "Awnser3";
    break;
    case 18:
        imaeID = "topografski_znaki/stolp_za_ostale_namene.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "GRAD";
        opsen2 = "HIŠA";
        opsen3 = "VODNI STOLP";
        opsen4 =  "STOLP ZA OSTALE NAMENE";
        correct_awnser = "STOLP ZA OSTALE NAMENE";
        correct_awnser_select = "Awnser4";
    break;
    case 19:
        imaeID = "topografski_znaki/stolpnica.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "STOLPNICA";
        opsen2 = "OBJEKT";
        opsen3 = "RUŠEVINA";
        opsen4 =  "VODNJAK";
        correct_awnser = "STOLPNICA";
        correct_awnser_select = "Awnser1";
    break;
    case 20:
        imaeID = "topografski_znaki/strnjene_zgradbe-mestni_kare.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "STADION";
        opsen2 = "STRNJENE ZGRADBE";
        opsen3 = "RUŠEVINA";
        opsen4 =  "NASELJE";
        correct_awnser = "STRNJENE ZGRADBE";
        correct_awnser2 = "MESTNI KARE";
        correct_awnser_select = "Awnser2";
    break;
    case 21:
        imaeID = "topografski_znaki/trdnjava.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "STRNJENE ZGRADBE";
        opsen2 = "STADION";
        opsen3 = "TRDNJAVA";
        opsen4 =  "ZAKLONIŠČE";
        correct_awnser = "TRDNJAVA";
        correct_awnser_select = "Awnser3";
    break;
    case 22:
        imaeID = "topografski_znaki/versko_znamenje.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "OSAMLJEN GROB";
        opsen2 = "POKOPALIŠČE";
        opsen3 = "SAMOSTAN";
        opsen4 =  "VERSKO ZNAMENJE";
        correct_awnser = "VERSKO ZNAMENJE";
        correct_awnser_select = "Awnser4";
    break;
    case 23:
        imaeID = "topografski_znaki/zgradba.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "ZGRADBA";
        opsen2 = "STRNJENE HIŠE";
        opsen3 = "STOLPNICA";
        opsen4 =  "RUŠEVINA";
        correct_awnser = "ZGRADBA";
        correct_awnser2 = "OBJEKT";
        correct_awnser_select = "Awnser1";
    break;
    /////////////24 = VODE/////////////////////////////////
    case 24:
        imaeID = "topografski_znaki/reka_z_širino_nad_10m.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "HUDOURNIK";
        opsen2 = "REKA S ŠIRINO NAD 10m";
        opsen3 = "REKA S ŠIRINO OD 5 DO 10m";
        opsen4 =  "POTOK";
        correct_awnser = "REKA S ŠIRINO NAD 10m";
        correct_awnser_select = "Awnser2";
    break;
    case 25:
        imaeID = "topografski_znaki/elektrarna.png";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "HIDROELEKTRARNA";
        opsen2 = "TRANSFORMATORSKA POSTAJA";
        opsen3 = "ELEKTRARNA";
        opsen4 =  "ELEKTRO OMARA";
        correct_awnser = "ELEKTRARNA";
        correct_awnser_select = "Awnser3";
    break;
    case 26:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 27:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 28:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 29:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 30:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 31:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 32:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 33:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;
    case 34:
        imaeID = "";
        question = "Kateri topografski znak je na sliki?";
        opsen1 = "";
        opsen2 = "";
        opsen3 = "";
        opsen4 =  "";
        correct_awnser = "";
        correct_awnser_select = "Awnser";
    break;

}

document.getElementById("slika").src = imaeID;
document.getElementById("question_shown").innerHTML = question;
document.getElementById("Opsen1").innerHTML = opsen1;
document.getElementById("Opsen2").innerHTML = opsen2;
document.getElementById("Opsen3").innerHTML = opsen3;
document.getElementById("Opsen4").innerHTML = opsen4;
number_of_questions++;
}

function check_awnser1() {
    awnserID = "Awnser1";
    if (awnserID === correct_awnser_select){
        //alert("odgovor je pravilen");
        tocke++;
        new_number();
        //updateContent();
        //console.log(tocke);
    }
    else{
        narobno_imageID.push(imaeID);
        narobno_pravi_odgovor.push(correct_awnser);
        narobno_moj_odgovor.push(opsen1);
        new_number();
    }
}

function check_awnser2() {
    awnserID = "Awnser2";
    if (awnserID === correct_awnser_select){
        //alert("odgovor je pravilen");
        tocke++;
        new_number();
        //updateContent();
        //console.log(tocke);
    }
    else{
        narobno_imageID.push(imaeID);
        narobno_pravi_odgovor.push(correct_awnser);
        narobno_moj_odgovor.push(opsen2);
        new_number();
    }
}
function check_awnser3() {
    awnserID = "Awnser3";
    if (awnserID === correct_awnser_select){
        //alert("odgovor je pravilen");
        tocke++;
        new_number();
        //updateContent();
        //console.log(tocke);
    }
    else{
        narobno_imageID.push(imaeID);
        narobno_pravi_odgovor.push(correct_awnser);
        narobno_moj_odgovor.push(opsen3);
        new_number();
    }
}
function check_awnser4() {
    awnserID = "Awnser4";
    if (awnserID === correct_awnser_select){
        //alert("odgovor je pravilen");
        tocke++;
        new_number();
        //updateContent();
        //console.log(tocke);
    }
    else{
        narobno_imageID.push(imaeID);
        narobno_pravi_odgovor.push(correct_awnser);
        narobno_moj_odgovor.push(opsen4);
        new_number();
    }
}

function poslji_odgovor() {
    console.log(number_of_questions);

    let input_text = document.getElementById('Input_text').value;
    let odgovor = input_text.toUpperCase();

    let inputFiled = document.getElementById('Input_text');
    inputFiled.value = "";
    console.log(odgovor);
    if (odgovor === correct_awnser || odgovor === correct_awnser2 || odgovor === correct_awnser3 || odgovor === correct_awnser4) {
        tocke++;
    }
    new_number();
}




