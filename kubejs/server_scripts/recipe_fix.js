//Made by Fluffy Bumblebee
onEvent('recipes', event => {
    event.shaped('enriched:steel_pickaxe', [
      'EEE',
      ' S ',
      ' S '
      ], {
      S: 'minecraft:stick',
      E: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_hoe', [
      'EE ',
      ' S ',
      ' S '
      ], {
      S: 'minecraft:stick',
      E: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_shovel', [
      ' E ',
      ' S ',
      ' S '
      ], {
      S: 'minecraft:stick',
      E: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_axe', [
      ' EE',
      ' SE',
      ' S '
      ], {
      S: 'minecraft:stick',
      E: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_sword', [
      ' E ',
      ' E ',
      ' S '
      ], {
      S: 'minecraft:stick',
      E: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_boots', [
      '   ',
      'S S',
      'S S'
      ], {
      S: 'modern_industrialization:steel_ingot'
    })
     event.shaped('enriched:steel_leggings', [
      'SSS',
      'S S',
      'S S'
      ], {
      S: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_chestplate', [
      'S S',
      'SSS',
      'SSS'
      ], {
      S: 'modern_industrialization:steel_ingot'
    })
    event.shaped('enriched:steel_helmet', [
      'SSS',
      'S S',
      '   '
      ], {
      S: 'modern_industrialization:steel_ingot'
    })
    event.remove({id: 'enriched:gold_block_smelting'})
    event.remove({id: 'enriched:gold_block_blasting'})
    event.remove({id: 'charm:extra_recipes/gold_block_from_blasting_raw_gold_block'})
    event.remove({id: 'enriched:iron_block_smelting'})
    event.remove({id: 'enriched:iron_block_blasting'})
    event.remove({id: 'charm:extra_recipes/iron_block_from_blasting_raw_iron_block'})
    event.remove({id: 'architects_palette/unobtanium_from_unobtanium_block'})
    event.shapeless('4x architects_palette:unobtanium', 'architects_palette:unobtanium_block')
    event.replaceInput('#mythicmetals:unobtainium_ores', '#c:unobtainium_ores')
    event.remove({output: 'mythicmetals:unobtainium', type: 'create:crushing'})
    event.smelting('mythicmetals:unobtainium', '#c:unobtainium_ores').xp(0.4)
    event.recipes.createCrushing([
    '2x mythicmetals:unobtainium',
    Item.of('mythicmetals:unobtainium').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    'minecraft:cobblestone'],
    '#c:unobtainium_ores')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "tag": "c:unobtainium_ores"
        }],
    "results": [
        {
        "item": "mythicmetals:unobtainium",
        "count": 2
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:unobtainium_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:unobtainium",
        "amount": 2
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "tag": "c:unobtainium_ores"
        },
    "output": {
        "item": "mythicmetals:unobtainium",
        "count": 2
        },
    "processTime": 200,
    })
	event.smelting('modern_industrialization:titanium_ingot', 'modern_industrialization:raw_titanium').xp(0.7)
	event.blasting('modern_industrialization:titanium_ingot', 'modern_industrialization:raw_titanium').xp(0.7)
	//Desh machine Processing
	event.remove({output: 'ad_astra:desh_plate'})
	event.custom({
	"type": "indrev:compress",
	"ingredients": {
		"item": "ad_astra:desh_ingot"
	},
	"output": {
		"item": "ad_astra:desh_plate"
	},
	"processTime": 400
	})
	event.recipes.createPressing('ad_astra:compressed_desh', 'ad_astra:desh_ingot')
	event.custom({
	"type": "modern_industrialization:compressor",
	"eu": 4,
	"duration": 300,
	"item_inputs": {
		"item": "ad_astra:desh_ingot"
	},
	"item_outputs": {
		"item": "ad_astra:compressed_desh"
	}})
	event.custom({
	"type": "techreborn:compressor",
	"power": 10,
	"time": 300,
	"ingredients": [
		{
		"item": "ad_astra:desh_ingot"
		}],
	"results": [
		{
		"item": "ad_astra:compressed_desh"
		}]
	})
	event.remove({output: 'coxinhautilities:copper_ladder'})
	event.shaped('3x coxinhautilities:copper_ladder', [
      'CSC',
      'CCC',
      'CSC'
      ], {
      C: 'modern_industrialization:copper_rod',
	  S: 'minecraft:shulker_shell'
    })
	event.shaped('3x create:copper_ladder', [
      'C C',
      'CCC',
      'C C'
      ], {
      C: 'modern_industrialization:copper_rod',
    })
	event.smelting('ad_astra:desh_block', 'ad_astra:raw_desh_block').xp(9).cookingTime(1500)
	event.smelting('ad_astra:ostrum_block', 'ad_astra:raw_ostrum_block').xp(9).cookingTime(1500)
	event.smelting('ad_astra:calorite_block', 'ad_astra:raw_calorite_block').xp(9).cookingTime(1500)
})
