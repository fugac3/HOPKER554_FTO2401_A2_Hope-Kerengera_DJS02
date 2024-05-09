const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
/**
 * @throws {error} - if divider is equal to 0
 * @throws {error} - if any of the inputs are left blank or if any of the inputs are invalid
 *
 */

form.addEventListener("submit", (event) => {
  //addEventListener method always takes two arguments, the type of event and the function that handles the event
  event.preventDefault(); //necessary to prevent page from reloading on submit
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    //Preventing empty inputs
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    throw console.error(
      "Division not performed. Both values are required in inputs. Try again."
    );
  } //if divider = 0
  else if (divider == 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    throw console.error(
      "Division not performed. Invalid number provided. Try again"
    );
  }
  //if input is not a number
  else if (isNaN(dividend) || isNaN(divider)) {
    //if dividend is not a number...
    document.querySelector(
      "body" //replace the innerHTML of the body with an error using <h1> tag
    ).innerHTML = `<h1 style="color:red">Something critical went wrong. Please reload the page.<h1>`;
    throw console.error(
      "Something critical went wrong. Please reload the page."
    );
  }
  //if result is a decimal, it should be rounded down
  else {
    const calculation = dividend / divider;
    result.innerText = Math.floor(calculation); //Math.floor to round DOWN to nearest integer - 1
  }
});
