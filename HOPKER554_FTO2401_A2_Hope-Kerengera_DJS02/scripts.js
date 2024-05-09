const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
/**
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
  } else if (typeof dividend !== "number") {
  } else {
    const calculation = dividend / divider;
    result.innerText = Math.floor(calculation); //Math.floor to round DOWN to nearest integer - 1
  }
});
