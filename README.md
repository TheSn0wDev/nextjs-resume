# CV — Clément Ozor

Next.js, TypeScript et CSS classique, avec Geist Sans installé localement. Aucun service externe n’est nécessaire pour charger la police.

## Démarrage

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000/cv. La route `/` redirige vers `/cv`.

## Export PDF

Cliquer sur « Exporter en PDF », puis choisir « Enregistrer au format PDF » dans Chrome. Format A4, échelle 100 %, marges aucune, en-têtes et pieds de page désactivés. Le bouton et les éléments hors de la feuille sont masqués à l’impression.

La feuille mesure 210 × 297 mm sans transformation. Le texte et les liens sont conservés. Sur mobile, la feuille garde ses dimensions et peut être parcourue horizontalement.

## Vérifications

```sh
npm run typecheck
npm run build
```

Le rendu et un PDF d’une seule page ont été contrôlés dans Chrome, avec extraction du texte, accents et annotations de liens. Les captures et le PDF de contrôle sont dans `output/playwright/` (ignoré par Git).

Le rendu reprend la référence fournie : grand nom noir et bleu, icônes de contact, note manuscrite, traits de pinceau SVG, dates en capsules, timeline, stacks textuelles, tags des projets et compétences sur deux rangées. Le lien MMA Scan est porté par le titre du projet.
