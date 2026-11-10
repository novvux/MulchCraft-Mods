// Куда залез?

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly(
    // Outputs:
    CreateItem.of('create:precision_mechanism'), // Main output, will appear in JEI as the result
    // Input:
    'malum:hallowed_gold_ingot', //'#c:plates/brass', 
    // Sequence:
    [
      // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
      // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel',]),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget',]),
    ]
  )
  .transitionalItem('create:incomplete_precision_mechanism') // Set the transitional item
  .loops(5) // Set the number of loops
  .id('create:sequenced_assembly/precision_mechanism')
    
  // Остатки старых идей
  //event.recipes.create.mixing(Item.of('mekanism:alloy_infused', 2), ['minecraft:copper_ingot', Item.of('minecraft:redstone', 2)])
 
  // Reinforced
  //event.recipes.create.crushing(['mekanism:dust_diamond', CreateItem.of('minecraft:diamond', 0.1)], 'minecraft:diamond')
  //event.recipes.create.mixing([Item.of('mekanism:alloy_reinforced', 1), CreateItem.of('mekanism:dust_diamond', 0.1)], [Item.of('mekanism:alloy_infused', 4),'mekanism:dust_diamond']).heated()
  //event.recipes.create.mixing([Item.of('mekanism:alloy_reinforced', 4), CreateItem.of('mekanism:dust_diamond', 0.2)], [Item.of('mekanism:alloy_infused', 4),'mekanism:enriched_diamond']).heated()
  //event.recipes.create.compacting('minecraft:diamond', 'mekanism:dust_diamond').superheated()
  
  // Atomic
  //event.recipes.create.mixing(['mekanism:dust_refined_obsidian', CreateItem.of('mekanism:dust_diamond', 0.1)], [Ingredient.of('#c:dusts/obsidian'), 'mekanism:dust_diamond']).superheated()
  //event.recipes.create.mixing([Item.of('mekanism:dust_refined_obsidian', 8), CreateItem.of('mekanism:dust_diamond', 0.2)], [    Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), 'mekanism:enriched_diamond']).superheated()
  //event.recipes.create.mixing([Item.of('mekanism:alloy_atomic', 1), CreateItem.of('mekanism:dust_refined_obsidian', 0.1)], ['mekanism:alloy_reinforced', Item.of('mekanism:dust_refined_obsidian', 4)]).superheated()
  //event.recipes.create.mixing([Item.of('mekanism:alloy_atomic', 2), CreateItem.of('mekanism:dust_refined_obsidian', 0.1)], [Item.of('mekanism:alloy_reinforced', 2), Item.of('mekanism:enriched_refined_obsidian', 1)]).superheated()
  
  // Enriching
  //event.recipes.create.mixing(['mekanism:enriched_diamond', CreateItem.of('mekanism:dust_coal', 0.5)], ['minecraft:diamond', '#minecraft:coals']).superheated()
  //event.recipes.create.mixing(['mekanism:enriched_refined_obsidian', CreateItem.of('mekanism:dust_coal', 0.5)], [Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#minecraft:coals')]).superheated()
})