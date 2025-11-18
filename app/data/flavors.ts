import { Flavor } from './types';

export const flavorWheelData: { categories: Flavor[] } = {
  "categories": [
    {
      "id": "floral",
      "name": "Floral",
      "colorHex": "#E55388",
      "children": [
        { "id": "black-tea", "name": "Black Tea", "colorHex": "#D95B99", "children": [{ "id": "black-tea-l3", "name": "Black Tea", "colorHex": "#D95B99" }] },
        { "id": "floral-sub", "name": "Floral", "colorHex": "#E55388", "children": [{ "id": "chamomile-l3", "name": "Chamomile", "colorHex": "#F5D772" }, { "id": "rose-l3", "name": "Rose", "colorHex": "#E68C9C" }, { "id": "jasmine-l3", "name": "Jasmine", "colorHex": "#F2E2C2" }] }
      ]
    },
    {
      "id": "fruity",
      "name": "Fruity",
      "colorHex": "#D92D34",
      "children": [
        { "id": "berry", "name": "Berry", "colorHex": "#C7283A", "children": [{ "id": "blackberry-l3", "name": "Blackberry", "colorHex": "#4C2F3D" }, { "id": "raspberry-l3", "name": "Raspberry", "colorHex": "#E61D42" }, { "id": "blueberry-l3", "name": "Blueberry", "colorHex": "#465A8B" }, { "id": "strawberry-l3", "name": "Strawberry", "colorHex": "#E52D34" }, { "id": "cranberry-l3", "name": "Cranberry", "colorHex": "#C41E3A" }] },
        { "id": "dried-fruit", "name": "Dried Fruit", "colorHex": "#C04D40", "children": [{ "id": "raisin-l3", "name": "Raisin", "colorHex": "#B34C3F" }, { "id": "prune-l3", "name": "Prune", "colorHex": "#A64A42" }] },
        { "id": "other-fruit", "name": "Other Fruit", "colorHex": "#E66C4F", "children": [{ "id": "coconut-l3", "name": "Coconut", "colorHex": "#D9C7B9" }, { "id": "cherry-l3", "name": "Cherry", "colorHex": "#D92D34" }, { "id": "pomegranate-l3", "name": "Pomegranate", "colorHex": "#D92D34" }, { "id": "pineapple-l3", "name": "Pineapple", "colorHex": "#F2E2C2" }, { "id": "grape-l3", "name": "Grape", "colorHex": "#A64A42" }, { "id": "apple-l3", "name": "Apple", "colorHex": "#A4B352" }, { "id": "peach-l3", "name": "Peach", "colorHex": "#E66C4F" }, { "id": "pear-l3", "name": "Pear", "colorHex": "#DDC543" }] },
        { "id": "citrus-fruit", "name": "Citrus Fruit", "colorHex": "#EAAE3B", "children": [{ "id": "grapefruit-l3", "name": "Grapefruit", "colorHex": "#F26722" }, { "id": "orange-l3", "name": "Orange", "colorHex": "#F28522" }, { "id": "lemon-l3", "name": "Lemon", "colorHex": "#F2E2C2" }, { "id": "lime-l3", "name": "Lime", "colorHex": "#A4B352" }] }
      ]
    },
    {
      "id": "sour-fermented",
      "name": "Sour/Fermented",
      "colorHex": "#E5C33B",
      "children": [
        { "id": "sour", "name": "Sour", "colorHex": "#DDC543", "children": [{ "id": "sour-aromatics-l3", "name": "Sour Aromatics", "colorHex": "#DDC543" }, { "id": "acetic-acid-l3", "name": "Acetic Acid", "colorHex": "#DDC543" }, { "id": "butyric-acid-l3", "name": "Butyric Acid", "colorHex": "#DDC543" }, { "id": "isovaleric-acid-l3", "name": "Isovaleric Acid", "colorHex": "#DDC543" }, { "id": "citric-acid-l3", "name": "Citric Acid", "colorHex": "#F2E2C2" }, { "id": "malic-acid-l3", "name": "Malic Acid", "colorHex": "#A4B352" }] },
        { "id": "alcohol-fermented", "name": "Alcohol/Fermented", "colorHex": "#B4963E", "children": [{ "id": "winey-l3", "name": "Winey", "colorHex": "#B34C3F" }, { "id": "whiskey-l3", "name": "Whiskey", "colorHex": "#B4963E" }, { "id": "fermented-l3", "name": "Fermented", "colorHex": "#B4963E" }, { "id": "overripe-l3", "name": "Overripe", "colorHex": "#B4963E" }] }
      ]
    },
    {
      "id": "green-vegetative",
      "name": "Green/Vegetative",
      "colorHex": "#80B546",
      "children": [
        { "id": "olive-oil", "name": "Olive Oil", "colorHex": "#99A84F", "children": [{ "id": "olive-oil-l3", "name": "Olive Oil", "colorHex": "#99A84F" }] },
        { "id": "raw", "name": "Raw", "colorHex": "#6DAE51", "children": [{ "id": "raw-l3", "name": "Raw", "colorHex": "#6DAE51" }] },
        { "id": "vegetative", "name": "Vegetative", "colorHex": "#83A953", "children": [{ "id": "under-ripe-l3", "name": "Under-ripe", "colorHex": "#83A953" }, { "id": "peapod-l3", "name": "Peapod", "colorHex": "#83A953" }, { "id": "fresh-l3", "name": "Fresh", "colorHex": "#83A953" }, { "id": "dark-green-l3", "name": "Dark Green", "colorHex": "#83A953" }, { "id": "vegetative-l3", "name": "Vegetative", "colorHex": "#83A953" }, { "id": "hay-like-l3", "name": "Hay-like", "colorHex": "#D29E5A" }, { "id": "herb-like-l3", "name": "Herb-like", "colorHex": "#83A953" }] },
        { "id": "beany", "name": "Beany", "colorHex": "#A4B352", "children": [{ "id": "beany-l3", "name": "Beany", "colorHex": "#A4B352" }] }
      ]
    },
    {
      "id": "other",
      "name": "Other",
      "colorHex": "#41A4A5",
      "children": [
        { "id": "papery-musty", "name": "Papery/Musty", "colorHex": "#93A8A9", "children": [{ "id": "stale-l3", "name": "Stale", "colorHex": "#93A8A9" }, { "id": "cardboard-l3", "name": "Cardboard", "colorHex": "#93A8A9" }, { "id": "papery-l3", "name": "Papery", "colorHex": "#93A8A9" }, { "id": "woody-l3", "name": "Woody", "colorHex": "#93A8A9" }, { "id": "moldy-damp-l3", "name": "Moldy/Damp", "colorHex": "#93A8A9" }, { "id": "musty-dusty-l3", "name": "Musty/Dusty", "colorHex": "#93A8A9" }, { "id": "musty-earthy-l3", "name": "Musty/Earthy", "colorHex": "#93A8A9" }] },
        { "id": "chemical", "name": "Chemical", "colorHex": "#6DAEC1", "children": [{ "id": "bitter-l3", "name": "Bitter", "colorHex": "#6DAEC1" }, { "id": "salty-l3", "name": "Salty", "colorHex": "#6DAEC1" }, { "id": "medicinal-l3", "name": "Medicinal", "colorHex": "#6DAEC1" }, { "id": "petroleum-l3", "name": "Petroleum", "colorHex": "#6DAEC1" }, { "id": "skunky-l3", "name": "Skunky", "colorHex": "#6DAEC1" }, { "id": "rubber-l3", "name": "Rubber", "colorHex": "#000000" }] }
      ]
    },
    {
      "id": "roasted",
      "name": "Roasted",
      "colorHex": "#C26938",
      "children": [
        { "id": "pipe-tobacco", "name": "Pipe Tobacco", "colorHex": "#B9854D", "children": [{ "id": "pipe-tobacco-l3", "name": "Tobacco", "colorHex": "#B9854D" }] },
        { "id": "tobacco", "name": "Tobacco", "colorHex": "#A87B4F", "children": [{ "id": "tobacco-l3", "name": "Tobacco", "colorHex": "#A87B4F" }] },
        { "id": "burnt", "name": "Burnt", "colorHex": "#9A683E", "children": [{ "id": "acrid-l3", "name": "Acrid", "colorHex": "#9A683E" }, { "id": "ashy-l3", "name": "Ashy", "colorHex": "#9A683E" }, { "id": "smoky-l3", "name": "Smoky", "colorHex": "#9A683E" }, { "id": "brown-roast-l3", "name": "Brown, Roast", "colorHex": "#9A683E" }] },
        { "id": "cereal", "name": "Cereal", "colorHex": "#D29E5A", "children": [{ "id": "malt-l3", "name": "Malt", "colorHex": "#D29E5A" }, { "id": "grain-l3", "name": "Grain", "colorHex": "#D29E5A" }] }
      ]
    },
    {
      "id": "spices",
      "name": "Spices",
      "colorHex": "#9E2A35",
      "children": [
        { "id": "pungent", "name": "Pungent", "colorHex": "#C8523B", "children": [{ "id": "pepper-l3", "name": "Pepper", "colorHex": "#C8523B" }, { "id": "pungent-l3", "name": "Pungent", "colorHex": "#C8523B" }] },
        { "id": "brown-spice", "name": "Brown Spice", "colorHex": "#A0534B", "children": [{ "id": "anise-l3", "name": "Anise", "colorHex": "#A0534B" }, { "id": "nutmeg-l3", "name": "Nutmeg", "colorHex": "#A0534B" }, { "id": "cinnamon-l3", "name": "Cinnamon", "colorHex": "#A0534B" }, { "id": "clove-l3", "name": "Clove", "colorHex": "#A0534B" }] }
      ]
    },
    {
      "id": "nutty-cocoa",
      "name": "Nutty/Cocoa",
      "colorHex": "#8D5B4C",
      "children": [
        { "id": "nutty", "name": "Nutty", "colorHex": "#8D5B4C", "children": [{ "id": "peanuts-l3", "name": "Peanuts", "colorHex": "#8D5B4C" }, { "id": "hazelnut-l3", "name": "Hazelnut", "colorHex": "#8D5B4C" }, { "id": "almond-l3", "name": "Almond", "colorHex": "#8D5B4C" }] },
        { "id": "cocoa", "name": "Cocoa", "colorHex": "#704A3A", "children": [{ "id": "chocolate-l3", "name": "Chocolate", "colorHex": "#704A3A" }, { "id": "dark-chocolate-l3", "name": "Dark Chocolate", "colorHex": "#704A3A" }] }
      ]
    },
    {
      "id": "sweet",
      "name": "Sweet",
      "colorHex": "#E6854E",
      "children": [
        { "id": "brown-sugar", "name": "Brown Sugar", "colorHex": "#D8734A", "children": [{ "id": "molasses-l3", "name": "Molasses", "colorHex": "#D8734A" }, { "id": "maple-syrup-l3", "name": "Maple Syrup", "colorHex": "#D8734A" }, { "id": "caramelized-l3", "name": "Caramelized", "colorHex": "#D8734A" }, { "id": "honey-l3", "name": "Honey", "colorHex": "#D8734A" }, { "id": "brown-sugar-l3", "name": "Brown Sugar", "colorHex": "#D8734A" }] },
        { "id": "vanillin", "name": "Vanillin", "colorHex": "#E89A5E", "children": [{ "id": "vanilla-l3", "name": "Vanilla", "colorHex": "#E89A5E" }, { "id": "vanillin-l3", "name": "Vanillin", "colorHex": "#E89A5E" }] },
        { "id": "overall-sweet", "name": "Overall Sweet", "colorHex": "#E7855A", "children": [{ "id": "overall-sweet-l3", "name": "Overall Sweet", "colorHex": "#E7855A" }] },
        { "id": "sweet-aromatics", "name": "Sweet Aromatics", "colorHex": "#E27456", "children": [{ "id": "sweet-aromatics-l3", "name": "Sweet Aromatics", "colorHex": "#E27456" }] }
      ]
    }
  ]
};
