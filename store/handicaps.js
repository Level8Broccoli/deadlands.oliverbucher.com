export const state = () => ({
  list: [
    {
      id: 'Kraenkelnd',
      name: 'Kränkelnd',
      points: [1, 2],
      tags: ['Deadlands'],
      descr:
        'Die Medizin ist eine rudimentäre Wissenschaft und es gibt schlimmere Todesarten als einen schweren Fall von Bleivergiftung. Dieses Handicap ist krankheitsbedingten Hombres mit einem kalten Grab in ihrer nahen Zukunft vorbehalten. Wie Doc Holliday hat auch dein Held eine Reservierung beim Leichenbestatter. Sie ist nur noch nicht bestätigt worden. Die Ursache für sein zukünftiges Ableben ist so etwas wie Schwindsucht (Tuberkulose), Diabetes oder Krebs. Wenn ein Cowpoke dieses Hindernis auf dem Leicht-Level hat, zieht er immer 1 von den Müdigkeitswürfen ab, die gemacht wurden, um körperlicher Anstrengung zu widerstehen (aber nicht die Geschicklichkeitswürfen, um Beulen und Prellungen zu vermeiden). Er befindet sich im frühesten Stadium der Krankheit und kann noch nicht einmal diagnostiziert werden. Wenn es sich um ein schweres Handicap handelt, subtrahiert dein Hombre stattdessen 2. Es ist unmöglich, die Tatsache zu verbergen, dass er krank ist, und jeder kann erkennen, dass der Tod einen Schritt hinter ihm geht.'
    },
    {
      id: 'Verflucht',
      name: 'Verflucht',
      points: [2],
      tags: ['Deadlands'],
      descr:
        'Jeder hat Leichen im Keller, aber deine versuchen, sich den Weg freizukratzen! Dein Held hat jemandem Unrecht getan, entweder durch frühere Zugehörigkeit oder dunkle, unausgesprochene Taten. Während die meisten Leute es nicht wissen oder sich nicht darum kümmern, der Kerl da oben tut das sicher - und er ist es nicht zufrieden. Für jeden Spielercharakter mit dem Handicap Verflucht, beginnt der Spielleiter mit einem zusätzlich Chip!'
    },
    {
      id: 'SchlechteTraeume',
      name: 'Schlechte Träume',
      points: [2],
      tags: ['Deadlands'],
      descr:
        'Dein Hombre schläft nicht gut. Tatsächlich ist das Land des Nickens für ihn ein ständiger Alptraum. Er wirft und dreht sich wie ein Dämon auf einem Gestell und hält mit seinen nächtlichen Qualen wahrscheinlich jeden im Umkreis von einem Dutzend Meter von ihm wach. Der Held beginnt jede Spielsitzung mit 1 Chip weniger, um seinen ständig müden Zustand zu repräsentieren. Dies ist kumulativ mit Pech verbunden.'
    },
    // {
    //   id: 'GrimmigeDienerindesTodes',
    //   name: 'Grimmige Dienerin des Todes',
    //   points: [2],
    //   tags: ['Deadlands'],
    //   descr:
    //     "Ihr Held ist ein Killer. Seine Familie schiebt wahrscheinlich Gänseblümchen, seine Feinde sind Wurmfutter, und sogar einige seiner Freunde haben Löcher in ihnen, die verdächtig das gleiche Kaliber wie sein eigenes Schiesseisen haben. Nur Wild Cards können dieses Hindernis überwinden, und Sie sollten das nicht auf die leichte Schulter nehmen, Amigo. Die gute Nachricht ist, dass Ihr Hombre +1 zu jedem Schadenswurf hinzufügt, den er jemals macht, sei es durch Kämpfen, Schiessen, Zaubern oder sogar durch das Werfen von Dingen auf Menschen auf höchst unwirtliche Weise. Die Kehrseite der Medaille ist, dass Ihr Held oft im Knast oder auf der Flucht landet. Aber es gibt noch mehr als das, Amigo. Jeder Schiess- oder Wurf-Angriffswurf, der beim Fertigkeitswürfel 1 ergibt (unabhängig vom Ergebnis eines beliebigen Wilden Würfels), trifft automatisch den nächstgelegenen befreundeten Charakter in Sichtweite - egal, ob er sich in der Schusslinie befindet oder nicht. Die Charaktere der anderen Spieler sind immer die erste Wahl, aber ein verbündetes Extra reicht im Notfall aus. Selbst Nahkampfangriffe treffen Verbündete, wenn die mittlere alte 1 auftaucht. Das mag ein wenig Phantasie erfordern, aber entweder fliegt dem Helden die Waffe aus der Hand und trifft seinen Freund, oder der Held muss sich neben seinen einstigen Kameraden bewegen und ihn 'versehentlich' schlagen. In beiden Fällen fügt Schlangenaugen beim Angriffswurf einen zusätzlichen d6 zum Schaden hinzu (als ob der Cowboy mit einer Erhöhung getroffen hätte)."
    // },
    // {
    //   id: 'SchwererSchlaefer',
    //   name: 'Schwerer Schläfer',
    //   points: [1],
    //   tags: ['Deadlands'],
    //   descr:
    //     'Ein Gewitter aus der Hölle selbst wird diesen dösenden Doolie nicht aufwecken. Sobald er abfällt, muss er eine Notizrolle (-4) machen, um aufzuwachen. Er erleidet auch eine Strafe von -4 bei Vigor-Würfen, die gemacht werden, um wach zu bleiben.'
    // },
    // {
    //   id: 'LuegendeAugen',
    //   name: 'Lügende Augen',
    //   points: [1],
    //   tags: ['Deadlands'],
    //   descr:
    //     'Lügen fällt diesem Hombre einfach nicht leicht. Das klingt alles gut und edel, verursacht aber oft Probleme im Umgang mit ruchloseren Typen. Ein Held mit diesem Hindernis erleidet bei allen Einschüchterungs- und Überzeugungsrollen, bei denen Lügen - auch kleine weisse - erzählt werden müssen, eine -2-Strafe. Was noch schlimmer ist: Wenn Ihr Held vorhat, sein Geld beim Pokern zu verdienen, gilt die Strafe auch für Bluffen. Auch in einem Pokerspiel beträgt die Strafe -2 auf Ihre Glücksspielrollen, Compadre!'
    // },
    // {
    //   id: 'EidderaltenWege',
    //   name: 'Eid der alten Wege',
    //   points: [1, 2],
    //   tags: ['Deadlands'],
    //   descr:
    //     'Ganz gleich, ob Ihr Held ein Indianer oder ein Eingeborener ist, er hat beschlossen, auf moderne Technologie zu verzichten, um die Geister zu ehren. Als geringes Hindernis wird er in modernen Transportmitteln wie Zügen oder Dampfwagen reisen, aber selbst keine modernen Geräte benutzen (einschliesslich Gewehren, Stahlmesser/Tomahawks usw.). Als grösseres Hindernis wird er solche Vorrichtungen nicht einmal passiv benutzen, da er sich weigert, in etwas Komplexerem als einem Pferdewagen zu fahren (und auch das tut er nur ungern).'
    // },
    // {
    //   id: 'LahmeEnte',
    //   name: 'Lahme Ente',
    //   points: [1],
    //   tags: ['Deadlands'],
    //   descr:
    //     'Melasse an einem kalten Tag bewegt sich schneller als Ihr Held. Verringern Sie sein Tempo um 1. Dies ist kumulativ mit dem Lame Hindernis, wenn Sie sich wirklich auf das nächste Schildkröten- und Hasenrennen einlassen wollen. Wir überlassen es Ihnen, herauszufinden, welcher von ihnen Sie sind.'
    // },
    // {
    //   id: 'Anfaenger',
    //   name: 'Anfänger',
    //   points: [1],
    //   tags: ['Deadlands'],
    //   descr:
    //     'Manche Kerle sind nicht für die Gefahren geschaffen, die an der wilden Grenze auf sie warten, und Ihr Held ist ein solches Greenhorn. Solange er im Westen unterwegs ist, schien er nie wirklich zu passen. Ihr armer Held leidet -1 Grit als Folge seiner Unerfahrenheit im Umgang mit dem Westen. Ein Held mit diesem Hindernis kann nicht die wahre Körnigkeit ertragen. Natürlich dauert das nicht ewig an. Der Grund dafür, dass Tenderfoot nur ein geringes Hindernis ist, ist, dass er entfernt werden kann. Sobald ein Held den Seasoned-Rang erreicht hat, kann er Tenderfoot abkaufen, indem er auf die Möglichkeit verzichtet, einmal aufzusteigen. Dadurch werden die Strafe für Tenderfoot und die Beschränkung auf das Erreichen der wahren Tenderfoot-Kante aufgehoben.'
    // },
    // {
    //   id: 'Empfindlich',
    //   name: 'Empfindlich',
    //   points: [2],
    //   tags: ['Deadlands'],
    //   descr:
    //     'Jeder kleine Schnitt und jede Schramme bringt Ihren Cowboy zum Schreien nach Mama. Solange er mindestens eine Wunde hat, erleidet er eine zusätzliche Strafe von -1 für alle seine Handlungen (ein Held mit 2 Wunden würde also z.B. eine -3 erleiden).'
    // },
    // {
    //   id: 'Wanted',
    //   name: 'Wanted',
    //   points: [1, 2],
    //   tags: ['Deadlands'],
    //   descr:
    //     "Unabhängig davon, ob Ihr Cowboy etwas falsch gemacht hat oder nicht, das Gesetz denkt, er hat es getan! Sein Gesicht ist auf Plakaten in der ganzen Region zu sehen, und vielleicht auch noch weiter weg. Die Art des Verbrechens und der Sinn des Marschalls für 'Sport' bestimmen, wie weit und breit die Anklagen in Umlauf gebracht wurden, aber irgendwo sucht jemand nach Ihnen. Auf Ihren Hombre ist nicht nur jemand hinter ihm her, sondern es ist auch ein Kopfgeld auf ihn ausgesetzt. Für die Minor-Version gibt es eine Belohnung von 1d6 x $100. Bei der Major-Hindernis-Version erhöht sich die Belohnung auf verlockende 1d6 x $1.000. Der Spieler und der Marschall sollten vereinbaren, wo das Kopfgeld eingesammelt werden kann."
    // },
    // {
    //   id: 'Alt',
    //   name: 'Alt',
    //   points: [2],
    //   descr:
    //     'Dein Abenteurer hat schon einige Jahre auf dem Buckel, ist aber auch noch nicht reif fürs Altersheim. Seine Bewegungsweite sinkt um –1, und er verringert das Ergebnis seines Sprintwürfels um 1 (Minimum 1). Er erleidet ausserdem einen Abzug von –1 auf Proben mit Geschicklichkeit, Konstitution und Stärke, aber nicht bei verknüpften Fertigkeiten. Auf der positiven Seite erhält der Charakter durch die Weisheit des Alters 5 zusätzliche Fertigkeitspunkte, die er für alle Fertigkeiten verwenden kann, die mit Verstand verknüpft sind.'
    // },
    {
      id: 'Analphabet',
      name: 'Analphabet',
      points: [1],
      descr:
        'Dein Held kann nicht lesen und schreiben. Er kann unterschreiben und weiss, was ein Stoppschild ist, aber das war es auch schon. Er weiss auch nicht viel über Mathe. Er weiss wahrscheinlich, dass zwei plus zwei gleich vier ist, aber Multiplikation und dergleichen sind ihm zu hoch. Übrigens können Analphabeten in keiner Sprache lesen oder schreiben, egal wie viele sie sprechen können.'
    },
    // {
    //   id: 'Angetrieben',
    //   name: 'Angetrieben',
    //   points: [1, 2],
    //   descr:
    //     'Ein Schwur ist eine Verpflichtung anderen gegenüber. Angetriebene Charaktere wollen etwas für sich selbst. Vielleicht wollen sie das Reich beschützen, ein hochdekorierter Offizier werden, beweisen, dass sie der beste Gladiator in Rom sind oder der beste Pilot in der galaktischen Flotte. Die leichte Version formt den Charakter und beeinflusst seine Entscheidungen, jedoch eher selten oder auf harmlose Weise. Ein schweres Handicap ist ein starkes Verlangen, das häufig ins Spiel kommt oder grosse Schwierigkeiten für die Heldin und die Leute um sie herum bedeutet.'
    // },
    {
      id: 'Angewohnheit',
      name: 'Angewohnheit',
      points: [1, 2],
      descr:
        'Dein Charakter hat eine nervtötende oder gefährliche Angewohnheit. Eine leichte Angewohnheit irritiert die Leute in seiner Umgebung, ist aber nicht gefährlich. Vielleicht bohrt er in der Nase, kann nicht aufhören, mit seinem Handy herumzuspielen oder beendet jeden Satz mit „Junge!“. Verbündete meiden ihn, falls möglich. Eine schwere Angewohnheit ist eine körperliche oder geistige Abhängigkeit, die verheerend oder sogar tödlich sein kann. Dazu gehören Drogenabhängigkeit, chronischer Alkoholismus oder vielleicht eine Sucht nach virtueller Realität in einem Hightech-Setting. Ein Abhängiger, der seine Dosis nicht bekommt, muss alle 24 stunden, die er ohne auskommen muss, eine Konstitutionsprobe ablegen, um nicht eine Stufe Erschöpfung (siehe Seite 101) zu erleiden. Einmal pro 24 Stunden ist eine Heilungsprobe mit irgendeiner passenden Medizin möglich, die eine Stufe Erschöpfung für vier Stunden aufhebt. Danach kehrt die Erschöpfung zurück und kann nur mit der Substanz, von der der Charakter abhängig ist, wieder geheilt werden.'
    },
    // {
    //   id: 'Arm',
    //   name: 'Arm',
    //   points: [1],
    //   descr:
    //     'Man sagt, ein Narr und sein Geld sind bald geschieden. Dein Held ist ein solcher Narr. Er beginnt mit der Hälfte des üblichen Startkapitals und scheint auch nach Spielbeginn einfach nicht gut mit seinem Geld umgehen zu können. Grundsätzlich halbiert der Spieler jede Woche sein Gesamtvermögen.'
    // },
    // {
    //   id: 'Arrogant',
    //   name: 'Arrogant',
    //   points: [2],
    //   descr:
    //     'Dein Held glaubt nicht nur, der beste zu sein – er weiss es. Egal ob es um Schwertkunst geht, um Kung Fu oder Malerei, wenige sind seinem Können gewachsen, und er gibt damit bei jeder sich bietenden Gelegenheit an. Diesem Helden reicht es nicht, zu gewinnen. Er will seinen Gegner dominieren und beweisen, dass niemand besser ist als er. Er ist die Art von Kämpfer, der einen Gegner in einem Duell entwaffnet, nur um das Schwert aufzuheben und zurückzugeben. In einer Schlacht suchen arrogante Individuen nach der grösstmöglichen Gefahr und hacken sich nur durch die niederen Schergen, weil sie im Weg stehen.'
    // },
    // {
    //   id: 'Aussenseiter',
    //   name: 'Aussenseiter',
    //   points: [1, 2],
    //   descr:
    //     'In einer Gesellschaft, in der bestimmte Gruppen vorherrschen, gehört dein Held nicht dazu. Ein amerikanischer Ureinwohner in einer Westernstadt, ein Alien in einem Sci-Fi-Spiel voller menschlicher Marines oder ein Halbork in einer Gruppe von Elfen, Zwergen und Menschen sind mögliche Beispiele. Die Einheimischen werden vermutlich höhere Preise verlangen, Bitten um Hilfe ignorieren und den Charakter als Bürger zweiter Klasse behandeln. Aussenseiter ziehen –2 von Überredenproben ab, mit denen sie Personen beeinflussen wollen, die nicht zu ihrer Art gehören. Die schwere Version bedeutet zusätzlich, dass der Charakter wenige oder keine Rechte in dem Gebiet hat, in dem die Kampagne stattfindet. Er könnte unter Xenophoben einer anderen Spezies angehören, die Zivilisation könnte Fremden gegenüber grausam und intolerant handeln, oder er ist vielleicht sogar eine künstliche Intelligenz, deren Bewusstsein vom Gesetz nicht anerkannt wird.'
    // },
    {
      id: 'Beschaemt',
      name: 'Beschämt',
      points: [1, 2],
      descr:
        'Etwas sucht deinen Abenteurer heim. Vielleicht hat er einen Schwur geleistet und nicht gehalten. Vielleicht wurde er in einem ehrenhaften Kampf besiegt und hat, um einem grösseren Prinzip zu folgen, trotzdem den Tod seines Feindes befohlen. Vielleicht ist er eigentlich kein Feigling, ist aber einmal vor einer Schlacht geflohen und hat andere sterben lassen. Bei einem leichten Handicap ist die beschämende Situation nicht allgemein bekannt – sie sucht nur den Helden selbst heim. Er könnte wider aller Vernunft handeln, um seinen Fehler nicht zu wiederholen. Oder er erliegt seiner Schwäche ein weiteres Mal und hasst sich selbst dafür. Bei einem schweren Handicap ist seine Tat allgemein bekannt – zumindest bei jenen, bei denen es ihm wichtig ist. Die anderen Spielercharaktere sollten die Geschichte so schnell wie möglich erfahren (im Idealfall bei der Charaktererschaffung). Wenn nicht, sollte sie irgendwann von einem Nichtspielercharakter offenbart und gelegentlich gegen den Helden verwendet werden.'
    },
    // {
    //   id: 'Blind',
    //   name: 'Blind',
    //   points: [2],
    //   descr:
    //     'Der Charakter kann überhaupt nicht sehen. Er erleidet einen Abzug von –6 auf körperliche Aufgaben, die Sicht erfordern (Entscheidung der SL). Andererseits bekommen blinde Charaktere ein freies Talent ihrer Wahl, um dieses besonders schwere Handicap auszugleichen.'
    // },
    // {
    //   id: 'Blutruenstig',
    //   name: 'Blutrünstig',
    //   points: [2],
    //   descr:
    //     'Dein Held nimmt niemals Gefangene – sofern er nicht unmittelbar von einem Vorgesetzten überwacht wird. Seine kaltblütige Skrupellosigkeit lässt seine Widersacher gleichermassen reagieren, kostet ihn oft wichtige Informationen, sorgt für ständig neue Feinde und bringt ihn in Schwierigkeiten mit seinen Vorgesetzten oder der Obrigkeit, abhängig vom Setting.'
    // },
    {
      id: 'Duennhauutig',
      name: 'Dünnhäutig',
      points: [1, 2],
      descr:
        'Persönliche Angriffe gehen dem Charakter wirklich unter die Haut. Bei einem leichten Handicap erleidet er einen Abzug von –2, wenn er Provozieren-Angriffen widerstehen will. Bei einem schweren Handicap beträgt der Abzug –4.'
    },
    {
      id: 'Ehrenkodex',
      name: 'Ehrenkodex',
      points: [2],
      descr:
        'Ehre ist deinem Charakter sehr wichtig. Er hält sein Wort, misshandelt oder tötet keine Gefangenen, und versucht sich insgesamt im Rahmen dessen zu verhalten, was er einem Gentleman (oder einer Dame) für angemessen erachtet.'
    },
    {
      id: 'Eifersuuechtig',
      name: 'Eifersüchtig',
      points: [1, 2],
      descr:
        'Aus Unsicherheit beneidet der Charakter die Leistungen anderer oder ist übermässig besitzergreifend, wenn es um Sachen geht, die er als seinen Besitz betrachtet. Er beschwert sich oft, schmollt, giert nach den Besitztümern oder Auszeichnungen anderer, beansprucht die Arbeit anderer für sich, gehorcht Anweisungen nicht und sorgt allgemein für Schwierigkeiten. Als leichtes Handicap fokussiert sich die Eifersucht des Charakters auf einen bestimmten Bereich (wie sein „unvergleichliches“ Können als Pilot oder einen geliebten Menschen). Bei einem schweren Handicap ist der Charakter eifersüchtig auf alles und jeden, dem es besser zu ergehen scheint als ihm. Er spricht die ganze Zeit schlecht über seine Rivalen, versucht sie in den Schatten zu stellen oder verfolgt aktiv Pläne, die jene in Verruf bringen sollen, die sein Ego bedrohen.'
    },
    // {
    //   id: 'Einarmig',
    //   name: 'Einarmig',
    //   points: [2],
    //   descr:
    //     'Dein Charakter hat einen Arm verloren, entweder von Geburt an, im Kampf oder durch einen Unfall. Glücklicherweise ist sein anderer Arm (mittlerweile) sein „guter“ Arm. Aufgaben, die beide Hände erfordern, wie einige Athletikproben (Entscheidung der SL) oder die Verwendung von zweihändig geführten Waffen, erleiden einen Abzug von –4.'
    // },
    {
      id: 'Einauugig',
      name: 'Einäugig',
      points: [2],
      descr:
        'Dieser Veteran hat ein Auge verloren, was ihm zum Beispiel bei Tiefenschärfe Probleme bereitet. Er zieht –2 von allen Eigenschaftsproben ab, die von Sicht abhängen und auf mehr als 5“ (10 Meter) Entfernung stattfinden.'
    },
    // {
    //   id: 'Feige',
    //   name: 'Feige',
    //   points: [2],
    //   descr:
    //     'Nicht jeder hat Eiswasser in den Adern. Dein Held kann kein Blut sehen und hat grosse Angst davor, verletzt zu werden. Er erleidet einen Abzug von –2 auf Furchtproben und wenn er Einschüchtern widersteht.'
    // },
    {
      id: 'Feind',
      name: 'Feind',
      points: [1, 2],
      descr:
        'Irgendjemand da draussen hasst den Charakter und will ihn ruinieren, einsperren oder tot sehen. Die Schwere des Handicaps hängt davon ab, wie mächtig der Feind ist und wie oft er auftaucht. Ein Feind (leicht) könnte ein einsamer Revolverheld sein, der auf Rache aus ist, oder eine verratene Bruderschaft, die zwar tödlich ist, sich aber nur selten zeigt. Ein Feind könnte mächtige Obrigkeiten, eine Bande von Gesetzlosen oder einen einzelnen sehr mächtigen und sehr hartnäckigen Rivalen bedeuten. Wenn der Gegner eines Tages bezwungen wird, sollte der SL nach und nach einen Ersatzfeind ins Spiel bringen, oder der Held wird das Handicap los, indem er einen Aufstieg opfert.'
    },
    // {
    //   id: 'Fettleibig',
    //   name: 'Fettleibig',
    //   points: [1],
    //   descr:
    //     'Charaktere, die gut mit ihrem Gewicht zurechtkommen, wählen das Talent Kräftig. Andere sind fettleibig. Ein Charakter kann nicht gleichzeitig Kräftig und Fettleibig sein, und dieses Handicap kann deine Grösse nicht über +3 anheben. Die Grösse (und somit Robustheit) eines fettleibigen Helden steigt um + 1. Seine Bewegungsweite sinkt um– 1, und sein Sprintwürfel wird um einen Typ verringert(Minimum W4).Wenn es um getragene Rüstung und Ausrüstung(nicht Waffen) geht, wird seine Stärke als um einen Würfeltyp niedriger behandelt.Er hat auch unter Umständen Schwierigkeiten, Rüstung und Kleidung zu finden, die passt, oder sich an enge Orte zu begeben.'
    // },
    // {
    //   id: 'Fies',
    //   name: 'Fies',
    //   points: [1],
    //   descr:
    //     'Dieser Griesgram ist übellaunig und streitlustig. Es fällt ihm schwer, etwas Nettes für andere zu tun, er lässt sich für seine Mühen bezahlen, benimmt sich daneben, selbst wenn man ihn belohnt oder ihm einen Gefallen tut. Neben den zu erwartenden rollenspielerischen Problemen ziehen fiese Charaktere –1 von Überredenproben ab.'
    // },
    // {
    //   id: 'Geheimnis',
    //   name: 'Geheimnis',
    //   points: [1, 2],
    //   descr:
    //     'Dein Held hat ein Geheimnis, das er für sich behält, um sich oder andere zu beschützen. Bei einem leichten Handicap ist das Geheimnis lästig, aber nicht lebensbedrohlich. Die schwere Version würde dem Charakter in wirklich grosse Schwierigkeiten bringen, wenn das Geheimnis je aufgedeckt wird. In diesem Fall sollte der Charakter es gegen Beschämt, Feind, Gesucht oder ein anderes passendes Handicap nach Wahl der SL eintauschen.'
    // },
    {
      id: 'Gesucht',
      name: 'Gesucht',
      points: [1, 2],
      descr:
        'Dein Held hat ein Verbrechen begangen und wird verhaftet, wenn die Obrigkeiten ihn entdecken, vorausgesetzt, das Setting beinhaltet tatsächlich Gesetze und eine Polizei, die diese durchsetzt. Die Schwere des Handicaps hängt davon ab, wie schwer das Verbrechen war und wie aktiv nach dem Charakter gefahndet wird. Ein Held mit vielen unbezahlten Strafzetteln (in einem Spiel, in dem er gelegentlich fahren muss) hat ein leichtes Handicap. Das gleiche gilt für jemanden, der schwerere Verbrechen in einem Land begangen hat, das weit weg vom Hauptstandort der Kampagne liegt. Des Mordes beschuldigt zu werden, ist in den meisten Settings ein schweres Handicap, wenn es jemanden gibt, der Gerechtigkeit (oder Rache) sucht.'
    },
    {
      id: 'Gierig',
      name: 'Gierig',
      points: [1, 2],
      descr:
        'Ein Geizhals sieht den Wert seines Lebens in den materiellen Besitztümern, die er anhäufen kann. Bei einem leichten Handicap argumentiert er erbittert dafür, mehr als seinen gerechten Anteil von jeder Beute oder Belohnung zu erhalten, die die Charaktere bekommen. Bei einem schweren Handicap fängt er Streit an, wenn er die Aufteilung ungerecht findet, und könnte sogar töten, wenn er sich benachteiligt fühlt oder etwas haben will, das er nicht bekommen kann.'
    },
    {
      id: 'GrosseKlappe',
      name: 'Grosse Klappe',
      points: [1],
      descr:
        'Geschwätzigkeit kann tödlich sein. Das Mundwerk dieses Helden könnte Massenmord begehen. Das Plappermaul kann einfach keine Geheimnisse bewahren. Er enthüllt Pläne und verrät Dinge, die am besten unter Freunden bleiben sollten, normalerweise im schlimmstmöglichen Zeitpunkt.'
    },
    {
      id: 'Haesslich',
      name: 'Hässlich',
      points: [1, 2],
      descr:
        'Viele schliessen vom Äusseren aufs Innere. Allerdings ist das für diese unglückselige Person nicht von Vorteil. Sie erleidet einen Abzug von –1 auf Überredenproben, oder –2, wenn sie ein schweres Handicap ausgewählt hat.'
    },
    // {
    //   id: 'Heldenhaft',
    //   name: 'Heldenhaft',
    //   points: [2],
    //   descr:
    //     'Diese edle Seele sagt niemals nein zu Menschen in Not. Er muss nicht froh darüber sein, aber er kommt immer zur Rettung jener, die sich nicht selbst helfen können. Er ist der erste, der in ein brennendes Gebäude läuft, stimmt normalerweise zu, Monster für wenig oder gar kein Geld zu jagen, und ist sehr empfänglich für eine tränenreich vorgetragene Geschichte.'
    // },
    {
      id: 'Impulsiv',
      name: 'Impulsiv',
      points: [2],
      descr:
        'Dieser Draufgänger wird fast immer erst drauflosstürmen und dann schauen wohin es geht. Er denkt eine Situation selten zu Ende ehe er handelt.'
    },
    {
      id: 'Jung',
      name: 'Jung',
      points: [1, 2],
      descr:
        'Der Held ist 12 bis 15 Jahre alt (in menschlichen Jahren – passe dies für andere Völker an). Er hat nur 4 Punkte für seine Attribute anstelle der üblichen 5, und 10 Fertigkeitspunkte anstelle von 12. Er könnte auch unter rechtlichen Einschränkungen leiden, die vom Setting abhängen (er darf nicht Auto fahren, keine Waffe besitzen oder ähnliches). Andererseits haben junge Leute oft ziemlich viel Glück. Sie erhalten zu Beginn einer jeden Spielsitzung einen zusätzlichen Benny (dies ist kumulativ zu anderen Talenten wie Glück oder Grosses Glück). Die meisten jungen Charaktere sollten auch das Handicap Klein wählen, doch dies ist nicht verpflichtend. Bei einem schweren Handicap ist der Charakter sehr jung (8 bis 11 Jahre alt). Er hat nur 3 Punkte für seine Attribute und 10 für Fertigkeiten, sowie das Handicap Klein. Sehr junge Helden ziehen zu Beginn einer jeden Spielsitzung zwei zusätzliche Bennys.'
    },
    // {
    //   id: 'Klein',
    //   name: 'Klein',
    //   points: [1],
    //   descr:
    //     'Dieser Abenteurer ist ziemlich dürr, klein oder beides. Seine Grösse (siehe Seite 103 wird um –1 verringert, wodurch auch seine Robustheit sinkt. Die Grösse kann nicht unter –1 sinken, doch der Abzug auf Robustheit ist kumulativ. Ein kleiner Halbling hat beispielsweise Grösse –1, verliert aber einen zusätzlichen Punkt Robustheit.'
    // },
    // {
    //   id: 'Kraenklich',
    //   name: 'Kränklich',
    //   points: [1],
    //   descr:
    //     'Kränkliche Charaktere sind besonders anfällig gegenüber Krankheiten, Infektionen, Umwelteffekten und Erschöpfung. Sie ziehen –2 von Konstitutionsproben ab, um Erschöpfung zu widerstehen (siehe Gefahren, beginnend auf Seite 101).'
    // },
    // {
    //   id: 'Langsam',
    //   name: 'Langsam',
    //   points: [1, 2],
    //   descr:
    //     'Eine Behinderung oder eine alte Verletzung schränken die Bewegungsfähigkeit des Helden ein. Bei einem leichten Handicap sinkt seine Bewegungsweite um –1, und sein Sprintwürfel verringert sich um einen Würfeltyp (wenn er einen W4 hat, verringere ihn auf W4 – 1). Bei einem schweren Handicap sinkt die Bewegungsweite um 2, der Sprintwürfel verringert sich um einen Würfeltyp und er zieht –2 von Athletikproben und Proben ab, um Athletik zu widerstehen (wie zum Beispiel bei Herausfordern oder Ringen). Langsame Charaktere dürfen nicht gleichzeitig Flink sein. Prothesen: Ein Charakter mit der leichten Version dieses Handicaps könnte eine Prothese haben. Wenn die Prothese verloren geht, erleidet er die Auswirkungen der schweren Version von Langsam. Rollstuhl: Ab dem viktorianischen Zeitalter können langsame Helden ohne Kosten das Spiel mit einem manuellen Rollstuhl beginnen. In der Moderne (1980 und später) kann der Charakter auch einen ultraleichten oder energiebetriebenen Rollstuhl verwenden.Alle Rollstühle erfordern relativ glatten Boden, um sie zu verwenden(Entscheidung der SL).MANUELL: Die Bewegungsweite entspricht dem halben Athletikwert(Maximum 3), und du kannst nicht sprinten.ULTRALEICHT: Die Bewegungsweite entspricht dem Athletikwürfel, und du kannst mit einem W4(leicht) oder einem W4– 1(schwer) sprinten.ENERGIEBETRIEBEN: Bewegungsweite 6 auf flachem Boden, Bewegungsweite 3 auf unebenem Boden, Sprinten ist nicht möglich.Die meisten energiebetriebenen Rollstühle können ungefähr 15 km weit fahren, ehe sie wieder aufgeladen werden müssen.'
    // },
    {
      id: 'Lebensaufgabe',
      name: 'Lebensaufgabe',
      points: [1],
      descr:
        'Eine Lebensaufgabe zu haben, bedeutet nicht, dass dein Held Selbstmord begehen will. Er glaubt vielmehr einfach, dass sein Leben weniger wert ist als ein edles, aber eindeutig tödliches Ziel. Charaktere mit einer Lebensaufgabe werfen ihr Leben nicht grundlos weg, aber wenn eine Chance besteht, ihr Ziel zu erfüllen, tun sie alles, und nehmen jedes Risiko in Kauf, um es zu erreichen.'
    },
    {
      id: 'Loyal',
      name: 'Loyal',
      points: [1],
      descr:
        'Dieser treue Beschützer riskiert ohne zu zögern sein Leben für seine Freunde. Einige loyale Helden geben das zwar nicht zu, sind aber die ersten, die ihren Freunden zu Hilfe kommen, wenn sie bedroht werden.'
    },
    // {
    //   id: 'Misstrauisch',
    //   name: 'Misstrauisch',
    //   points: [1, 2],
    //   descr:
    //     'Dein Charakter ist allen Leuten gegenüber misstrauisch. Bei einem leichten Handicap sorgt seine Paranoia häufig für Vertrauensprobleme. Er könnte die volle Bezahlung verlangen, ehe er einen Auftrag annimmt, jede Übereinkunft schriftlich festhalten oder glauben, dass es sogar seine Freunde auf ihn abgesehen haben. Bei einem schweren Handicap werden Unterstützungsproben, die einem misstrauischen Charakter zu Gute kommen sollen, mit –2 abgelegt.'
    // },
    // {
    //   id: 'Neugierig',
    //   name: 'Neugierig',
    //   points: [2],
    //   descr:
    //     'Wer seine Nase in anderer Leute Angelegenheiten steckt, für den gibt es oft ein böses Erwachen. Neugierige Charaktere wollen alles anschauen und immer wissen, was hinter einem potenziellen Mysterium oder Geheimnis steckt.'
    // },
//    {
//      id: 'Nichtschwimmer',
//      name: 'Nichtschwimmer',
//      points: [1],
//      descr:
//        'Dank Schwimmbädern, mühelosen Reisen zu Seen und Stränden oder bewusster Erziehung können die meisten Leute im 21. Jahrhundert schwimmen. Historisch gesehen allerdings konnten Leute, die nicht an einem gemässigten Gewässer aufgewachsen sind, das nicht. Charaktere mit diesem Handicap erleiden einen Abzug von –2 auf Athletikproben, wenn sie schwimmen, und jeder Zoll, den sie sich im Wasser bewegen, kostet sie 3“ Bewegungsweite. Siehe auch Bewegung (Seite 142) für mehr Details und Ertrinken (auf Seite 116).'
//    },
    // {
    //   id: 'Pazifist',
    //   name: 'Pazifist',
    //   points: [1, 2],
    //   descr:
    //     'Dein Held verabscheut Gewalt. Die leichte Version bedeutet, dass er nur kämpft, wenn er wirklich keine andere Wahl hat. Ausserdem würde er niemals zulassen, dass Gefangene oder andere wehrlose Opfer getötet werden. Bei der schweren Version kämpfen Pazifisten unter keinen Umständen gegen lebende Charaktere. Sie können sich verteidigen, werden aber nichts tun, das einem denkenden, lebenden Wesen dauerhaft Schaden zufügt. Sie können Betäubungsschaden (siehe Seite 99) verwenden, aber nur zur Selbstverteidigung oder um andere zu beschützen. Beachte dabei, dass Pazifisten (auch wenn sie die schwere Version des Handicaps haben) sehr wohl gegen eindeutig böse Kreaturen, Untote, Dämonen und dergleichen kämpfen können! Pech (schwer) Dein Held hat ein bisschen weniger Glück als die meisten. Er erhält einen Benny weniger pro Spielsitzung als normal. Ein Charakter kann nicht gleichzeitig Pech und Glück haben.'
    // },
    {
      id: 'Phobie',
      name: 'Phobie',
      points: [1, 2],
      descr:
        'Phobien sind überwältigende und irrationale Ängste, die den Verstand eines Helden heimsuchen. Wenn er sich in Gegenwart des Phobie auslösenden Objekts befindet (Entscheidung der SL, aber normalerweise in Sichtweite) zieht er bei einem leichten Handicap –1 von allen Eigenschaftsproben ab, bei einem schweren Handicap –2. Phobien sollten nicht zu offensichtlich sein – jeder sollte beispielsweise Angst vor Vampiren haben, also ist das keine Phobie, sondern gesunder Menschenverstand. Stattdessen sollte sich eine Phobie auf ein zufälliges Element fokussieren, das sein Verstand mit dem verursachenden Ereignis in Verbindung bringt. Denk daran: Phobien sind irrationale Ängste.'
    },
    {
      id: 'Rachsuechtig',
      name: 'Rachsüchtig',
      points: [1, 2],
      descr:
        'Rache ist Blutwurst, wie man so sagt. Bei einem leichten Handicap sucht ein Charakter seine Rache auf legale Weise. Die Methode hängt von der Situation ab. Einige intrigieren und planen über Monate, während andere sofortige Ergebnisse verlangen. Wer die schwere Version dieses Handicaps hat, wird seiner Abrechnung nichts im Wege stehen lassen. Das bedeutet nicht, dass er sofort gewalttätig wird, doch sein Handeln tendiert immer in Richtung Eskalation, bis seine Rachsucht vollständig befriedigt ist.'
    },
    {
      id: 'Sanftmuetig',
      name: 'Sanftmütig',
      points: [1],
      descr:
        'Ein Warmduscher ist einfach nicht besonders bedrohlich. Vielleicht ist er ein bisschen speckig um die Körpermitte, hat ein zu nettes Gesicht oder eine sehr sanfte Stimme. Was auch immer das Problem ist, er hat Schwierigkeiten damit, wie ein harter Kerl auszusehen. Er zieht –2 ab, wenn er Einschüchternproben ablegt.'
    },
    // {
    //   id: 'SchlechteAugen',
    //   name: 'Schlechte Augen',
    //   points: [1, 2],
    //   descr:
    //     'Die Augen deines Helden sind nicht mehr, was sie einmal waren. Er erleidet einen Abzug von –1 auf alle Eigenschaftswürfe, die von Sicht abhängen (wie Fernkampfangriffe und Wahrnehmungsproben), oder –2, wenn er ein schweres Handicap hat. In Settings, in denen Brillen verfügbar sind, negieren sie den Abzug, solange sie getragen werden. Wenn eine Brille im Kampf verloren geht oder zerbricht (die Wahrscheinlichkeit beträgt 50%, wenn der Charakter eine Wunde einsteckt, stürzt oder ein andere Art von Verletzung erleidet), ist der Charakter bis zum Ende seines nächsten Zugs Abgelenkt (und Verwundbar im Fall eines schweren Handicaps).'
    // },
    // {
    //   id: 'Schwerhoerig',
    //   name: 'Schwerhörig',
    //   points: [1, 2],
    //   descr:
    //     'Charaktere, die ihr Gehör ganz oder zum Teil verloren haben, besitzen diesen Nachteil. Bei einem leichten Handicap erleidet der Charakter einen Abzug von –4 auf Wahrnehmungsproben, die mit Gehör zu tun haben, zum Beispiel wenn er bei lauten Geräuschen aufwachen soll. Ein schweres Handicap bedeutet, dass der Charakter taub ist. Er kann nicht hören und scheitert automatisch bei allen Wahrnehmungsproben, die auf Gehör basieren. Hörgeräte verringern den Abzug um 2, erfordern aber Batterien, und wenn der Charakter eine Wunde einsteckt, stürzt oder eine andere Art Verletzung erleidet, besteht eine Chance von 50%, dass sie herausfallen.'
    // },
    {
      id: 'Schwerzüngig',
      name: 'Schwerzüngig',
      points: [2],
      descr:
        'Dein Abenteurer versaut coole Sprüche (oder sie fallen ihm erst nachher ein!), schweift ab, wenn er jemanden von etwas überreden will, und bringt so gut wie alles, was er sagt, falsch rüber. Er erleidet einen Abzug von –1 auf Proben mit Darbietung, Einschüchtern, Provozieren und Überreden, die Sprechen erfordern.'
    },
    {
      id: 'Schwur',
      name: 'Schwur',
      points: [1, 2],
      descr:
        'Der Charakter hat jemandem oder etwas, an das er glaubt, einen Eid geschworen. Wie gefährlich es ist, den Schwur zu erfüllen, und wie oft er ins Spiel kommt, bestimmt die Schwere des Handicaps. Ein Schwur (leicht) könnte sein, einem Orden mit breit gefasstem Aufgabengebiet zu dienen, das selten in Konflikt mit den Zielen der Gruppe kommt. Bei einem Schwur (schwer) muss der Charakter oft viel Zeit auf seine Aufgaben verwenden und bringt sich dabei in Gefahr.'
    },
    // {
    //   id: 'Skrupellos',
    //   name: 'Skrupellos',
    //   points: [1, 2],
    //   descr:
    //     'Dieser Fanatiker wird fast alles tun, um seine Ziele zu erreichen. Bei einem schweren Handicap hat er keine Hemmungen, jedem zu schaden, der ihm in die Quere kommt. Bei einem leichten Handicap wird er nur jenen schaden, die sich ihm direkt in den Weg stellen.'
    // },
    // {
    //   id: 'Stumm',
    //   name: 'Stumm',
    //   points: [2],
    //   descr:
    //     'Dein Charakter kann nicht sprechen, entweder von Geburt an oder wegen irgendeines Traumas oder einer Verletzung. Er kann bei Bedarf anderen schriftliche Nachrichten zukommen lassen, Zeichensprache oder eine Kombination visueller Kommunikationsmittel verwenden. Auf Sicht basierende Kommunikation erfordert möglicherweise eine Wahrnehmungsprobe, um sie richtig zu sehen (Beleuchtung und ähnliche Abzüge werden eingerechnet).'
    // },
    // {
    //   id: 'Stur',
    //   name: 'Stur',
    //   points: [1],
    //   descr:
    //     'Sture Personen wollen immer ihren Kopf durchsetzen und geben niemals zu, dass sie Unrecht haben. Selbst wenn es quälend offensichtlich ist, dass sie einen Fehler gemacht haben, versuchen sie ihr Handeln mit Halbwahrheiten und Rationalisierungen zu rechtfertigen.'
    // },
    {
      id: 'Tick',
      name: 'Tick',
      points: [1],
      descr:
        'Diese Person hat eine kleinere Macke, die normalerweise amüsant ist, aber ihm manchmal auch wirklich in Schwierigkeiten bringen kann. Ein Fechter versucht vielleicht immer, seine Initialen in seine Feinde zu ritzen, ein Zwerg prahlt die ganze Zeit mit der Überlegenheit seiner Kultur, oder eine versnobte Debütantin weigert sich, mit der Unterschicht zu essen, zu trinken oder sich auch nur mit ihr abzugeben.'
    },
    {
      id: 'Tollpatschig',
      name: 'Tollpatschig',
      points: [2],
      descr:
        'Dein Held ist ein unkoordinierter Tollpatsch, der über Luft stolpert und den im Sportunterricht niemand im Team haben wollte. Er erleidet einen Abzug von –2 bei Proben auf Athletik und Heimlichkeit.'
    },
    {
      id: 'Uebermütig',
      name: 'Übermütig',
      points: [2],
      descr:
        'Es gibt nichts, was dein Held nicht schaffen kann. Zumindest glaubt er das. Er denkt auch, dass er so gut wie alles leisten kann und würde niemals von einer Herausforderung zurückschrecken. Er ist nicht selbstmörderisch, doch traut er sich ohne Frage mehr zu, als ratsam ist.'
    },
    {
      id: 'Verpeilt',
      name: 'Verpeilt',
      points: [2],
      descr:
        'Dein Held achtet nicht besonders auf die Welt, die ihn umgibt, und findet nicht einmal einen Heuhaufen in einem Häufchen Nadeln. Er erleidet –1 auf Proben mit Allgemeinwissen und Wahrnehmung.'
    },
    {
      id: 'Verpflichtung',
      name: 'Verpflichtung',
      points: [1, 2],
      descr:
        'Dein Held hat eine Verpflichtung, der er täglich oder zumindest regelmässig nachkommen muss. Es könnte ein Job sein, freiwillige Arbeit, vielleicht muss er sich auch um eine Familie oder Freunde kümmern etc. Die Verpflichtung erfordert in den meisten Wochen 20 Stunden, oder 40+ Stunden bei der schweren Version. Was genau die Verpflichtung umfasst sollten Spieler und Spielleiterin gemeinsam besprechen.'
    },
    // {
    //   id: 'Vorsichtig',
    //   name: 'Vorsichtig',
    //   points: [1],
    //   descr:
    //     'Dieser Planer verkörpert Zurückhaltung und Vorsicht. Er trifft niemals überstürzte Entscheidungen und plant gerne im Voraus.'
    // },
    {
      id: 'Wahnvorstellungen',
      name: 'Wahnvorstellungen',
      points: [1, 2],
      descr:
        'Dein Held glaubt etwas, das alle anderen als seltsam erachten. Leichte Wahnvorstellungen sind harmlos, oder der Charakter behält sie für sich (zum Beispiel: die Regierung gibt Beruhigungsmittel in Softdrinks, Hunde können reden, wir sind alle nur Charaktere in einem bizarren Spiel). Bei einer schweren Wahnvorstellung bringt er seine Ansichten zu der Situation oft zum Ausdruck, und das kann gelegentlich gefährlich werden (zum Beispiel: die Regierung wird von Aliens geleitet, Krankenhäuser sind tödlich, ich bin allergisch gegen Rüstung, Zombies sind meine Freunde).'
    },
    {
      id: 'Zoegerlich',
      name: 'Zögerlich',
      points: [1],
      descr:
        'Dein Held zögert in Stresssituationen. Ziehe zwei Aktionskarten im Kampf und verwende die schlechtere. Wenn du einen Joker ziehst, kannst du ihn normal verwenden und das Handicap für die Runde ignorieren (deshalb ist es auch nur ein leichtes Handicap, weil es tatsächlich die Chancen erhöht, einen Joker zu ziehen!). Zögerliche Charaktere können nicht die Talente Schnell oder Kühler Kopf wählen.'
    },
    {
      id: 'ZweilinkeHaende',
      name: 'Zwei linke Hände',
      points: [1],
      descr:
        'Aufgrund ihrer Erziehung, geringem Kontakt oder einfach Pech haben einige Leute zwei linke Hände, wenn es um mechanische oder technologische Gerätschaften geht. Zwei linke Hände verursacht einen Abzug von –2, wenn der Charakter mechanische oder elektrische Geräte verwendet. Wenn er einen Kritischen Fehlschlag bei der Verwendung eines solchen Geräts würfelt (und das Gerät nicht bereits einen vorgesehen Effekt für einen solchen Fall hat), dann geht es kaputt. Wenn die SL der Meinung ist, dass es passend ist, kann es danach mit einer Reparierenprobe und 1W6 Stunden Zeit wieder einsatzbereit gemacht werden.'
    },
    {
      id: 'Zweifler',
      name: 'Zweifler',
      points: [1],
      descr:
        'Einige Leute glauben nicht an das Übernatürliche – bis sie dann Hals über Kopf im Schlund irgendeiner Kreatur stecken. Zweifler sind Skeptiker, die ihr Bestes geben, um eine rationale Erklärung für übernatürliche Ereignisse zu finden. Sie laufen direkt in die Gefahr, an die sie nicht glauben, und suchen nach Erklärungen für das Unerklärliche. Selbst wenn sie mit der unleugbaren Wahrheit konfrontiert werden, beginnen Zweifler unweigerlich zu hinterfragen, was sie gesehen haben, rationalisieren es weg oder tun die Geschehnisse als „einzigartigen Fall“ ab, um dann das nächste seltsame Ereignis wieder in Frage zu stellen zu können.'
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
