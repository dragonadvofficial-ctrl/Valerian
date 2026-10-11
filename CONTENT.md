# Valerian content architecture

The existing home page is retained. The expanded site adds separate company, approach, product catalogue, individual product, care, knowledge, medicine-use, prevention, storage, contact, privacy and terms pages. Rigel also has a regional partnership page. Valerian remains English-only, with EPGT identified in the footer.

## Editing

Edit content/site.json, then run node scripts/build-pages.cjs. Product names, photographs and existing summaries are read from the retained catalogue. Shared page styles and browser-local interactions live in dist/content-pages.css and dist/content-pages.js.

## Content provenance

Product facts are derived from the supplied packaging. General education cites WOAH, FDA, Merck Veterinary Manual, AAHA, AAEP and Penn State Extension where relevant. Reference organisations do not endorse the displayed brands. Educational guidance does not establish product approval or dosage. No numeric doses, founding years, product launch dates or certifications have been invented. Request the exact locally authorised leaflet and dated corporate documentation for those decisions.

## Enquiries

The contact page prepares a message locally. Visitors copy or download it and share it with their existing company contact. No inbox endpoint was supplied; the form does not claim delivery.

## Images

Existing supplied product photos and existing illustrative animal-care images are reused contextually. Lifestyle imagery is not presented as evidence of a manufacturer facility.

## Regional connections and farm-animal refresh

The confirmed EPGT Middle East partnership is displayed alongside clearly labelled partnership-enquiry regions. Those regions are not represented as appointed companies. The shared footer is maintained in scripts/regional-partners.cjs and styled in dist/regional-partners.css. Valerian focuses on farm and large animals, with cattle, sheep/goat, equine and camel care pages. New editorial images appear alongside the home-page story and educational articles. The full six-product catalogue is retained.

## Fictional regional partner preview

Four original, clearly labelled fictional company identities illustrate regional partner cards: Northleaf Veterinary (Europe & UK), Savanna Herd Health (Africa), Pacific Field Veterinary (Asia-Pacific) and Prairie Animal Science (Americas). Each card carries a DEMO / FICTIONAL badge; the section states that these are not real appointments or affiliations. The original SVG concept marks are in dist/assets/partners. EPGT retains its separate supplied Middle East partner designation.
