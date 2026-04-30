import { works } from "./works.js";

const relatedProjectRoutes = {
  "/services": [
    "/works/registration-system-poppy-gunadi",
    "/works/realtime-photobooth-allianz",
    "/works/indomaret-Scream",
  ],
  "/services/registration-system": [
    "/works/registration-system-poppy-gunadi",
    "/works/registration-system-srm-pertamina",
    "/works/vaccine-photobooth-qdenga",
  ],
  "/services/custom-photobooth": [
    "/works/realtime-photobooth-allianz",
    "/works/vaccine-photobooth-qdenga",
    "/works/promo-photobooth-cimb-niaga",
  ],
  "/services/ai-photobooth": [
    "/works/beforeafter-blackmores",
    "/works/realtime-photobooth-allianz",
    "/works/vaccine-photobooth-qdenga",
  ],
  "/services/gamification": [
    "/works/indomaret-Scream",
    "/works/scrabble-game-fif",
    "/works/quiz-nhpv",
  ],
  "/services/interactive-experience": [
    "/works/nhpv-journey",
    "/works/presentation-qdenga",
    "/works/digital-information-nhpv",
  ],
  "/works/beforeafter-blackmores": [
    "/works/realtime-photobooth-allianz",
    "/works/vaccine-photobooth-qdenga",
    "/works/promo-photobooth-cimb-niaga",
  ],
  "/works/digital-information-nhpv": [
    "/works/nhpv-journey",
    "/works/quiz-nhpv",
    "/works/presentation-qdenga",
  ],
  "/works/indomaret-Scream": [
    "/works/scrabble-game-fif",
    "/works/quiz-nhpv",
    "/works/nhpv-journey",
  ],
  "/works/nhpv-journey": [
    "/works/quiz-nhpv",
    "/works/digital-information-nhpv",
    "/works/presentation-qdenga",
  ],
  "/works/presentation-qdenga": [
    "/works/vaccine-photobooth-qdenga",
    "/works/digital-information-nhpv",
    "/works/promo-photobooth-cimb-niaga",
  ],
  "/works/promo-photobooth-cimb-niaga": [
    "/works/realtime-photobooth-allianz",
    "/works/vaccine-photobooth-qdenga",
    "/works/beforeafter-blackmores",
  ],
  "/works/quiz-nhpv": [
    "/works/nhpv-journey",
    "/works/digital-information-nhpv",
    "/works/scrabble-game-fif",
  ],
  "/works/realtime-photobooth-allianz": [
    "/works/vaccine-photobooth-qdenga",
    "/works/beforeafter-blackmores",
    "/works/promo-photobooth-cimb-niaga",
  ],
  "/works/registration-system-poppy-gunadi": [
    "/works/registration-system-srm-pertamina",
    "/works/vaccine-photobooth-qdenga",
    "/works/promo-photobooth-cimb-niaga",
  ],
  "/works/registration-system-srm-pertamina": [
    "/works/registration-system-poppy-gunadi",
    "/works/vaccine-photobooth-qdenga",
    "/works/promo-photobooth-cimb-niaga",
  ],
  "/works/scrabble-game-fif": [
    "/works/indomaret-Scream",
    "/works/quiz-nhpv",
    "/works/nhpv-journey",
  ],
  "/works/vaccine-photobooth-qdenga": [
    "/works/realtime-photobooth-allianz",
    "/works/beforeafter-blackmores",
    "/works/promo-photobooth-cimb-niaga",
  ],
};

const worksByHref = new Map(works.map((work) => [work.href, work]));

export const getRelatedProjects = (route) =>
  (relatedProjectRoutes[route] || [])
    .map((href) => worksByHref.get(href))
    .filter(Boolean);
