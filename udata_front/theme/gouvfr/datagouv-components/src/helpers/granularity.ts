const granularities = [
    {
        "id": "country-group",
        "name": "Groupement de pays"
      },
      {
        "id": "country",
        "name": "Pays"
      },
      {
        "id": "country-subset",
        "name": "Sous-ensemble de pays"
      },
      {
        "id": "fr:region",
        "name": "Région française"
      },
      {
        "id": "fr:departement",
        "name": "Département français"
      },
      {
        "id": "fr:arrondissement",
        "name": "Arrondissement français"
      },
      {
        "id": "fr:commune",
        "name": "Commune française"
      },
      {
        "id": "fr:iris",
        "name": "Iris (quartiers INSEE)"
      },
      {
        "id": "fr:canton",
        "name": "Canton français"
      },
      {
        "id": "fr:collectivite",
        "name": "Collectivités d'outre-mer françaises"
      },
      {
        "id": "fr:epci",
        "name": "Intercommunalité française (EPCI)"
      },
      {
        "id": "poi",
        "name": "Point d'Intérêt"
      },
      {
        "id": "other",
        "name": "Autre"
      }
]

export function getGranularity (id: String) {
    const granularity = granularities.find((g) => g.id === id)
    return granularity.name
}