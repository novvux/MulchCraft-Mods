
ServerEvents.recipes(event => {
  event.recipes.create.mixing(Item.of('mekanism:alloy_infused', 2), ['minecraft:copper_ingot', Item.of('minecraft:redstone', 2)])
 
  // Reinforced
  event.recipes.create.crushing(['mekanism:dust_diamond', CreateItem.of('minecraft:diamond', 0.1)], 'minecraft:diamond')
  event.recipes.create.mixing([Item.of('mekanism:alloy_reinforced', 1), CreateItem.of('mekanism:dust_diamond', 0.1)], [Item.of('mekanism:alloy_infused', 4),'mekanism:dust_diamond']).heated()
  event.recipes.create.mixing([Item.of('mekanism:alloy_reinforced', 4), CreateItem.of('mekanism:dust_diamond', 0.2)], [Item.of('mekanism:alloy_infused', 4),'mekanism:enriched_diamond']).heated()
  event.recipes.create.compacting('minecraft:diamond', 'mekanism:dust_diamond').superheated()
  
  // Atomic
  event.recipes.create.mixing(['mekanism:dust_refined_obsidian', CreateItem.of('mekanism:dust_diamond', 0.1)], [Ingredient.of('#c:dusts/obsidian'), 'mekanism:dust_diamond']).superheated()
    event.recipes.create.mixing([Item.of('mekanism:dust_refined_obsidian', 8), CreateItem.of('mekanism:dust_diamond', 0.2)], [    Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#c:dusts/obsidian'), 'mekanism:enriched_diamond']).superheated()
  event.recipes.create.mixing([Item.of('mekanism:alloy_atomic', 1), CreateItem.of('mekanism:dust_refined_obsidian', 0.1)], ['mekanism:alloy_reinforced', Item.of('mekanism:dust_refined_obsidian', 4)]).superheated()
  event.recipes.create.mixing([Item.of('mekanism:alloy_atomic', 2), CreateItem.of('mekanism:dust_refined_obsidian', 0.1)], [Item.of('mekanism:alloy_reinforced', 2), Item.of('mekanism:enriched_refined_obsidian', 1)]).superheated()
  
  // Enriching
  event.recipes.create.mixing(['mekanism:enriched_diamond', CreateItem.of('mekanism:dust_coal', 0.5)], ['minecraft:diamond', '#minecraft:coals']).superheated()
  event.recipes.create.mixing(['mekanism:enriched_refined_obsidian', CreateItem.of('mekanism:dust_coal', 0.5)], [Ingredient.of('#c:dusts/obsidian'), Ingredient.of('#minecraft:coals')]).superheated()
})