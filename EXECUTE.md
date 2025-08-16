So I need you to make an incredibly simple web application. Your starting base is just the Next.js template codebase for a React application. So here's what I want you to make. The website is very simple.

There are two views. I will describe the first view below.

The first time the user goes to the site, there is a text box in the middle of the screen, not a modal. It asks the user to estimate how many years they have left in their life. The user has a text input for this. They type into the text input the number of years they have left. Then there's a submit button.

When the user clicks submit, the number is stored in local storage. Then the user is taken to the second view, which is described below.

The second view simply takes the number of years that the user provided in the first view, which is now stored, and converts it from years into days. The clock count down one second at a time, and it should simply be an array of numbers indicating the number of days, hours, and minutes remaining. There is a reference image included for you at clock_reference.png. Underneath, put the following phrase in large font:

“This is how much time you have left.”

If the user leaves the site and returns to the site, they should not see the first view, but they should instead see the second view since the number of years they submitted in the first View has already been recorded.
