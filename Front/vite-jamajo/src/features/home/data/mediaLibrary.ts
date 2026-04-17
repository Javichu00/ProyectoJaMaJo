export type MediaKind = 'series' | 'movie'
export type ShelfAnchor = 'series' | 'peliculas' | 'categorias'

export type MediaItem = {
  id: string
  title: string
  category: string
  kind: MediaKind
  status?: 'trending' | 'recommended' | 'new' | 'coming-soon'
  note?: string
}

export type MediaShelf = {
  id: string
  eyebrow: string
  title: string
  description: string
  items: MediaItem[]
  anchor?: ShelfAnchor
}

export type CategorySummary = {
  name: string
  seriesCount: number
  movieCount: number
  total: number
}

export const brandLockup = 'JAMAJO | Cine'

export const menuLinks = [
  { label: 'Peliculas', href: '#peliculas' },
  { label: 'Series', href: '#series' },
  { label: 'Explorar', href: '#explorar' },
  { label: 'Iniciar sesion', href: '#footer' },
]

export const categorySummary: CategorySummary[] = [
  { name: 'Drama', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Comedia', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Accion', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Terror / Horror', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Suspense / Thriller', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Romance', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Familiar', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Juvenil / Teen', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Ciencia ficcion', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Fantasia', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Crimen / Policial', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Aventura', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Cine clasico', seriesCount: 0, movieCount: 0, total: 0 },
  { name: 'Anime', seriesCount: 0, movieCount: 0, total: 0 },
]

// TODO(front-back): reemplazar estos bloques por la respuesta real del backend
// cuando existan endpoints para trending, recomendadas, estrenos, categorias,
// resultados de busqueda y estados de compra / reserva.
export const heroSlides: MediaItem[] = [
  {
    id: 'hero-curaduria',
    title: 'Curaduria viva',
    category: 'Home editorial',
    kind: 'movie',
    status: 'trending',
    note: 'trending + recomendadas + estrenos',
  },
  {
    id: 'hero-biblioteca',
    title: 'Biblioteca propia',
    category: 'Compra individual',
    kind: 'series',
    status: 'recommended',
    note: 'compra, reserva y acceso',
  },
  {
    id: 'hero-discovery',
    title: 'Descubrimiento conectado',
    category: 'Categorias y reparto',
    kind: 'series',
    status: 'new',
    note: 'similitud + personas + ranking',
  },
]

export const spotlightItems: MediaItem[] = [
  {
    id: 'spotlight-trending',
    title: 'Trending del momento',
    category: 'Actividad reciente',
    kind: 'series',
    status: 'trending',
    note: 'mezcla de compras, vistas y resenas',
  },
  {
    id: 'spotlight-ranked',
    title: 'Mejor valoradas',
    category: 'Ranking',
    kind: 'movie',
    status: 'recommended',
    note: 'promedio de puntuaciones',
  },
  {
    id: 'spotlight-collections',
    title: 'Colecciones y listas',
    category: 'Organizacion personal',
    kind: 'movie',
    status: 'new',
    note: 'favoritos, ver despues y listas',
  },
  {
    id: 'spotlight-cast',
    title: 'Reparto y directores',
    category: 'Navegacion',
    kind: 'series',
    status: 'coming-soon',
    note: 'filmografias y relaciones',
  },
]

export const searchIndex: MediaItem[] = [
  ...heroSlides,
  ...spotlightItems,
  {
    id: 'search-peliculas',
    title: 'Peliculas comprables',
    category: 'Compra',
    kind: 'movie',
    note: 'catalogo individual',
  },
  {
    id: 'search-series',
    title: 'Series reservables',
    category: 'Reserva',
    kind: 'series',
    note: 'estrenos y proximos accesos',
  },
  {
    id: 'search-anime',
    title: 'Anime',
    category: 'Categoria',
    kind: 'series',
  },
  {
    id: 'search-thriller',
    title: 'Suspense / Thriller',
    category: 'Categoria',
    kind: 'movie',
  },
]

export const shelves: MediaShelf[] = [
  {
    id: 'series-home',
    eyebrow: 'Series',
    title: 'Continuidad, temporadas y proximos accesos',
    description: 'Fila pensada para series que viven por temporadas, categorias y continuidad de visionado.',
    anchor: 'series',
    items: [
      { id: 'series-trending', title: 'Trending', category: 'Actividad', kind: 'series', status: 'trending', note: 'serie destacada' },
      { id: 'series-drama', title: 'Drama', category: 'Categoria', kind: 'series', note: 'serie destacada' },
      { id: 'series-anime', title: 'Anime', category: 'Categoria', kind: 'series', note: 'serie destacada' },
      { id: 'series-thriller', title: 'Suspense', category: 'Categoria', kind: 'series', note: 'serie destacada' },
      { id: 'series-teen', title: 'Juvenil', category: 'Categoria', kind: 'series', note: 'serie destacada' },
      { id: 'series-coming', title: 'Proximamente', category: 'Reserva', kind: 'series', status: 'coming-soon', note: 'serie reservable' },
    ],
  },
  {
    id: 'peliculas-home',
    eyebrow: 'Peliculas',
    title: 'Compra individual, ranking y estrenos',
    description: 'Fila pensada para compra directa, mejor valoradas, peliculas nuevas y reservas futuras.',
    anchor: 'peliculas',
    items: [
      { id: 'movie-ranked', title: 'Mejor valoradas', category: 'Ranking', kind: 'movie', status: 'recommended', note: 'pelicula destacada' },
      { id: 'movie-action', title: 'Accion', category: 'Categoria', kind: 'movie', note: 'pelicula destacada' },
      { id: 'movie-romance', title: 'Romance', category: 'Categoria', kind: 'movie', note: 'pelicula destacada' },
      { id: 'movie-crime', title: 'Crimen', category: 'Categoria', kind: 'movie', note: 'pelicula destacada' },
      { id: 'movie-classic', title: 'Clasico', category: 'Categoria', kind: 'movie', note: 'pelicula destacada' },
      { id: 'movie-new', title: 'Estrenos', category: 'Lanzamiento', kind: 'movie', status: 'new', note: 'pelicula nueva' },
    ],
  },
  {
    id: 'discovery-home',
    eyebrow: 'Explorar',
    title: 'Categorias, reparto y relaciones',
    description: 'Fila para descubrimiento transversal: similitud, personas, listas y comportamiento del usuario.',
    items: [
      { id: 'discovery-cast', title: 'Reparto', category: 'Personas', kind: 'movie', note: 'actor y director' },
      { id: 'discovery-lists', title: 'Listas', category: 'Organizacion', kind: 'series', note: 'favoritos y ver despues' },
      { id: 'discovery-similar', title: 'Similares', category: 'Relacion', kind: 'movie', note: 'categorias en comun' },
      { id: 'discovery-user', title: 'Para ti', category: 'Comportamiento', kind: 'series', status: 'recommended', note: 'recomendacion' },
      { id: 'discovery-popular', title: 'Popularidad', category: 'Metricas', kind: 'movie', status: 'trending', note: 'compras y vistas' },
      { id: 'discovery-reviews', title: 'Resenas', category: 'Sistema social', kind: 'series', note: 'comentarios del usuario' },
    ],
  },
]

export const homePillars = [
  {
    id: 'compras',
    eyebrow: 'Compra individual',
    title: 'El contenido se compra o se reserva.',
    copy: 'No depende de suscripcion. Cada usuario construye su propia biblioteca.',
  },
  {
    id: 'social',
    eyebrow: 'Sistema social',
    title: 'Ratings y resenas mueven ranking y tendencia.',
    copy: 'Las interacciones reales alimentan visibilidad y recomendacion.',
  },
  {
    id: 'discovery',
    eyebrow: 'Descubrimiento',
    title: 'Categorias, reparto y similitud conectan todo.',
    copy: 'El home mezcla curaduria editorial con estructura de datos.',
  },
]

export const footerColumns = [
  {
    title: 'Navegacion',
    links: ['Inicio', 'Peliculas', 'Series', 'Explorar'],
  },
  {
    title: 'Descubrir',
    links: ['Trending', 'Categorias', 'Reparto', 'Colecciones'],
  },
  {
    title: 'Cuenta',
    links: ['Iniciar sesion', 'Biblioteca', 'Listas', 'Resenas'],
  },
]
