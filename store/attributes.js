export const state = () => ({
  list: [
    {
      id: 'Geschicklichkeit',
      name: 'Geschicklichkeit',
      descr:
        'Geschicklichkeit ist ein Mass der Flinkheit, Fingerfertigkeit und Koordinationsgabe des Charakters.',
      defaultValue: 4
    },
    {
      id: 'Staerke',
      name: 'Stärke',
      descr:
        'Stärke steht für körperliche Kraft und Fitness. Sie bestimmt auch die Basis des Schadens, den ein Charakter im Nahkampf austeilt, und wie viel er tragen oder heben kann.',
      defaultValue: 4
    },
    {
      id: 'Konstitution',
      name: 'Konstitution',
      descr:
        'Konstitution steht für Ausdauer, Widerstand gegen Krankheiten, Gifte und Toxine und zeigt, wie viel körperlichen Schaden ein Charakter aushalten kann, ehe er zusammenbricht. Sie wird vor allem verwendet, um Erschöpfungseffekten zu widerstehen, sowie als Grundlage für den abgeleiteten Wert Robustheit.',
      defaultValue: 4
    },
    {
      id: 'Verstand',
      name: 'Verstand',
      descr:
        'Verstand misst rohe Intelligenz, Geistesschärfe und wie schnell der Held denken kann. Das Attribut wird verwendet, um manchen geistigen und sozialen Angriffen zu widerstehen.',
      defaultValue: 4
    },
    {
      id: 'Willenskraft',
      name: 'Willenskraft',
      descr:
        'Willenskraft ist Selbstvertrauen, Rückgrat und Entschlossenheit. Sie wird verwendet, um sozialen und übernatürlichen Angriffen sowie Furcht zu widerstehen.',
      defaultValue: 4
    }
  ]
})
