author : mhmd sayed ahmad

discription :
I built this application to help Yehia and myself follow a clear road map.
It gives us one place to see our progress and the applications we are
tracking, so we can stay focused and reach our goals.

How to run it locally:

1. Install [Next.js]
2. Clone the repository and open the project folder:
   git clone <https://github.com/mo726/yehia-career-path.git>
   cd <yehia-career-path>
3. Install the dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open localhost in your browser.

Explaining my choices :

1.  Why did I use `await` when reading `params`?

i used await when reading params since params it a promise so we waited for the promise to finish so we can get the real id

2. Why is the route ID a string?

since we are getting it from the url which is a string

3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The layout holds the parts that should stay the same on every dashboard
page, the global layout appears on all pages , but privite layouts only appears on the pages under the same folder
