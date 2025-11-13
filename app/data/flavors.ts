import { Flavor } from './types';

export const flavorWheelData: { categories: Flavor[] } = {
  "categories": [
    {
      "id": "floral",
      "name": "Floral",
      "color_hex": "#E55388",
      "children": [
        { "id": "black-tea", "name": "Black Tea", "color_hex": "#D95B99", "children": [{ "id": "black-tea-l3", "name": "Black Tea", "color_hex": "#D95B99" }] },
        { "id": "floral-sub", "name": "Floral", "color_hex": "#E55388", "children": [{ "id": "chamomile-l3", "name": "Chamomile", "color_hex": "#F5D772" }, { "id": "rose-l3", "name": "Rose", "color_hex": "#E68C9C" }, { "id": "jasmine-l3", "name": "Jasmine", "color_hex": "#F2E2C2" }] }
      ]
    },
    {
      "id": "fruity",
      "name": "Fruity",
      "color_hex": "#D92D34",
      "children": [
        { "id": "berry", "name": "Berry", "color_hex": "#C7283A", "children": [{ "id": "blackberry-l3", "name": "Blackberry", "color_hex": "#4C2F3D" }, { "id": "raspberry-l3", "name": "Raspberry", "color_hex": "#E61D42" }, { "id": "blueberry-l3", "name": "Blueberry", "color_hex": "#465A8B" }, { "id": "strawberry-l3", "name": "Strawberry", "color_hex": "#E52D34" }, { "id": "cranberry-l3", "name": "Cranberry", "color_hex": "#C41E3A" }] },
        { "id": "dried-fruit", "name": "Dried Fruit", "color_hex": "#C04D40", "children": [{ "id": "raisin-l3", "name": "Raisin", "color_hex": "#B34C3F" }, { "id": "prune-l3", "name": "Prune", "color_hex": "#A64A42" }] },
        { "id": "other-fruit", "name": "Other Fruit", "color_hex": "#E66C4F", "children": [{ "id": "coconut-l3", "name": "Coconut", "color_hex": "#D9C7B9" }, { "id": "cherry-l3", "name": "Cherry", "color_hex": "#D92D34" }, { "id": "pomegranate-l3", "name": "Pomegranate", "color_hex": "#D92D34" }, { "id": "pineapple-l3", "name": "Pineapple", "color_hex": "#F2E2C2" }, { "id": "grape-l3", "name": "Grape", "color_hex": "#A64A42" }, { "id": "apple-l3", "name": "Apple", "color_hex": "#A4B352" }, { "id": "peach-l3", "name": "Peach", "color_hex": "#E66C4F" }, { "id": "pear-l3", "name": "Pear", "color_hex": "#DDC543" }] },
        { "id": "citrus-fruit", "name": "Citrus Fruit", "color_hex": "#EAAE3B", "children": [{ "id": "grapefruit-l3", "name": "Grapefruit", "color_hex": "#F26722" }, { "id": "orange-l3", "name": "Orange", "color_hex": "#F28522" }, { "id": "lemon-l3", "name": "Lemon", "color_hex": "#F2E2C2" }, { "id": "lime-l3", "name": "Lime", "color_hex": "#A4B352" }] }
      ]
    },
    {
      "id": "sour-fermented",
      "name": "Sour/Fermented",
      "color_hex": "#E5C33B",
      "children": [
        { "id": "sour", "name": "Sour", "color_hex": "#DDC543", "children": [{ "id": "sour-aromatics-l3", "name": "Sour Aromatics", "color_hex": "#DDC543" }, { "id": "acetic-acid-l3", "name": "Acetic Acid", "color_hex": "#DDC543" }, { "id": "butyric-acid-l3", "name": "Butyric Acid", "color_hex": "#DDC543" }, { "id": "isovaleric-acid-l3", "name": "Isovaleric Acid", "color_hex": "#DDC543" }, { "id": "citric-acid-l3", "name": "Citric Acid", "color_hex": "#F2E2C2" }, { "id": "malic-acid-l3", "name": "Malic Acid", "color_hex": "#A4B352" }] },
        { "id": "alcohol-fermented", "name": "Alcohol/Fermented", "color_hex": "#B4963E", "children": [{ "id": "winey-l3", "name": "Winey", "color_hex": "#B34C3F" }, { "id": "whiskey-l3", "name": "Whiskey", "color_hex": "#B4963E" }, { "id": "fermented-l3", "name": "Fermented", "color_hex": "#B4963E" }, { "id": "overripe-l3", "name": "Overripe", "color_hex": "#B4963E" }] }
      ]
    },
    {
      "id": "green-vegetative",
      "name": "Green/Vegetative",
      "color_hex": "#80B546",
      "children": [
        { "id": "olive-oil", "name": "Olive Oil", "color_hex": "#99A84F", "children": [{ "id": "olive-oil-l3", "name": "Olive Oil", "color_hex": "#99A84F" }] },
        { "id": "raw", "name": "Raw", "color_hex": "#6DAE51", "children": [{ "id": "raw-l3", "name": "Raw", "color_hex": "#6DAE51" }] },
        { "id": "vegetative", "name": "Vegetative", "color_hex": "#83A953", "children": [{ "id": "under-ripe-l3", "name": "Under-ripe", "color_hex": "#83A953" }, { "id": "peapod-l3", "name": "Peapod", "color_hex": "#83A953" }, { "id": "fresh-l3", "name": "Fresh", "color_hex": "#83A953" }, { "id": "dark-green-l3", "name": "Dark Green", "color_hex": "#83A953" }, { "id": "vegetative-l3", "name": "Vegetative", "color_hex": "#83A953" }, { "id": "hay-like-l3", "name": "Hay-like", "color_hex": "#D29E5A" }, { "id": "herb-like-l3", "name": "Herb-like", "color_hex": "#83A953" }] },
        { "id": "beany", "name": "Beany", "color_hex": "#A4B352", "children": [{ "id": "beany-l3", "name": "Beany", "color_hex": "#A4B352" }] }
      ]
    },
    {
      "id": "other",
      "name": "Other",
      "color_hex": "#41A4A5",
      "children": [
        { "id": "papery-musty", "name": "Papery/Musty", "color_hex": "#93A8A9", "children": [{ "id": "stale-l3", "name": "Stale", "color_hex": "#93A8A9" }, { "id": "cardboard-l3", "name": "Cardboard", "color_hex": "#93A8A9" }, { "id": "papery-l3", "name": "Papery", "color_hex": "#93A8A9" }, { "id": "woody-l3", "name": "Woody", "color_hex": "#93A8A9" }, { "id": "moldy-damp-l3", "name": "Moldy/Damp", "color_hex": "#93A8A9" }, { "id": "musty-dusty-l3", "name": "Musty/Dusty", "color_hex": "#93A8A9" }, { "id": "musty-earthy-l3", "name": "Musty/Earthy", "color_hex": "#93A8A9" }] },
        { "id": "chemical", "name": "Chemical", "color_hex": "#6DAEC1", "children": [{ "id": "bitter-l3", "name": "Bitter", "color_hex": "#6DAEC1" }, { "id": "salty-l3", "name": "Salty", "color_hex": "#6DAEC1" }, { "id": "medicinal-l3", "name": "Medicinal", "color_hex": "#6DAEC1" }, { "id": "petroleum-l3", "name": "Petroleum", "color_hex": "#6DAEC1" }, { "id": "skunky-l3", "name": "Skunky", "color_hex": "#6DAEC1" }, { "id": "rubber-l3", "name": "Rubber", "color_hex": "#000000" }] }
      ]
    },
    {
      "id": "roasted",
      "name": "Roasted",
      "color_hex": "#C26938",
      "children": [
        { "id": "pipe-tobacco", "name": "Pipe Tobacco", "color_hex": "#B9854D", "children": [{ "id": "pipe-tobacco-l3", "name": "Tobacco", "color_hex": "#B9854D" }] },
        { "id": "tobacco", "name": "Tobacco", "color_hex": "#A87B4F", "children": [{ "id": "tobacco-l3", "name": "Tobacco", "color_hex": "#A87B4F" }] },
        { "id": "burnt", "name": "Burnt", "color_hex": "#9A683E", "children": [{ "id": "acrid-l3", "name": "Acrid", "color_hex": "#9A683E" }, { "id": "ashy-l3", "name": "Ashy", "color_hex": "#9A683E" }, { "id": "smoky-l3", "name": "Smoky", "color_hex": "#9A683E" }, { "id": "brown-roast-l3", "name": "Brown, Roast", "color_hex": "#9A683E" }] },
        { "id": "cereal", "name": "Cereal", "color_hex": "#D29E5A", "children": [{ "id": "malt-l3", "name": "Malt", "color_hex": "#D29E5A" }, { "id": "grain-l3", "name": "Grain", "color_hex": "#D29E5A" }] }
      ]
    },
    {
      "id": "spices",
      "name": "Spices",
      "color_hex": "#9E2A35",
      "children": [
        { "id": "pungent", "name": "Pungent", "color_hex": "#C8523B", "children": [{ "id": "pepper-l3", "name": "Pepper", "color_hex": "#C8523B" }, { "id": "pungent-l3", "name": "Pungent", "color_hex": "#C8523B" }] },
        { "id": "brown-spice", "name": "Brown Spice", "color_hex": "#A0534B", "children": [{ "id": "anise-l3", "name": "Anise", "color_hex": "#A0534B" }, { "id": "nutmeg-l3", "name": "Nutmeg", "color_hex": "#A0534B" }, { "id": "cinnamon-l3", "name": "Cinnamon", "color_hex": "#A0534B" }, { "id": "clove-l3", "name": "Clove", "color_hex": "#A0534B" }] }
      ]
    },
    {
      "id": "nutty-cocoa",
      "name": "Nutty/Cocoa",
      "color_hex": "#8D5B4C",
      "children": [
        { "id": "nutty", "name": "Nutty", "color_hex": "#8D5B4C", "children": [{ "id": "peanuts-l3", "name": "Peanuts", "color_hex": "#8D5B4C" }, { "id": "hazelnut-l3", "name": "Hazelnut", "color_hex": "#8D5B4C" }, { "id": "almond-l3", "name": "Almond", "color_hex": "#8D5B4C" }] },
        { "id": "cocoa", "name": "Cocoa", "color_hex": "#704A3A", "children": [{ "id": "chocolate-l3", "name": "Chocolate", "color_hex": "#704A3A" }, { "id": "dark-chocolate-l3", "name": "Dark Chocolate", "color_hex": "#704A3A" }] }
      ]
    },
    {
      "id": "sweet",
      "name": "Sweet",
      "color_hex": "#E6854E",
      "children": [
        { "id": "brown-sugar", "name": "Brown Sugar", "color_hex": "#D8734A", "children": [{ "id": "molasses-l3", "name": "Molasses", "color_hex": "#D8734A" }, { "id": "maple-syrup-l3", "name": "Maple Syrup", "color_hex": "#D8734A" }, { "id": "caramelized-l3", "name": "Caramelized", "color_hex": "#D8734A" }, { "id": "honey-l3", "name": "Honey", "color_hex": "#D8734A" }, { "id": "brown-sugar-l3", "name": "Brown Sugar", "color_hex": "#D8734A" }] },
        { "id": "vanillin", "name": "Vanillin", "color_hex": "#E89A5E", "children": [{ "id": "vanilla-l3", "name": "Vanilla", "color_hex": "#E89A5E" }, { "id": "vanillin-l3", "name": "Vanillin", "color_hex": "#E89A5E" }] },
        { "id": "overall-sweet", "name": "Overall Sweet", "color_hex": "#E7855A", "children": [{ "id": "overall-sweet-l3", "name": "Overall Sweet", "color_hex": "#E7855A" }] },
        { "id": "sweet-aromatics", "name": "Sweet Aromatics", "color_hex": "#E27456", "children": [{ "id": "sweet-aromatics-l3", "name": "Sweet Aromatics", "color_hex": "#E27456" }] }
      ]
    }
  ]
};
