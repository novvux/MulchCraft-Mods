ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' })
  event.recipes.mekanism.metallurgic_infusing(
      'mekanism:alloy_infused',
      'thaumaturge:ingot_thaumium',
      '20x mekanism:redstone'
  )
})
