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
        startValue: "4"
    },
    {
        id: "Athletik",
        name: "Athletik",
        descr: "Athletische Koordinationsgabe und Können. Klettern, Springen, Balancieren, Ringen, Skifahren, Schwimmen, Werfen und Fangen.",
        attr: "Geschicklichkeit",
        startValue: "4"
    },
    {
        id: "Heimlichkeit",
        name: "Heimlichkeit",
        descr: "Die Fähigkeit zu schleichen und sich zu verstecken.",
        attr: "Geschicklichkeit",
        startValue: "4"
    },
    {
        id: "Überreden",
        name: "Überreden",
        descr: "Die Fähigkeit, andere zu überzeugen, das zu tun, was du willst.",
        attr: "Willenskraft",
        startValue: "4"
    },
    {
        id: "Wahrnehmung",
        name: "Wahrnehmung",
        descr: "Allgemeine Aufmerksamkeit und Sinnesschärfe.",
        attr: "Verstand",
        startValue: "4"
    },
    {
        id: "Darbietung",
        name: "Darbietung",
        descr: "Singen, Tanzen, Schauspielerei und andere Formen öffentlichen Ausdrucks.",
        attr: "Willenskraft"
    },
    {
        id: "Diebeskunst",
        name: "Diebeskunst",
        descr: "Fingerfertigkeit, Taschendiebstahl, Schlösserknacken und andere typische zwielichtige Taten.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Einschüchtern",
        name: "Einschüchtern",
        descr: "Die Fähigkeit eines Charakters, andere mit Drohungen dazu zu bringen, das zu tun, was er will.",
        attr: "Willenskraft"
    },
    {
        id: "Elektronik",
        name: "Elektronik",
        descr: "Die Verwendung von elektronischen Geräten und Systemen.",
        attr: "Verstand"
    },
    {
        id: "Fahren",
        name: "Fahren",
        descr: "Die Fähigkeit, Bodenfahrzeuge zu kontrollieren, zu steuern und zu bedienen.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Fokus",
        name: "Fokus",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Begabt).",
        attr: "Willenskraft"
    },
    {
        id: "Geisteswissenschaften",
        name: "Geisteswissenschaften",
        descr: "Wissen über die freien Künste, Sozialwissenschaften, Literatur, Geschichte etc.",
        attr: "Verstand"
    },
    {
        id: "Glaube",
        name: "Glaube",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Wunder).",
        attr: "Willenskraft"
    },
    {
        id: "Glücksspiel",
        name: "Glücksspiel",
        descr: "Übung und Vertrautheit mit Glückspielen aller Art.",
        attr: "Verstand"
    },
    {
        id: "Hacken",
        name: "Hacken",
        descr: "Programmieren und Einbrechen in Computersysteme.",
        attr: "Verstand"
    },
    {
        id: "Heilen",
        name: "Heilen",
        descr: "Die Fähigkeit, Wunden und Krankheiten zu behandeln und zu heilen sowie forensische Beweise zu deuten.",
        attr: "Verstand"
    },
    {
        id: "Kämpfen",
        name: "Kämpfen",
        descr: "Können im bewaffneten und unbewaffneten Kampf.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Kriegskunst",
        name: "Kriegskunst",
        descr: "Strategie, Taktik und das Verständnis von militärischen Einsätzen. Wichtig für Massenschlachten.",
        attr: "Verstand"
    },
    {
        id: "Mut",
        name: "Mut",
        descr: "Wie schnell wirst du eingeschüchtert?",
        attr: "Willenskraft"
    },
    {
        id: "Naturwissenschaften",
        name: "Naturwissenschaften",
        descr: "Wissen über wissenschaftliche Felder wie Biologie, Chemie, Geologie, Ingenieurskunst etc.",
        attr: "Verstand"
    },
    {
        id: "Okkultismus",
        name: "Okkultismus",
        descr: "Wissen über übernatürliche Ereignisse, Kreaturen, Geschichte und Methoden.",
        attr: "Verstand"
    },
    {
        id: "Pilot",
        name: "Pilot",
        descr: "Fähigkeit Fahrzeuge zu lenken, die sich in drei Dimensionen bewegen, wie Flugzeuge, Helikopter, Raumschiffe etc.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Provozieren",
        name: "Provozieren",
        descr: "Andere beleidigen oder erniedrigen. Fast immer als Herausfordern (siehe Seite 104).",
        attr: "Verstand"
    },
    {
        id: "Psionik",
        name: "Psionik",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Psionik).",
        attr: "Verstand"
    },
    {
        id: "Recherche",
        name: "Recherche",
        descr: "Schriftliche Informationen in verschiedenen Quellen finden.",
        attr: "Verstand"
    },
    {
        id: "Reiten",
        name: "Reiten",
        descr: "Die Fähigkeit des Charakters, auf ein zahmes Tier aufzusteigen, es zu kontrollieren und zu reiten.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Reparieren",
        name: "Reparieren",
        descr: "Die Fähigkeit, mechanische und elektrische Geräte zu reparieren.",
        attr: "Verstand"
    },
    {
        id: "Schiessen",
        name: "Schiessen",
        descr: "Präzision mit allen Arten von Fernkampfwaffen.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Seefahrt",
        name: "Seefahrt",
        descr: "Die Fähigkeit, ein Boot, Schiff oder anderes Wasserfahrzeug zu steuern.",
        attr: "Geschicklichkeit"
    },
    {
        id: "Sprache",
        name: "Sprache",
        descr: "Kenntnisse und Sprachfähigkeiten in einer Fremdsprache.",
        attr: "Verstand"
    },
    {
        id: "Überleben",
        name: "Überleben",
        descr: "Die Fähigkeit, Nahrung, Wasser oder einen Unterschlupf zu finden und Spuren zu lesen.",
        attr: "Verstand"
    },
    {
        id: "Verrückte Wissenschaft",
        name: "Verrückte Wissenschaft",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Verrückte Wissenschaft).",
        attr: "Verstand"
    },
    {
        id: "Zaubern",
        name: "Zaubern",
        descr: "Die arkane Fertigkeit für den Arkanen Hintergrund (Magie).",
        attr: "Verstand"
    }
];
