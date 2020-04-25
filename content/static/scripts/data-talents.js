'use strict';

app.talents = [{
        id: "Auserwaehlter",
        name: "Auserwählter",
        req: ["Willenskraft W8+", "Kämpfen W6+"],
        descr: "Auserwählte sind heilige (oder unheilige) Männer und Frauen, die auserkoren wurden, für eine Gottheit oder Religion zu kämpfen. Die meisten sind fromme Seelen und bereit, ihr Leben für eine grössere Sache zu opfern, doch einige wurden vielleicht in die Rolle hineingeboren und folgen ihrem Pfad eher zögerlich. Auserwählte bekämpfen die Kräfte der Dunkelheit (oder des Lichts). Sie addieren +2 Schaden, wenn sie übernatürlich böse (oder gute, wenn sie böse sind) Kreaturen angreifen. Der Bonus gilt auf Flächenschaden, Fernkampfangriffe, Mächte etc. Die SL muss entscheiden, auf welche Feinde dieser Bonus gilt, doch grundsätzlich sind es alle bösen (oder guten!) Kreaturen, die aus Magie entstanden sind oder übernatürliche Fähigkeiten haben."
    },
    {
        id: "Heiler",
        name: "Heiler",
        req: ["Willenskraft W8+"],
        descr: "Ein Held mit diesem Talent addiert +2 auf alle Heilenproben, egal ob sie natürlicher oder magischer Natur sind."
    },
    {
        id: "MutinFlaschen",
        name: "Mut in Flaschen",
        req: ["Konstitution W8+"],
        descr: "Dieser gesellige Charakter verarbeitet Alkohol ganz anders als die meisten. In der ersten Runde, nachdem er sich einen hinter die Binde gekippt hat (ungefähr 200 ml starker Schnaps oder etwas entsprechendes) steigt seine Konstitution um einen Würfeltyp (was auch seine Robustheit erhöht). Der Trinker kann ausserdem eine Stufe Wundabzüge ignorieren (was mit anderen Fähigkeiten, die diesen Effekt haben, kumulativ ist). Verstand, Geschicklichkeit und alle verknüpften Fertigkeiten erleiden aber für die Wirkungsdauer einen Abzug von –1. Der Effekt hält eine Stunde lang an, dann erleidet der Trinker für die nächsten vier Stunden eine Stufe Erschöpfung."
    },
    {
        id: "Sammler",
        name: "Sammler",
        req: ["Glück"],
        descr: "Einmal pro Begegnung kann der Held ein Ausrüstungsteil, eine Handvoll Munition oder einen anderen nützlichen Gegenstand finden, beziehungsweise „erinnert er sich“, dass er ihn die ganze Zeit schon dabei hatte. Die Spielleiterin entscheidet, was als Begegnung zählt, und hat das letzte Wort darüber, was „entdeckt“ werden kann und was nicht."
    },
    {
        id: "SechsterSinn",
        name: "Sechster Sinn",
        descr: "Dein Held kann spüren, wenn Gefahr droht. Wenn er auf Überraschung (Seite 107) würfelt, addiert er +2 auf seine Wahrnehmungsprobe, die entscheidet, ob er in der ersten Runde handeln darf. Bei einer Steigerung beginnt er die Begegnung mit einem aufgesparten Zug. In anderen Situationen, die nicht von den Überraschungsregeln abgewickelt werden (ein Heckenschütze, eine Grubenfalle, ein vergiftetes Getränk und so weiter) erlaubt Sechster Sinn eine Wahrnehmungsprobe mit –2 (oder +2, wenn normalerweise auch eine Wahrnehmungsprobe erlaubt wäre), um die Gefahr zu entdecken und entsprechend zu handeln. Wenn dies ein Angriff ist, und der Held seine Wahrnehmungsprobe schafft, erhält der Gegner keinen Überraschungsangriff-Bonus."
    },
    {
        id: "Tierempathie",
        name: "Tierempathie",
        descr: "Manche haben eine starke Bindung zu ihren Tiergefährten. Diese Charaktere können ihre eigenen Bennys für Tiere unter ihrer Kontrolle ausgeben. Dazu gehören Reittiere, Haustiere, Vertraute und so weiter."
    },
    {
        id: "Tiermeister",
        name: "Tiermeister",
        req: ["Willenskraft W8+"],
        descr: "Tiere gewöhnen sich schnell und ohne grosse Mühe an deinen Charakter. Sie greifen ihn nicht an, wenn er sie nicht zuvor irgendwie gegen sich aufgebracht hat. Die tierische Anziehungskraft des Tiermeisters ist so gross, dass ihm ausserdem ein loyales Tier folgt. Es ist normalerweise ein Tier von Grösse 0 oder kleiner, nach Zustimmung der Spielleiterin. Das Tier ist ein Statist und erhält keine Aufstiege. Wenn das Haustier weggeschickt oder getötet wird, findet der Held innerhalb von 1W4 Tagen einen Ersatz. Mächtigere Gefährten: Tiermeister kann mehr als einmal gewählt werden. Wähle jedes Mal einen der Effekte unten, wenn das Talent ausgewählt wird. • Du erhältst ein zusätzliches Haustier. • Erhöhe eine Eigenschaft des Tiers um einen Würfeltyp (nur eine Eigenschaft pro Tier). • Erhöhe die maximale Grösse, die dein Tier haben kann, um +1, auf ein Maximum von 3. • Mach ein Tier zur Wildcard. (Der Held muss mindestens Heroisch sein)."
    },
    {
        id: "Bedrohlich",
        name: "Bedrohlich",
        req: ["entweder Blutrünstig, Fies, Skrupellos oder Hässlich"],
        tags: ["sozial"],
        descr: "Es ist nicht immer ein Nachteil, ein ungehobelter Klotz zu sein, wenn man weiss, wie man es einsetzen kann. Bedrohlich erlaubt es einem Charakter, sein übles Aussehen oder seine noch üblere Einstellung auszunutzen. Der Charakter erhält +2 auf Einschüchternproben."
    },
    {
        id: "Beziehungen",
        name: "Beziehungen",
        tags: ["sozial"],
        descr: "Dein Held ist mit Personen oder Organisationen verbunden, die ihm helfen können, wenn es hart auf hart kommt. Vielleicht ist es die Mafia, die Bundespolizei, eine Gewerkschaft oder sogar andere Abenteurer. Beziehungen kann mehr als einmal ausgewählt werden, um jedes Mal eine neue Fraktion oder einen neuen Kontakt auszuwählen. Einmal pro Sitzung, vorausgesetzt, der Held hat eine Möglichkeit mit seinen Freunden in Kontakt zu treten, kann er sie um einen Gefallen bitten. Der Gefallen hängt von der Art des Kontakts ab (Entscheidung der SL), könnte aber ein Darlehen, Ausrüstung, einige tatkräftige Verbündete, Transportmittel, Informationen oder sogar einen Spezialisten mit besonderen Fertigkeiten, die die Gruppe nicht hat, wie einen Hacker oder Gelehrten, umfassen. "
    },
    {
        id: "Ermutigen",
        name: "Ermutigen",
        req: ["Willenskraft W8+"],
        tags: ["sozial"],
        descr: "Einen Feind zu erniedrigen kann auch einen Verbündeten ermutigen. Wenn dieser Charakter erfolgreich einen Gegner herausfordert, kann er zusätzliche den Zustand Abgelenkt oder Verwundbar (siehe Seite 97) von einem seiner Verbündeten entfernen."
    },
    {
        id: "Erniedrigen",
        name: "Erniedrigen",
        req: ["Provozieren W8+"],
        tags: ["sozial"],
        descr: "Wer viel Übung darin hat, fiese Sprüche zu klopfen, kann das Ego eines Rivalen mit einer einzigen Bemerkung oder bedeutungsvollen Geste regelrecht zerstören. Dein Held erhält eine freie Wiederholung für Provozierenproben."
    },
    {
        id: "Erzürnen",
        name: "Erzürnen",
        req: ["Provozieren W6+"],
        tags: ["sozial"],
        descr: "Clevere Charaktere können ihre Feinde manipulieren und ihre Aufmerksamkeit auf sich lenken, um ihre Freunde zu unterstützen. Einmal pro Zug kann dein Held, wenn er eine Provozieren-Herausforderung verwendet und eine Steigerung erzielt (siehe Herausfordern, Seite 104), einen Feind „erzürnen“. Neben den üblichen Effekten eines Erfolgs mit Steigerung erleidet der Gegner einen Abzug von –2, wenn er Ziele ausser dem Charakter, der ihn erzürnt hat, beeinflussen will. Dies gilt zusätzlich zu Abgelenkt, kann aber nicht mit weiteren Anwendungen von Erzürnen kombiniert werden. Erzürnen hält an, bis ein Joker gezogen wird, jemand anderes Erzürnen gegen das Ziel verwendet, oder die Begegnung endet. Erzürnen kann mehrere Ziele beeinflussen indem es mit Aufwiegler kombiniert wird."
    },
    {
        id: "Gassenwissen",
        name: "Gassenwissen",
        req: ["Verstand W6+"],
        tags: ["sozial"],
        descr: "Charaktere, die dieses Talent besitzen, wissen, wie sie den örtlichen Schwarzmarkt finden, gestohlene Güter verhökern, den örtlichen Gesetzeshütern (oder den Verbrechern!) ausweichen können, sich bedeckt halten, wenn es brenzlig wird, illegale Waffen erwerben oder herausfinden können, welcher „Boss“ Schläger anheuert und so weiter. Charaktere mit diesem Talent addieren +2 auf Proben mit Einschüchtern oder Überreden zur Informationsbeschaffung (siehe Seite 120), sofern diese zwielichtige oder kriminelle Elemente involvieren. Sie addieren ausserdem +2 auf Allgemeinwissenproben, die mit zwielichtigen Aktivitäten (wie weiter oben beschrieben) zu tun haben."
    },
    {
        id: "Konter",
        name: "Konter",
        req: ["Provozieren W6+"],
        tags: ["sozial"],
        descr: "Wer sich mit diesem spitzzüngigen Sprücheklopfer anlegt bekommt seine dummen Sprüche direkt selbst wieder um die Ohren gehauen. Wenn ein Charakter mit Konter eine Steigerung erzielt, wenn er einer Einschüchtern- oder Provozieren- Herausforderung widersteht, wird sein Gegner Abgelenkt."
    },
    {
        id: "Rampensau",
        name: "Rampensau",
        req: ["Willenskraft W8+"],
        tags: ["sozial"],
        descr: "Die Worte deines Helden inspirieren nicht nur jene, an die sie gerichtet sind, sondern oft auch Leute in der Umgebung. Einmal pro Zug kannst du Rampensau verwenden, um einen zusätzlichen Fertigkeitswürfel zu werfen, wenn du mit Darbietung oder Überreden unterstützt. Der zusätzliche Würfel unterstützt einen weiteren Verbündeten, der den Helden sehen oder hören kann, und gilt für seine nächste Aktion, egal was diese auch sein mag."
    },
    {
        id: "Selbstlos",
        name: "Selbstlos",
        req: ["Willenskraft W8+"],
        tags: ["sozial"],
        descr: "Selbstlose Helden und entschlossene Anführer wissen, dass ihre grösste Stärke oft von ihren Gefährten kommt, und sind bereit, einen Teil ihres Glücks oder Schicksals mit ihnen zu teilen. Ein Charakter mit diesem Talent kann seine Bennys jedem anderen Charakter geben, mit dem er kommunizieren kann. Der Spieler sollte erklären, wie das genau aussieht: Von einem kurzen ermunternden Ausruf bis hin zu einem freundlichen Schulterklopfen ist so einiges möglich."
    },
    {
        id: "StarkerWille",
        name: "Starker Wille",
        req: ["Willenskraft W8+"],
        tags: ["sozial"],
        descr: "Selbstvertrauen ist eine starke Rüstung gegen jene, die diese Person kleinreden wollen. Sie addiert +2 auf ihr Gesamtergebnis, wenn sie Herausfordern mit Verstand oder Willenskraft widersteht."
    },
    {
        id: "EisernerWille",
        name: "Eiserner Wille",
        req: ["Starker Wille"],
        tags: ["sozial"],
        descr: "Wenige Dinge bringen diesen Charakter aus dem Gleichgewicht. Der Starker Wille-Bonus gilt nun für Verstand- und Willenskraftproben, um Mächten zu widerstehen und sich von ihren Auswirkungen zu erholen. Dieser Bonus ist nicht kumulativ mit dem Bonus von Mutig. Er wird ausserdem nicht auf Folgeproben angewendet, zum Beispiel auf solche, um sich von einem Angeschlagen-Zustand zu erholen, den man durch eine schadenzufügende Macht, Furcht oder ähnliches erhalten hat."
    },
    {
        id: "Verlaesslich",
        name: "Verlässlich",
        req: ["Willenskraft W8+"],
        tags: ["sozial"],
        descr: "Die Leute wissen, dass sie sich auf deinen Helden verlassen können, wenn sie Hilfe brauchen. Er erhält eine freie Wiederholung bei allen Unterstützen-Würfen, die er ablegt."
    },
    {
        id: "Energieschub",
        name: "Energieschub",
        req: ["Arkaner Hintergrund (beliebig)", "arkane Fertigkeit W8+"],
        tags: ["macht"],
        descr: "Der Charakter erhält 10 Machtpunkte zurück, wenn seine Aktionskarte ein Joker ist. Dabei kann er sein Maximum nicht übersteigen."
    },
    {
        id: "Machtpunkte",
        name: "Machtpunkte",
        req: ["Arkaner Hintergrund (beliebig)"],
        tags: ["macht"],
        descr: "Magier, verrückte Wissenschaftler und andere arkane Charaktere wollen immer mehr Macht. Dieses Talent gewährt ihnen 5 zusätzliche Machtpunkte. Machtpunkte kann mehr als einmal gewählt werden, aber nur einmal pro Rang. Es kann auf dem Legendären Rang beliebig oft gewählt werden, gewährt aber nur jeweils 2 zusätzliche Machtpunkte."
    },
    {
        id: "NeueMaechte",
        name: "Neue Mächte",
        req: ["Arkaner Hintergrund (beliebig)"],
        tags: ["macht"],
        descr: "Ein arkaner Charakter kann zwei neue Mächte erlernen, indem er dieses Talent erwirbt (das er mehrere Male auswählen kann). Er kann Mächte für seinen Rang und darunter auswählen, die normalerweise für seinen Arkanen Hintergrund verfügbar sind. Ein Charakter kann, statt einer neuen Macht, auch eine neue Ausprägung für eine Macht wählen, die er schon besitzt. Er könnte zum Beispiel eine Eis- Ausprägung, zusätzlich zu seinem Feuer-Geschoss, erlenen und dann je nach Bedarf zwischen der Feuer und der Eis-Ausprägung wählen."
    },
    {
        id: "BeidhaendigerFernkampf",
        name: "Beidhändiger Fernkampf",
        req: ["Geschicklichkeit W8+"],
        tags: ["kampf"],
        descr: "Beidhändiger Fernkampf funktioniert genau wie Beidhändiger Kampf, sodass du mit verschiedenen Aktionen eine Waffe in jeder Hand abfeuern oder werfen kannst, ohne einen Mehrfachaktionsabzug auszulösen. Wenn der Charakter ausserdem Beidhändiger Kampf besitzt, darf der zweite Angriff auch ein Nahkampfangriff sein."
    },
    {
        id: "BeidhaendigerKampf",
        name: "Beidhändiger Kampf",
        req: ["Geschicklichkeit W8+"],
        tags: ["kampf"],
        descr: "Wenn ein Charakter einen Kämpfen-Angriff mit einer Aktion und einen weiteren Kämpfen-Angriff mit einer anderen Hand in einer späteren Aktion ausführt, verursacht der zweite Angriff keinen Mehrfachaktionsabzug. Der Abzug für Angriffe mit der falschen Hand gilt allerdings schon, es sei denn, der Charakter ist Beidhändig (Seite 59). Wenn der Charakter ausserdem Beidhändiger Fernkampf besitzt, darf der zweite Angriff auch ein Fernkampfangriff sein."
    },
    {
        id: "Berechnend",
        name: "Berechnend",
        req: ["Verstand W8+"],
        tags: ["kampf"],
        descr: "Wenn dein Held ein paar Augenblicke hat, seine Feinde unter die Lupe zu nehmen, bringt ihm das einen enormen Vorteil ein. Wenn seine Aktionskarte eine 5 oder weniger ist, ignoriert er bis zu 2 Punkte an Abzügen auf eine Aktion in diesem Zug, was Abzüge für Mehrfachaktionen, Deckung, Entfernung und sogar Wundabzüge sein können."
    },
    {
        id: "Eisenkiefer",
        name: "Eisenkiefer",
        req: ["Konstitution W8+"],
        tags: ["kampf"],
        descr: "Der Held kann auch extreme Treffer abschütteln. Er addiert +2 auf Schaden wegstecken und Konstitutionsproben, um K.O.-Schläge (siehe Seite 107) zu vermeiden."
    },
    {
        id: "Erstschlag",
        name: "Erstschlag",
        req: ["Geschicklichkeit W8+"],
        tags: ["kampf"],
        descr: "Einmal pro Runde erhält der Held, solange er nicht Angeschlagen oder Betäubt ist, einen freien Kämpfen- Angriff gegen einen Feind unmittelbar nachdem sich dieser in seine Reichweite bewegt hat. (Siehe Freie Angriffe auf Seite 102."
    },
    {
        id: "Finte",
        name: "Finte",
        req: ["Kämpfen W8+"],
        tags: ["kampf"],
        descr: "Wenn du deinen Gegner mit der Kämpfen-Fertigkeit herausforderst (siehe Seite 104), kannst du den Feind den Widerstandswurf mit Verstand anstelle von Geschicklichkeit würfeln lassen."
    },
    {
        id: "Kampfkünstler",
        name: "Kampfkünstler",
        req: ["Kämpfen W6+"],
        tags: ["kampf"],
        descr: "Der Kämpfer hat die Grundlagen einer Kampfkunst erlernt. Seine Fäuste und Füsse sind Waffen (siehe Natürliche Waffen, Seite 105) und somit gilt er immer als bewaffnet. Er addiert +1 bei Kämpfen-Angriffen mit ihnen und verursacht Stärke + W4 Schaden. Wenn er bereits einen Stärke-Schadenswürfel durch die Volkseigenart Klauen (siehe Seite 19) oder das Talent Raufbold erhält, erhöhe den Schadenswürfel um einen Würfeltyp. Kampfkünstler addieren keinen Schaden auf andere Natürliche Waffen wie Fänge oder Hörner."
    },
    {
        id: "Lieblingswaffe",
        name: "Lieblingswaffe",
        req: ["Fertigkeit mit der gewählten Waffe auf W8+"],
        tags: ["kampf"],
        descr: "Der Held kennt eine einzigartige Waffe (Excalibur, Old Betsy, Stich) sehr genau. Wenn er sie verwendet, addiert er +1 auf seine Proben mit Athletik (Werfen), Kämpfen oder Schiessen, und erhält +1 Parade, wenn er die Waffe bereitgemacht hat (selbst bei einer Fernkampfwaffe). Ein Kämpfer kann dieses Talent mehrere Male wählen und jedes Mal für eine andere Waffe verwenden. Wenn eine Lieblingswaffe verloren geht, kann sie ersetzt werden, doch die Vorteile treten erst nach ein paar Tagen wieder in Kraft (solange wie die SL für angemessen hält)."
    },
    {
        id: "MaechtigerHieb",
        name: "Mächtiger Hieb",
        req: ["Kämpfen W8+"],
        tags: ["kampf"],
        descr: "Wenn deine Aktionskarte ein Joker ist, verdopple den Gesamtschaden deines ersten erfolgreichen Kämpfen- Angriffs in dieser Runde."
    },
    {
        id: "Parkour",
        name: "Parkour",
        req: ["Geschicklichkeit W8+", "Athletik W6+"],
        tags: ["kampf"],
        descr: "Dein Charakter geht der Sportart „Parkour“ nach, oder ist einfach sehr geschickt darin, zu rennen, zu springen, zu schwingen, Wände emporzukrabbeln und über Hindernisse zu kommen. Solange es Hindernisse gibt, auf die er springen, von denen er abprallen oder an denen er sich schwingen kann, bewegt er sich auf dem Boden mit voller Bewegungsweite durch Schwieriges Gelände, wenn er zu Fuss ist. Er addiert ausserdem +2 auf Athletikproben, sofern es etwas mit Klettern zu tun hat, und in Verfolgungsjagden zu Fuss (siehe Verfolgungsjagden & Fahrzeuge, Seite 135)."
    },
    {
        id: "Raufbold",
        name: "Raufbold",
        req: ["Stärke W8+", "Konstitution W8+"],
        tags: ["kampf"],
        descr: "Seine Fäuste schlagen ein wie Hämmer, seine Klauen schneiden wie eine Sense. Sein Körper fühlt sich an, als würde er aus Stein bestehen. Raufbolde erhöhen ihre Robustheit um 1 und verursachen Stärke + W4 Schaden, wenn sie mit ihren Fäusten oder Füssen angreifen (oder Klauen, wenn sie welche haben). Wenn sie bereits Schaden durch Klauen (siehe Seite 19) verursachen, das Talent Kampfkünstler besitzen, etc., erhöhe den Schadenswürfel um einen Schritt. Das Talent Raufbold lässt die Fäuste des Charakters nicht zu Natürlichen Waffen (Seite 105) werden."
    },
    {
        id: "Rückzug",
        name: "Rückzug",
        req: ["Geschicklichkeit W8+"],
        tags: ["kampf"],
        descr: "Wenn sich ein Charakter aus dem Nahkampf zurückzieht, erhalten angrenzende Charaktere einen freien Kämpfen-Angriff gegen ihn (siehe Zurückziehen aus dem Nahkampf auf Seite 109). Dies ist für die meisten sehr gefährlich, aber nicht für deinen gewieften Recken. Wenn du dich von angrenzenden Gegnern wegbewegst, erhält einer von ihnen (Wahl des Spielers) keinen freien Angriff."
    },
    {
        id: "RuhigeHaende",
        name: "Ruhige Hände",
        req: ["Geschicklichkeit W8+"],
        tags: ["kampf"],
        descr: "Es ist schwierig, vom Rücken eines Pferdes oder einem sich bewegenden Fahrzeug aus zu schiessen, aber dein Held weiss, wie es geht. Er ignoriert den Abzug für Unsicheren Grund (siehe Seite 108). Dies hilft auch, wenn er sprintet, sodass der übliche Abzug fürs Sprinten von –2 auf –1 sinkt (siehe Bewegung, Seite 142)."
    },
    {
        id: "Rundumschlag",
        name: "Rundumschlag",
        req: ["Stärke W8+", "Kämpfen W8+"],
        tags: ["kampf"],
        descr: "Rundumschlag erlaubt es dem Charakter, einen Kämpfen-Angriff mit –2 auszuführen und das Ergebnis gegen alle Gegner innerhalb seiner Reichweite (Freund und Feind) anzuwenden. Ermittle den Schaden für jeden getroffenen Gegner einzeln. Ein Kämpfer kann nur einen Rundumschlag pro Zug durchführen. Er kann nicht mit Schneller Angriff kombiniert werden."
    },
    {
        id: "Schmerzresistenz",
        name: "Schmerzresistenz",
        req: ["Konstitution W8+"],
        tags: ["kampf"],
        descr: "Dein Held hat gelernt, trotz extremer Schmerzen weiterzukämpfen. Er kann 1 Punkt Wundabzüge ignorieren."
    },
    {
        id: "StaerkereSchmerzresistenz",
        name: "Stärkere Schmerzresistenz",
        req: ["Schmerzresistenz"],
        tags: ["kampf"],
        descr: "Dieser Held ignoriert 2 Punkte Wundabzüge."
    },
    {
        id: "Schwerzutoeten",
        name: "Schwer zu töten",
        req: ["Willenskraft W8+"],
        tags: ["kampf"],
        descr: "Dieser Abenteurer hat mehr Leben als eine Herde Katzen. Er kann seine Wundabzüge ignorieren, wenn er Konstitutionsproben ablegt, um nicht zu Verbluten (siehe Seite 95)."
    },
    {
        id: "Volltreffer",
        name: "Volltreffer",
        req: ["Athletik oder Schiessen W8+"],
        tags: ["kampf"],
        descr: "Wenn deine Aktionskarte ein Joker ist, verdopple den Gesamtschaden deines ersten erfolgreichen Angriffs mit Athletik (Werfen) oder Schiessen in dieser Runde."
    },
    {
        id: "Aristokrat",
        name: "Aristokrat",
        tags: ["hintergrund"],
        descr: "Der Charakter wurde privilegiert geboren oder stieg später im Leben im Stand auf. Er könnte Geld haben oder auch nicht (siehe die Talente Reich und Stinkreich), aber auf jeden Fall bewegt er sich in der Elite der sozialen Kreise des Settings. Aristokraten addieren +2 auf Überreden, wenn sie Informationsbeschaffung bei der örtlichen Elite, Industriellen, Adeligen oder anderen Aristokraten betreiben (siehe Seite 120). Sie addieren ausserdem +2 auf Allgemeinwissen, wenn es um die Etikette der Oberschicht, Stammbäume und Heraldik oder lokale Gerüchte über andere Vertreter ihres Standes geht."
    },
    {
        id: "ArkaneResistenz",
        name: "Arkane Resistenz",
        req: ["Willenskraft W8+"],
        tags: ["hintergrund"],
        descr: "Magie und übernatürliche Kräfte haben wenig Einfluss auf diesen Charakter. Egal ob es an seinem Wesen, seiner Abstammung oder einer besonderen Ausbildung liegt, auf jeden Fall ist der Charakter besonders resistent gegen Magie, Psionik und andere übernatürliche Energien. Arkane Fertigkeiten, die den Helden als Ziel haben, erleiden einen Abzug von –2 (auch wenn sie von Verbündeten verwendet werden!), und magischer Schaden wird um –2 Punkte verringert."
    },
    {
        id: "StarkeArkaneResistenz",
        name: "Starke Arkane Resistenz",
        req: ["Arkane Resistenz"],
        tags: ["hintergrund"],
        descr: "Wie oben, doch steigt der Abzug auf arkane Fertigkeitswürfe und Schaden auf –4."
    },
    {
        id: "ArkanerHintergrund",
        name: "Arkaner Hintergrund",
        tags: ["hintergrund"],
        descr: "Der Kontakt mit seltsamen Energie, Studien an einer Zauberschule oder die Gaben göttlicher oder spiritueller Wesenheiten gewähren Charakteren manchmal besondere Kräfte. Solche Charaktere haben das Talent Arkaner Hintergrund und entwickeln übernatürlicher Fähigkeiten. Siehe Kapitel 5 (ab Seite 147) für eine vollständige Übersicht über die arkanen Hintergründe, Mächte und wie du sie verwendest."
    },
    {
        id: "Attraktiv",
        name: "Attraktiv",
        req: ["Konstitution W6+"],
        tags: ["hintergrund"],
        descr: "Es ist kein Geheimnis, dass Leute hilfsbereiter sind, wenn sie ihr Gegenüber körperlich anziehend finden. Dein Charakter addiert +1 auf Würfe mit Darbietung und Überreden, wenn das Ziel ihn generell anziehend findet (in Bezug auf Geschlecht, Spezies und so weiter)."
    },
    {
        id: "SehrAttraktiv",
        name: "Sehr Attraktiv",
        req: ["Attraktiv"],
        tags: ["hintergrund"],
        descr: "Dein Held ist atemberaubend. Er erhöht den Bonus auf Darbietung und Überreden auf +2."
    },
    {
        id: "Aufmerksamkeit",
        name: "Aufmerksamkeit",
        tags: ["hintergrund"],
        descr: "Dem Helden entgeht nicht viel.Er ist sehr aufmerksam und scharfsinnig und addiert + 2 auf Wahrnehmungsproben, wenn er die Welt, die ihn umgibt, hören, sehen oder anderweitig wahrnehmen möchte."
    }, {
        id: "Beidhaendig",
        name: "Beidhändig",
        req: ["Geschicklichkeit W8+"],
        tags: ["hintergrund"],
        descr: "Dein Krieger ist mit der linken Hand so geschickt wie mit der rechten. Er ignoriert den Abzug für Angriffe mit der falschen Hand (siehe Seite 97). Wenn beidhändige Charaktere in jeder Hand eine Waffe halten, dürfen sie die Parade-Boni beider Waffen addieren (wenn beide einen haben)."
    },
    {
        id: "Bekannt",
        name: "Bekannt",
        tags: ["hintergrund"],
        descr: "Dein Charakter ist eine kleinere Berühmtheit. Vielleicht ist er ein beliebter Barde, der in einem Lehen bekannt ist, ein kleinerer Rockstar oder ein beliebter Schauspieler in B-Movies. Er verdient doppelt so viel, wenn er für Bezahlung auftritt (siehe Darbietung, Seite 29). Er kann seine Berühmtheit auch verwenden, um +1 auf Überredenproben zu addieren, wenn das Ziel freundlich gesinnt ist und weiss, wer er ist (ein Wurf auf Allgemeinwissen, mit einem Modifikator, der davon abhängt, wie wahrscheinlich es ist, dass die Person schon von dem Charakter gehört hat). Der Nachteil von Ruhm ist, dass die Person oft erkannt wird, andere oft etwas von ihr haben wollen, sie von Fans und Bewunderern verfolgt wird, oder sie nicht dazu in der Lage ist, Engagements, Auftritte oder anderen Verpflichtungen zu vermeiden, ohne in Schwierigkeiten zu kommen."
    },
    {
        id: "Berserker",
        name: "Berserker",
        tags: ["hintergrund"],
        descr: "Berserker werden wild und fast unkontrollierbar, wenn der „rote Zorn“ sie ergreift, doch ihr Zorn lässt sie auch zu tödlichen Mordmaschinen werden! Unmittelbar nachdem er eine Wunde erlitten hat oder Angeschlagen ist (nur durch körperlichen Schaden), muss dein Held eine Verstandsprobe würfeln, um nicht in den Berserkerrausch zu verfallen. Er kann sich entscheiden, die Probe freiwillig nicht zu schaffen, wenn er möchte. Der Berserkerrausch hat folgende Auswirkungen: WÜTEND: Der Stärkewert des Charakters steigt um einen Würfeltyp und alle Angriffe müssen als Rücksichtslose Angriffe (siehe Seite 105) ausgeführt werden. Er kann keine Fertigkeiten verwenden, die einen klaren Verstand oder Konzentration erfordern (Entscheidung der SL). Er könnte beispielsweise durchaus Drohungen brüllen und somit Einschüchtern verwenden.  ZORNIG: Adrenalin und Zorn treiben die Muskeln des Berserkers an, wodurch er +2 Robustheit erhält. Er ignoriert eine Stufe Wundabzüge (dies ist kumulativ mit anderen Fähigkeiten, die Wundabzüge verringern).  UNGEZÜGELT: Immer wenn der Berserker einen Kritischen Fehlschlag bei einer Kämpfenprobe erzielt, trifft er ein zufälliges Ziel in Reichweite seines Angriffs (nicht das eigentliche Ziel), egal ob Freund oder Feind. Wenn es keine passenden Ziele gibt, geht der Schlag einfach ins Leere, zertrümmert Gegenstände in der Umgebung oder etwas in der Art. Nach fünf durchgehenden Runden des Berserkerzorns erleidet der Held eine Erschöpfungsstufe. Nach zehn Runden erleidet er weitere Stufe Erschöpfung und der Zorn endet. Er kann seinen Zorn auch jederzeit bewusst abbrechen, indem er eine Verstandsprobe mit –2 ablegt (dies ist eine freie Aktion, und ermöglicht es, die Erschöpfung zu umgehen, wenn es dem Charakter gelingt, den Zorn zu beenden, ehe sie verursacht wird!). Beginne neu damit, Runden zu zählen, wenn er wieder in Berserkerrausch verfällt, selbst wenn es im selben Kampf ist."
    },
    {
        id: "Charismatisch",
        name: "Charismatisch",
        req: ["Willenskraft W8+"],
        tags: ["hintergrund"],
        descr: "Dein Held ist aus irgendeinem Grund sehr sympathisch. Er ist vielleicht vertrauenserweckend oder freundlich, oder strahlt einfach Selbstvertrauen und guten Willen aus. Du darfst Überredenproben einmal wiederholen (siehe Wiederholung auf Seite 89)."
    },
    {
        id: "Elan",
        name: "Elan",
        req: ["Willenskraft W8+"],
        tags: ["hintergrund"],
        descr: "Elan bedeutet Begeisterung oder Wille. Wer dieses Talent hat, läuft zur Höchstform auf, wenn es hart auf hart kommt. Wenn du einen Benny ausgibst, um eine Eigenschaftsprobe zu wiederholen, addiere +2 auf das Gesamtergebnis. Der Bonus gilt nur auf den wiederholten Wurf. Er gilt nicht für Schadenswürfe (da sie keine Eigenschaftsproben sind), und auch nicht beim Schaden wegstecken, wenn du nicht zusätzlich einen Benny verwendest, um die Konstitutionsprobe zu widerholen."
    },
    {
        id: "Flink",
        name: "Flink",
        req: ["Geschicklichkeit W6+"],
        tags: ["hintergrund"],
        descr: "Die Bewegungsweite des Helden steigt um +2, und sein Sprintwürfel wird um einen Typ verbessert (ein W6 wird beispielsweise ein W8)."
    },
    {
        id: "Glück",
        name: "Glück",
        tags: ["hintergrund"],
        descr: "Der Abenteurer scheint vom Schicksal, Karma, den Göttern oder an welche äusseren Kräften er auch immer glauben mag (oder welche an ihn glauben), gesegnet. Er zieht einen zusätzlichen Benny zu Beginn einer jeden Spielsitzung, sodass ihm wichtige Aufgaben leichter gelingen als den meisten, und er selbst extremste Gefahren überstehen kann."
    },
    {
        id: "GrossesGlück",
        name: "Grosses Glück",
        req: ["Glück"],
        tags: ["hintergrund"],
        descr: "Der Spieler zieht zu Beginn einer jeden Sitzung zwei zusätzliche Bennys statt einem."
    },
    {
        id: "Kraeftig",
        name: "Kräftig",
        req: ["Stärke W6+", "Konstitution W6+"],
        tags: ["hintergrund"],
        descr: "Dein Charakter ist sehr gross oder sehr fit. Seine Grösse steigt um +1 (und somit auch seine Robustheit), und er behandelt seine Stärke als um einen Würfeltyp höher, wenn es um die Ermittlung von Behinderung (siehe Seite 67) und Mindeststärke geht, damit Rüstungen, Waffen und Ausrüstungsgegenstände ohne Abzug verwendet werden können. Kräftig kann die Grösse eines Charakters nicht über +3 anheben."
    },
    {
        id: "Linguist",
        name: "Linguist",
        req: ["Verstand W6+"],
        tags: ["hintergrund"],
        descr: "Dieser weitgereiste Charakter hat ein Ohr für Sprachen. Er beginnt das Spiel mit einer Anzahl von Sprache-Fertigkeiten gleich seinem halbem Verstand- Würfel auf einem Wert von W6 (siehe die Fertigkeit Sprache auf Seite 34)."
    },
    {
        id: "Mutig",
        name: "Mutig",
        req: ["Willenskraft W6+"],
        tags: ["hintergrund"],
        descr: "Charaktere mit diesem Talent haben gelernt, ihre Furcht zu meistern, oder sie haben so viele grauenvolle Dinge gesehen, dass sie abgestumpft sind. Diese tapferen Entdecker addieren +2 auf Furchtproben und ziehen –2 von Ergebnissen auf der Furchttabelle (siehe Seite 114) ab."
    },
    {
        id: "Reich",
        name: "Reich",
        tags: ["hintergrund"],
        descr: "Egal ob diese Person mit dem Silberlöffel im Mund geboren wurde oder sich ihr Vermögen mit harter Arbeit verdient hat, sie hat auf jeden Fall mehr Geld als die meisten Leute. Reiche Helden beginnen das Spiel mit dem dreifachen normalen Startkapital für das Setting. Wenn ein regelmässiges Einkommen für das Setting angemessen erscheint, erhält der Charakter die Entsprechung eines heutigen Jahresgehalts von $150.000."
    },
    {
        id: "Stinkreich",
        name: "Stinkreich",
        req: ["Reich"],
        tags: ["hintergrund"],
        descr: "Dieser glückliche Charakter hat wirklich sehr viel Geld. Verfünffache das Startkapital für das Setting bei der Charaktererschaffung, und wenn es angemessen erscheint, erhält der Charakter ein Jahreseinkommen, das etwa modernen $500.000 entspricht. Es mag noch reichere Charaktere geben, doch solange das keinen Spieleffekt hat, ist es nicht so wichtig. Details hierfür sollten mit der SL ausgearbeitet werden und gleichzeitig viele weitere Ressourcen sowie lästige Verantwortung mit sich bringen."
    },
    {
        id: "Rohling",
        name: "Rohling",
        req: ["Stärke W6+", "Konstitution W6+"],
        tags: ["hintergrund"],
        descr: "Rohlinge konzentrieren sich mehr auf Stärke und Fitness als auf Koordination und Flexibilität. Für sie ist Athletik mit Stärke verknüpft, nicht mit Geschicklichkeit, wenn es um Aufstiege geht. Der Charakter kann Athletikproben auch mit Stärke widerstehen, wenn er das möchte. Ausserdem erhöhen Rohlinge die kurze Entfernung von geworfenen Gegenständen um +1. Verdopple den Bonus, um die angepasste mittlere Entfernung zu erhalten, und noch einmal für die weite Entfernung. Wenn die Fernkampfreichweite eines geworfenen Gegenstands beispielsweise 3/6/12 beträgt, ist die Fernkampfreichweite des Rohlings 4/8/16."
    },
    {
        id: "Schnell",
        name: "Schnell",
        req: ["Geschicklichkeit W8+"],
        tags: ["hintergrund"],
        descr: "Schnelle Charaktere haben blitzschnelle Reflexe und die Ruhe weg. Wenn du eine Aktionskarte von 5 oder weniger ausgeteilt bekommst, kannst du sie abwerfen und neu ziehen, bis du eine Karte erhältst, die höher ist als 5. Charaktere mit Kühler Kopf und Schnell ziehen zuerst ihre zusätzliche Karte und entscheiden dann, welche sie nehmen. Wenn diese Karte eine 5 oder darunter ist, können sie dann das Talent Schnell verwenden, um eine Ersatzkarte zu ziehen, bis sie auf 6 oder höher kommen."
    },
    {
        id: "SchnelleHeilung",
        name: "Schnelle Heilung",
        req: ["Konstitution W8+"],
        tags: ["hintergrund"],
        descr: "Charaktere mit diesem Talent addieren +2 auf Konstitutionproben für Natürliche Heilung und würfeln alle drei Tage, nicht nur alle fünf (siehe Heilung, Seite 96)."
    },
    {
        id: "Akrobat",
        name: "Akrobat",
        req: ["GeschicklichkeitW8+", "Athletik W8+"],
        tags: ["experte"],
        descr: "Der Akrobat kann Proben auf Athletik einmal kostenlos wiederholen, die sich um Gleichgewicht, Abrollen oder Ringen drehen. Das hat keinen Einfluss auf Proben, um Aktionen zu unterbrechen, zu klettern, zu schwimmen oder zu werfen."
    },
    {
        id: "Alleskoenner",
        name: "Alleskönner",
        req: ["Verstand W10+"],
        tags: ["experte"],
        descr: "Durch eine gute Ausbildung, Bücherwissen, computerverbesserte Fertigkeitenprogramme oder einfach unglaubliche intuitive Auffassungsgabe hat dein Held ein Talent dafür entwickelt, spontan Fertigkeiten aufzuschnappen. Es gibt wenig, was er nicht mit ein bisschen Zeit und einer Prise Glück verstehen kann. Nachdem er eine bestimmte Fertigkeit beobachtet oder studiert hat, legt der Charakter eine Verstandsprobe als seine Aktion ab. Bei einem Erfolg erhält er einen W4 in der Fertigkeit, bei einer Steigerung einen W6. Er kann es nach einer weiteren Stunde Studien und Herumprobieren oder Vertiefung in das Thema noch einmal versuchen, wenn der Wurf misslungen ist, oder er es auf eine Steigerung abgesehen hat. Dieser Effekt hält an, bis der Charakter versucht ein anderes Thema zu lernen, egal ob erfolgreich oder nicht."
    },
    {
        id: "AssamSteuer",
        name: "Ass am Steuer",
        req: ["Geschicklichkeit W8+"],
        tags: ["experte"],
        descr: "Ein Ass am Steuer ist ein Pilot oder Fahrer mit einer besonderen Affinität für sein Auto, Boot, Flugzeug oder anderes Fahrzeug. Er ignoriert zwei Punkte Abzüge auf alle Proben mit Fahren, Pilot oder Seefahrt und kann Bennys ausgeben, um damit Schaden wegstecken für Fahrzeuge anzuwenden, die er lenkt oder kommandiert, jeweils mit der passenden Fertigkeit Fahren, Pilot oder Seefahrt anstelle von Konstitution. Ein Erfolg und jede Steigerung negieren eine Wunde."
    },
    {
        id: "Assassine",
        name: "Assassine",
        req: ["Geschicklichkeit W8+", "Kämpfen W6+", "Heimlichkeit W8+"],
        tags: ["experte"],
        descr: "Assassinen sind ausgebildete Mörder, die wissen, wie man auch die härtesten Gegner um die Ecke bringt. Sie addieren +2 auf Schadenswürfe, wenn ihre Gegner Verwundbar sind oder sie einen Überraschungsangriff ausführen."
    },
    {
        id: "Dieb",
        name: "Dieb",
        req: ["Geschicklichkeit W8+", "Heimlichkeit W6+", "Diebeskunst W6+"],
        tags: ["experte"],
        descr: "Diebe sind spezialisiert auf Täuschung, Verrat und Akrobatik. Sie sind unabdingbar, wenn es gilt, Fallen zu entdecken, Wände zu erklimmen und Schlösser zu knacken. Diebe wissen, wie sie Vorsprünge an Wänden und Fenstersimsen verwenden können, um die höchsten Gebäude zu erklimmen und wie Katzen durch Strassen und Gassen zu huschen. Sie addieren +1 auf Athletikproben, um in urbanen Gebieten zu klettern. Diebe wissen auch, wie man sich in der Dunkelheit zwischen Strassenlaternen bewegt, und addieren +1 auf Heimlichkeitsproben in urbanen Umgebungen. Ausserdem sind diese Schurken sehr geschickt, wenn es um Diebeskunst geht, und addieren in allen Umständen +1 auf entsprechende Proben."
    },
    {
        id: "Ermittler",
        name: "Ermittler",
        req: ["Verstand W8+", "Recherche W8+"],
        tags: ["experte"],
        descr: "Ermittler verbringen viel Zeit damit, über alte Legenden zu forschen, sich auf der Strasse umzuhören oder teuflische Mysterien zu entschlüsseln. Einige dieser Helden sind tatsächlich Privatermittler, andere sind Magier-Detektive in Fantasywelten oder neugierige Collegeprofessoren, die auf Dinge stossen, die die Menschheit niemals wissen sollte. Ermittler addieren +2 auf Recherche und auf Wahrnehmung, sofern sie auf einem Schreibtisch nach bedeutsamen Papieren suchen, einen Stapel Werbepost nach etwas Wichtigem durchwühlen oder versteckte Gegenstände in einem Haufen Schrott oder Schutt entdecken wollen."
    },
    {
        id: "Gelehrter",
        name: "Gelehrter",
        req: ["Recherche W8+"],
        tags: ["experte"],
        descr: "Gebildete Professoren, hingebungsvolle Studenten und enthusiastische Amateure verwenden viel Zeit und Energie auf das Studium eines bestimmten Themas. Sie werden Experten in diesem Feld, und nur selten fehlen ihnen Antworten, wenn es um eine Frage aus ihrem Fachgebiet geht. Wähle eine der folgenden Fertigkeiten aus: Geisteswissenschaften, Kriegsführung, Naturwissenschaften, Okkultismus oder eine auf Verstand basierende „Wissensfertigkeit“, die in deinem Setting erlaubt ist. Du kannst +2 addieren, wenn die Fertigkeit verwendet wird. Das Talent kann mehr als einmal gewählt werden, um verschiedene Fertigkeiten abzudecken."
    },
    {
        id: "McGyver",
        name: "McGyver",
        req: ["Verstand W6+", "Wahrnehmung W8+", "Reparieren W6+"],
        tags: ["experte"],
        descr: "Ein McGyver kann ein Gerät aus leicht verfügbaren Ressourcen improvisieren, wenn es nötig ist. Mit ein paar einfachen Gegenständen kann er eine Reparierenprobe ablegen, um improvisierte Waffen, Sprengstoffe oder Werkzeuge herzustellen, die bis zu ihrem Einsatz oder bis zum Ende der Begegnung halten (Entscheidung der SL). Dies erfordert einen ganzen Zug, und er kann sich nicht bewegen und keine anderen Aktionen ausführen, während er das Gerät konstruiert. Ein Fehlschlag bedeutet, dass das Gerät nicht fertig ist. Ein Kritischer Fehlschlag bedeutet, dass ihm die richtigen Materialien fehlen und er das Gerät in dieser Begegnung nicht bauen kann. Mit einem Erfolg kann er einen kleineren Sprengsatz (2W4 Explosionsschaden in einer kleinen Flächenschablone), eine Projektilwaffe mit einem Schuss (FRW 5/10/20, Schaden 2W6), ein wackliges Floss, eine Stromquelle oder ähnliches herstellen. Mit einer Steigerung baut er einen grösseren Sprengsatz (2W6 in einer mittleren Flächenschablone oder 2W4 in einer grossen), eine bessere Fernkampfwaffe (fünf Schuss, 2W8 Schaden, FRW 10/20/40), ein stabileres Floss, eine stärkere Batterie und so weiter. Die Qualität seiner Schöpfung liegt in den Händen der Spielleiterin, doch Kreativität sollte belohnt werden, besonders in schwierigen und dramatischen Situationen."
    },
    {
        id: "Naturbursche",
        name: "Naturbursche",
        req: ["Willenskraft W6+", "Überleben W8+"],
        tags: ["experte"],
        descr: "Naturburschen sind Waldläufer, Kundschafter und Jäger, die sich in der Wildnis wohler fühlen als in urbanen Gebieten. Sie sind geschickte Fährtenleser und Kundschafter, und wissen, wie man über Monate in der Wildnis überlebt. Naturburschen addieren +2 auf Überlebensproben und Heimlichkeitsproben in der Wildnis (nicht in Städten, Ruinen oder unter der Erde)."
    },
    {
        id: "Reparaturgenie",
        name: "Reparaturgenie",
        req: ["Reparieren W8+"],
        tags: ["experte"],
        descr: "Der Mechaniker addiert +2 auf Reparierenproben. Mit einer Steigerung halbiert er die Zeit, die normalerweise nötig ist, um etwas zu reparieren. Das bedeutet, dass ein Reparaturgenie, wenn bei einer bestimmten Reparatur angegeben ist, dass sie bei einer Steigerung in der Hälfte der Zeit gelingt, sie in einem Viertel der Zeit erledigt ist, wenn er eine Steigerung erzielt."
    },
    {
        id: "Soldat",
        name: "Soldat",
        req: ["Stärke W6+", "Konstitution W6+"],
        tags: ["experte"],
        descr: "Professionelle Soldaten sind daran gewöhnt, schwere Lasten zu tragen und raue Bedingungen zu ertragen. Nach einigen Tagen, um sich an ihre Ausrüstung zu gewöhnen (Entscheidung der SL), behandeln sie ihre Stärke als um einen Würfeltyp höher, wenn es um die Berechnung von Belastung (siehe Seite 67) und Mindeststärke für Rüstung, Waffen und Ausrüstung geht (Seite 66). (Dies ist kumulativ zum Talent Kräftig). Sie erhalten auch eine freie Wiederholung für Konstitutionsproben, um Umweltgefahren zu überstehen (siehe Gefahren, Seite 101)."
    },
    {
        id: "ArcaneBackground(Magic)",
        name: "Arcane Background (Magic)",
        tags: ["deadlands", "hintergrund"],
        descr: "Magic in the Weird West is not to be taken lightly. Those who practice sorcery must often wrestle their powers from the dark spirits of the Weird West, who are rarely willing to give up easily. Hucksters envision these duels of will as card games, and the best are capable of amazing powers. It is rumored that others tread even darker paths, and harness the power of blood magic. If you choose to take this Edge, be sure to read the appropriate details in No Man’s Land, where you’ll find additional Edges available only to Hucksters (see page 91)."
    },
    {
        id: "ArcaneBackground(Miracles)",
        name: "Arcane Background (Miracles)",
        tags: ["deadlands", "hintergrund"],
        descr: "Certain characters can call upon the power of their deity (or deities) for aid. In the Weird West, these pious souls are called the blessed. Blessed are nuns, priests, or even average but (relatively) pure-hearted folks blessed by a divine entity. Though rare in the Weird West, there are also blessed imams, Buddhist monks, and others of faith running around with higher powers covering their holy backsides. When these folks behave themselves, they can sometimes invoke miracles to help them fight the evils of the Weird West. For details on playing one of these crusaders, see page 82, where you’ll find some extra Edges available only to the Blessed."
    },
    {
        id: "ArcaneBackground(Shamanism)",
        name: "Arcane Background (Shamanism)",
        tags: ["deadlands", "hintergrund"],
        descr: "Shamans are Indian holy men and women, and keepers of tribal medicine. Their power comes from bargains with the demanding spirits of the natural world. When these medicine men honor the nature spirits, they can accomplish amazing feats that make even the most doubting Thomas tremble. For details on playing a shaman, along with some extra Edges, see page 92."
    },
    {
        id: "ArcaneBackground(ChiMastery)",
        name: "Arcane Background (Chi Mastery)",
        req: ["Martial Arts"],
        tags: ["deadlands", "hintergrund"],
        descr: "A few folks in the Weird West have studied the ancient oriental fighting arts. A very few of these supremely skilled fighters have achieved spiritual discipline necessary to channel supernatural force through their own bodies, called chi. These enlightened fighters use the Arcane Background (Chi Mastery) Edge to reflect their astonishing abilities. For details on playing one of these enlightened warriors, as well as a new Edge that opens up different martial arts fighting styles, see page 99."
    },
    {
        id: "ArcaneBackground(WeirdScience)",
        name: "Arcane Background (Weird Science)",
        tags: ["deadlands", "hintergrund"],
        descr: "Adherents to the principles of New Science (called Mad Scientists by most) build weird and wonderful devices, machines which often seem to defy the very laws of reality. Most every such inventor (or at least the successful ones) rely on ghost rock to power their inventions in some fashion. For the scoop on these crackpot inventors and their bizarre gizmos, see page 96."
    },
    {
        id: "Veterano’theWeirdWest",
        name: "Veteran o’ the Weird West",
        req: ["Mut W6+", "Okkultismus W6+"],
        tags: ["deadlands", "hintergrund"],
        descr: "So you want to be a hero, huh? A big, tough, experienced hero? No problem. Just check your sanity at the door, because those who have already been around the cactus a few times have seen things that would stop most men’s tickers. As a result, they ain’t the same as they used to be! Veterans o’ the Weird West begin play at Seasoned (or one Rank higher than the rest of the cowpokes in your campaign), which means they gain 20 Experience Points to begin the game with. Go ahead and advance your hero normally, as described in the Savage Worlds rules. There’s a price, though. If you take this Edge, you must draw a single card from the action deck once you’re done creating your cowpoke. Show it to your Marshal and he’ll check the table in the Marshal’s Handbook to see just what kind of bad luck your hombre wandered into on his path to studliness. If you draw a Joker, draw again and tell your Marshal whether you drew a black card or a red card (or another Joker). Beware—the results can be quite extreme, from maiming to insanity. Your Marshal has the details. You’ve been warned!"
    },
    {
        id: "Duelist",
        name: "Duelist",
        req: ["Schiessen W6+"],
        tags: ["deadlands", "kampf"],
        descr: "Your hombre is a deadly gunfighter, and anyone foolish enough to face him at High Noon winds up in the boneyard by sunset. In a duel, this hero receives an extra hole card for each point of Grit he has. Rules for dueling can be found on page 68."
    },
    {
        id: "MartialArts",
        name: "Martial Arts",
        req: ["Kämpfen W6+"],
        tags: ["deadlands", "kampf"],
        descr: "You’ve trained in martial arts or boxing, or learned to street fight really dirty. Your character’s body is a finely honed weapon, so even when your hero fights unarmed, he is considered armed. In addition, opponents in melee combat never benefit from any gang up bonus against your hero."
    },
    {
        id: "RebelYell",
        name: "Rebel Yell",
        req: ["Held muss zu den Konföderierten (CSA) gehören."],
        tags: ["deadlands", "kampf"],
        descr: "The blood-curdling Rebel Yell has terrified Yankees and emboldened Confederates from Manassas on. Sure, the shooting has mostly stopped now, but feelings run pretty deep on both sides and when the blood is up, this war cry can still elicit the same responses. When used, the Reb may make an Intimidation roll against all targets in an area (as opposed to a single victim as usual). Place a Large Burst Template adjacent to the character (a 6” area of effect, with the edge adjacent to the cowpoke). Every creature within the circle must roll Spirit against the character’s Intimidation total."
    },
    {
        id: "CardSharp",
        name: "Card Sharp",
        req: ["Glücksspiel W6+ "],
        tags: ["deadlands", "sozial"],
        descr: "Your hero has a way with a deck and never feels more at home than when he’s shuffling cards. He’s learned a whole heap of ways to cut, shuffle, and deal that give him an edge in a game. A gambler with this Edge only gets caught cheating on a roll of snake eyes. What’s more, if your hero’s a Huckster, folks get a –2 to Notice rolls when trying to spot a hex being cast."
    },
    {
        id: "TrueGrit",
        name: "True Grit",
        req: ["Willenskraft W8+"],
        tags: ["deadlands", "sozial"],
        descr: "Some folks just seem to exude toughness, and your hero is one of them. The horrors of life in the Weird West don’t faze this hombre. He’s got gravel in his gut and ice water running through his veins. Your hero’s cool demeanor gives him +1 Grit."
    },
    {
        id: "Scout",
        name: "Scout",
        req: ["Wahrnehmung W6+", "Überleben W6+"],
        tags: ["deadlands", "experte"],
        descr: "Scouts have learned to watch the signs and trust their instincts when it comes to navigating the vast wilderness. Any time the Marshal draws a face card while traveling (indicating a random encounter has occurred), a scout may make a Notice roll (–2). If successful, the scout detects the hazard, creature, or situation at the earliest opportunity, likely giving his party time to avoid it or at least attack it on their own terms. Don’t forget to remind the Marshal you have this Edge if your posse’s going to be traveling. Scouts also gain +2 to Notice rolls made to avoid surprise in tactical situations."
    },
    {
        id: "SnakeoilSalesman",
        name: "Snakeoil Salesman",
        req: ["Verstand W6+", "Willenskraft W6+", "Überreden W8+"],
        tags: ["deadlands", "experte"],
        descr: "With honey-dewed lips that weave lies and fabrications like they were the Gospel truth, this smooth talker could sell salt to the Mormons and buffalo hides to Indians. The character gains a +2 bonus to noncombat Persuasion rolls. He can also use his forked tongue to initiate a Persuasion Test of Will, opposed by the target’s Smarts."
    },
    {
        id: "TaleTeller",
        name: "Tale Teller",
        req: ["Überreden W8+"],
        tags: ["deadlands", "experte"],
        descr: "A good storyteller not only entertains, he gives hope and comfort as well. Sodbusters and saddletramps in the Weird West can use all the hope and comfort they can find. We don’t want to say too much, but good tale tellers are critical to saving the world. What? The world needs saving? You bet it does. You’ll discover why eventually. In the meantime, know that spreading the tales of your posse’s derring-do is far more important in the grand scheme of things than the ability to fire a gun or ride. So if you do something amazing, bucko, tell people about it! The Marshal’s Handbook has the skinny on all this, but you need to know what the Edge does, so we’ll share this much with you now. When making a Persuasion roll to tell a tale of his posse’s exploits, an orator with this Edge gains a +2 bonus. Furthermore, where most tale tellers bungle the story when they roll a 1 on the Persuasion die (regardless of the result of the Wild Die), your hero does so only on a roll of snake eyes. When a tale teller with this Edge successfully lowers a Fear Level, he gets a one-time, one-use Legend Chip all his own (it doesn’t go into the players’ pot like other Fate Chips do, it goes straight to the player). Talk to the Marshal about this, amigo. We’ve already told you more than we should."
    },
    {
        id: "WildernessMan",
        name: "Wilderness Man",
        req: ["Verstand W8+", "Konstitution W6+", "Wahrnehmung W8+", "Überleben W6+"],
        tags: ["deadlands", "experte"],
        descr: "Whether they live in the high Rockies, the Great Plains, or the deserts, wilderness men are used to the rigors of nature and take extremes of weather in stride. They gain +2 to Survival and Tracking. In addition, lifetimes of exposure to nature’s fury give them a +2 bonus to Vigor rolls to resist Fatigue from Heat or Cold (see Savage Worlds)."
    },
    {
        id: "Knack",
        name: "Knack",
        tags: ["deadlands", "macht"],
        descr: "This Edge should only be taken during character creation (unless there is a good reason for the hero to “discover” his latent powers at a later date). The Weird West is a superstitious place, where rumors and old wives’ tales abound. Just occasionally, though, these folktales contain a germ of truth. A knack is just that—folklore come true. Well, now you get to choose one of the special events that coincided with the time of your birth. Each one gives you access to a special ability, which you can activate by using a Fate Chip (of any color). If you don’t have a Fate Chip to spare, you can’t use your knack. Bastard: Well, that’s what your hero is. Not the mean ornery kind, but the fatherless kind. A child born out of wedlock is said to be able to see the unseen. Discard a Fate Chip to be able to see invisible critters, or those that supernaturally blend in with their surroundings. Born on All Hallow’s Eve: They say the King of Halloween favors those born on his day of mischief, and grants them a greater understanding of the arcane world. As one of these rascals, your hero can only choose Magic and Weird Science Arcane Backgrounds. If you’ve already set your heart on a different Arcane Background, you’ll have to choose another knack. A Weird Scientist with this knack can discard a Fate Chip and make a successful Spirit roll to avoid dementia as a result of taking the New Powers Edge (see page 98). A huckster with this knack can discard a Fate Chip and make a successful Spirit roll to avoid Backfire after making a poker hand to cast a hex (see page 91). With a success he is just Shaken as if by Backlash, and with a raise, he avoids it completely. Born on Christmas: A babe born on Christmas is particularly resistant to arcane effects powered by evil spirits. As such, your hero can only use Miracles and Shamanism Arcane Backgrounds. If you wanted to take a different Arcane Background, this isn’t the knack for you. When targeted by a power from any other Arcane Background, a hero with this knack can discard a Fate Chip to negate the effect and force the caster to make a Spirit roll (–4) or be Shaken. Breech Birth: A baby born butt-first is said to have the uncanny ability to heal injuries. Your hero is just such a person and can spend a Fate Chip to use the greater healing power. He doesn’t need to roll, he automatically gets a single success (thus healing one wound). Seventh Son: Your hero is fated for greatness; his legend will loom large in the Weird West. This hombre has the ability to control fate. Any time a Fate Chip is used in his presence, he can discard a like-colored chip to negate its effect."
    }
];
