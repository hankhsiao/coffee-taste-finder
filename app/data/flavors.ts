import { Flavor } from './types';

export const flavorWheelData: { categories: Flavor[] } = {
  "categories": [
    {
      "id": "floral",
      "name": "Floral",
      "color_hex": "#E55388",
      "children": [
        { "id": "black-tea", "name": "Black Tea", "color_hex": "#D95B99", "children": [{ "name": "Black Tea", "color_hex": "#D95B99" }] },
        { "id": "floral-sub", "name": "Floral", "color_hex": "#E55388", "children": [{ "name": "Chamomile", "color_hex": "#F5D772" }, { "name": "Rose", "color_hex": "#E68C9C" }, { "name": "Jasmine", "color_hex": "#F2E2C2" }] }
      ]
    },
    {
      "id": "fruity",
      "name": "Fruity",
      "color_hex": "#D92D34",
      "children": [
        { "id": "berry", "name": "Berry", "color_hex": "#C7283A", "children": [{ "name": "Blackberry", "color_hex": "#4C2F3D" }, { "name": "Raspberry", "color_hex": "#E61D42" }, { "name": "Blueberry", "color_hex": "#465A8B" }, { "name": "Strawberry", "color_hex": "#E52D34" }] },
        { "id": "dried-fruit", "name": "Dried Fruit", "color_hex": "#C04D40", "children": [{ "name": "Raisin", "color_hex": "#B34C3F" }, { "name": "Prune", "color_hex": "#A64A42" }] },
        { "id": "other-fruit", "name": "Other Fruit", "color_hex": "#E66C4F", "children": [{ "name": "Coconut", "color_hex": "#D9C7B9" }, { "name": "Cherry", "color_hex": "#D92D34" }, { "name": "Pomegranate", "color_hex": "#D92D34" }, { "name": "Pineapple", "color_hex": "#F2E2C2" }, { "name": "Grape", "color_hex": "#A64A42" }, { "name": "Apple", "color_hex": "#A4B352" }, { "name": "Peach", "color_hex": "#E66C4F" }, { "name": "Pear", "color_hex": "#DDC543" }] },
        { "id": "citrus-fruit", "name": "Citrus Fruit", "color_hex": "#EAAE3B", "children": [{ "name": "Grapefruit", "color_hex": "#F26722" }, { "name": "Orange", "color_hex": "#F28522" }, { "name": "Lemon", "color_hex": "#F2E2C2" }, { "name": "Lime", "color_hex": "#A4B352" }] }
      ]
    },
    {
      "id": "sour-fermented",
      "name": "Sour/Fermented",
      "color_hex": "#E5C33B",
      "children": [
        { "id": "sour", "name": "Sour", "color_hex": "#DDC543", "children": [{ "name": "Sour Aromatics", "color_hex": "#DDC543" }, { "name": "Acetic Acid", "color_hex": "#DDC543" }, { "name": "Butyric Acid", "color_hex": "#DDC543" }, { "name": "Isovaleric Acid", "color_hex": "#DDC543" }, { "name": "Citric Acid", "color_hex": "#F2E2C2" }, { "name": "Malic Acid", "color_hex": "#A4B352" }] },
        { "id": "alcohol-fermented", "name": "Alcohol/Fermented", "color_hex": "#B4963E", "children": [{ "name": "Winey", "color_hex": "#B34C3F" }, { "name": "Whiskey", "color_hex": "#B4963E" }, { "name": "Fermented", "color_hex": "#B4963E" }, { "name": "Overripe", "color_hex": "#B4963E" }] }
      ]
    },
    {
      "id": "green-vegetative",
      "name": "Green/Vegetative",
      "color_hex": "#80B546",
      "children": [
        { "id": "olive-oil", "name": "Olive Oil", "color_hex": "#99A84F", "children": [{ "name": "Olive Oil", "color_hex": "#99A84F" }] },
        { "id": "raw", "name": "Raw", "color_hex": "#6DAE51", "children": [{ "name": "Raw", "color_hex": "#6DAE51" }] },
        { "id": "vegetative", "name": "Vegetative", "color_hex": "#83A953", "children": [{ "name": "Under-ripe", "color_hex": "#83A953" }, { "name": "Peapod", "color_hex": "#83A953" }, { "name": "Fresh", "color_hex": "#83A953" }, { "name": "Dark Green", "color_hex": "#83A953" }, { "name": "Vegetative", "color_hex": "#83A953" }, { "name": "Hay-like", "color_hex": "#D29E5A" }, { "name": "Herb-like", "color_hex": "#83A953" }] },
        { "id": "beany", "name": "Beany", "color_hex": "#A4B352", "children": [{ "name": "Beany", "color_hex": "#A4B352" }] }
      ]
    },
    {
      "id": "other",
      "name": "Other",
      "color_hex": "#41A4A5",
      "children": [
        { "id": "papery-musty", "name": "Papery/Musty", "color_hex": "#93A8A9", "children": [{ "name": "Stale", "color_hex": "#93A8A9" }, { "name": "Cardboard", "color_hex": "#93A8A9" }, { "name": "Papery", "color_hex": "#93A8A9" }, { "name": "Woody", "color_hex": "#93A8A9" }, { "name": "Moldy/Damp", "color_hex": "#93A8A9" }, { "name": "Musty/Dusty", "color_hex": "#93A8A9" }, { "name": "Musty/Earthy", "color_hex": "#93A8A9" }] },
        { "id": "chemical", "name": "Chemical", "color_hex": "#6DAEC1", "children": [{ "name": "Bitter", "color_hex": "#6DAEC1" }, { "name": "Salty", "color_hex": "#6DAEC1" }, { "name": "Medicinal", "color_hex": "#6DAEC1" }, { "name": "Petroleum", "color_hex": "#6DAEC1" }, { "name": "Skunky", "color_hex": "#6DAEC1" }, { "name": "Rubber", "color_hex": "#000000" }] }
      ]
    },
    {
      "id": "roasted",
      "name": "Roasted",
      "color_hex": "#C26938",
      "children": [
        { "id": "pipe-tobacco", "name": "Pipe Tobacco", "color_hex": "#B9854D", "children": [{ "name": "Tobacco", "color_hex": "#B9854D" }] },
        { "id": "tobacco", "name": "Tobacco", "color_hex": "#A87B4F", "children": [{ "name": "Tobacco", "color_hex": "#A87B4F" }] },
        { "id": "burnt", "name": "Burnt", "color_hex": "#9A683E", "children": [{ "name": "Acrid", "color_hex": "#9A683E" }, { "name": "Ashy", "color_hex": "#9A683E" }, { "name": "Smoky", "color_hex": "#9A683E" }, { "name": "Brown, Roast", "color_hex": "#9A683E" }] },
        { "id": "cereal", "name": "Cereal", "color_hex": "#D29E5A", "children": [{ "name": "Malt", "color_hex": "#D29E5A" }, { "name": "Grain", "color_hex": "#D29E5A" }] }
      ]
    },
    {
      "id": "spices",
      "name": "Spices",
      "color_hex": "#9E2A35",
      "children": [
        { "id": "pungent", "name": "Pungent", "color_hex": "#C8523B", "children": [{ "name": "Pepper", "color_hex": "#C8523B" }, { "name": "Pungent", "color_hex": "#C8523B" }] },
        { "id": "brown-spice", "name": "Brown Spice", "color_hex": "#A0534B", "children": [{ "name": "Anise", "color_hex": "#A0534B" }, { "name": "Nutmeg", "color_hex": "#A0534B" }, { "name": "Cinnamon", "color_hex": "#A0534B" }, { "name": "Clove", "color_hex": "#A0534B" }] }
      ]
    },
    {
      "id": "nutty-cocoa",
      "name": "Nutty/Cocoa",
      "color_hex": "#8D5B4C",
      "children": [
        { "id": "nutty", "name": "Nutty", "color_hex": "#8D5B4C", "children": [{ "name": "Peanuts", "color_hex": "#8D5B4C" }, { "name": "Hazelnut", "color_hex": "#8D5B4C" }, { "name": "Almond", "color_hex": "#8D5B4C" }] },
        { "id": "cocoa", "name": "Cocoa", "color_hex": "#704A3A", "children": [{ "name": "Chocolate", "color_hex": "#704A3A" }, { "name": "Dark Chocolate", "color_hex": "#704A3A" }] }
      ]
    },
    {
      "id": "sweet",
      "name": "Sweet",
      "color_hex": "#E6854E",
      "children": [
        { "id": "brown-sugar", "name": "Brown Sugar", "color_hex": "#D8734A", "children": [{ "name": "Molasses", "color_hex": "#D8734A" }, { "name": "Maple Syrup", "color_hex": "#D8734A" }, { "name": "Caramelized", "color_hex": "#D8734A" }, { "name": "Honey", "color_hex": "#D8734A" }] },
        { "id": "vanillin", "name": "Vanillin", "color_hex": "#E89A5E", "children": [{ "name": "Vanilla", "color_hex": "#E89A5E" }, { "name": "Vanillin", "color_hex": "#E89A5E" }] },
        { "id": "overall-sweet", "name": "Overall Sweet", "color_hex": "#E7855A", "children": [{ "name": "Overall Sweet", "color_hex": "#E7855A" }] },
        { "id": "sweet-aromatics", "name": "Sweet Aromatics", "color_hex": "#E27456", "children": [{ "name": "Sweet Aromatics", "color_hex": "#E27456" }] }
      ]
    }
  ]
};
