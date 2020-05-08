export const state = () => ({
  list: [
    {
      id: 'Abwehren',
      name: 'Abwehren',
      summary: '–2/–4 um Empfänger anzugreifen',
      rank: 'Anfänger',
      powerPoints: 3,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'mystischer Schild',
        'Windstoss',
        'Geist, der Geschosse abfängt'
      ],
      descr:
        'Abwehren funktioniert auf unterschiedliche Arten. Einige Manifestationen lenken gegnerische Angriffe ab, andere lassen die Form des Ziels verschwimmen oder erzeugen illusionäre Effekte. Das Endergebnis ist aber immer dasselbe – Nahkampfangriffe und Geschosse werden vom Empfänger der Macht abgelenkt. Wenn die Macht gewirkt wurde, erleiden Feinde einen Abzug von –2 auf Angriffswürfe gegen den Anwender (oder –4 bei einer Steigerung).',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Arkaner Schutz',
      name: 'Arkaner Schutz',
      summary:
        'Gegnerische Wirker ziehen –2 (–4 mit Steigerung) ab, wenn sie den Charakter mit Mächten angreifen; verringert Schaden um die gleiche Summe.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'Konzentration',
        'ein schwaches Leuchten um den beschützten Charakter',
        'ein Fetisch'
      ],
      descr:
        'Ein Erfolg mit Arkaner Schutz bedeutet, dass feindliche Mächte einen Abzug von –2 (–4 bei einer Steigerung) erleiden, wenn sie diesen Charakter beeinflussen wollen. Wenn die Macht Schaden verursacht, wird auch der Schaden um diesen Betrag verringert. Arkaner Schutz ist kumulativ zu Arkaner Resistenz, wenn der Empfänger über beides verfügt!',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Arkanes entdecken/verbergen',
      name: 'Arkanes entdecken/verbergen',
      summary:
        'Entdeckt Magie für Wirkungsdauer 5 oder verbirgt sie für eine Stunde.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: '5 (entdecken); eine Stunde (verbergen)',
      trappings: ['Handgewedel', 'geflüsterte Worte'],
      descr:
        'Arkanes entdecken erlaubt es dem Empfänger der Macht, alle übernatürlichen Personen, Objekte oder Effekte in Sichtweite zu sehen und zu finden. Dazu gehören unsichtbare Feinde, Verzauberungen auf Personen oder Gegenständen, Apparaturen, die durch Verrückte Wissenschaft entstanden sind und so weiter. Mit einer Steigerung erkennt das Ziel auch die grundsätzliche Art der Verzauberung – schädlich, Verschleierung, Magie, Wunder und so weiter. Arkanes entdecken erlaubt es einem Charakter auch, bis zu 4 Punkte an Abzügen zu ignorieren, wenn er Feinde angreift, die durch magische Dunkelheit, Unsichtbarkeit und ähnliche Fähigkeiten verborgen sind (oder alle Abzüge mit einer Steigerung). Arkanes verbergen verhindert die Aufspürung arkaner Energien bei Wesen oder Gegenständen mit Normaler Grössenkategorie (siehe die Grössentabelle auf Seite 179). Entdecken gegen Verbergen: Wird Arkanes entdecken auf jemanden oder etwas verwendet, das verborgen worden ist, ist das ein vergleichender Wurf auf die arkane Fertigkeit (würfle bei jedem Entdeckungsversuch, aber nicht mehr als einmal pro Zug). Wenn das Verbergen gewinnt, kann der Charakter nicht durch die Täuschung blicken, er kann aber diese Anwendung der Macht sofort beenden und es erneut versuchen.',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+1/+2)',
          descr:
            'Nur Verbergen. Die Macht beeinflusst alles in einer Sphäre mit der Grösse einer mittleren Flächenschablone für +1 Punkt, oder einer grossen Flächenschablone für +2.'
        },
        {
          name: 'STARK (+1)',
          descr:
            'Nur Verbergen. Entdecken-Würfe, um das Verbergen zu durchschauen, werden mit –2 abgelegt. '
        },
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann bei Entdecken mehr als einen Betrachter beeinflussen, oder mehrere Gegenstände verbergen, für je 1 zusätzlichen Machtpunkt.'
        }
      ]
    },
    {
      id: 'Betäuben',
      name: 'Betäuben',
      summary: 'Ziel wird Betäubt.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: [
        'Energiegeschosse',
        'Betäubungsbomben, Überschallknall',
        'blendendes Licht'
      ],
      descr:
        'Betäuben schockt ein Ziel mit Erschütterungen, Lärm, Licht, magischer Energie oder ähnlichem. Eine erfolgreiche Anwendung bedeutet, dass das Opfer eine Konstitutionsprobe ablegen muss (mit –2, wenn der Anwender eine Steigerung mit der arkanen Fertigkeit erzielt hat), um nicht Betäubt zu werden (siehe Seite 99).',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+2/+3)',
          descr:
            'Für +2 Punkte beeinflusst die Macht alle in einer mittleren Flächenschablone. Für +3 Punkte beeinflusst die Macht alle in einer grossen Flächenschablone.'
        }
      ]
    },
    {
      id: 'Blenden',
      name: 'Blenden',
      summary: 'Verursacht bei Opfern Abzüge von –2/–4.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: ['heller Lichtblitz', 'Sand in den Augen', 'Verwirrung'],
      descr:
        'Wer von dieser bösartigen Macht betroffen ist, erleidet verschwommene Sicht oder bei einer Steigerung fast vollständige Blindheit. Ein Erfolg bedeutet, dass das Opfer –2 auf alle Aktionen erleidet, die Sicht erfordern, oder –4 bei einer Steigerung. Das Opfer versucht, den Effekt am Ende seiner folgenden Züge automatisch (als freie Aktion) mit einer Konstitutionsprobe abzuschütteln. Ein Erfolg hebt 2 Punkte Abzüge auf, eine Steigerung beendet den Effekt sofort.',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+2/+3)',
          descr:
            'Für +2 Punkte beeinflusst die Macht alle in einer mittleren Flächenschablone. Für +3 Punkte beeinflusst die Macht alle in einer grossen Flächenschablone.'
        },
        {
          name: 'STARK (+1)',
          descr:
            'Die Konstitutionsprobe, um den Effekt abzuschütteln, wird mit –2 abgelegt.'
        }
      ]
    },
    {
      id: 'Chaos',
      name: 'Chaos',
      summary:
        'Ziele in MFS oder Kegel sind Abgelenkt und könnten geschleudert werden.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: ['Wirbelwind', 'chaotische Poltergeister', 'Abstossungsfeld'],
      descr:
        'Diese Fähigkeit erzeugt Chaos und Unheil für alle in ihrem Wirkungsgebiet und schleudert Schutt und Gegner in alle Richtungen. Bei einem Erfolg platziert der Wirker entweder eine mittlere Flächenschablone innerhalb der Reichweite, oder eine Kegelschablone, die vom Wirker ausgeht (siehe Flächenangriffe, siehe Seite 102). Jeder, der von der Schablone berührt wird, ist Abgelenkt und muss dann eine Stärkeprobe ablegen (mit –2, wenn der Wirker eine Steigerung erzielt hat). Wem die Probe nicht gelingt, wird 2W6“ weggeschleudert – direkt weg vom Anwender bei der Verwendung der Kegelschablone, und weg von der Mitte der Flächenschablone, wenn diese verwendet wird (der Wirker entscheidet die Richtung für Charaktere in der Mitte). Opfer, die gegen ein festes Objekt (wie eine Mauer) geschleudert werden erleiden 2W4 Schaden (Betäubungsschaden, es sei denn, es handelt sich um eine mit Zacken oder Stacheln bedeckte Mauer oder andere gefährlichere Oberfläche). Fliegende Ziele: Fliegende Ziele oder Ziele, die sich anderweitig in der Luft befinden, erleiden zusätzlich –2 auf ihre Stärkeprobe, da sie sich nicht gegen den Boden stemmen können.',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+1)',
          descr: 'Chaos beeinflusst eine grosse Flächenschablone.'
        },
        {
          name: 'STARK (+1)',
          descr: 'Stärkeproben werden mit –2 abgelegt.'
        }
      ]
    },
    {
      id: 'Dunkelsicht',
      name: 'Dunkelsicht',
      summary:
        'Ignoriere bis zu 4 Punkte Beleuchtungsabzüge, 6 mit Steigerung.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 'Eine Stunde',
      trappings: [
        'leuchtende Augen',
        'erweiterte Pupillen',
        'Ultraschall-Sicht'
      ],
      descr:
        'Dunkelsicht erlaubt es einem Helden, in der Dunkelheit zu sehen. Mit einem Erfolg ignoriert er bis zu 4 Punkte Abzüge für Beleuchtung. Mit einer Steigerung ignoriert er bis zu 6 Punkte Abzüge und kann in Vollständiger Finsternis sehen.',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Eigenschaft erhöhen/senken',
      name: 'Eigenschaft erhöhen/senken',
      summary: 'Erhöht oder senkt Attribut oder Fertigkeit.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: '5 (erhöhen); Sofort (senken)',
      trappings: ['körperliche Veränderung', 'leuchtende Aura', 'Tränke'],
      descr:
        'Diese Macht erlaubt es einem Charakter, eine Eigenschaft (Attribut oder Fertigkeit) des Ziels zu erhöhen oder zu senken. Die Eigenschaft eines Verbündeten zu erhöhen verbessert die ausgewählte Eigenschaft um einen Würfeltyp, oder um zwei mit einer Steigerung. Die Eigenschaft eines Feindes zu senken hat eine Wirkungsdauer von Sofort und verringert das ausgewählte Attribut oder die ausgewählte Fertigkeit um einen Würfeltyp mit einem Erfolg oder zwei mit einer Steigerung (Minimum W4). Das Opfer versucht am Ende seiner folgenden Züge automatisch den Effekt als freie Aktion mit einer Willenskraftprobe abzuschütteln. Ein Erfolg schwächt den Effekt um einen Würfeltyp ab, eine Steigerung beendet den Effekt sofort. Zusätzliche Anwendungen auf dieselbe Eigenschaft sind nicht kumulativ (benutze die höchste), doch können sie mehrere unterschiedliche Eigenschaften erhöhen.',
      modifications: [
        {
          name: 'STARK (+1)',
          descr:
            'Nur Eigenschaft senken. Die Willenskraftprobe, um den Effekt abzuschütteln, wird mit –2 abgelegt.'
        },
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Elementarmanipulation',
      name: 'Elementarmanipulation',
      summary: 'Erlaubt kleinere Manipulationen der Grundelemente.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 5,
      trappings: ['einige einfache Gesten'],
      descr:
        "Diese Macht gewährt grundlegende Kontrolle über die vier traditionellen Elemente: Erde, Feuer, Luft und Wasser. Die Macht agiert, als hätte sie Stärke W6, oder W8 mit einer Steigerung. Hier hast du einige Ideen, was du mit jedem Element tun kannst. LUFT: Jemanden Stossen (siehe Seite 106), eine Fackel auspusten, ein Feuer anfachen, jemanden abkühlen (+2 auf Erschöpfungsproben in Hitze). ERDE: Einen Kubikfuss an Erde (halb so viel in Stein) pro Runde bewegen, Spuren verwischen. FEUER: Flammen mit der Grösse einer Fackel beschwören, ein kleines Feuer auf jemanden werfen (Stärke-Schaden), bestehendes Feuer wachsen lassen (siehe Feuer auf Seite 116). WASSER: Zwei Liter Wasser beschwören (nicht 'in' Objekten oder Personen), etwa vier Liter Wasser pro Anwendung reinigen."
    },
    {
      id: 'Empathie',
      name: 'Empathie',
      summary:
        'Vergleichender Wurf gegen Willenskraft für +1/+2 auf Darbietung, Einschüchtern, Provozieren und Überreden gegen das Ziel.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'Konzentration',
        'ein warmes oder mitfühlendes Lächeln',
        'Nettigkeiten austauschen'
      ],
      descr:
        'Der Wirker erzeugt ein emotionales Band zwischen sich und dem Ziel, wenn ihm ein vergleichender Wurf mit seiner arkanen Fertigkeit gegen Willenskraft gelingt. Er kennt den emotionalen Zustand des Ziels und seine oberflächlichen Gedanken, und erhält +1 (+2 bei einer Steigerung) auf Darbietung, Einschüchtern, Provozieren und Überreden gegen das Ziel. Empathie wirkt auch auf Tiere und addiert +2 auf Reiten oder andere Würfe, um mit der Kreatur zu interagieren.'
    },
    {
      id: 'Furcht',
      name: 'Furcht',
      summary: 'Verursacht Furchtproben.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: ['Gesten', 'unheimliche Energie', 'kaltes Schaudern'],
      descr:
        'Diese Macht verursacht überwältigendes Grauen und Schrecken. Das Ziel legt eine Furchtprobe ab. Statisten, die diese Probe nicht schaffen, sind Panisch, und Wildcards würfeln auf der Furchttabelle. Wenn die Macht mit einer Steigerung gewirkt wird, wird die Furchtprobe mit –2 abgelegt, und Wildcards addieren +2 auf das Ergebnis auf der Furchttabelle.',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+2/+3)',
          descr:
            'Für +2 Punkte beeinflusst die Macht alle in einer mittleren Flächenschablone. Für +3 Punkte beeinflusst die Macht alle in einer grossen Flächenschablone.'
        }
      ]
    },
    {
      id: 'Gedankenlesen',
      name: 'Gedankenlesen',
      summary: 'Vergleichender Wurf gegen Verstand, um Gedanken zu lesen.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: ['psionisches Eindringen', 'Seelensicht'],
      descr:
        'Gedankenlesen ist ein vergleichender Wurf gegen den Verstand des Ziels. Ein Erfolg erlaubt es dem Charakter, eine wahre Antwort vom Ziel zu erhalten. Das Ziel ist sich des geistigen Eindringens bewusst, es sei denn, der Gedankenleser erzielt eine Steigerung. Die SL kann Modifikationen anrechnen, basierend auf den geistigen Handicaps oder dem Geisteszustand des Ziels.'
    },
    {
      id: 'Gedankenverbindung',
      name: 'Gedankenverbindung',
      summary: 'Geistige Verbindung auf 1,5 Kilometer (8 mit Steigerung).',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: '30 Minuten',
      trappings: [
        'Kopfschmuck',
        'Talismane von Tao oder anderen Göttern',
        'Kristalle'
      ],
      descr:
        'Gedankenverbindung erschafft eine telepathische Verbindung zwischen zwei Personen (wozu der Wirker nicht notwendigerweise gehören muss). Die Verbindung gilt nur für willige Ziele und Kommunikation – Gedanken, die nicht bewusst übertragen werden, werden nicht übertragen. Sobald die Macht aktiviert wird, beträgt die Reichweite zwischen den verbundenen Zielen 1,5 km oder 8 km mit einer Steigerung. Wenn ein Charakter eine Wunde erleidet, müssen alle mit ihm Verbundenen eine Verstandsprobe ablegen, um nicht Angeschlagen zu werden (dies kann keine Wunde verursachen). Die Geschwindigkeit der Kommunikation ist die von normaler Sprache, aber mit einer Steigerung können die verbundenen Charaktere bis zu 30 Sekunden Sprache in einer Kampfrunde übertragen.',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Geräusch/Stille',
      name: 'Geräusch/Stille',
      summary: 'Erzeugt oder dämpft Geräusche.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand ×5 (Geräusch); Verstand, (Stille)',
      duration: 'Sofort (Geräusch); 5 (Stille)',
      trappings: [
        'magische Effekte',
        'ein kurzes Kräuseln in der Luft',
        'eine Glocke oder ein Klingen',
        'das beginnt oder aufhört'
      ],
      descr:
        'Geräusch ahmt ein bekanntes Geräusch oder eine Stimme nach, ausgehend von einem Punkt in Reichweite bis zur Lautstärke eines lauten Rufs. Wenn dies als Herausfordern verwendet wird, wehrt sich das Opfer mit Verstand. Stille tut das Gegenteil und dämpft alle Geräusche bis zu einem lauten Rufen innerhalb einer grossen Flächenschablone. Ziehe –4 von Wahrnehmungsproben ab, die Charaktere in diesem Bereich ablegen, um etwas zu hören, sowie von Proben, um ein Geräusch zu hören, das in diesem Bereich seinen Ursprung hat. Eine Steigerung beim Wurf unterdrückt alle Geräusche, egal wie laut, sodass solche Wahrnehmungsproben automatisch scheitern.',
      modifications: [
        {
          name: 'ANVISIERT (+0)',
          descr:
            'Statt Stille in einem Flächeneffekt zu wirken, kann der Wirker auch Individuen in Reichweite für jeweils 1 Machtpunkt anvisieren. Jedes Opfer widersetzt sich mit einer Willenskraftprobe (–2, wenn die Macht mit Steigerung aktiviert wurde).'
        },
        {
          name: 'BEWEGLICH (+1)',
          descr:
            'Der Wirker kann den Flächeneffekt für eine Anzahl von Zoll gleich seinem Würfel in seiner arkanen Fertigkeit pro Zug bewegen.'
        }
      ]
    },
    {
      id: 'Geschoss',
      name: 'Geschoss',
      summary: 'Fernkampfangriff mit 2W6.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand ×2',
      duration: 'Sofort',
      trappings: [
        'Feuer',
        'Eis',
        'Licht',
        'Dunkelheit',
        'farbige Geschosse',
        'Insektenschwärme'
      ],
      descr:
        'Geschoss schleudert schädigende Entladungen aus Energie, Strahlen aus heiligem Licht oder Materiesplitter auf einen Feind. Es gibt keine Entfernungsabzüge, aber der arkane Fertigkeitswurf ist von Deckung, Beleuchtung und allen anderen üblichen Abzügen betroffen. Der Schaden des Geschosses ist 2W6 oder 3W6 mit Steigerung.',
      modifications: [
        {
          name: 'SCHADEN (+2)',
          descr:
            'Das Geschoss verursacht 3W6 Schaden (4W6 bei einer Steigerung).'
        }
      ]
    },
    {
      id: 'Gestaltwandeln',
      name: 'Gestaltwandeln',
      summary: 'Wirker nimmt die Gestalt verschiedener Wesen an.',
      rank: 'Anfänger',
      Machtpunkte: 'Speziell',
      range: 'Selbst',
      duration: 5,
      trappings: ['Morphen', 'Talismane', 'Tätowierungen'],
      descr:
        'Viele Kulturen haben Legenden über Schamanen und Magier, die sich in Tiere verwandeln. Diese Macht erlaubt dem Wirker, die Gestalt eines beliebigen Tieres anzunehmen (auch die fantastischer Kreaturen wie Drachen und Pferdegreifen, wenn sie im Setting existieren, aber nicht die von Humanoiden, Untoten etc.). In was sich ein Charakter verwandeln kann hängt von seinem Rang ab: (KOSTEN/RANG/GRÖSSE) 3/Anfänger/Grösse –4 bis Grösse –1 5/Fortgeschritten/Grösse 0 8/Veteran/Grösse 1 bis 2 11/Heroisch/Grösse 3 bis 4 15/Legendär/Grösse 5 bis 10 Mit einer Steigerung bei seinem Wurf verwandelt er sich in eine besonders grosse Version des Tieres – erhöhe Stärke und Konstitution um je einen Würfeltyp. Waffen und andere persönliche Gegenstände werden in die Tiergestalt absorbiert und erscheinen wieder, wenn die Macht endet, doch andere Gegenstände fallen auf den Boden. Solange der Charakter verwandelt ist, behält er seinen Verstand, Willenskraft, Handicaps, Talente und verknüpfte Fertigkeiten (auch wenn er unter Umständen abhängig von der Gestalt nicht alle verwenden kann – Entscheidung der SL). Er erhält die Geschicklichkeit, Stärke, Konstitution und verknüpften Fertigkeiten des Tieres und kann die meisten Gerätschaften, die eine humanoide Gestalt erfordern, nicht verwenden. Er kann nicht sprechen und kann seine eigenen Mächte nicht verwenden, doch kann er Mächte, die er zuvor gewirkt hat, aufrechterhalten. Die natürlichen Fähigkeiten der Gestalt werden übernommen, magische jedoch nicht. Ein Drache kann beispielsweise in einem traditionellen Fantasy-Setting fliegen und Feuer speien, also könnte ein Charakter, der Gestaltwandeln verwendet, dies ebenfalls tun. Wenn Drachen in dieser Welt Zauber wirken können, würde Gestaltwandeln diese Fähigkeit nicht verleihen, weil sie nicht Teil seiner körperlichen Gestalt ist. Grösse: Der Wirker erhält keine zusätzlichen Wunden, wenn er sich in Kreaturen verwandelt, die Gross, Riesig oder Gigantisch sind (siehe Grössenkategorie, Seite 103).',
      modifications: [
        {
          name: 'SPRECHEN (+1)',
          descr:
            'Der Empfänger erhält die Fähigkeit, in Tiergestalt zu sprechen.'
        }
      ]
    },
    {
      id: 'Graben',
      name: 'Graben',
      summary: 'Ziel gräbt sich durch die Erde.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'mit der Erde verschmelzen und an anderer Stelle wieder auftauchen'
      ],
      descr:
        "Graben erlaubt es dem Empfänger, mit der Erde zu verschmelzen. Er kann, wenn er möchte, in einer Art 'Limbo' unter der Erde bleiben oder sich mit seiner halben Bewegungsweite (vollen Bewegungsweite bei einer Steigerung) durch die Erde graben. Er kann nicht sprinten. Ein grabender Charakter kann versuchen, einen Feind zu überraschen, indem er einen vergleichenden Wurf mit Heimlichkeit gegen Wahrnehmung ablegt. Wenn der Gräber gewinnt, ist das Ziel nur ihm gegenüber Verwundbar. Bei einer Steigerung erhält der Grabende die Vorteile eines Überraschungsangriffs. Ziele, die ihren Zug aufgespart haben, können versuchen, den Angriff zu unterbrechen, ehe er stattfindet. Gräber können einen Feind nicht überraschen, wenn ihre Anwesenheit bekannt ist, aber können graben, um sich geschützt fortzubewegen.",
      modifications: [
        {
          name: 'MACHT (+1)',
          descr:
            'Der Wirker kann si§ch durch Stein, Zement oder ähnliche Substanzen graben. (Einige Substanzen, wie Plastik, festes Glas und so weiter könnten nach Entscheidung der SL nicht möglich sein.)'
        },
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Heilung',
      name: 'Heilung',
      summary:
        'Stellt Wunden wieder her, die weniger als eine Stunde alt sind.',
      rank: 'Anfänger',
      powerPoints: 3,
      range: 'Berührung',
      duration: 'Sofort',
      trappings: [
        'Hände auflegen',
        'das Opfer mit einem heiligen Symbol berühren',
        'Gebete'
      ],
      descr:
        'Heilung entfernt Wunden, die weniger als eine Stunde alt sind. Ein Erfolg entfernt eine Wunde, eine Steigerung zwei. Die Macht kann innerhalb dieser Stunde zusätzliche Male gewirkt werden, um zusätzliche Wunden zu entfernen, solange der Wirker genügend Machtpunkte hat. Bei Statisten muss die SL zuerst bestimmen, ob sie noch am Leben sind (siehe Nachwirkungen, Seite 122). Wenn ja, führt ein erfolgreicher Wurf auf die arkane Fertigkeit dazu, dass der Verbündete wieder einsatzbereit (Angeschlagen, falls es relevant ist) ist.',
      modifications: [
        {
          name: 'GIFT ODER KRANKHEIT NEUTRALISIEREN (+1)',
          descr:
            'Ein erfolgreicher Wurf auf Heilung negiert alle Gifte oder Krankheiten. Wenn das Gift oder die Krankheit einen Bonus oder Abzug mit sich bringt, gilt der Modifikator auch auf die Probe mit der arkanen Fertigkeit.'
        },
        {
          name: 'MÄCHTIGE HEILUNG (+10)',
          descr:
            'Mächtige Heilung kann jede Wunde heilen, auch wenn sie älter als eine Stunde ist.'
        },
        {
          name: 'PERMANENTE VERLETZUNGEN (+20)',
          descr:
            'Die Macht kann eine permanente Verletzung heilen (siehe Ausgeschaltet, Seite 95). Dies erfordert eine Stunde Vorbereitung und nur eine Anwendung pro Verletzung ist erlaubt. Wenn diese misslingt, kann der Wirker diese Verletzung nicht heilen (aber jemand anders kann es versuchen). Bei Erfolg ist das Ziel für 24 Stunden Erschöpft.'
        }
      ]
    },
    {
      id: 'Illusion',
      name: 'Illusion',
      summary: 'Erzeugt illusionäre Bilder.',
      rank: 'Anfänger',
      powerPoints: 3,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'magische Zauberformeln',
        'Hologramme',
        'Äthermaterialisatoren'
      ],
      descr:
        'Eine der grössten Mächte ist die Fähigkeit, etwas aus dem Nichts zu erschaffen – auch wenn es nicht echt ist! Illusion kann verwendet werden, um eine visuelle Szene oder Nachbildung von so ziemlich allem zu erschaffen, was sich der Anwender vorstellen kann. Allerdings ist die Illusion lautlos, unberührbar und nicht imstande, die echte Welt zu beeinflussen. Beispielsweise gehen illusionäre Waffen einfach durch Feinde hindurch, man kann sich nicht auf einen illusionären Stuhl setzen, und ein illusionärer Hund hat kein hörbares Bellen. Wer Kontakt mit einer Illusion hat oder bezweifelt, dass sie echt ist, legt eine Verstandsprobe als freie Aktion ab (mit –2, wenn die Macht mit einer Steigerung aktiviert wurde). Bei Erfolg ist die Person nicht mehr von der Illusion betroffen. Die SL sollte Gruppenwürfe für Statisten ablegen, da sie sich gegenseitig auf die Ungereimtheiten der Illusion aufmerksam machen können. Das Volumen der Illusion muss in eine Sphäre gleich einer mittleren Flächenschablone passen (4“ oder 8 Meter Durchmesser).',
      modifications: [
        {
          name: 'GERÄUSCHE (+1)',
          descr:
            'Die Macht erzeugt Geräusche, die zur Illusion passen. Illusionäre Verbündete können sprechen, illusionäre Krähen krächzen und so weiter. Dies kann aber keine realen Geräusche maskieren oder übertönen.'
        },
        {
          name: 'STARK (+2)',
          descr:
            'Verstandsproben, um die Illusion anzuzweifeln, werden mit –2 abgelegt.'
        }
      ]
    },
    {
      id: 'Licht/Dunkelheit',
      name: 'Licht/Dunkelheit',
      summary: 'Erschafft oder verbannt Beleuchtung.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: '10 Minuten',
      trappings: [
        'illusionäre Fackel',
        'Sonnenlicht',
        'Dunkelheit',
        'dichter Nebel'
      ],
      descr:
        'Licht erzeugt helles Licht innerhalb einer grossen Flächenschablone. Mit einer Steigerung kann das Licht auch in einen 5“ (10 Meter) langen Strahl fokussiert werden. Dunkelheit blockiert das Licht in einer Fläche gleich einer grossen Flächenschablone, was das Gebiet Dunkel werden lässt (oder mit einer Steigerung für Vollständige Finsternis sorgt) (siehe Beleuchtung auf Seite 98). Wenn sich Licht und Dunkelheit überschneiden, entsteht ein Gebiet Düsterer Beleuchtung (–2).',
      modifications: [
        {
          name: 'BEWEGLICH (+1)',
          descr:
            'Der Wirker kann das Gebiet jede Runde um eine Anzahl von Zoll gleich dem Würfel seiner arkanen Fertigkeit bewegen, nachdem er den Zauber gewirkt hat, oder ihn beim Wirken an einem leblosen Gegenstand anheften.'
        }
      ]
    },
    {
      id: 'Linderung',
      name: 'Linderung',
      summary: 'Entfernt Erschöpfung und Angeschlagen; Betäubt mit Steigerung.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: ['Gebete', 'Tonikum'],
      descr:
        'Linderung entfernt eine Stufe Erschöpfung oder zwei mit einer Steigerung. Die Macht kann auch den Zustand Angeschlagen aufheben, und den Zustand Betäubt mit einer Steigerung.',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Schutz',
      name: 'Schutz',
      summary: 'Gewährt Panzerung +2/+4.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'ein mystisches Leuchten',
        'gehärtete Haut, ätherische Rüstung',
        'eine Masse aus Naniten'
      ],
      descr:
        'Schutz erzeugt eine Rüstung oder ein Kraftfeld um den Charakter, was ihm +2 Punkte Panzerung verleiht, +4 mit einer Steigerung. Ob Schutz sichtbar ist oder nicht, hängt von der Ausprägung ab – dies entscheidet einzig der Wirker. Schutz ist kumulativ zu natürlicher oder getragener Rüstung und wird durch PB reduziert.',
      modifications: [
        {
          name: 'MEHR PANZERUNG (+1)',
          descr: 'Ein Erfolg gewährt +4 Panzerung (+6 mit einer Steigerung).'
        },
        {
          name: 'ROBUSTHEIT (+1)',
          descr:
            'Schutz bietet Robustheit anstelle von Panzerung und ist nicht von PB betroffen (egal ob magisch oder anderweitig).'
        },
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Schutz vor Naturgewalten',
      name: 'Schutz vor Naturgewalten',
      summary: 'Beschützt Ziel vor schädlichen Umwelteinflüssen.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Eine Stunde',
      trappings: ['ein Zeichen auf der Stirn', 'Tränke', 'Kiemen'],
      descr:
        'Abenteurer reisen manchmal unter den Wellen, im Weltraum oder anderen gefährlichen Umgebungen. Diese Macht schützt sie vor den zermalmenden Tiefen, sengender Hitze, grosser Kälte und sogar Strahlung. Schutz vor Naturgewalten erlaubt es dem Ziel, in ansonsten tödlichen Umgebungen zu atmen, zu sprechen und sich mit seiner Bewegungsweite zu bewegen. Die Macht schützt vor Hitze, Kälte, Strahlung, Druck durch Atmosphäre oder Flüssigkeit sowie Sauerstoffmangel. Grundsätzlich kann der Abenteurer unter Wasser, im Weltraum, im Krater eines Vulkans etc. normal agieren. Allerdings versagt die Macht sehr schnell (1W4 Runden) in der Gegenwart von extremsten Bedingungen wie beispielsweise Lava oder der gewaltigen Strahlung eines schmelzenden Kernreaktors. Schutz vor Naturgewalten verringert den Schaden von entsprechenden Quellen um –4 (–6 bei einer Steigerung). Wenn die Macht beispielsweise vor extremer Hitze schützt, schützt sie auch vor einem Flammenwerfer oder einem Geschoss mit Flammen-Ausprägung.',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Sprachen sprechen',
      name: 'Sprachen sprechen',
      summary: 'Wirker kann Sprachen sprechen und verstehen.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: '10 Minuten',
      trappings: ['Worte', 'Bilder', 'Handbewegungen'],
      descr:
        'Diese Macht erlaubt es dem Charakter, in einer ihm unverständlichen Sprache von intelligenten Wesen, zu sprechen, sie zu lesen und zu schreiben. Eine Steigerung mit der arkanen Fertigkeit erlaubt es dem Anwender, Slang und Dialekte zu verstehen und richtig zu verwenden.',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Strahl',
      name: 'Strahl',
      summary: 'Kegelförmiger Angriff mit 2W6 Schaden.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Kegelschablone',
      duration: 'Sofort',
      trappings: [
        'ein Schwall aus Flammen',
        'Licht oder anderer Materie oder Energie'
      ],
      descr:
        'Strahl erzeugt einen grossen Kegel aus Energie, der Ziele in Feuer, Kälte oder andere schädigende Materie oder Energie hüllt. Ein Erfolg ergibt eine Kegelschablone, die beim Anwender beginnt und sich nach aussen erstreckt (siehe Flächenangriffe, Seite 102). Der Strahl verursacht 2W6 Schaden (3W6 bei einer Steigerung) bei allen Zielen in diesem Bereich.',
      modifications: [
        {
          name: 'SCHADEN (+2)',
          descr: 'Der Strahl verursacht 3W6 Schaden (4W6 bei einer Steigerung).'
        }
      ]
    },
    {
      id: 'Tierfreund',
      name: 'Tierfreund',
      summary: 'Kontrolliert Tiere.',
      rank: 'Anfänger',
      Machtpunkte: 'Speziell',
      range: 'Verstand',
      duration: '10 Minuten',
      trappings: [
        'Der Wirker konzentriert sich und gestikuliert mit den Händen.'
      ],
      descr:
        "Der Zauber erlaubt es einer Person, mit den Tieren der Natur zu sprechen und ihr Handeln zu leiten. Die Kosten entsprechend der Grösse des Tieres (Minimum 1 pro Kreatur; siehe die Kreaturen in Kapitel 6 für Beispiele). Es kostet zum Beispiel 5 Machtpunkte, fünf Wölfe (Grösse –1) zu kontrollieren – beachte die Mindestkosten von 1. Ein Nashorn (Grösse 5) zu kontrollieren kostet 5 Punkte. Ein Erfolg bedeutet, dass das Tier einfachen Befehlen gehorcht, wie ein gut ausgebildeter Hund. Es greift Feinde an und setzt sein Leben für seinen Meister aufs Spiel. Eine Steigerung mit der arkanen Fertigkeit bedeutet, dass das Tier noch gehorsamer ist. Es wird sich nicht selbst umbringen, überwindet aber natürliche Ängste, um Befehlen zu folgen. Schwärme können ebenfalls kontrolliert werden. Kleine Schwärme kosten 1 Punkt, mittelgrosse 2 Punkte und grosse Schwärme 3 Punkte. Tierfreund funktioniert nur auf natürliche Kreaturen mit tierhafter Intelligenz, nicht auf Humanoide, und hat keinen Effekt auf beschworene, magische oder anderweitig 'unnatürliche' Tiere.",
      modifications: [
        {
          name: 'GEISTESBAND (+1)',
          descr:
            'Der Wirker kann mit Tieren, die er kontrolliert, kommunizieren und durch ihre Sinne wahrnehmen.'
        }
      ]
    },
    {
      id: 'Verbündeten beschwören',
      name: 'Verbündeten beschwören',
      summary: 'Beschwört verschiedene Verbündete.',
      rank: 'Anfänger',
      powerPoints: '2+',
      range: 'Verstand',
      duration: 5,
      trappings: [
        'Lehmfigur',
        'die zu einem Diener heranwächst; eine Tätowierung',
        'die zum Leben erwacht'
      ],
      descr:
        "Die Macht erlaubt es dem Charakter, einen magischen Diener aus dem Nichts zu beschwören. Der Verbündete nimmt normalerweise die Gestalt eines einfachen Humanoiden der passenden Grösse an, kann aber abhängig von der Ausprägung der Macht anders aussehen. Er materialisiert sich irgendwo in Reichweite, und bei einer Steigerung mit der arkanen Fertigkeit ist er ausserdem Widerstandsfähig. Der Verbündete agiert auf der Aktionskarte des Erschaffers und folgt seinen Befehlen, so gut er kann. Er hat keine Persönlichkeit, keine Kreativität, keine Emotionen. Wenn die Macht endet oder der Verbündete Ausgeschaltet ist, verschwindet er und lässt keine Spur zurück. Die Art des Dieners, die beschworen werden kann, hängt vom Rang des Beschwörers ab. Mit der Erlaubnis der SL kann der Spieler Fähigkeiten austauschen. Wenn ein Held einen Diener in der Gestalt eines Wolfs will, könnte er die Fertigkeit Schiessen gegen Überleben austauschen, damit das 'Tier' die Spur seiner Feinde verfolgen kann.",
      modifications: [
        {
          name: 'BISS/KLAUE (+1)',
          descr: 'Der Verbündete kann für Stä+W6 Schaden kratzen oder beissen.'
        },
        {
          name: 'FLIEGEN (+2)',
          descr: 'Der Verbündete kann mit Bewegungsweite 12 fliegen.'
        },
        {
          name: 'GEISTESBAND (+1)',
          descr:
            'Der Wirker kann mit dem Verbündeten kommunizieren und durch ihn wahrnehmen.'
        }
      ]
    },
    {
      id: 'Verstricken',
      name: 'Verstricken',
      summary: 'Feind wird Gebunden oder Festgehalten.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 'Sofort',
      trappings: ['Leimbombe', 'Ranken', 'Handschellen', 'Netze'],
      descr:
        'Verstricken erlaubt es dem Wirker, ein Ziel mit Eis, Energiebändern oder einer anderen rankenartigen Ausprägungen (Härte 5) an der Bewegung zu hindern. Bei Erfolg ist das Ziel Festgehalten, bei einer Steigerung Gebunden. Opfer können sich in ihrem Zug nach den Regeln befreien, die unter Gebunden & Festgehalten auf Seite 103 beschrieben sind.',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+2/+3)',
          descr:
            'Für +2 Punkte beeinflusst die Macht alle in einer mittleren Flächenschablone. Für +3 Punkte beeinflusst die Macht alle in einer grossen Flächenschablone.'
        },
        {
          name: 'STARK (+2)',
          descr:
            'Das verstrickende Material ist besonders widerstandsfähig. Würfe, um sich zu befreien, werden mit –2 abgelegt, und die Härte steigt auf 7.'
        }
      ]
    },
    {
      id: 'Verwirrung',
      name: 'Verwirrung',
      summary: 'Ziel wird Abgelenkt und Verwundbar.',
      rank: 'Anfänger',
      powerPoints: 1,
      range: 'Verstand',
      duration: 'bis zum Ende des nächsten Zugs des Opfers',
      trappings: ['hypnotisches Licht', 'kurze Illusionen', 'laute Geräusche'],
      descr:
        'Verwirrung bringt ein Ziel aus dem Konzept, sodass es gleichzeitig Abgelenkt und Verwundbar wird, wenn ihm eine Verstandsprobe misslingt (–2 bei einer Steigerung mit der arkanen Fertigkeit). Beide Zustände verschwinden am Ende des nächsten Zugs des Opfers.',
      modifications: [
        {
          name: 'FLÄCHENEFFEKT (+2/+3)',
          descr:
            'Für +2 Punkte beeinflusst die Macht alle in einer mittleren Flächenschablone. Für +3 Punkte beeinflusst die Macht alle in einer grossen Flächenschablone.'
        }
      ]
    },
    {
      id: 'Waffe verbessern',
      name: 'Waffe verbessern',
      summary: 'Erhöht Schaden einer Waffe um +2/+4.',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'ein farbiges Leuchten',
        'Runen',
        'knisternde Energie',
        'Stacheln (die aus der Klinge wachsen)'
      ],
      descr:
        "Diese Macht kann auf jede Art von Waffe gewirkt werden. Wenn es sich um eine Fernkampfwaffe handelt, gilt der Effekt für ein ganzes Magazin, 20 Bolzen, Geschosse oder Pfeile, oder eine volle 'Ladung' Munition (die SL bestimmt die Menge bei ungewöhnlichen Waffen). Solange die Macht wirkt, steigt der Schaden der Waffe um +2, oder +4 mit einer Steigerung.",
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    },
    {
      id: 'Wandkrabbler',
      name: 'Wandkrabbler',
      summary:
        'Charakter kann mit halber Bewegungsweite an Wänden laufen (volle Bewegungsweite bei einer Steigerung).',
      rank: 'Anfänger',
      powerPoints: 2,
      range: 'Verstand',
      duration: 5,
      trappings: [
        'spinnenartiges Aussehen',
        'stachelige Haare an Händen und Füssen'
      ],
      descr:
        'Wandkrabbler erlaubt es dem Empfänger, an vertikalen oder kopfüber an horizontalen Oberflächen zu laufen. Bei einem Erfolg bewegt er sich bis zu seiner halben Bewegungsweite. Bei einer Steigerung kann er sich mit voller Bewegungsweite bewegen und sogar sprinten. Wenn das Opfer gezwungen ist, Athletikproben abzulegen, um zu klettern oder an einer Oberfläche zu hängen, addiert es +4 auf den Wurf.',
      modifications: [
        {
          name: 'ZUSÄTZLICHE EMPFÄNGER (+1)',
          descr:
            'Die Macht kann zusätzliche Ziele beeinflussen, für 1 zusätzlichen Machtpunkt pro Ziel.'
        }
      ]
    }
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
