'use strict';

app.attribute = [{
        id: "Geschicklichkeit",
        name: "Geschicklichkeit",
        descr: "Geschicklichkeit ist ein Mass der Flinkheit, Fingerfertigkeit und Koordinationsgabe des Charakters.",
        show: false,
    },
    {
        id: "Staerke",
        name: "Stärke",
        descr: "Stärke steht für körperliche Kraft und Fitness. Sie bestimmt auch die Basis des Schadens, den ein Charakter im Nahkampf austeilt, und wie viel er tragen oder heben kann.",
        show: false,
    },
    {
        id: "Konstitution",
        name: "Konstitution",
        descr: "Konstitution steht für Ausdauer, Widerstand gegen Krankheiten, Gifte und Toxine und zeigt, wie viel körperlichen Schaden ein Charakter aushalten kann, ehe er zusammenbricht. Sie wird vor allem verwendet, um Erschöpfungseffekten zu widerstehen, sowie als Grundlage für den abgeleiteten Wert Robustheit.",
        show: false,
    },
    {
        id: "Verstand",
        name: "Verstand",
        descr: "Verstand misst rohe Intelligenz, Geistesschärfe und wie schnell der Held denken kann. Das Attribut wird verwendet, um manchen geistigen und sozialen Angriffen zu widerstehen.",
        show: false,
    },
    {
        id: "Willenskraft",
        name: "Willenskraft",
        descr: "Willenskraft ist Selbstvertrauen, Rückgrat und Entschlossenheit. Sie wird verwendet, um sozialen und übernatürlichen Angriffen sowie Furcht zu widerstehen.",
        show: false,
    }
];

app.fertigkeiten = [{
        id: "Allgemeinwissen",
        name: "Allgemeinwissen",
        descr: "Allgemeines Wissen über die Welt eines Charakters.",
        attr: "Verstand",
        startValue: "4",
        show: false,
    },
    {
        id: "Athletik",
        name: "Athletik",
        descr: "Athletische Koordinationsgabe und Können. Klettern, Springen, Balancieren, Ringen, Skifahren, Schwimmen, Werfen und Fangen.",
        attr: "Geschicklichkeit",
        startValue: "4",
        show: false,
    },
    {
        id: "Heimlichkeit",
        name: "Heimlichkeit",
        descr: "Die Fähigkeit zu schleichen und sich zu verstecken.",
        attr: "Geschicklichkeit",
        startValue: "4",
        show: false,
    },
    {
        id: "Überreden",
        name: "Überreden",
        descr: "Die Fähigkeit, andere zu überzeugen, das zu tun, was du willst.",
        attr: "Willenskraft",
        startValue: "4",
        show: false,
    },
    {
        id: "Wahrnehmung",
        name: "Wahrnehmung",
        descr: "Allgemeine Aufmerksamkeit und Sinnesschärfe.",
        attr: "Verstand",
        startValue: "4",
        show: false,
    },
    {
        id: "Darbietung",
        name: "Darbietung",
        descr: "Singen, Tanzen, Schauspielerei und andere Formen öffentlichen Ausdrucks.",
        attr: "Willenskraft",
        show: false,
    },
    {
        id: "Diebeskunst",
        name: "Diebeskunst",
        descr: "Fingerfertigkeit, Taschendiebstahl, Schlösserknacken und andere typische zwielichtige Taten.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Einschüchtern",
        name: "Einschüchtern",
        descr: "Die Fähigkeit eines Charakters, andere mit Drohungen dazu zu bringen, das zu tun, was er will.",
        attr: "Willenskraft",
        show: false,
    },
    {
        id: "Elektronik",
        name: "Elektronik",
        descr: "Die Verwendung von elektronischen Geräten und Systemen.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Fahren",
        name: "Fahren",
        descr: "Die Fähigkeit, Bodenfahrzeuge zu kontrollieren, zu steuern und zu bedienen.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Fokus",
        name: "Fokus",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Begabt).",
        attr: "Willenskraft",
        show: false,
    },
    {
        id: "Geisteswissenschaften",
        name: "Geisteswissenschaften",
        descr: "Wissen über die freien Künste, Sozialwissenschaften, Literatur, Geschichte etc.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Glaube",
        name: "Glaube",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Wunder).",
        attr: "Willenskraft",
        show: false,
    },
    {
        id: "Glücksspiel",
        name: "Glücksspiel",
        descr: "Übung und Vertrautheit mit Glückspielen aller Art.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Hacken",
        name: "Hacken",
        descr: "Programmieren und Einbrechen in Computersysteme.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Heilen",
        name: "Heilen",
        descr: "Die Fähigkeit, Wunden und Krankheiten zu behandeln und zu heilen sowie forensische Beweise zu deuten.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Kämpfen",
        name: "Kämpfen",
        descr: "Können im bewaffneten und unbewaffneten Kampf.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Kriegskunst",
        name: "Kriegskunst",
        descr: "Strategie, Taktik und das Verständnis von militärischen Einsätzen. Wichtig für Massenschlachten.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Mut",
        name: "Mut",
        descr: "Wie schnell wirst du eingeschüchtert?",
        attr: "Willenskraft",
        show: false,
    },
    {
        id: "Naturwissenschaften",
        name: "Naturwissenschaften",
        descr: "Wissen über wissenschaftliche Felder wie Biologie, Chemie, Geologie, Ingenieurskunst etc.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Okkultismus",
        name: "Okkultismus",
        descr: "Wissen über übernatürliche Ereignisse, Kreaturen, Geschichte und Methoden.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Pilot",
        name: "Pilot",
        descr: "Fähigkeit Fahrzeuge zu lenken, die sich in drei Dimensionen bewegen, wie Flugzeuge, Helikopter, Raumschiffe etc.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Provozieren",
        name: "Provozieren",
        descr: "Andere beleidigen oder erniedrigen. Fast immer als Herausfordern (siehe Seite 104).",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Psionik",
        name: "Psionik",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Psionik).",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Recherche",
        name: "Recherche",
        descr: "Schriftliche Informationen in verschiedenen Quellen finden.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Reiten",
        name: "Reiten",
        descr: "Die Fähigkeit des Charakters, auf ein zahmes Tier aufzusteigen, es zu kontrollieren und zu reiten.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Reparieren",
        name: "Reparieren",
        descr: "Die Fähigkeit, mechanische und elektrische Geräte zu reparieren.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Schiessen",
        name: "Schiessen",
        descr: "Präzision mit allen Arten von Fernkampfwaffen.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Seefahrt",
        name: "Seefahrt",
        descr: "Die Fähigkeit, ein Boot, Schiff oder anderes Wasserfahrzeug zu steuern.",
        attr: "Geschicklichkeit",
        show: false,
    },
    {
        id: "Sprache",
        name: "Sprache",
        descr: "Kenntnisse und Sprachfähigkeiten in einer Fremdsprache.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Überleben",
        name: "Überleben",
        descr: "Die Fähigkeit, Nahrung, Wasser oder einen Unterschlupf zu finden und Spuren zu lesen.",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Verrückte Wissenschaft",
        name: "Verrückte Wissenschaft",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Verrückte Wissenschaft).",
        attr: "Verstand",
        show: false,
    },
    {
        id: "Zaubern",
        name: "Zaubern",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Magie).",
        attr: "Verstand"
    }
];
