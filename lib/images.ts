// Centralized image path registry.
// To swap any photo: update the path here — one line, one place.
// TODO: Replace placeholder paths with final high-res assets before launch.

export const IMAGES = {
  // Hero & location
  hero:        "/images/hero.jpeg",
  beachAerial: "/images/beach-aerial.jpg",

  // Villas
  villaPool:        "/images/villa-pool.jpg",
  villaTerrace:     "/images/villa-terrace.jpg",
  villaInterior:    "/images/villa-interior.jpg",
  villaPoolGolden:  "/images/villa-pool-golden.jpg",
  villaPoolDusk:    "/images/villa-pool-dusk.jpeg",

  // Hosts
  yaeli: "/images/yaeli.jpg",
  omer:  "/images/omer.jpg",

  // Activities & experience
  meditationCircle: "/images/meditation-circle.jpg",
  ecstaticDance:    "/images/ecstatic-dance.jpg",
  jungleTemple:     "/images/jungle-temple.jpg",
} as const;
