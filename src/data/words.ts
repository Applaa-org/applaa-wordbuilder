export interface Word {
  id: number;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  etymology?: string;
  date: string;
}

export const words: Word[] = [
  {
    id: 1,
    word: "Ephemeral",
    pronunciation: "/ɪˈfem(ə)rəl/",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time; transitory or short-lived.",
    examples: [
      "The ephemeral beauty of cherry blossoms reminds us to appreciate fleeting moments.",
      "Fashion trends are often ephemeral, changing with each season.",
      "Social media posts create ephemeral connections that can disappear in an instant."
    ],
    synonyms: ["fleeting", "transient", "momentary", "brief", "short-lived"],
    antonyms: ["permanent", "lasting", "enduring", "eternal"],
    difficulty: "advanced",
    category: "Time & Duration",
    etymology: "From Greek ephemeros 'lasting only one day', from epi 'on' + hemera 'day'.",
    date: "2024-01-15"
  },
  {
    id: 2,
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədē/",
    partOfSpeech: "noun",
    definition: "The occurrence of events by chance in a happy or beneficial way.",
    examples: [
      "Finding that rare book was pure serendipity—I wasn't even looking for it.",
      "Their meeting was a moment of serendipity that changed both their lives.",
      "Scientific discoveries often result from serendipity rather than planned research."
    ],
    synonyms: ["chance", "fortune", "luck", "providence", "fate"],
    antonyms: ["misfortune", "bad luck", "design", "intention"],
    difficulty: "intermediate",
    category: "Emotion & Experience",
    etymology: "Coined by Horace Walpole in 1754, from the Persian fairy tale 'The Three Princes of Serendip'.",
    date: "2024-01-16"
  },
  {
    id: 3,
    word: "Ubiquitous",
    pronunciation: "/yo͞oˈbikwədəs/",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere.",
    examples: [
      "Smartphones have become ubiquitous in modern society.",
      "Coffee shops are ubiquitous in most urban neighborhoods.",
      "The ubiquitous presence of social media affects how we communicate."
    ],
    synonyms: ["omnipresent", "ever-present", "universal", "pervasive"],
    antonyms: ["rare", "scarce", "infrequent", "limited"],
    difficulty: "advanced",
    category: "Presence & Existence",
    etymology: "From Latin ubiquitas 'being everywhere', from ubique 'everywhere'.",
    date: "2024-01-17"
  },
  {
    id: 4,
    word: "Resilient",
    pronunciation: "/rəˈzilyənt/",
    partOfSpeech: "adjective",
    definition: "Able to recover quickly from difficulties; tough and flexible.",
    examples: [
      "Children are remarkably resilient and can adapt to new situations quickly.",
      "The resilient community rebuilt stronger after the natural disaster.",
      "Her resilient spirit helped her overcome every obstacle in her path."
    ],
    synonyms: ["tough", "strong", "hardy", "adaptable", "flexible"],
    antonyms: ["fragile", "weak", "vulnerable", "brittle"],
    difficulty: "beginner",
    category: "Character & Personality",
    etymology: "From Latin resiliens 'leaping back', from re- 'back' + salire 'to leap'.",
    date: "2024-01-18"
  },
  {
    id: 5,
    word: "Meticulous",
    pronunciation: "/məˈtikyələs/",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail; very careful and precise.",
    examples: [
      "She kept meticulous records of every transaction.",
      "The artist's meticulous attention to detail is evident in every brushstroke.",
      "His meticulous planning ensured the project's success."
    ],
    synonyms: ["careful", "thorough", "diligent", "precise", "scrupulous"],
    antonyms: ["careless", "sloppy", "negligent", "haphazard"],
    difficulty: "intermediate",
    category: "Behavior & Action",
    etymology: "From Latin meticulosus 'fearful, timid', from metus 'fear'.",
    date: "2024-01-19"
  },
  {
    id: 6,
    word: "Pragmatic",
    pronunciation: "/praɡˈmadik/",
    partOfSpeech: "adjective",
    definition: "Dealing with things sensibly and realistically rather than theoretically.",
    examples: [
      "We need a pragmatic approach to solve this practical problem.",
      "Her pragmatic decision saved the company from financial trouble.",
      "Politicians must balance idealistic visions with pragmatic solutions."
    ],
    synonyms: ["practical", "realistic", "sensible", "down-to-earth"],
    antonyms: ["idealistic", "impractical", "theoretical", "unrealistic"],
    difficulty: "intermediate",
    category: "Thinking & Philosophy",
    etymology: "From Greek pragmatikos 'relating to fact', from pragma 'deed, act'.",
    date: "2024-01-20"
  },
  {
    id: 7,
    word: "Eloquent",
    pronunciation: "/ˈeləkwənt/",
    partOfSpeech: "adjective",
    definition: "Fluent or persuasive in speaking or writing; clearly expressing or indicating something.",
    examples: [
      "She gave an eloquent speech that moved the entire audience.",
      "His eloquent writing style makes complex ideas accessible to everyone.",
      "The painting was an eloquent expression of the artist's grief."
    ],
    synonyms: ["articulate", "expressive", "fluent", "persuasive"],
    antonyms: ["inarticulate", "inexpressive", "awkward", "tongue-tied"],
    difficulty: "intermediate",
    category: "Communication",
    etymology: "From Latin eloquent- 'speaking out', from eloqui 'speak out'.",
    date: "2024-01-21"
  },
  {
    id: 8,
    word: "Ambiguous",
    pronunciation: "/amˈbiɡyo͞oəs/",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; having a double meaning; unclear or inexact.",
    examples: [
      "The contract contained several ambiguous clauses that needed clarification.",
      "Her ambiguous response left us unsure of her true feelings.",
      "The ending of the movie was intentionally ambiguous, sparking debate among viewers."
    ],
    synonyms: ["unclear", "vague", "equivocal", "indistinct"],
    antonyms: ["clear", "unambiguous", "explicit", "definite"],
    difficulty: "intermediate",
    category: "Language & Meaning",
    etymology: "From Latin ambiguus 'having double meaning', from ambigere 'to wander about'.",
    date: "2024-01-22"
  },
  {
    id: 9,
    word: "Tenacious",
    pronunciation: "/təˈnāSHəs/",
    partOfSpeech: "adjective",
    definition: "Holding firmly to something; persistent or determined.",
    examples: [
      "Her tenacious efforts finally paid off after years of hard work.",
      "The tenacious reporter refused to give up on the investigation.",
      "He's a tenacious advocate for environmental protection."
    ],
    synonyms: ["persistent", "determined", "resolute", "dogged"],
    antonyms: ["irresolute", "yielding", "weak", "indecisive"],
    difficulty: "intermediate",
    category: "Character & Personality",
    etymology: "From Latin tenax 'holding fast', from tenere 'to hold'.",
    date: "2024-01-23"
  },
  {
    id: 10,
    word: "Profound",
    pronunciation: "/prəˈfound/",
    partOfSpeech: "adjective",
    definition: "Very great or intense; having deep meaning or far-reaching consequences.",
    examples: [
      "The book had a profound impact on my understanding of the world.",
      "She experienced a profound sense of peace after meditation.",
      "The philosopher's profound ideas continue to influence modern thought."
    ],
    synonyms: ["deep", "intense", "far-reaching", "significant"],
    antonyms: ["superficial", "shallow", "trivial", "insignificant"],
    difficulty: "intermediate",
    category: "Depth & Intensity",
    etymology: "From Latin profundus 'deep', from pro 'before' + fundus 'bottom'.",
    date: "2024-01-24"
  },
  {
    id: 11,
    word: "Candid",
    pronunciation: "/ˈkandid/",
    partOfSpeech: "adjective",
    definition: "Truthful and straightforward; frank; unbiased and impartial.",
    examples: [
      "I appreciate your candid feedback on my presentation.",
      "The documentary provides a candid look at life in the remote village.",
      "She gave a candid interview about her struggles with mental health."
    ],
    synonyms: ["frank", "honest", "open", "straightforward"],
    antonyms: ["dishonest", "guarded", "evasive", "secretive"],
    difficulty: "beginner",
    category: "Communication",
    etymology: "From Latin candidus 'white, bright, pure', from candere 'to shine'.",
    date: "2024-01-25"
  },
  {
    id: 12,
    word: "Versatile",
    pronunciation: "/ˈvərsədl/",
    partOfSpeech: "adjective",
    definition: "Able to adapt or be adapted to many different functions or activities.",
    examples: [
      "She's a versatile actress who can perform in comedies and dramas alike.",
      "The versatile tool can be used for multiple purposes in the kitchen.",
      "His versatile skillset makes him valuable to any team."
    ],
    synonyms: ["adaptable", "flexible", "multitalented", "all-around"],
    antonyms: ["inflexible", "limited", "specialized", "rigid"],
    difficulty: "beginner",
    category: "Ability & Skill",
    etymology: "From Latin versatilis 'turning around', from versare 'to turn'.",
    date: "2024-01-26"
  }
];

export const categories = [
  { id: 1, name: "Time & Duration", count: 1, color: "bg-blue-500" },
  { id: 2, name: "Emotion & Experience", count: 1, color: "bg-purple-500" },
  { id: 3, name: "Presence & Existence", count: 1, color: "bg-green-500" },
  { id: 4, name: "Character & Personality", count: 2, color: "bg-orange-500" },
  { id: 5, name: "Behavior & Action", count: 1, color: "bg-red-500" },
  { id: 6, name: "Thinking & Philosophy", count: 1, color: "bg-indigo-500" },
  { id: 7, name: "Communication", count: 2, color: "bg-pink-500" },
  { id: 8, name: "Language & Meaning", count: 1, color: "bg-teal-500" },
  { id: 9, name: "Depth & Intensity", count: 1, color: "bg-amber-500" },
  { id: 10, name: "Ability & Skill", count: 1, color: "bg-cyan-500" }
];

// Helper function to get daily word based on date
export function getDailyWord(): Word {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % words.length;
  return words[index];
}