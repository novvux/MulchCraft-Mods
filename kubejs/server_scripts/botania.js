ServerEvents.recipes(event => {
  event.recipes.thaumaturge.infusion(
    'extrabotany:pleiades_combat_maid_headgear',
    'botania:terrasteel_helmet',
    ['enigmaticlegacyplus:etherium_helmet', 'botania:gaia_ingot', 'botania:gaia_ingot', 'thaumaturge:salis_mundus', 'astralsorcery:perk_seal', 'apotheosis:arcane_sands', 'mekanism:alloy_atomic'],
    { 'thaumaturge:praemunio': 100, 'thaumaturge:aversio': 100, 'thaumaturge:spiritus': 50, 'thaumaturge:humanus': 25, 'thaumaturge:victus': 25 }
  )
    .instability(20)
    .id('extrabotany:pleiades_combat_maid_headgear')

  event.recipes.thaumaturge.infusion(
    'extrabotany:pleiades_combat_maid_suit',
    'botania:terrasteel_chestplate',
    ['enigmaticlegacyplus:etherium_chestplate', 'botania:gaia_ingot', 'botania:gaia_ingot', 'thaumaturge:salis_mundus', 'astralsorcery:perk_seal', 'apotheosis:arcane_sands', 'mekanism:alloy_atomic'],
    { 'thaumaturge:praemunio': 100, 'thaumaturge:aversio': 100, 'thaumaturge:spiritus': 50, 'thaumaturge:humanus': 25, 'thaumaturge:victus': 25 }
  )
    .instability(20)
    .id('extrabotany:pleiades_combat_maid_suit')

  event.recipes.thaumaturge.infusion(
    'extrabotany:pleiades_combat_maid_skirt',
    'botania:terrasteel_leggings',
    ['enigmaticlegacyplus:etherium_leggings', 'botania:gaia_ingot', 'botania:gaia_ingot', 'thaumaturge:salis_mundus', 'astralsorcery:perk_seal', 'apotheosis:arcane_sands', 'mekanism:alloy_atomic'],
    { 'thaumaturge:praemunio': 100, 'thaumaturge:aversio': 100, 'thaumaturge:spiritus': 50, 'thaumaturge:humanus': 25, 'thaumaturge:victus': 25 }
  )
    .instability(20)
    .id('extrabotany:pleiades_combat_maid_skirt')

  event.recipes.thaumaturge.infusion(
    'extrabotany:pleiades_combat_maid_boots',
    'botania:terrasteel_boots',
    ['enigmaticlegacyplus:etherium_boots', 'botania:gaia_ingot', 'botania:gaia_ingot', 'thaumaturge:salis_mundus', 'astralsorcery:perk_seal', 'apotheosis:arcane_sands', 'mekanism:alloy_atomic'],
    { 'thaumaturge:praemunio': 100, 'thaumaturge:aversio': 100, 'thaumaturge:spiritus': 50, 'thaumaturge:humanus': 25, 'thaumaturge:victus': 25 }
  )
    .instability(20)
    .id('extrabotany:pleiades_combat_maid_boots')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [' TTAL', '   MA', '  S T', 'TS  T', 'TT   '],
    key: {
      A: { item: 'mekanism:alloy_atomic' },
      T: { item: 'botania:terrasteel_ingot' },
//      E: { item: 'enigmaticlegacyplus:evil_ingot' },
      M: { item: 'botania:mana_tablet' },
      S: { item: 'botania:livingwood_twig' },
      L: { item: 'botania:livingwood_log' }
    },
    result: { id: 'botania:terra_pick', count: 1 }
  }).id('botania:terra_pick')
})
