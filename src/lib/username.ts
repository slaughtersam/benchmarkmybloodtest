import { randomInt } from "node:crypto";

// Short, common, inoffensive words so usernames are easy to write down and type.
// 120 adjectives × 120 nouns × 9000 numbers ≈ 130 million combinations.
const ADJECTIVES = [
  "amber", "ancient", "aqua", "autumn", "azure", "bold", "brave", "breezy", "bright", "brisk",
  "bronze", "calm", "candid", "cedar", "cheery", "clever", "cloudy", "cobalt", "coral", "cosmic",
  "cozy", "crimson", "crisp", "curious", "dapper", "daring", "dawn", "deep", "dusty", "eager",
  "early", "easy", "ember", "fancy", "fern", "fiery", "flint", "fond", "frosty", "gentle",
  "giant", "glad", "golden", "grand", "granite", "green", "happy", "hazel", "hidden", "honest",
  "humble", "icy", "indigo", "ivory", "jade", "jolly", "keen", "kind", "lavish", "lemon",
  "lively", "lucky", "lunar", "maple", "marble", "mellow", "merry", "mighty", "minty", "misty",
  "modest", "mossy", "noble", "north", "oaken", "ocean", "olive", "opal", "orange", "patient",
  "pearl", "plucky", "polar", "proud", "quick", "quiet", "rapid", "rosy", "royal", "ruby",
  "rustic", "sage", "sandy", "scarlet", "serene", "shiny", "silent", "silver", "simple", "sleek",
  "smooth", "snowy", "solar", "sonic", "spicy", "steady", "stormy", "sunny", "swift", "tidy",
  "topaz", "tranquil", "true", "velvet", "violet", "vivid", "warm", "wild", "witty", "zesty",
];

const NOUNS = [
  "acorn", "anchor", "aspen", "badger", "beacon", "bear", "beaver", "birch", "bison", "breeze",
  "brook", "canyon", "cedar", "cliff", "cloud", "comet", "condor", "coral", "cougar", "coyote",
  "crane", "creek", "crow", "dahlia", "delta", "dolphin", "dove", "dune", "eagle", "falcon",
  "fern", "finch", "fjord", "forest", "fox", "gazelle", "geyser", "glacier", "grove", "harbor",
  "hawk", "heron", "hill", "ibis", "island", "jaguar", "juniper", "kestrel", "koala", "lagoon",
  "lake", "lark", "lemur", "lily", "lion", "lotus", "lynx", "maple", "marten", "meadow",
  "mesa", "moose", "moth", "nebula", "newt", "oak", "orca", "osprey", "otter", "owl",
  "panda", "panther", "pebble", "pelican", "pine", "planet", "plover", "pond", "puffin", "quail",
  "rabbit", "raven", "reef", "ridge", "river", "robin", "salmon", "sparrow", "spruce", "star",
  "stone", "summit", "swan", "thistle", "thrush", "tiger", "trail", "tulip", "tundra", "turtle",
  "valley", "walrus", "willow", "wolf", "wren", "yak", "zebra", "aurora", "bamboo", "basin",
  "bluff", "cactus", "cove", "dingo", "egret", "elk", "gecko", "hare", "iris", "kiwi",
];

const pick = <T,>(list: readonly T[]) => list[randomInt(list.length)];

export function generateUsername(): string {
  return `${pick(ADJECTIVES)}-${pick(NOUNS)}-${randomInt(1000, 10000)}`;
}
