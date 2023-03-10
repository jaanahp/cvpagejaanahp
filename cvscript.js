let profiletextTop = document.getElementById("profiletextTop");
let profiletextMiddle = document.getElementById("profiletextMiddle");
let profiletextBottom = document.getElementById("profiletextBottom");

let educationHeading = document.getElementById("educationHeading");
let schoolOne = document.getElementById("schoolOne");
let schoolOneContent = document.getElementById("schoolOneContent");
let schoolTwo = document.getElementById("schoolTwo");
let schoolTwoContent = document.getElementById("schoolTwoContent");
let schoolThree = document.getElementById("schoolThree");
let schoolThreeContent = document.getElementById("schoolThreeContent");

let experienceHeading = document.getElementById("experienceHeading");
let workOne = document.getElementById("workOne");
let workOneContent = document.getElementById("workOneContent");
let workTwo = document.getElementById("workTwo");
let workTwoContent = document.getElementById("workTwoContent");
let workThree = document.getElementById("workThree");
let workThreeContent = document.getElementById("workThreeContent");

let skillHeading = document.getElementById("skillHeading");
let skill = document.getElementById("skill");
let level = document.getElementById("level");
let skillOneLevel = document.getElementById("skillOneLevel");
let skillTwoLevel = document.getElementById("skillTwoLevel");
let skillThreeLevel = document.getElementById("skillThreeLevel");
let skillFourLevel = document.getElementById("skillFourLevel");
let skillFiveLevel = document.getElementById("skillFiveLevel");

let returnlink = document.getElementById("returnlink");

let langlinkFi = document.getElementById("langlinkFi");
let langlinkEn = document.getElementById("langlinkEn");

langlinkFi.addEventListener("click", function() {
    link = "fi";
    changeLanguage(link);
});

langlinkEn.addEventListener("click", function() {
    link = "en";
    changeLanguage(link);
});

function changeLanguage(linkki) {
    language = linkki;
    if (language === "en") {
        profiletextTop.innerHTML = "I am a future ICT-professional with a strong background in financialet One);l administration and a passion for developing processes with ICT-solutions.";
        profiletextMiddle.innerHTML = "I have a vocational qualification in Business Information Technology, which I finished in June 2022 and in August 2022 I started my studies to become an ICT-engineer.";
        profiletextBottom.innerHTML = "You can check out my LinkedIn and GitHub -profiles via the above links and/or contact me through phone or e-mail. Below in the photogallery you can see my hobbies and interests:";
        educationHeading.innerHTML = "EDUCATION";
        schoolOne.innerHTML = "H??me University of Applied Sciences, Bachelor of Engineering, Information and Communication Technology";
        schoolOneContent.innerHTML = "Basic studies include programming with Python and C#, HTML, CSS and JavaScript and agile software development methods (Scrum). During my previous degree I developed enthusiasm for React.js, JavaScript and SQL databases, so I intend to carry on with these topics especially during my first and second year. In the future years, I plan to include robotic prosess automation, machine learning and AI in my curriculum.";
        schoolTwo.innerHTML = "Careeria, Vocational qualification in Business Information Technology";
        schoolTwoContent.innerHTML = "The curriculum of full stack -programming included ASP.NET and .NET core -development with C#, MS SQL Server and SQL databases, HTML and CSS and bootstrap basics. As my final project I carried out a SQL database application named Kipukalenteri with React.js frontend and .NET Core REST API as backend. The code can be found on my GitHub-profile";
        schoolThree.innerHTML = "Lahti University of Applied Sciences, Bachelor of Business Administration";
        schoolThreeContent.innerHTML = "I studied financial administration and connected legislation, accounting, taxation and other business related topics.";

        experienceHeading.innerHTML = "EXPERIENCE";
        workOne.innerHTML = "L??hiTapiola Palvelut Oy, Accounting Specialist";
        workOneContent.innerHTML = "My role includes counselling team members in special issues of accounting and taking part in development projects. Since 2022 my role has centered on developing accounting processes with regards to Excel based tools and macros programmed with VBA. During my years in L??hiTapiola I have had the chance to take part in development projects and workshops and found my passion in developing processes. Especially during the last year I have focused on developing accounting tasks with the help of Excel VBA-macros, which has increased my enthusiasm for automating financial management tasks and utilizing robot process automation and AI in financial processes.";
        workTwo.innerHTML = "L??hiTapiola Palvelut Oy, Senior Accountant";
        workTwoContent.innerHTML = "Accounting, financial statements, reconciliation and tax reports of swedish speaking insurance companies. My responsibilities also included counselling and helping team members with fixed assets accounting in SAP";
        workThree.innerHTML = "Rantalainen Lahti Oy / HS-Yrityspalvelu Oy, Accountant";
        workThreeContent.innerHTML = "Accounting, reconciliation, financial statements and tax reports of approximately 30 clients differing in industries, sizes and company form.";

        skillHeading.innerHTML = "SKILLS";
        skill.innerHTML = "Skill";
        level.innerHTML = "Level";
        skillOneLevel.innerHTML = "Basics"
        skillTwoLevel.innerHTML = "Average";
        skillThreeLevel.innerHTML = "Basics";
        skillFourLevel.innerHTML = "Basics";
        skillFiveLevel.innerHTML = "Average";

        returnlink.innerHTML = "Return to top";
    }
    else {
        profiletextTop.innerHTML = "Olen kehityshenkinen vahvalla talousosaamisella varustettu tuleva ohjelmistoalan ammattilainen.";
        profiletextMiddle.innerHTML = "Opiskelen ensimm??ist?? vuotta tieto- ja viestint??tekniikan insin????riksi H??meen Ammattikorkeakoulussa, kes??ll?? 2022 valmistuin Careeriasta tieto- ja viestint??tekniikan perustutkintoon suuntautumisenani ohjelmistotuotanto.";
        profiletextBottom.innerHTML = "Voit tutustua ylh????lt?? linkeist?? LinkedIn- tai GitHub-profiiliini ja/tai ottaa yhteytt?? puhelimitse tai s??hk??postilla. Alta kuvagalleriasta n??et harrastuksiani ja kiinnostuksenkohteitani:";
        educationHeading.innerHTML = "KOULUTUS";
        schoolOne.innerHTML = "H??meen ammattikorkeakoulu, tieto- ja viestint??tekniikan insin????ri";
        schoolOneContent.innerHTML = "Perusopintoihin sis??ltyy ohjelmointia Pythonilla sek?? C#:lla, HTML&CSS sek?? Javascript sek?? ketter??t kehitysmenetelm??t (Scrum). Edellisen tutkinnon j??ljilt?? minulle j??i innostus React.js:????n ja JavaScriptiin sek?? SQL tietokantoihin, joten n??iden parissa aion jatkaa ensimm??isen?? ja toisena opiskeluvuonna. Suunnitelmanani on my??s valita ohjelmistokehityksen peruspalikoiden rinnalle ohjelmistorobotiikkaa, koneoppimista ja teko??ly??.";
        schoolTwo.innerHTML = "Careeria, tieto- ja viestint??tekniikan perustutkinto";
        schoolTwoContent.innerHTML = "Full stack -ohjelmoinnin opiskelukokonaisuuksiin sis??ltyi mm. ASP.NET sek?? .NET Core -kehitys C#:lla Visual Studio -kehitysymp??rist??ss??, MS SQL Server ja SQL-tietokannat, HTML & CSS ja Bootstrap. P????tt??projektinani toteutin ja testasinitsen??isesti Azureen SQL-tietokannan p????lle rakennetun REST API -rajapinnan kautta toimivan React.js-sovelluksen joka l??ytyy GitHub-tililt??ni.";
        schoolThree.innerHTML = "Lahden Ammattikorkeakoulu, liiketalouden koulutusohjelma, taloushallinnon tradenomi";
        schoolThreeContent.innerHTML = "Opiskelin yrityksen taloushallintoa ja siihen liittyvi?? juridisia puolia, kirjanpitoa, verotusta sek?? muita liiketoimintaan liittyvi?? kokonaisuuksia.";

        experienceHeading.innerHTML = "TY??KOKEMUS";
        workOne.innerHTML = "L??hiTapiola Palvelut Oy, laskenta-asiantuntija";
        workOneContent.innerHTML = "Kirjanpidon neuvonta erityiskysymyksiss??. Ulkoisen laskennan tiimin k??ytt????n tulevien Excel-ty??kalujen sek?? erityisesti Excel VBA-makropohjien suunnittelu, laadinta ja yll??pito. L??hiTapiolassa ty??skentelyni aikana olen saanut mahdollisuuden osallistua useisiin kehitysprojekteihin ja ty??pajoihin ja l??ysin innostukseni prosessienkehitt??miseen. Erityisesti viimeisen reilun vuoden aikana olen ty??teht??v??ss??ni keskittynyt kirjanpidon ty??teht??vien automatisointiin Excel VBA-makropohjien avulla, joka on kasvattanut kiinnostustani taloushallinnon prosessien automatisointiin ja erilaisten ohjelmistojen sek?? tulevaisuudessa opintojen edetess?? ohjelmistorobotiikan ja teko??lyn hy??dynt??miseen talousprosesseissa.";
        workTwo.innerHTML = "L??hiTapiola Palvelut Oy, p????kirjanpit??j??";
        workTwoContent.innerHTML = "Vakuutusyhti??n kirjanpito, tilinp????t??s ja veroilmoitukset. Lis??vastuualueena k??ytt??omaisuuskirjanpidon vetovastuu omassa tiimiss??. Ty??teht??viin on sis??ltynyt my??s tiimil??isten neuvontaa.";
        workThree.innerHTML = "Rantalainen Lahti Oy / HS-Yrityspalvelu Oy, kirjanpit??j??";
        workThreeContent.innerHTML = "Eri yhti??muotojen kirjanpito, tilinp????t??kset ja veroilmoitukset. Asiakkaita n. 30 kpl toiminimist?? n. 20 ty??ntekij??n osakeyhti??ihin.";

        skillHeading.innerHTML = "TAIDOT";
        skill.innerHTML = "Taito";
        level.innerHTML = "Taso";
        skillOneLevel.innerHTML = "Perusteet";
        skillTwoLevel.innerHTML = "Tyydytt??v??";
        skillThreeLevel.innerHTML = "Perusteet";
        skillFourLevel.innerHTML = "Perusteet";
        skillFiveLevel.innerHTML = "Tyydytt??v??";

        returnlink.innerHTML = "Palaa sivun yl??osaan";

    }

}