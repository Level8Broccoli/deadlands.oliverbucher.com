export const state = () => ({
  list: [
    {
      id: 'Auserwaehlter',
      name: 'Auserwählter',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 6
        }
      ],
      tags: ['Macht'],
      descr:
        'Auserwählte sind heilige (oder unheilige) Männer und Frauen, die auserkoren wurden, für eine Gottheit oder Religion zu kämpfen. Die meisten sind fromme Seelen und bereit, ihr Leben für eine grössere Sache zu opfern, doch einige wurden vielleicht in die Rolle hineingeboren und folgen ihrem Pfad eher zögerlich. Auserwählte bekämpfen die Kräfte der Dunkelheit (oder des Lichts). Sie addieren +2 Schaden, wenn sie übernatürlich böse (oder gute, wenn sie böse sind) Kreaturen angreifen. Der Bonus gilt auf Flächenschaden, Fernkampfangriffe, Mächte etc. Die SL muss entscheiden, auf welche Feinde dieser Bonus gilt, doch grundsätzlich sind es alle bösen (oder guten!) Kreaturen, die aus Magie entstanden sind oder übernatürliche Fähigkeiten haben.'
    },
    {
      id: 'Heiler',
      name: 'Heiler',
      req: [
        { type: 'dynamic', depends: 'attribute', id: 'Willenskraft', value: 8 }
      ],
      tags: ['Macht'],
      descr:
        'Ein Held mit diesem Talent addiert +2 auf alle Heilenproben, egal ob sie natürlicher oder magischer Natur sind.'
    },
    {
      id: 'MutinFlaschen',
      name: 'Mut in Flaschen',
      req: [
        { type: 'dynamic', depends: 'attribute', id: 'Konstitution', value: 8 }
      ],
      tags: ['Macht'],
      descr:
        'Dieser gesellige Charakter verarbeitet Alkohol ganz anders als die meisten. In der ersten Runde, nachdem er sich einen hinter die Binde gekippt hat (ungefähr 200 ml starker Schnaps oder etwas entsprechendes) steigt seine Konstitution um einen Würfeltyp (was auch seine Robustheit erhöht). Der Trinker kann ausserdem eine Stufe Wundabzüge ignorieren (was mit anderen Fähigkeiten, die diesen Effekt haben, kumulativ ist). Verstand, Geschicklichkeit und alle verknüpften Fertigkeiten erleiden aber für die Wirkungsdauer einen Abzug von –1. Der Effekt hält eine Stunde lang an, dann erleidet der Trinker für die nächsten vier Stunden eine Stufe Erschöpfung.'
    },
    {
      id: 'Sammler',
      name: 'Sammler',
      req: [
        { type: 'dynamic', depends: 'talent', id: 'Glück', label: 'Glück' }
      ],
      tags: ['Macht'],
      descr:
        'Einmal pro Begegnung kann der Held ein Ausrüstungsteil, eine Handvoll Munition oder einen anderen nützlichen Gegenstand finden, beziehungsweise „erinnert er sich“, dass er ihn die ganze Zeit schon dabei hatte. Die Spielleiterin entscheidet, was als Begegnung zählt, und hat das letzte Wort darüber, was „entdeckt“ werden kann und was nicht.'
    },
    {
      id: 'SechsterSinn',
      name: 'Sechster Sinn',
      tags: ['Macht'],
      descr:
        'Dein Held kann spüren, wenn Gefahr droht. Wenn er auf Überraschung (Seite 107) würfelt, addiert er +2 auf seine Wahrnehmungsprobe, die entscheidet, ob er in der ersten Runde handeln darf. Bei einer Steigerung beginnt er die Begegnung mit einem aufgesparten Zug. In anderen Situationen, die nicht von den Überraschungsregeln abgewickelt werden (ein Heckenschütze, eine Grubenfalle, ein vergiftetes Getränk und so weiter) erlaubt Sechster Sinn eine Wahrnehmungsprobe mit –2 (oder +2, wenn normalerweise auch eine Wahrnehmungsprobe erlaubt wäre), um die Gefahr zu entdecken und entsprechend zu handeln. Wenn dies ein Angriff ist, und der Held seine Wahrnehmungsprobe schafft, erhält der Gegner keinen Überraschungsangriff-Bonus.'
    },
    {
      id: 'Tierempathie',
      name: 'Tierempathie',
      tags: ['Macht'],
      descr:
        'Manche haben eine starke Bindung zu ihren Tiergefährten. Diese Charaktere können ihre eigenen Bennys für Tiere unter ihrer Kontrolle ausgeben. Dazu gehören Reittiere, Haustiere, Vertraute und so weiter.'
    },
    {
      id: 'Tiermeister',
      name: 'Tiermeister',
      req: [
        { type: 'dynamic', depends: 'attribute', id: 'Willenskraft', value: 8 }
      ],
      tags: ['Macht'],
      descr:
        'Tiere gewöhnen sich schnell und ohne grosse Mühe an deinen Charakter. Sie greifen ihn nicht an, wenn er sie nicht zuvor irgendwie gegen sich aufgebracht hat. Die tierische Anziehungskraft des Tiermeisters ist so gross, dass ihm ausserdem ein loyales Tier folgt. Es ist normalerweise ein Tier von Grösse 0 oder kleiner, nach Zustimmung der Spielleiterin. Das Tier ist ein Statist und erhält keine Aufstiege. Wenn das Haustier weggeschickt oder getötet wird, findet der Held innerhalb von 1W4 Tagen einen Ersatz. Mächtigere Gefährten: Tiermeister kann mehr als einmal gewählt werden. Wähle jedes Mal einen der Effekte unten, wenn das Talent ausgewählt wird. • Du erhältst ein zusätzliches Haustier. • Erhöhe eine Eigenschaft des Tiers um einen Würfeltyp (nur eine Eigenschaft pro Tier). • Erhöhe die maximale Grösse, die dein Tier haben kann, um +1, auf ein Maximum von 3. • Mach ein Tier zur Wildcard. (Der Held muss mindestens Heroisch sein).'
    },
    {
      id: 'Bedrohlich',
      name: 'Bedrohlich',
      req: [
        {
          type: 'text',
          label: 'entweder Blutrünstig, Fies, Skrupellos oder Hässlich',
          id: 'entwederBlutrünstigFiesSkrupellosoderHässlich'
        }
      ],
      tags: ['Sozial'],
      descr:
        'Es ist nicht immer ein Nachteil, ein ungehobelter Klotz zu sein, wenn man weiss, wie man es einsetzen kann. Bedrohlich erlaubt es einem Charakter, sein übles Aussehen oder seine noch üblere Einstellung auszunutzen. Der Charakter erhält +2 auf Einschüchternproben.'
    },
//    {
//      id: 'Beziehungen',
//      name: 'Beziehungen',
//      tags: ['Sozial'],
//      descr:
//        'Dein Held ist mit Personen oder Organisationen verbunden, die ihm helfen können, wenn es hart auf hart kommt. Vielleicht ist es die Mafia, die Bundespolizei, eine Gewerkschaft oder sogar andere Abenteurer. Beziehungen kann mehr als einmal ausgewählt werden, um jedes Mal eine neue Fraktion oder einen neuen Kontakt auszuwählen. Einmal pro Sitzung, vorausgesetzt, der Held hat eine Möglichkeit mit seinen Freunden in Kontakt zu treten, kann er sie um einen Gefallen bitten. Der Gefallen hängt von der Art des Kontakts ab (Entscheidung der SL), könnte aber ein Darlehen, Ausrüstung, einige tatkräftige Verbündete, Transportmittel, Informationen oder sogar einen Spezialisten mit besonderen Fertigkeiten, die die Gruppe nicht hat, wie einen Hacker oder Gelehrten, umfassen. '
//    },
    {
      id: 'Ermutigen',
      name: 'Ermutigen',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Sozial'],
      descr:
        'Einen Feind zu erniedrigen kann auch einen Verbündeten ermutigen. Wenn dieser Charakter erfolgreich einen Gegner herausfordert, kann er zusätzliche den Zustand Abgelenkt oder Verwundbar (siehe Seite 97) von einem seiner Verbündeten entfernen.'
    },
    {
      id: 'Erniedrigen',
      name: 'Erniedrigen',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Provozieren',
          value: 8
        }
      ],
      tags: ['Sozial'],
      descr:
        'Wer viel Übung darin hat, fiese Sprüche zu klopfen, kann das Ego eines Rivalen mit einer einzigen Bemerkung oder bedeutungsvollen Geste regelrecht zerstören. Dein Held erhält eine freie Wiederholung für Provozierenproben.'
    },
    {
      id: 'Erzürnen',
      name: 'Erzürnen',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Provozieren',
          value: 6
        }
      ],
      tags: ['Sozial'],
      descr:
        'Clevere Charaktere können ihre Feinde manipulieren und ihre Aufmerksamkeit auf sich lenken, um ihre Freunde zu unterstützen. Einmal pro Zug kann dein Held, wenn er eine Provozieren-Herausforderung verwendet und eine Steigerung erzielt (siehe Herausfordern, Seite 104), einen Feind „erzürnen“. Neben den üblichen Effekten eines Erfolgs mit Steigerung erleidet der Gegner einen Abzug von –2, wenn er Ziele ausser dem Charakter, der ihn erzürnt hat, beeinflussen will. Dies gilt zusätzlich zu Abgelenkt, kann aber nicht mit weiteren Anwendungen von Erzürnen kombiniert werden. Erzürnen hält an, bis ein Joker gezogen wird, jemand anderes Erzürnen gegen das Ziel verwendet, oder die Begegnung endet. Erzürnen kann mehrere Ziele beeinflussen indem es mit Aufwiegler kombiniert wird.'
    },
    {
      id: 'Gassenwissen',
      name: 'Gassenwissen',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Verstand',
          value: 6
        }
      ],
      tags: ['Sozial'],
      descr:
        'Charaktere, die dieses Talent besitzen, wissen, wie sie den örtlichen Schwarzmarkt finden, gestohlene Güter verhökern, den örtlichen Gesetzeshütern (oder den Verbrechern!) ausweichen können, sich bedeckt halten, wenn es brenzlig wird, illegale Waffen erwerben oder herausfinden können, welcher „Boss“ Schläger anheuert und so weiter. Charaktere mit diesem Talent addieren +2 auf Proben mit Einschüchtern oder Überreden zur Informationsbeschaffung (siehe Seite 120), sofern diese zwielichtige oder kriminelle Elemente involvieren. Sie addieren ausserdem +2 auf Allgemeinwissenproben, die mit zwielichtigen Aktivitäten (wie weiter oben beschrieben) zu tun haben.'
    },
    {
      id: 'Konter',
      name: 'Konter',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Provozieren',
          value: 6
        }
      ],
      tags: ['Sozial'],
      descr:
        'Wer sich mit diesem spitzzüngigen Sprücheklopfer anlegt bekommt seine dummen Sprüche direkt selbst wieder um die Ohren gehauen. Wenn ein Charakter mit Konter eine Steigerung erzielt, wenn er einer Einschüchtern- oder Provozieren- Herausforderung widersteht, wird sein Gegner Abgelenkt.'
    },
    {
      id: 'Rampensau',
      name: 'Rampensau',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Sozial'],
      descr:
        'Die Worte deines Helden inspirieren nicht nur jene, an die sie gerichtet sind, sondern oft auch Leute in der Umgebung. Einmal pro Zug kannst du Rampensau verwenden, um einen zusätzlichen Fertigkeitswürfel zu werfen, wenn du mit Darbietung oder Überreden unterstützt. Der zusätzliche Würfel unterstützt einen weiteren Verbündeten, der den Helden sehen oder hören kann, und gilt für seine nächste Aktion, egal was diese auch sein mag.'
    },
    {
      id: 'Selbstlos',
      name: 'Selbstlos',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Sozial'],
      descr:
        'Selbstlose Helden und entschlossene Anführer wissen, dass ihre grösste Stärke oft von ihren Gefährten kommt, und sind bereit, einen Teil ihres Glücks oder Schicksals mit ihnen zu teilen. Ein Charakter mit diesem Talent kann seine Bennys jedem anderen Charakter geben, mit dem er kommunizieren kann. Der Spieler sollte erklären, wie das genau aussieht: Von einem kurzen ermunternden Ausruf bis hin zu einem freundlichen Schulterklopfen ist so einiges möglich.'
    },
    {
      id: 'StarkerWille',
      name: 'Starker Wille',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Sozial'],
      descr:
        'Selbstvertrauen ist eine starke Rüstung gegen jene, die diese Person kleinreden wollen. Sie addiert +2 auf ihr Gesamtergebnis, wenn sie Herausfordern mit Verstand oder Willenskraft widersteht.'
    },
    {
      id: 'EisernerWille',
      name: 'Eiserner Wille',
      req: [
        {
          type: 'dynamic',
          depends: 'talent',
          id: 'StarkerWille',
          label: 'Starker Wille'
        }
      ],
      tags: ['Sozial'],
      descr:
        'Wenige Dinge bringen diesen Charakter aus dem Gleichgewicht. Der Starker Wille-Bonus gilt nun für Verstand- und Willenskraftproben, um Mächten zu widerstehen und sich von ihren Auswirkungen zu erholen. Dieser Bonus ist nicht kumulativ mit dem Bonus von Mutig. Er wird ausserdem nicht auf Folgeproben angewendet, zum Beispiel auf solche, um sich von einem Angeschlagen-Zustand zu erholen, den man durch eine schadenzufügende Macht, Furcht oder ähnliches erhalten hat.'
    },
    {
      id: 'Verlaesslich',
      name: 'Verlässlich',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Sozial'],
      descr:
        'Die Leute wissen, dass sie sich auf deinen Helden verlassen können, wenn sie Hilfe brauchen. Er erhält eine freie Wiederholung bei allen Unterstützen-Würfen, die er ablegt.'
    },
    {
      id: 'Energieschub',
      name: 'Energieschub',
      req: [
        {
          type: 'text',
          id: 'ArkanerHintergrund',
          label: 'Arkaner Hintergrund (beliebig)'
        },
        {
          type: 'text',
          id: 'arkaneFertigkeit',
          label: 'arkane Fertigkeit W8+'
        }
      ],
      tags: ['Macht'],
      descr:
        'Der Charakter erhält 10 Machtpunkte zurück, wenn seine Aktionskarte ein Joker ist. Dabei kann er sein Maximum nicht übersteigen.'
    },
    {
      id: 'Machtpunkte',
      name: 'Machtpunkte',
      req: [
        {
          type: 'text',
          id: 'ArkanerHintergrund',
          label: 'Arkaner Hintergrund (beliebig)'
        }
      ],
      tags: ['Macht'],
      descr:
        'Magier, verrückte Wissenschaftler und andere arkane Charaktere wollen immer mehr Macht. Dieses Talent gewährt ihnen 5 zusätzliche Machtpunkte. Machtpunkte kann mehr als einmal gewählt werden, aber nur einmal pro Rang. Es kann auf dem Legendären Rang beliebig oft gewählt werden, gewährt aber nur jeweils 2 zusätzliche Machtpunkte.'
    },
    {
      id: 'NeueMaechte',
      name: 'Neue Mächte',
      req: [
        {
          type: 'text',
          id: 'ArkanerHintergrund',
          label: 'Arkaner Hintergrund (beliebig)'
        }
      ],
      tags: ['Macht'],
      descr:
        'Ein arkaner Charakter kann zwei neue Mächte erlernen, indem er dieses Talent erwirbt (das er mehrere Male auswählen kann). Er kann Mächte für seinen Rang und darunter auswählen, die normalerweise für seinen Arkanen Hintergrund verfügbar sind. Ein Charakter kann, statt einer neuen Macht, auch eine neue Ausprägung für eine Macht wählen, die er schon besitzt. Er könnte zum Beispiel eine Eis- Ausprägung, zusätzlich zu seinem Feuer-Geschoss, erlenen und dann je nach Bedarf zwischen der Feuer und der Eis-Ausprägung wählen.'
    },
    {
      id: 'BeidhaendigerFernkampf',
      name: 'Beidhändiger Fernkampf',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Beidhändiger Fernkampf funktioniert genau wie Beidhändiger Kampf, sodass du mit verschiedenen Aktionen eine Waffe in jeder Hand abfeuern oder werfen kannst, ohne einen Mehrfachaktionsabzug auszulösen. Wenn der Charakter ausserdem Beidhändiger Kampf besitzt, darf der zweite Angriff auch ein Nahkampfangriff sein.'
    },
    {
      id: 'BeidhaendigerKampf',
      name: 'Beidhändiger Kampf',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Wenn ein Charakter einen Kämpfen-Angriff mit einer Aktion und einen weiteren Kämpfen-Angriff mit einer anderen Hand in einer späteren Aktion ausführt, verursacht der zweite Angriff keinen Mehrfachaktionsabzug. Der Abzug für Angriffe mit der falschen Hand gilt allerdings schon, es sei denn, der Charakter ist Beidhändig (Seite 59). Wenn der Charakter ausserdem Beidhändiger Fernkampf besitzt, darf der zweite Angriff auch ein Fernkampfangriff sein.'
    },
    {
      id: 'Berechnend',
      name: 'Berechnend',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Verstand',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Wenn dein Held ein paar Augenblicke hat, seine Feinde unter die Lupe zu nehmen, bringt ihm das einen enormen Vorteil ein. Wenn seine Aktionskarte eine 5 oder weniger ist, ignoriert er bis zu 2 Punkte an Abzügen auf eine Aktion in diesem Zug, was Abzüge für Mehrfachaktionen, Deckung, Entfernung und sogar Wundabzüge sein können.'
    },
    {
      id: 'Eisenkiefer',
      name: 'Eisenkiefer',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Der Held kann auch extreme Treffer abschütteln. Er addiert +2 auf Schaden wegstecken und Konstitutionsproben, um K.O.-Schläge (siehe Seite 107) zu vermeiden.'
    },
    {
      id: 'Erstschlag',
      name: 'Erstschlag',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Einmal pro Runde erhält der Held, solange er nicht Angeschlagen oder Betäubt ist, einen freien Kämpfen- Angriff gegen einen Feind unmittelbar nachdem sich dieser in seine Reichweite bewegt hat. (Siehe Freie Angriffe auf Seite 102.'
    },
    {
      id: 'Finte',
      name: 'Finte',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Wenn du deinen Gegner mit der Kämpfen-Fertigkeit herausforderst (siehe Seite 104), kannst du den Feind den Widerstandswurf mit Verstand anstelle von Geschicklichkeit würfeln lassen.'
    },
    {
      id: 'Kampfkünstler',
      name: 'Kampfkünstler',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 6
        }
      ],
      tags: ['Kampf'],
      descr:
        'Der Kämpfer hat die Grundlagen einer Kampfkunst erlernt. Seine Fäuste und Füsse sind Waffen (siehe Natürliche Waffen, Seite 105) und somit gilt er immer als bewaffnet. Er addiert +1 bei Kämpfen-Angriffen mit ihnen und verursacht Stärke + W4 Schaden. Wenn er bereits einen Stärke-Schadenswürfel durch die Volkseigenart Klauen (siehe Seite 19) oder das Talent Raufbold erhält, erhöhe den Schadenswürfel um einen Würfeltyp. Kampfkünstler addieren keinen Schaden auf andere Natürliche Waffen wie Fänge oder Hörner.'
    },
    {
      id: 'Lieblingswaffe',
      name: 'Lieblingswaffe',
      req: [
        {
          type: 'text',
          id: 'Lieblingswaffe',
          label: 'Fertigkeit mit der gewählten Waffe auf W8+'
        }
      ],
      tags: ['Kampf'],
      descr:
        'Der Held kennt eine einzigartige Waffe (Excalibur, Old Betsy, Stich) sehr genau. Wenn er sie verwendet, addiert er +1 auf seine Proben mit Athletik (Werfen), Kämpfen oder Schiessen, und erhält +1 Parade, wenn er die Waffe bereitgemacht hat (selbst bei einer Fernkampfwaffe). Ein Kämpfer kann dieses Talent mehrere Male wählen und jedes Mal für eine andere Waffe verwenden. Wenn eine Lieblingswaffe verloren geht, kann sie ersetzt werden, doch die Vorteile treten erst nach ein paar Tagen wieder in Kraft (solange wie die SL für angemessen hält).'
    },
    {
      id: 'MaechtigerHieb',
      name: 'Mächtiger Hieb',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Wenn deine Aktionskarte ein Joker ist, verdopple den Gesamtschaden deines ersten erfolgreichen Kämpfen- Angriffs in dieser Runde.'
    },
    {
      id: 'Parkour',
      name: 'Parkour',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Athletik',
          value: 6
        }
      ],
      tags: ['Kampf'],
      descr:
        'Dein Charakter geht der Sportart „Parkour“ nach, oder ist einfach sehr geschickt darin, zu rennen, zu springen, zu schwingen, Wände emporzukrabbeln und über Hindernisse zu kommen. Solange es Hindernisse gibt, auf die er springen, von denen er abprallen oder an denen er sich schwingen kann, bewegt er sich auf dem Boden mit voller Bewegungsweite durch Schwieriges Gelände, wenn er zu Fuss ist. Er addiert ausserdem +2 auf Athletikproben, sofern es etwas mit Klettern zu tun hat, und in Verfolgungsjagden zu Fuss (siehe Verfolgungsjagden & Fahrzeuge, Seite 135).'
    },
    {
      id: 'Raufbold',
      name: 'Raufbold',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Staerke',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Seine Fäuste schlagen ein wie Hämmer, seine Klauen schneiden wie eine Sense. Sein Körper fühlt sich an, als würde er aus Stein bestehen. Raufbolde erhöhen ihre Robustheit um 1 und verursachen Stärke + W4 Schaden, wenn sie mit ihren Fäusten oder Füssen angreifen (oder Klauen, wenn sie welche haben). Wenn sie bereits Schaden durch Klauen (siehe Seite 19) verursachen, das Talent Kampfkünstler besitzen, etc., erhöhe den Schadenswürfel um einen Schritt. Das Talent Raufbold lässt die Fäuste des Charakters nicht zu Natürlichen Waffen (Seite 105) werden.'
    },
    {
      id: 'Rückzug',
      name: 'Rückzug',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Wenn sich ein Charakter aus dem Nahkampf zurückzieht, erhalten angrenzende Charaktere einen freien Kämpfen-Angriff gegen ihn (siehe Zurückziehen aus dem Nahkampf auf Seite 109). Dies ist für die meisten sehr gefährlich, aber nicht für deinen gewieften Recken. Wenn du dich von angrenzenden Gegnern wegbewegst, erhält einer von ihnen (Wahl des Spielers) keinen freien Angriff.'
    },
    {
      id: 'RuhigeHaende',
      name: 'Ruhige Hände',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Es ist schwierig, vom Rücken eines Pferdes oder einem sich bewegenden Fahrzeug aus zu schiessen, aber dein Held weiss, wie es geht. Er ignoriert den Abzug für Unsicheren Grund (siehe Seite 108). Dies hilft auch, wenn er sprintet, sodass der übliche Abzug fürs Sprinten von –2 auf –1 sinkt (siehe Bewegung, Seite 142).'
    },
    {
      id: 'Rundumschlag',
      name: 'Rundumschlag',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Staerke',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Rundumschlag erlaubt es dem Charakter, einen Kämpfen-Angriff mit –2 auszuführen und das Ergebnis gegen alle Gegner innerhalb seiner Reichweite (Freund und Feind) anzuwenden. Ermittle den Schaden für jeden getroffenen Gegner einzeln. Ein Kämpfer kann nur einen Rundumschlag pro Zug durchführen. Er kann nicht mit Schneller Angriff kombiniert werden.'
    },
    {
      id: 'Schmerzresistenz',
      name: 'Schmerzresistenz',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Dein Held hat gelernt, trotz extremer Schmerzen weiterzukämpfen. Er kann 1 Punkt Wundabzüge ignorieren.'
    },
    {
      id: 'StaerkereSchmerzresistenz',
      name: 'Stärkere Schmerzresistenz',
      req: [
        {
          type: 'dynamic',
          depends: 'talent',
          id: 'Schmerzresistenz',
          label: 'Schmerzresistenz'
        }
      ],
      tags: ['Kampf'],
      descr: 'Dieser Held ignoriert 2 Punkte Wundabzüge.'
    },
    {
      id: 'Schwerzutoeten',
      name: 'Schwer zu töten',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Kampf'],
      descr:
        'Dieser Abenteurer hat mehr Leben als eine Herde Katzen. Er kann seine Wundabzüge ignorieren, wenn er Konstitutionsproben ablegt, um nicht zu Verbluten (siehe Seite 95).'
    },
    {
      id: 'Volltreffer',
      name: 'Volltreffer',
      req: [
        {
          type: 'or',
          label: 'Athletik oder Schiessen W8+',
          elements: [
            {
              type: 'dynamic',
              depends: 'skill',
              id: 'Athletik',
              value: 8
            },
            {
              type: 'dynamic',
              depends: 'skill',
              id: 'Schiessen',
              value: 8
            }
          ]
        }
      ],
      tags: ['Kampf'],
      descr:
        'Wenn deine Aktionskarte ein Joker ist, verdopple den Gesamtschaden deines ersten erfolgreichen Angriffs mit Athletik (Werfen) oder Schiessen in dieser Runde.'
    },
    {
      id: 'Aristokrat',
      name: 'Aristokrat',
      tags: ['Hintergrund'],
      descr:
        'Der Charakter wurde privilegiert geboren oder stieg später im Leben im Stand auf. Er könnte Geld haben oder auch nicht (siehe die Talente Reich und Stinkreich), aber auf jeden Fall bewegt er sich in der Elite der sozialen Kreise des Settings. Aristokraten addieren +2 auf Überreden, wenn sie Informationsbeschaffung bei der örtlichen Elite, Industriellen, Adeligen oder anderen Aristokraten betreiben (siehe Seite 120). Sie addieren ausserdem +2 auf Allgemeinwissen, wenn es um die Etikette der Oberschicht, Stammbäume und Heraldik oder lokale Gerüchte über andere Vertreter ihres Standes geht.'
    },
    {
      id: 'ArkaneResistenz',
      name: 'Arkane Resistenz',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Magie und übernatürliche Kräfte haben wenig Einfluss auf diesen Charakter. Egal ob es an seinem Wesen, seiner Abstammung oder einer besonderen Ausbildung liegt, auf jeden Fall ist der Charakter besonders resistent gegen Magie, Psionik und andere übernatürliche Energien. Arkane Fertigkeiten, die den Helden als Ziel haben, erleiden einen Abzug von –2 (auch wenn sie von Verbündeten verwendet werden!), und magischer Schaden wird um –2 Punkte verringert.'
    },
    {
      id: 'StarkeArkaneResistenz',
      name: 'Starke Arkane Resistenz',
      req: [
        {
          type: 'dynamic',
          depends: 'talent',
          id: 'ArkaneResistenz',
          label: 'Arkane Resistenz'
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Wie oben, doch steigt der Abzug auf arkane Fertigkeitswürfe und Schaden auf –4.'
    },
//    {
//      id: 'ArkanerHintergrund',
//      name: 'Arkaner Hintergrund',
//      tags: ['Hintergrund'],
//      descr:
//        'Der Kontakt mit seltsamen Energie, Studien an einer Zauberschule oder die Gaben göttlicher oder spiritueller Wesenheiten gewähren Charakteren manchmal besondere Kräfte. Solche Charaktere haben das Talent Arkaner Hintergrund und entwickeln übernatürlicher Fähigkeiten. Siehe Kapitel 5 (ab Seite 147) für eine vollständige Übersicht über die arkanen Hintergründe, Mächte und wie du sie verwendest.'
//    },
    {
      id: 'Attraktiv',
      name: 'Attraktiv',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 6
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Es ist kein Geheimnis, dass Leute hilfsbereiter sind, wenn sie ihr Gegenüber körperlich anziehend finden. Dein Charakter addiert +1 auf Würfe mit Darbietung und Überreden, wenn das Ziel ihn generell anziehend findet (in Bezug auf Geschlecht, Spezies und so weiter).'
    },
    {
      id: 'SehrAttraktiv',
      name: 'Sehr Attraktiv',
      req: [
        {
          type: 'dynamic',
          depends: 'talent',
          id: 'Attraktiv',
          label: 'Attraktiv'
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Dein Held ist atemberaubend. Er erhöht den Bonus auf Darbietung und Überreden auf +2.'
    },
    {
      id: 'Aufmerksamkeit',
      name: 'Aufmerksamkeit',
      tags: ['Hintergrund'],
      descr:
        'Dem Helden entgeht nicht viel.Er ist sehr aufmerksam und scharfsinnig und addiert + 2 auf Wahrnehmungsproben, wenn er die Welt, die ihn umgibt, hören, sehen oder anderweitig wahrnehmen möchte.'
    },
    {
      id: 'Beidhaendig',
      name: 'Beidhändig',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Dein Krieger ist mit der linken Hand so geschickt wie mit der rechten. Er ignoriert den Abzug für Angriffe mit der falschen Hand (siehe Seite 97). Wenn beidhändige Charaktere in jeder Hand eine Waffe halten, dürfen sie die Parade-Boni beider Waffen addieren (wenn beide einen haben).'
    },
    {
      id: 'Bekannt',
      name: 'Bekannt',
      tags: ['Hintergrund'],
      descr:
        'Dein Charakter ist eine kleinere Berühmtheit. Vielleicht ist er ein beliebter Barde, der in einem Lehen bekannt ist, ein kleinerer Rockstar oder ein beliebter Schauspieler in B-Movies. Er verdient doppelt so viel, wenn er für Bezahlung auftritt (siehe Darbietung, Seite 29). Er kann seine Berühmtheit auch verwenden, um +1 auf Überredenproben zu addieren, wenn das Ziel freundlich gesinnt ist und weiss, wer er ist (ein Wurf auf Allgemeinwissen, mit einem Modifikator, der davon abhängt, wie wahrscheinlich es ist, dass die Person schon von dem Charakter gehört hat). Der Nachteil von Ruhm ist, dass die Person oft erkannt wird, andere oft etwas von ihr haben wollen, sie von Fans und Bewunderern verfolgt wird, oder sie nicht dazu in der Lage ist, Engagements, Auftritte oder anderen Verpflichtungen zu vermeiden, ohne in Schwierigkeiten zu kommen.'
    },
    {
      id: 'Berserker',
      name: 'Berserker',
      tags: ['Hintergrund'],
      descr:
        'Berserker werden wild und fast unkontrollierbar, wenn der „rote Zorn“ sie ergreift, doch ihr Zorn lässt sie auch zu tödlichen Mordmaschinen werden! Unmittelbar nachdem er eine Wunde erlitten hat oder Angeschlagen ist (nur durch körperlichen Schaden), muss dein Held eine Verstandsprobe würfeln, um nicht in den Berserkerrausch zu verfallen. Er kann sich entscheiden, die Probe freiwillig nicht zu schaffen, wenn er möchte. Der Berserkerrausch hat folgende Auswirkungen: WÜTEND: Der Stärkewert des Charakters steigt um einen Würfeltyp und alle Angriffe müssen als Rücksichtslose Angriffe (siehe Seite 105) ausgeführt werden. Er kann keine Fertigkeiten verwenden, die einen klaren Verstand oder Konzentration erfordern (Entscheidung der SL). Er könnte beispielsweise durchaus Drohungen brüllen und somit Einschüchtern verwenden.  ZORNIG: Adrenalin und Zorn treiben die Muskeln des Berserkers an, wodurch er +2 Robustheit erhält. Er ignoriert eine Stufe Wundabzüge (dies ist kumulativ mit anderen Fähigkeiten, die Wundabzüge verringern).  UNGEZÜGELT: Immer wenn der Berserker einen Kritischen Fehlschlag bei einer Kämpfenprobe erzielt, trifft er ein zufälliges Ziel in Reichweite seines Angriffs (nicht das eigentliche Ziel), egal ob Freund oder Feind. Wenn es keine passenden Ziele gibt, geht der Schlag einfach ins Leere, zertrümmert Gegenstände in der Umgebung oder etwas in der Art. Nach fünf durchgehenden Runden des Berserkerzorns erleidet der Held eine Erschöpfungsstufe. Nach zehn Runden erleidet er weitere Stufe Erschöpfung und der Zorn endet. Er kann seinen Zorn auch jederzeit bewusst abbrechen, indem er eine Verstandsprobe mit –2 ablegt (dies ist eine freie Aktion, und ermöglicht es, die Erschöpfung zu umgehen, wenn es dem Charakter gelingt, den Zorn zu beenden, ehe sie verursacht wird!). Beginne neu damit, Runden zu zählen, wenn er wieder in Berserkerrausch verfällt, selbst wenn es im selben Kampf ist.'
    },
    {
      id: 'Charismatisch',
      name: 'Charismatisch',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Dein Held ist aus irgendeinem Grund sehr sympathisch. Er ist vielleicht vertrauenserweckend oder freundlich, oder strahlt einfach Selbstvertrauen und guten Willen aus. Du darfst Überredenproben einmal wiederholen (siehe Wiederholung auf Seite 89).'
    },
    {
      id: 'Elan',
      name: 'Elan',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 8
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Elan bedeutet Begeisterung oder Wille. Wer dieses Talent hat, läuft zur Höchstform auf, wenn es hart auf hart kommt. Wenn du einen Benny ausgibst, um eine Eigenschaftsprobe zu wiederholen, addiere +2 auf das Gesamtergebnis. Der Bonus gilt nur auf den wiederholten Wurf. Er gilt nicht für Schadenswürfe (da sie keine Eigenschaftsproben sind), und auch nicht beim Schaden wegstecken, wenn du nicht zusätzlich einen Benny verwendest, um die Konstitutionsprobe zu widerholen.'
    },
    {
      id: 'Flink',
      name: 'Flink',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 6
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Die Bewegungsweite des Helden steigt um +2, und sein Sprintwürfel wird um einen Typ verbessert (ein W6 wird beispielsweise ein W8).'
    },
    {
      id: 'Glück',
      name: 'Glück',
      tags: ['Hintergrund'],
      descr:
        'Der Abenteurer scheint vom Schicksal, Karma, den Göttern oder an welche äusseren Kräften er auch immer glauben mag (oder welche an ihn glauben), gesegnet. Er zieht einen zusätzlichen Benny zu Beginn einer jeden Spielsitzung, sodass ihm wichtige Aufgaben leichter gelingen als den meisten, und er selbst extremste Gefahren überstehen kann.'
    },
    {
      id: 'GrossesGlück',
      name: 'Grosses Glück',
      req: [
        { type: 'dynamic', depends: 'talent', id: 'Glück', label: 'Glück' }
      ],
      tags: ['Hintergrund'],
      descr:
        'Der Spieler zieht zu Beginn einer jeden Sitzung zwei zusätzliche Bennys statt einem.'
    },
    {
      id: 'Kraeftig',
      name: 'Kräftig',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Staerke',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 6
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Dein Charakter ist sehr gross oder sehr fit. Seine Grösse steigt um +1 (und somit auch seine Robustheit), und er behandelt seine Stärke als um einen Würfeltyp höher, wenn es um die Ermittlung von Behinderung (siehe Seite 67) und Mindeststärke geht, damit Rüstungen, Waffen und Ausrüstungsgegenstände ohne Abzug verwendet werden können. Kräftig kann die Grösse eines Charakters nicht über +3 anheben.'
    },
    {
      id: 'Linguist',
      name: 'Linguist',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Verstand',
          value: 6
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Dieser weitgereiste Charakter hat ein Ohr für Sprachen. Er beginnt das Spiel mit einer Anzahl von Sprache-Fertigkeiten gleich seinem halbem Verstand- Würfel auf einem Wert von W6 (siehe die Fertigkeit Sprache auf Seite 34).'
    },
    {
      id: 'Mutig',
      name: 'Mutig',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 6
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Charaktere mit diesem Talent haben gelernt, ihre Furcht zu meistern, oder sie haben so viele grauenvolle Dinge gesehen, dass sie abgestumpft sind. Diese tapferen Entdecker addieren +2 auf Furchtproben und ziehen –2 von Ergebnissen auf der Furchttabelle (siehe Seite 114) ab.'
    },
    {
      id: 'Reich',
      name: 'Reich',
      tags: ['Hintergrund'],
      descr:
        'Egal ob diese Person mit dem Silberlöffel im Mund geboren wurde oder sich ihr Vermögen mit harter Arbeit verdient hat, sie hat auf jeden Fall mehr Geld als die meisten Leute. Reiche Helden beginnen das Spiel mit dem dreifachen normalen Startkapital für das Setting. Wenn ein regelmässiges Einkommen für das Setting angemessen erscheint, erhält der Charakter die Entsprechung eines heutigen Jahresgehalts von $150.000.'
    },
    {
      id: 'Stinkreich',
      name: 'Stinkreich',
      req: [
        {
          type: 'dynamic',
          depends: 'talent',
          id: 'Reich',
          label: 'Reich'
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Dieser glückliche Charakter hat wirklich sehr viel Geld. Verfünffache das Startkapital für das Setting bei der Charaktererschaffung, und wenn es angemessen erscheint, erhält der Charakter ein Jahreseinkommen, das etwa modernen $500.000 entspricht. Es mag noch reichere Charaktere geben, doch solange das keinen Spieleffekt hat, ist es nicht so wichtig. Details hierfür sollten mit der SL ausgearbeitet werden und gleichzeitig viele weitere Ressourcen sowie lästige Verantwortung mit sich bringen.'
    },
    {
      id: 'Rohling',
      name: 'Rohling',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Staerke',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 6
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Rohlinge konzentrieren sich mehr auf Stärke und Fitness als auf Koordination und Flexibilität. Für sie ist Athletik mit Stärke verknüpft, nicht mit Geschicklichkeit, wenn es um Aufstiege geht. Der Charakter kann Athletikproben auch mit Stärke widerstehen, wenn er das möchte. Ausserdem erhöhen Rohlinge die kurze Entfernung von geworfenen Gegenständen um +1. Verdopple den Bonus, um die angepasste mittlere Entfernung zu erhalten, und noch einmal für die weite Entfernung. Wenn die Fernkampfreichweite eines geworfenen Gegenstands beispielsweise 3/6/12 beträgt, ist die Fernkampfreichweite des Rohlings 4/8/16.'
    },
    {
      id: 'Schnell',
      name: 'Schnell',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Schnelle Charaktere haben blitzschnelle Reflexe und die Ruhe weg. Wenn du eine Aktionskarte von 5 oder weniger ausgeteilt bekommst, kannst du sie abwerfen und neu ziehen, bis du eine Karte erhältst, die höher ist als 5. Charaktere mit Kühler Kopf und Schnell ziehen zuerst ihre zusätzliche Karte und entscheiden dann, welche sie nehmen. Wenn diese Karte eine 5 oder darunter ist, können sie dann das Talent Schnell verwenden, um eine Ersatzkarte zu ziehen, bis sie auf 6 oder höher kommen.'
    },
    {
      id: 'SchnelleHeilung',
      name: 'Schnelle Heilung',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 8
        }
      ],
      tags: ['Hintergrund'],
      descr:
        'Charaktere mit diesem Talent addieren +2 auf Konstitutionproben für Natürliche Heilung und würfeln alle drei Tage, nicht nur alle fünf (siehe Heilung, Seite 96).'
    },
    {
      id: 'Akrobat',
      name: 'Akrobat',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Athletik',
          value: 8
        }
      ],
      tags: ['Experte'],
      descr:
        'Der Akrobat kann Proben auf Athletik einmal kostenlos wiederholen, die sich um Gleichgewicht, Abrollen oder Ringen drehen. Das hat keinen Einfluss auf Proben, um Aktionen zu unterbrechen, zu klettern, zu schwimmen oder zu werfen.'
    },
    {
      id: 'Alleskoenner',
      name: 'Alleskönner',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Verstand',
          value: 10
        }
      ],
      tags: ['Experte'],
      descr:
        'Durch eine gute Ausbildung, Bücherwissen, computerverbesserte Fertigkeitenprogramme oder einfach unglaubliche intuitive Auffassungsgabe hat dein Held ein Talent dafür entwickelt, spontan Fertigkeiten aufzuschnappen. Es gibt wenig, was er nicht mit ein bisschen Zeit und einer Prise Glück verstehen kann. Nachdem er eine bestimmte Fertigkeit beobachtet oder studiert hat, legt der Charakter eine Verstandsprobe als seine Aktion ab. Bei einem Erfolg erhält er einen W4 in der Fertigkeit, bei einer Steigerung einen W6. Er kann es nach einer weiteren Stunde Studien und Herumprobieren oder Vertiefung in das Thema noch einmal versuchen, wenn der Wurf misslungen ist, oder er es auf eine Steigerung abgesehen hat. Dieser Effekt hält an, bis der Charakter versucht ein anderes Thema zu lernen, egal ob erfolgreich oder nicht.'
    },
//    {
//      id: 'AssamSteuer',
//      name: 'Ass am Steuer',
//      req: [
//        {
//          type: 'dynamic',
//          depends: 'attribute',
//          id: 'Geschicklichkeit',
//          value: 8
//        }
//      ],
//      tags: ['Experte'],
//      descr:
//        'Ein Ass am Steuer ist ein Pilot oder Fahrer mit einer besonderen Affinität für sein Auto, Boot, Flugzeug oder anderes Fahrzeug. Er ignoriert zwei Punkte Abzüge auf alle Proben mit Fahren, Pilot oder Seefahrt und kann Bennys ausgeben, um damit Schaden wegstecken für Fahrzeuge anzuwenden, die er lenkt oder kommandiert, jeweils mit der passenden Fertigkeit Fahren, Pilot oder Seefahrt anstelle von Konstitution. Ein Erfolg und jede Steigerung negieren eine Wunde.'
//    },
    {
      id: 'Assassine',
      name: 'Assassine',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Heimlichkeit',
          value: 8
        }
      ],
      tags: ['Experte'],
      descr:
        'Assassinen sind ausgebildete Mörder, die wissen, wie man auch die härtesten Gegner um die Ecke bringt. Sie addieren +2 auf Schadenswürfe, wenn ihre Gegner Verwundbar sind oder sie einen Überraschungsangriff ausführen.'
    },
    {
      id: 'Dieb',
      name: 'Dieb',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Heimlichkeit',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Diebeskunst',
          value: 6
        }
      ],
      tags: ['Experte'],
      descr:
        'Diebe sind spezialisiert auf Täuschung, Verrat und Akrobatik. Sie sind unabdingbar, wenn es gilt, Fallen zu entdecken, Wände zu erklimmen und Schlösser zu knacken. Diebe wissen, wie sie Vorsprünge an Wänden und Fenstersimsen verwenden können, um die höchsten Gebäude zu erklimmen und wie Katzen durch Strassen und Gassen zu huschen. Sie addieren +1 auf Athletikproben, um in urbanen Gebieten zu klettern. Diebe wissen auch, wie man sich in der Dunkelheit zwischen Strassenlaternen bewegt, und addieren +1 auf Heimlichkeitsproben in urbanen Umgebungen. Ausserdem sind diese Schurken sehr geschickt, wenn es um Diebeskunst geht, und addieren in allen Umständen +1 auf entsprechende Proben.'
    },
    {
      id: 'Ermittler',
      name: 'Ermittler',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Verstand',
          value: 8
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Recherche',
          value: 8
        }
      ],
      tags: ['Experte'],
      descr:
        'Ermittler verbringen viel Zeit damit, über alte Legenden zu forschen, sich auf der Strasse umzuhören oder teuflische Mysterien zu entschlüsseln. Einige dieser Helden sind tatsächlich Privatermittler, andere sind Magier-Detektive in Fantasywelten oder neugierige Collegeprofessoren, die auf Dinge stossen, die die Menschheit niemals wissen sollte. Ermittler addieren +2 auf Recherche und auf Wahrnehmung, sofern sie auf einem Schreibtisch nach bedeutsamen Papieren suchen, einen Stapel Werbepost nach etwas Wichtigem durchwühlen oder versteckte Gegenstände in einem Haufen Schrott oder Schutt entdecken wollen.'
    },
    {
      id: 'Gelehrter',
      name: 'Gelehrter',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Recherche',
          value: 8
        }
      ],
      tags: ['Experte'],
      descr:
        'Gebildete Professoren, hingebungsvolle Studenten und enthusiastische Amateure verwenden viel Zeit und Energie auf das Studium eines bestimmten Themas. Sie werden Experten in diesem Feld, und nur selten fehlen ihnen Antworten, wenn es um eine Frage aus ihrem Fachgebiet geht. Wähle eine der folgenden Fertigkeiten aus: Geisteswissenschaften, Kriegsführung, Naturwissenschaften, Okkultismus oder eine auf Verstand basierende „Wissensfertigkeit“, die in deinem Setting erlaubt ist. Du kannst +2 addieren, wenn die Fertigkeit verwendet wird. Das Talent kann mehr als einmal gewählt werden, um verschiedene Fertigkeiten abzudecken.'
    },
    {
      id: 'McGyver',
      name: 'McGyver',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Verstand',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Wahrnehmung',
          value: 8
        }, 
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Reparieren',
          value: 6
        }
      ],
      tags: ['Experte'],
      descr:
        'Ein McGyver kann ein Gerät aus leicht verfügbaren Ressourcen improvisieren, wenn es nötig ist. Mit ein paar einfachen Gegenständen kann er eine Reparierenprobe ablegen, um improvisierte Waffen, Sprengstoffe oder Werkzeuge herzustellen, die bis zu ihrem Einsatz oder bis zum Ende der Begegnung halten (Entscheidung der SL). Dies erfordert einen ganzen Zug, und er kann sich nicht bewegen und keine anderen Aktionen ausführen, während er das Gerät konstruiert. Ein Fehlschlag bedeutet, dass das Gerät nicht fertig ist. Ein Kritischer Fehlschlag bedeutet, dass ihm die richtigen Materialien fehlen und er das Gerät in dieser Begegnung nicht bauen kann. Mit einem Erfolg kann er einen kleineren Sprengsatz (2W4 Explosionsschaden in einer kleinen Flächenschablone), eine Projektilwaffe mit einem Schuss (FRW 5/10/20, Schaden 2W6), ein wackliges Floss, eine Stromquelle oder ähnliches herstellen. Mit einer Steigerung baut er einen grösseren Sprengsatz (2W6 in einer mittleren Flächenschablone oder 2W4 in einer grossen), eine bessere Fernkampfwaffe (fünf Schuss, 2W8 Schaden, FRW 10/20/40), ein stabileres Floss, eine stärkere Batterie und so weiter. Die Qualität seiner Schöpfung liegt in den Händen der Spielleiterin, doch Kreativität sollte belohnt werden, besonders in schwierigen und dramatischen Situationen.'
    },
    {
      id: 'Naturbursche',
      name: 'Naturbursche',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Ueberleben',
          value: 8
        }
      ],
      tags: ['Experte'],
      descr:
        'Naturburschen sind Waldläufer, Kundschafter und Jäger, die sich in der Wildnis wohler fühlen als in urbanen Gebieten. Sie sind geschickte Fährtenleser und Kundschafter, und wissen, wie man über Monate in der Wildnis überlebt. Naturburschen addieren +2 auf Überlebensproben und Heimlichkeitsproben in der Wildnis (nicht in Städten, Ruinen oder unter der Erde).'
    },
    {
      id: 'Reparaturgenie',
      name: 'Reparaturgenie',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Reparieren',
          value: 8
        }
      ],
      tags: ['Experte'],
      descr:
        'Der Mechaniker addiert +2 auf Reparierenproben. Mit einer Steigerung halbiert er die Zeit, die normalerweise nötig ist, um etwas zu reparieren. Das bedeutet, dass ein Reparaturgenie, wenn bei einer bestimmten Reparatur angegeben ist, dass sie bei einer Steigerung in der Hälfte der Zeit gelingt, sie in einem Viertel der Zeit erledigt ist, wenn er eine Steigerung erzielt.'
    },
    {
      id: 'Soldat',
      name: 'Soldat',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Staerke',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Konstitution',
          value: 6
        }
      ],
      tags: ['Experte'],
      descr:
        'Professionelle Soldaten sind daran gewöhnt, schwere Lasten zu tragen und raue Bedingungen zu ertragen. Nach einigen Tagen, um sich an ihre Ausrüstung zu gewöhnen (Entscheidung der SL), behandeln sie ihre Stärke als um einen Würfeltyp höher, wenn es um die Berechnung von Belastung (siehe Seite 67) und Mindeststärke für Rüstung, Waffen und Ausrüstung geht (Seite 66). (Dies ist kumulativ zum Talent Kräftig). Sie erhalten auch eine freie Wiederholung für Konstitutionsproben, um Umweltgefahren zu überstehen (siehe Gefahren, Seite 101).'
    },
    // {
    //   id: 'ArkanerHintergrundMagie',
    //   name: 'Arkaner Hintergrund (Magie)',
    //   tags: ['Deadlands', 'Hintergrund'],
    //   descr:
    //     "Die Magie im Wilden Westen ist nicht auf die leichte Schulter zu nehmen. Diejenigen, die Zauberei praktizieren, müssen ihre Kräfte oft den dunklen Geistern des Wilden Westens abtrotzen, die selten bereit sind, leicht aufzugeben. Hucksters stellen sich diese Willensduelle als Kartenspiele vor, und die Besten sind zu erstaunlichen Kräften fähig. Es geht das Gerücht, dass andere noch dunklere Wege beschreiten und sich die Kraft der Blutmagie zunutze machen. Wenn Sie sich für diese Kante entscheiden, lesen Sie unbedingt die entsprechenden Einzelheiten in No Man's Land, wo Sie zusätzliche Kanten finden, die nur Hucksters zur Verfügung stehen (siehe Seite 91)."
    // },
    {
      id: 'ArkanerHintergrundGesegnet',
      name: 'Arkaner Hintergrund (Gesegnet)',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Glaube',
          value: 4
        }
      ],
      tags: ['Deadlands', 'Hintergrund'],
      descr:
        'Bestimmte Charaktere können die Macht ihrer Gottheit (oder ihrer Gottheiten) um Hilfe anrufen. Im Weird West werden diese frommen Seelen die Gesegneten genannt. Gesegnete sind Nonnen, Priester oder auch durchschnittliche, aber (relativ) reinherzige Menschen, die von einem göttlichen Wesen gesegnet sind. Obwohl sie im Wilden Westen selten sind, gibt es auch gesegnete Imame, buddhistische Mönche und andere Gläubige, die mit höheren Mächten umherlaufen, die ihren heiligen Hintern bedecken. Wenn diese Leute sich benehmen, können sie manchmal Wunder beschwören, die ihnen helfen, die Übel des Wilden Westens zu bekämpfen. Die Gesegneten benutzen den Glauben als ihre arkane Fertigkeit.'
    },    // {
    //   id: 'ArkanerHintergrundShamanismus',
    //   name: 'Arkaner Hintergrund (Shamanismus)',
    //   tags: ['Deadlands', 'Hintergrund'],
    //   descr:
    //     'Schamanen sind indische heilige Männer und Frauen und Bewahrer der Stammesmedizin. Ihre Macht kommt aus den Verhandlungen mit den anspruchsvollen Geistern der natürlichen Welt. Wenn diese Medizinmänner die Naturgeister ehren, können sie erstaunliche Kunststücke vollbringen, die selbst den zweifelndsten Thomas erzittern lassen. Einzelheiten über das Spielen eines Schamanen, zusammen mit einigen zusätzlichen Talenten, finden Sie auf Seite 92.'
    // },
    {
      id: 'ArkanerHintergrundChi',
      name: 'Arkaner Hintergrund (Chi Master)',
      req: [
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Geschicklichkeit',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'attribute',
          id: 'Willenskraft',
          value: 6
        },
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Fokus',
          value: 4
        },
        {
          type: 'dynamic',
          depends: 'talent',
          id: 'MartialArts',
          label: 'Martial Arts'
        }
      ],
      tags: ['Deadlands', 'Hintergrund'],
      descr:
        'Einige wenige Menschen im Wilden Westen haben die altorientalischen Kampfkünste studiert. Nur sehr wenige dieser überaus fähigen Kämpfer haben die spirituelle Disziplin erlangt, die notwendig ist, um übernatürliche Kräfte durch ihren eigenen Körper, Chi genannt, zu kanalisieren. Diese erleuchteten Kämpfer nutzen den Rand des Arkanen Hintergrunds (Chi-Meisterschaft), um ihre erstaunlichen Fähigkeiten widerzuspiegeln. Chi Master benutzen den Fokus als ihre arkane Fertigkeit.'
    },


    // {
    //   id: 'ArkanerHintergrundWeirdScience',
    //   name: 'Arkaner Hintergrund (Weird Science)',
    //   tags: ['Deadlands', 'Hintergrund'],
    //   descr:
    //     'Die Anhänger der Prinzipien der Neuen Wissenschaft (von den meisten als verrückte Wissenschaftler bezeichnet) bauen seltsame und wunderbare Geräte, Maschinen, die oft den Gesetzen der Realität zu trotzen scheinen. Die meisten dieser Erfinder (oder zumindest die erfolgreichen) verlassen sich auf Ghost Rock, um ihre Erfindungen in irgendeiner Weise anzutreiben. Für den Knüller über diese verrückten Erfinder und ihre bizarren Gizmos siehe Seite 96.'
    // },
    // {
    //   id: 'VeteranDesWeirdWest',
    //   name: 'Veteran des Weird West',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Guts',
    //       value: 6
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Okkultismus',
    //       value: 6
    //     }
    //   ],
    //   tags: ['Deadlands', 'Hintergrund'],
    //   descr:
    //     "Sie wollen also ein Held sein, hm? Ein grosser, zäher, erfahrener Held? Kein Problem. Prüfen Sie einfach an der Tür Ihren Verstand, denn wer schon ein paar Mal um den Kaktus herum war, hat Dinge gesehen, die den Ticker der meisten Männer stoppen würden. Infolgedessen sind sie nicht mehr die gleichen wie früher! Veteranen des 'Wilden Westens' beginnen das Spiel bei Seasoned (oder einen Rang höher als der Rest der Kuhhirten in Ihrer Kampagne), was bedeutet, dass sie 20 Erfahrungspunkte erhalten, mit denen sie das Spiel beginnen können. Machen Sie weiter und rücken Sie Ihren Helden ganz normal vor, wie in den Regeln von Savage Worlds beschrieben. Allerdings gibt es einen Preis. Wenn Sie dieses Talent nehmen, müssen Sie eine einzige Karte aus dem Aktionssatz ziehen, sobald du deinen Charakter erstellt hast. Zeige sie dem Marschall, und er wird die Tabelle im Marschall-Handbuch überprüfen, um zu sehen, in welche Art von Pech dein Hombre auf seinem Weg zur Studliness geraten ist. Wenn Sie einen Joker ziehen, ziehen Sie noch einmal und sagen Sie Ihrem Marshal, ob Sie eine schwarze oder eine rote Karte (oder einen anderen Joker) gezogen haben. Vorsicht - die Ergebnisse können ziemlich extrem sein, von Verstümmelung bis zum Wahnsinn. Ihr Marschall kennt die Einzelheiten. Sie sind gewarnt worden!"
    // },
    // {
    //   id: 'Duellant',
    //   name: 'Duellant',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Schiessen',
    //       value: 6
    //     }
    //   ],
    //   tags: ['Deadlands', 'Kampf'],
    //   descr:
    //     "Ihr Hombre ist ein tödlicher Revolverheld, und jeder, der dumm genug ist, ihm am Mittag gegenüberzutreten, landet bei Sonnenuntergang auf dem Friedhof. In einem Duell erhält dieser Held für jeden Grit-Punkt, den er hat, eine zusätzliche 'Hole Card'. Die Regeln für das Duell finden Sie auf Seite 68."
    // },
    {
      id: 'MartialArts',
      name: 'Martial Arts',
      req: [
        {
          type: 'dynamic',
          depends: 'skill',
          id: 'Kaempfen',
          value: 6
        }
      ],
      tags: ['Deadlands', 'Kampf'],
      descr:
        'Sie haben in Kampfsportarten oder Boxen trainiert oder gelernt, wirklich schmutzig auf der Strasse zu kämpfen. Der Körper Ihres Charakters ist eine fein geschliffene Waffe. Selbst wenn Ihr Held unbewaffnet kämpft, gilt er als bewaffnet. Darüber hinaus profitieren Gegner im Nahkampf niemals von einem Bandenbonus gegen Ihren Helden.'
    },
    // {
    //   id: 'RebelYell',
    //   name: 'Rebel Yell',
    //   req: [
    //     {
    //       type: 'text',
    //       id: 'CSA',
    //       label: 'Held muss zu den Konföderierten (CSA) gehören.'
    //     }
    //   ],
    //   tags: ['Deadlands', 'Kampf'],
    //   descr:
    //     "Der blutrünstige Rebel Yell ('Schrei der Rebellen') hat die Yankees in Angst und Schrecken versetzt und die Konföderierten von Manassas an ermutigt. Sicher, die Schiesserei hat jetzt weitgehend aufgehört, aber die Gefühle gehen auf beiden Seiten ziemlich tief, und wenn das Blut in Wallung ist, kann dieser Kriegsschrei immer noch dieselben Reaktionen hervorrufen. Wenn er eingesetzt wird, kann der Rebell eine Einschüchterungsrolle gegen alle Ziele in einem Gebiet ausführen (im Gegensatz zu einem einzelnen Opfer wie üblich). Platzieren Sie eine Schablone für grosse Ausbrüche neben dem Charakter (ein 6-Zoll-Wirkbereich, wobei der Rand an den Charakter angrenzt). Jede Kreatur innerhalb des Kreises muss Geist gegen die Einschüchterungssumme des Charakters würfeln."
    // },
    // {
    //   id: 'Falschspieler',
    //   name: 'Falschspieler',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Gluecksspiel',
    //       value: 6
    //     }
    //   ],
    //   tags: ['Deadlands', 'Sozial'],
    //   descr:
    //     'Ihr Held kann gut mit einem Kartenspiel umgehen und fühlt sich nie mehr zu Hause als beim Mischen der Karten. Er hat eine ganze Reihe von Methoden zum Schneiden, Mischen und Austeilen gelernt, die ihm in einem Spiel einen Vorteil verschaffen. Ein Spieler mit diesem Edge wird nur beim Betrügen mit einer Rolle Schlangenaugen erwischt. Und wenn Ihr Held ein Huckster ist, bekommen die Leute ein -2, um Würfe zu bemerken, wenn sie versuchen, ein geworfenes Feld zu erkennen.'
    // },
//    {
//      id: 'TrueGrit',
//      name: 'True Grit',
//      req: [
//        {
//          type: 'dynamic',
//          depends: 'attribute',
//          id: 'Willenskraft',
//          value: 8
//        }
//      ],
//      tags: ['Deadlands', 'Sozial'],
//      descr:
//        'Manche Leute scheinen einfach Härte auszustrahlen, und Ihr Held ist einer von ihnen. Die Schrecken des Lebens im Schrägen Westen lassen diesen Hombre nicht kalt. Er hat Kies in seinen Eingeweiden und Eiswasser, das durch seine Adern fliesst. Das kühle Auftreten Ihres Helden verleiht ihm +1 Grit.'
//    },
    // {
    //   id: 'Aufklaerer',
    //   name: 'Aufklärer',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Wahrnehmung',
    //       value: 6
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Ueberleben',
    //       value: 6
    //     }
    //   ],
    //   tags: ['Deadlands', 'Experte'],
    //   descr:
    //     'Aufklärer haben gelernt, auf die Zeichen zu achten und ihren Instinkten zu vertrauen, wenn es darum geht, sich in der weiten Wildnis zurechtzufinden. Jedes Mal, wenn der Marschall während seiner Reise eine Bildkarte zieht (die auf eine zufällige Begegnung hinweist), darf ein Späher einen Hinweiswurf (-2) machen. Bei Erfolg erkennt der Späher die Gefahr, die Kreatur oder die Situation zum frühestmöglichen Zeitpunkt und gibt seiner Gruppe wahrscheinlich Zeit, ihr auszuweichen oder sie zumindest zu ihren eigenen Bedingungen anzugreifen. Vergessen Sie nicht, den Marschall daran zu erinnern, dass Sie diese Kante haben, wenn Ihre Truppe unterwegs ist. Aufklärer erhalten ausserdem +2, um Würfe zu bemerken, die gemacht wurden, um Überraschungen in taktischen Situationen zu vermeiden.'
    // },
    // {
    //   id: 'Quacksalber',
    //   name: 'Quacksalber',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'attribute',
    //       id: 'Verstand',
    //       value: 6
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'attribute',
    //       id: 'Willenskraft',
    //       value: 6
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Ueberreden',
    //       value: 8
    //     }
    //   ],
    //   tags: ['Deadlands', 'Experte'],
    //   descr:
    //     'Mit honigsüssen Lippen, die Lügen und Erfindungen weben, als wären sie die Wahrheit des Evangeliums, konnte dieser geschmeidige Redner Salz an die Mormonen und Büffelhäute an die Indianer verkaufen. Der Charakter erhält einen Bonus von +2 auf kampflose Überzeugungsrollen. Er kann auch seine gespaltene Zunge benutzen, um einen Persuasion Test of Will zu initiieren, dem die Smarts des Ziels entgegenwirken.'
    // },
    // {
    //   id: 'Geschichtenerzaehler',
    //   name: 'Geschichtenerzähler',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Ueberreden',
    //       value: 8
    //     }
    //   ],
    //   tags: ['Deadlands', 'Experte'],
    //   descr:
    //     "Ein guter Geschichtenerzähler unterhält nicht nur, er gibt auch Hoffnung und Trost. Sodbuster und Sattelschlepper im Wilden Westen können alle Hoffnung und allen Trost gebrauchen, die sie finden können. Wir wollen nicht zu viel sagen, aber gute Geschichtenerzähler sind entscheidend für die Rettung der Welt. Wie bitte? Die Welt braucht Rettung? Und ob sie das braucht. Sie werden irgendwann herausfinden, warum. In der Zwischenzeit sollten Sie wissen, dass es im Grossen und Ganzen weitaus wichtiger ist, die Geschichten über die Heldentaten Ihrer Truppe zu verbreiten als die Fähigkeit, eine Waffe abzufeuern oder zu reiten. Wenn Sie also etwas Erstaunliches tun, Bucko, erzählen Sie den Leuten davon! Das Marshal's Handbook ist in dieser Hinsicht sehr dürftig, aber Sie müssen wissen, was der Edge tut, und deshalb werden wir Ihnen jetzt viel davon erzählen. Wenn ein Redner mit diesem Edge eine Überredungsrolle macht, um von den Heldentaten seiner Truppe zu erzählen, erhält er einen Bonus von +2. Wo die meisten Geschichtenerzähler die Geschichte vermasseln, wenn sie eine 1 auf den Überredungswürfel würfeln (unabhängig vom Ergebnis des Wilden Würfels), tut Ihr Held dies ausserdem nur mit einem Wurf von Schlangenaugen. Wenn ein Geschichtenerzähler mit diesem Edge erfolgreich einen Fear-Level senkt, erhält er einen einmaligen Legendenchip, den er selbst einmal verwendet (er geht nicht wie andere Schicksals-Chips in den Pott der Spieler, sondern direkt an den Spieler). Sprechen Sie mit dem Marshall darüber, amigo. Wir haben Ihnen bereits mehr gesagt, als wir sollten."
    // },
    // {
    //   id: 'Wilder',
    //   name: 'Wilder',
    //   req: [
    //     {
    //       type: 'dynamic',
    //       depends: 'attribute',
    //       id: 'Verstand',
    //       value: 8
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'attribute',
    //       id: 'Konstitution',
    //       value: 6
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Wahrnehmung',
    //       value: 8
    //     },
    //     {
    //       type: 'dynamic',
    //       depends: 'skill',
    //       id: 'Ueberleben',
    //       value: 6
    //     }
    //   ],
    //   tags: ['Deadlands', 'Experte'],
    //   descr:
    //     'Ob sie in den hohen Rocky Mountains, den Great Plains oder den Wüsten leben, die Menschen in der Wildnis sind an die Unbilden der Natur gewöhnt und nehmen extreme Wetterbedingungen gelassen hin. Sie gewinnen +2 zum Überleben und zum Verfolgen. Darüber hinaus erhalten sie, wenn sie lebenslang der Wut der Natur ausgesetzt sind, einen Bonus von +2 auf Kräftigungsrollen, um der Ermüdung durch Hitze oder Kälte zu widerstehen (siehe Wilde Welten).'
    // },
    // {
    //   id: 'Gabe',
    //   name: 'Gabe',
    //   tags: ['Deadlands', 'Macht'],
    //   descr:
    //     "Dieses Talent sollte nur während der Charaktererstellung genommen werden (es sei denn, es gibt einen guten Grund für den Helden, seine latenten Kräfte zu einem späteren Zeitpunkt zu 'entdecken'). Der schräge Westen ist ein abergläubischer Ort, wo Gerüchte und Altweibergeschichten im Überfluss vorhanden sind. Nur gelegentlich enthalten diese Volksmärchen jedoch einen Keim der Wahrheit. Ein Kniff ist nur, dass sich die Volksmärchen bewahrheiten. Nun, jetzt können Sie sich eines der besonderen Ereignisse aussuchen, das mit der Zeit Ihrer Geburt zusammenfiel. Jedes dieser Ereignisse gibt Ihnen Zugang zu einer besonderen Fähigkeit, die Sie mit Hilfe eines Schicksalschips (beliebiger Farbe) aktivieren können. Wenn Sie keinen Schicksalschip zur Verfügung haben, können Sie Ihre Fähigkeit nicht einsetzen. Mistkerl: Nun, das ist Ihr Held. Nicht die gemeine, störrische Art, sondern die vaterlose Art. Man sagt, dass ein uneheliches Kind in der Lage ist, das Unsichtbare zu sehen. Werfen Sie einen Schicksalschip weg, um unsichtbare Wesen oder solche, die sich auf übernatürliche Weise in ihre Umgebung einfügen, sehen zu können. Geboren am Vorabend von Allerheiligen: Man sagt, der König von Halloween bevorzugt diejenigen, die an seinem Unheilstag geboren wurden, und gewährt ihnen ein besseres Verständnis der geheimnisvollen Welt. Als einer dieser Lausbuben kann Ihr Held nur magische und seltsame wissenschaftliche Arkane Hintergründe wählen. Wenn Sie Ihr Herz bereits auf einen anderen arkanen Hintergrund eingestellt haben, müssen Sie einen anderen Trick wählen. Ein merkwürdiger Wissenschaftler mit dieser Fähigkeit kann einen Schicksalschip wegwerfen und einen erfolgreichen Geisterwurf machen, um Demenz als Folge der Einnahme des New Powers Edge zu vermeiden (siehe Seite 98). Ein Verhökerer mit dieser Fähigkeit kann einen Schicksalschip ablegen und einen erfolgreichen Geisterwurf machen, um eine Fehlzündung zu vermeiden, nachdem er eine Pokerhand zum Ausspielen eines Sechsecks gespielt hat (siehe Seite 91). Bei einem Erfolg wird er einfach wie durch einen Backlash geschüttelt, und mit einer Erhöhung vermeidet er ihn vollständig. Geboren an Weihnachten: Ein an Weihnachten geborener Säugling ist besonders resistent gegen arkane Effekte, die von bösen Geistern angetrieben werden. Als solcher kann Ihr Held nur Wunder und schamanistische arkane Hintergründe nutzen. Wenn Sie einen anderen Arkanen Hintergrund verwenden wollten, ist dies nicht das richtige Händchen für Sie. Wenn ein Held mit diesem Talent von einer Macht aus einem anderen Arkanen Hintergrund angegriffen wird, kann er einen Schicksalschip abwerfen, um den Effekt aufzuheben und den Wirker zu einem Geisterwurf (-4) oder einer Erschütterung zu zwingen. Steissgeburt: Ein Baby, das mit dem Hintern zuerst geboren wird, soll die unheimliche Fähigkeit haben, Verletzungen zu heilen. Ihr Held ist genau so ein Mensch und kann einen Schicksalschip ausgeben, um die grössere Heilkraft zu nutzen. Er braucht nicht zu rollen, er hat automatisch einen einzigen Erfolg (und heilt damit eine Wunde). Siebter Sohn: Ihr Held ist zu grosser Grösse verdammt; seine Legende wird im Wilden Westen eine grosse Rolle spielen. Dieser Hombre hat die Fähigkeit, das Schicksal zu lenken. Jedes Mal, wenn ein Schicksalschip in seiner Gegenwart verwendet wird, kann er einen gleichfarbigen Chip wegwerfen, um seine Wirkung zu negieren."
    // }
  ]
})

export const getters = {
  getList: (state) => {
    return [...state.list].sort((a, b) => {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      }
      return 0
    })
  }
}
