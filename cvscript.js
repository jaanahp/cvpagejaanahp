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
        schoolOne.innerHTML = "Häme University of Applied Sciences, Bachelor of Engineering, Information and Communication Technology";
        schoolOneContent.innerHTML = "Basic studies include programming with Python and C#, HTML, CSS and JavaScript and agile software development methods (Scrum). During my previous degree I developed enthusiasm for React.js, JavaScript and SQL databases, so I intend to carry on with these topics especially during my first and second year. In the future years, I plan to include robotic prosess automation, machine learning and AI in my curriculum.";
        schoolTwo.innerHTML = "Careeria, Vocational qualification in Business Information Technology";
        schoolTwoContent.innerHTML = "The curriculum of full stack -programming included ASP.NET and .NET core -development with C#, MS SQL Server and SQL databases, HTML and CSS and bootstrap basics. As my final project I carried out a SQL database application named Kipukalenteri with React.js frontend and .NET Core REST API as backend. The code can be found on my GitHub-profile";
        schoolThree.innerHTML = "Lahti University of Applied Sciences, Bachelor of Business Administration";
        schoolThreeContent.innerHTML = "I studied financial administration and connected legislation, accounting, taxation and other business related topics.";

        experienceHeading.innerHTML = "EXPERIENCE";
        workOne.innerHTML = "LähiTapiola Palvelut Oy, Accounting Specialist";
        workOneContent.innerHTML = "My role includes counselling team members in special issues of accounting and taking part in development projects. Since 2022 my role has centered on developing accounting processes with regards to Excel based tools and macros programmed with VBA. During my years in LähiTapiola I have had the chance to take part in development projects and workshops and found my passion in developing processes. Especially during the last year I have focused on developing accounting tasks with the help of Excel VBA-macros, which has increased my enthusiasm for automating financial management tasks and utilizing robot process automation and AI in financial processes.";
        workTwo.innerHTML = "LähiTapiola Palvelut Oy, Senior Accountant";
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
        profiletextMiddle.innerHTML = "Opiskelen ensimmäistä vuotta tieto- ja viestintätekniikan insinööriksi Hämeen Ammattikorkeakoulussa, kesällä 2022 valmistuin Careeriasta tieto- ja viestintätekniikan perustutkintoon suuntautumisenani ohjelmistotuotanto.";
        profiletextBottom.innerHTML = "Voit tutustua ylhäältä linkeistä LinkedIn- tai GitHub-profiiliini ja/tai ottaa yhteyttä puhelimitse tai sähköpostilla. Alta kuvagalleriasta näet harrastuksiani ja kiinnostuksenkohteitani:";
        educationHeading.innerHTML = "KOULUTUS";
        schoolOne.innerHTML = "Hämeen ammattikorkeakoulu, tieto- ja viestintätekniikan insinööri";
        schoolOneContent.innerHTML = "Perusopintoihin sisältyy ohjelmointia Pythonilla sekä C#:lla, HTML&CSS sekä Javascript sekä ketterät kehitysmenetelmät (Scrum). Edellisen tutkinnon jäljiltä minulle jäi innostus React.js:ään ja JavaScriptiin sekä SQL tietokantoihin, joten näiden parissa aion jatkaa ensimmäisenä ja toisena opiskeluvuonna. Suunnitelmanani on myös valita ohjelmistokehityksen peruspalikoiden rinnalle ohjelmistorobotiikkaa, koneoppimista ja tekoälyä.";
        schoolTwo.innerHTML = "Careeria, tieto- ja viestintätekniikan perustutkinto";
        schoolTwoContent.innerHTML = "Full stack -ohjelmoinnin opiskelukokonaisuuksiin sisältyi mm. ASP.NET sekä .NET Core -kehitys C#:lla Visual Studio -kehitysympäristössä, MS SQL Server ja SQL-tietokannat, HTML & CSS ja Bootstrap. Päättöprojektinani toteutin ja testasinitsenäisesti Azureen SQL-tietokannan päälle rakennetun REST API -rajapinnan kautta toimivan React.js-sovelluksen joka löytyy GitHub-tililtäni.";
        schoolThree.innerHTML = "Lahden Ammattikorkeakoulu, liiketalouden koulutusohjelma, taloushallinnon tradenomi";
        schoolThreeContent.innerHTML = "Opiskelin yrityksen taloushallintoa ja siihen liittyviä juridisia puolia, kirjanpitoa, verotusta sekä muita liiketoimintaan liittyviä kokonaisuuksia.";

        experienceHeading.innerHTML = "TYÖKOKEMUS";
        workOne.innerHTML = "LähiTapiola Palvelut Oy, laskenta-asiantuntija";
        workOneContent.innerHTML = "Kirjanpidon neuvonta erityiskysymyksissä. Ulkoisen laskennan tiimin käyttöön tulevien Excel-työkalujen sekä erityisesti Excel VBA-makropohjien suunnittelu, laadinta ja ylläpito. LähiTapiolassa työskentelyni aikana olen saanut mahdollisuuden osallistua useisiin kehitysprojekteihin ja työpajoihin ja löysin innostukseni prosessienkehittämiseen. Erityisesti viimeisen reilun vuoden aikana olen työtehtävässäni keskittynyt kirjanpidon työtehtävien automatisointiin Excel VBA-makropohjien avulla, joka on kasvattanut kiinnostustani taloushallinnon prosessien automatisointiin ja erilaisten ohjelmistojen sekä tulevaisuudessa opintojen edetessä ohjelmistorobotiikan ja tekoälyn hyödyntämiseen talousprosesseissa.";
        workTwo.innerHTML = "LähiTapiola Palvelut Oy, pääkirjanpitäjä";
        workTwoContent.innerHTML = "Vakuutusyhtiön kirjanpito, tilinpäätös ja veroilmoitukset. Lisävastuualueena käyttöomaisuuskirjanpidon vetovastuu omassa tiimissä. Työtehtäviin on sisältynyt myös tiimiläisten neuvontaa.";
        workThree.innerHTML = "Rantalainen Lahti Oy / HS-Yrityspalvelu Oy, kirjanpitäjä";
        workThreeContent.innerHTML = "Eri yhtiömuotojen kirjanpito, tilinpäätökset ja veroilmoitukset. Asiakkaita n. 30 kpl toiminimistä n. 20 työntekijän osakeyhtiöihin.";

        skillHeading.innerHTML = "TAIDOT";
        skill.innerHTML = "Taito";
        level.innerHTML = "Taso";
        skillOneLevel.innerHTML = "Perusteet";
        skillTwoLevel.innerHTML = "Tyydyttävä";
        skillThreeLevel.innerHTML = "Perusteet";
        skillFourLevel.innerHTML = "Perusteet";
        skillFiveLevel.innerHTML = "Tyydyttävä";

        returnlink.innerHTML = "Palaa sivun yläosaan";

    }

}