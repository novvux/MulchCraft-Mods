// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
  event.shaped('endrem:cursed_eye', [' # ', 'ABA', ' # '], { '#': 'extrabotany:nightmare_fuel', 'A': 'malum:wicked_spirit', 'B': 'enigmaticlegacyplus:evil_ingot' }).id('mulch:cursed_eye')
  event.shaped('endrem:old_eye', [' # ', 'ABA', ' # '], { '#': 'malum:hallowed_gold_ingot', 'A': 'botania:terrasteel_ingot', 'B': 'enigmaticlegacyplus:evil_ingot' }).id('kubejsstudio:old_eye')
  event.shaped('endrem:evil_eye', [' # ', 'ABA', ' # '], { '#': 'minecraft:end_crystal', 'A': 'mekanism:alloy_reinforced', 'B': 'enigmaticlegacyplus:evil_ingot' }).id('kubejsstudio:evil_eye')
})
