# Prompt

Your PM has asked you to create the most annoying signup form in the world: a form that has 4 fields but on a series of 4 different screens. Your name, email, date of birth, and password will be entered separately into the site:

The specs are as follows:

Back links appear on every screen other than the first one, going back to the step the user was just on
Input is required on every screen prior to proceeding to the next.
On the last screen, provide a submit button that calls a handleSubmit({ name: ..., email: ..., password: ... }) function passing in the values of all the fields
Show a success screen
