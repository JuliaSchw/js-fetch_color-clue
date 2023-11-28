import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * [x] Use the fetch API to get the hex value and the name of the closest
   * [x] named color to the randomly generated `hexCode` from the color API.
   * [x] These values can be found in `.name.closest_named_hex` and
   * [x] `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--
  const response = await fetch(colorApiUrl);
  const data = await response.json();

  const colorName = data.name.value;
  const closestHex = data.name.closest_named_hex;

  setColorToGuess(closestHex, colorName);

  console.log(closestHex, colorName);

  // --^-- your code here --^--
}
