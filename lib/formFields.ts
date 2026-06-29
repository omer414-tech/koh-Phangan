// Single source of truth for Netlify form field names.
// Both public/__forms.html (static detection) and the React wizard use these.
// Rule: ASCII slugs only — Hebrew lives only in visible labels.

export const FORM_NAME = "retreat-application";

export const F = {
  // Step 1 — Personal
  fullName:   "full_name",
  dob:        "dob",
  phone:      "phone",
  email:      "email",
  city:       "city",

  // Step 2 — Medical
  foodSensitivity:       "food_sensitivity",
  foodSensitivityDetail: "food_sensitivity_detail",
  allergies:             "allergies",
  medicalConditions:     "medical_conditions",
  medications:           "medications",
  physicalLimitations:   "physical_limitations",
  healthFund:            "health_fund",
  mentalHealthDeclaration: "mental_health_declaration",
  emergencyName:         "emergency_contact_name",
  emergencyPhone:        "emergency_contact_phone",
  emergencyRelation:     "emergency_contact_relation",

  // Step 3 — Food
  dietType:      "diet_type",
  dietOther:     "diet_other",
  foodDislikes:  "food_dislikes",
  favoriteMeal:  "favorite_meal",
  favoriteDrink: "favorite_drink",

  // Step 4 — Koh Phangan
  beenToKpg:      "been_to_kpg",
  kpgTimes:       "kpg_times",
  kpgReturnPlaces:"kpg_return_places",
  kpgWishPlaces:  "kpg_wish_places",
  motorcycleLicense: "has_motorcycle_license",
  wantsMotorcycle:   "wants_motorcycle",
  drivingLevel:      "driving_level",

  // Step 5 — Experience
  interests:            "interests",       // comma-joined multi-select
  retreatExpectations:  "retreat_expectations",
  meaningfulExperience: "meaningful_experience",

  // Step 6 — About you
  registrationReason: "registration_reason",
  lifeSituation:      "life_situation",
  changeOneThing:     "change_one_thing",
  biggestGoal:        "biggest_goal",
  takeHome:           "take_home",
  threeWords:         "three_words",

  // Step 7 — Good life
  vacationTypes:    "vacation_types",    // comma-joined multi-select
  ratingYoga:       "rating_yoga",
  ratingParties:    "rating_parties",
  ratingWorkshops:  "rating_workshops",
  ratingFitness:    "rating_fitness",
  ratingHikes:      "rating_hikes",
  ratingChefMeals:  "rating_chef_meals",
  ratingNetworking: "rating_networking",

  // Step 8 — Personalization
  surpriseMe:       "surprise_me",
  birthdayDuring:   "birthday_during",
  specialOccasion:  "special_occasion",
  dreamMoment:      "dream_moment",
  additionalNotes:  "additional_notes",

  // Hidden / anti-spam
  formName: "form-name",
  botField: "bot-field",
} as const;

// All field names as a flat list — used to generate the static detection form
export const ALL_FIELD_NAMES = Object.values(F);
