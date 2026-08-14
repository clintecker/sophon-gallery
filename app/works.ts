export type Study = Readonly<{
  slug: string;
  title: string;
  tags: readonly string[];
  description: string;
}>;

const study = (
  slug: string,
  title: string,
  tags: string,
  description: string,
): Study => ({ slug, title, tags: tags.split(","), description });

export const studies = [
  study("25-rotating-crystal-mandala", "Rotating Crystal Mandala", "transform,rotation,bloom", "Counter-rotating cyan and gold crystal planes form a luminous spectral mandala."),
  study("24-aurora-clip-reactor", "Aurora Clip Reactor", "clip,h264,loop,bloom", "Decoded H.264 motion is keyed, reflected, and bloomed."),
  study("23-hyperdimensional-aurora-engine", "Hyperdimensional Aurora Engine", "still-image,fill,bloom", "Square artwork erupts through a widescreen crystal engine."),
  study("22-cosmic-prism-gate", "Cosmic Prism Gate", "still-image,bloom", "Imported cosmic art becomes counter-moving light fields."),
  study("21-spill-cleanup-duel", "Spill Cleanup Duel", "despill,keying", "Cleaned warm edges race their contaminated twins."),
  study("20-neon-matte-sculptor", "Neon Matte Sculptor", "morphology,keying", "Grow and shrink reshape two luminous silhouettes."),
  study("19-crystalline-key-vortex", "Crystalline Key Vortex", "keying,matte-refine", "Soft keys become sharply sculpted crystal energy."),
  study("18-cosmic-double-key", "Cosmic Double Key", "chroma-key,luma-key", "Two synthetic studio takes become isolated moving lights."),
  study("17-glowing-neon-kaleidoscope", "Glowing Neon Kaleidoscope", "bloom,mirror", "Crisp reflected rings cast coverage-safe additive light halos."),
  study("16-fourfold-neon-bloom", "Fourfold Neon Bloom", "mirror,composite", "One moving light becomes a four-way symmetric bloom."),
  study("15-prismatic-ribbon-portal", "Prismatic Ribbon Portal", "history,scroll", "Three moving memories braid into a violet portal."),
  study("14-prismatic-ring-dance", "Prismatic Ring Dance", "mask,scroll", "Opposing mattes turn soft lights into dancing rings."),
  study("13-neon-comet-trails", "Neon Comet Trails", "history,scroll", "Moving lights paint persistent colored trails."),
  study("12-neon-memory-gate", "Neon Memory Gate", "scroll,radial-gradient", "Three neon bodies cross on seamless wrapped paths."),
  study("11-animated-mask", "Animated Mask", "mask,animation", "A moving matte reveals an aurora without leaking glow."),
  study("10-memory-braid", "Memory Braid", "history,composite", "Independent blue and amber memories weave together."),
  study("09-dual-decay-echo", "Dual Decay Echo", "history,feedback", "Two decay paths turn one history into layered echoes."),
  study("08-dual-energy-storm", "Dual Energy Storm", "noise,emission,composite", "Two independent energy fields collide over color."),
  study("07-delayed-feedback", "Delayed Feedback", "history,feedback", "Explicit previous-frame state leaves a fading memory."),
  study("06-layered-energy", "Layered Energy", "composite,graph", "A multi-stage image graph builds a richer field."),
  study("05-gradient-over-gradient", "Gradient Over Gradient", "gradient,composite", "Foreground and background blend in source-over order."),
  study("04-modulated-noise", "Modulated Noise", "noise,modulate", "One effect controls the strength of animated energy."),
  study("03-animated-noise", "Animated Noise", "noise,animation", "A seed and frame identity produce repeatable motion."),
  study("02-emissive-gradient", "Emissive Gradient", "gradient,emission", "Independent glow rises above display white."),
  study("01-horizontal-gradient", "Horizontal Gradient", "gradient,source", "The smallest direct generated-image flow."),
  study("00-scene-checker", "Scene Checker", "checker,source", "Exact scene-linear square parity with no external media."),
] as const satisfies readonly Study[];
