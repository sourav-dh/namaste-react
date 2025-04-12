# Namaste React Course

## Episode - 1 : 
	- Emmet : It will help developers to write html/css code faster by using shotcut. For example in VSC editor if we use "html:5" and enter then it will generate the actual blank HTML skeleton. 

	- Library VS Framework : A library is set of functions which we can import and use in our applications. Also we can use any parts of our application. For example if we are using react which is a library can be used in only header/footer/side bar.
	Whereas framework is a large acchitechture that dictates the structure, flow and behavor of an application. They also provide a design pattern such as MVC. Unlike library where developers can call the library function, framework follow "Inversion of control". That means the framework will control the flow and call the developers function when necessary.

	- CDN : Content Delivery Network is a distributed network system whose server is placed in multiple redions and the content is present in every server. When we request the content, it serve from the nearest location which makes it faster and use less bandwidth

	- Crossorigin in script trag : Whenenver we use a script tag to load external js files in our HTML docuement, browser applies a same-origin policy to restrict that because of seciruty issue. But if we use "crossorigin" attribute then we can access cross origin files.

	- Practical Work : use React CDN and create react nested element to render in DOM (using React.createElement & ReactDOM.createRoot)


## Episode - 2 : 
	- npm :- It is a node package manager which is used to manage packages for JS application

	- Dependency and dev-Dependency :- inside package.json we will mention the package name inside dependency which are required to run the application on production (like: React). Whereas we will mention the package name inside devdependency which are required for development only (like: parcel)

	- Package.json vs package-lock.json :- package.json is the configuration file for npm and will contain all the dependency / devdependency for the packages. We can mention caret(^) sign to upgrade the minor version release automatically or tilde(~) sign to upgrade the major version of the package automatically.
	package-lock.json contains the exact version which is running in that application. It also includes the transitive dependencies package versions. So when we do "npm install", it will automatically install the versions of the package as per package-lock.json

	- Parcel : It is a bundler which is zero configured tool. It provides -
		Dev server
		Hot Reloading
		Diagnostics
		Does Caching
		Tree shaking
		Minification of html, css, js and svg files
		Image optimization
		Compress using gzip
		content hashing

	- Practical Work : Make the app an npm app and install parcel, react, react-dom. Implement the above using modular react


## Episode - 3 : 
	- Instead of using "npx parcel index.html", we can mention that inside package.json script section. If we type "npm start", it will consider "npm run start" as start is a reserved keyword.

		- JSX : It is an extension of javascript which use HTML like syntax.
			-Babel convert JXS to react element. like: "<h1>Heading</h1>" will be converted to React.createElement('h1', {}, 'Heading') by babbel
			-we can use {} to pass any valid JS
		-For multiline we will use ()

	- React Component - Class Component (Older way) & Functional Component (New approach)

	- React Functional Component : This is a function which will return a JSX.
		-Function name should starts with uppercase
		-We can pass one component inside another component which is known as "component composotion".
		We can use any one of the below approach to render a component : 
		<component />
		<component></component>
		{component()}


## Episode - 4 : 
	Practical work : 
	-First we will create a food ordering aap with header, body(which will have search, restaurants cards) and footer component.
	-We will be passing props through restaurantcard component
	-We will use swiggy API data as static object, loop through that and show the card components.


## Episode - 5 : 
***How React works behind the scene to make the process faster ?
-Components: It is a reusable building blocks which encapsulates their own logic and state.
-Virtual DOM: This is a virtual repersentation of actual DOM.
-Whenever there will be any state change, React use "Reconciliation" or "diffing" algorithm. This will compare the current virtual DOM representing the current UI with the previous one to identify the difference. If it will find any difference, then react will only apply necessary changes to the actual DOM. This minimize the number of DOM updates and improve the perfoemance.

That's the reason why react is so popular. It binds the UI and data layer beautifully.

React use "React Fiber Architechture" core algorithm since React 16 to improve the performance.Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Practical work : 
-Restaructure code as per inductry standards
    -Create a src folder and place all react code there
    -carete a components folder to place all the components
    -create a utils folder for the static data

-Add event : create a button for "top rated restaurant" and try to filter using console.log
-usestate hook : to filter data and show top rated restaurents


## Episode - 6 : 
(1)-monolithic architecture : where all the services present in one application.
-microservice architechture : for every service there will be different application which will be hosted in different ports (can be mapped to any domain, like- :1234 mapped with /api). 

(2)React API call approach - 
page loads -> render page -> API call -> re-render (React's page rendering is very fast)

(3)useEffect(() => { console.log }, []) : useEffect callback function will be called after the component rendered .

(4)Install cors extension to access another domain API

(5)Whenever a state variable updates, react will re-render the component


Practical work : 
(1)Remove static swiggy rest object and call swiggy api to poopulate rest cards using useEffect. Use optional chaining.
(2)show loading screen if the rest list is empty
(3)Implement Shimmer ui
(4)user ternary operator to return different component based on codition
(5)why we need state variable. example using login/logout button toggle.
(6)add a search functionality


## Episode - 7 : 
(1)
-useEffect(() => {}) : useEffect will be called everytime after the component rendered if there is no dependency array present.
-useEffect(() => {}, []) : useEffect will be called only once after the component rendered if there is an empty array.
-useEffect(() => {}, [btnName]) : useEffect will be called whenever the dependency variable updates. Check with login/logout header component .

(2)Always keep useState hook at the starting of the functional component. Don't create state variable inside if, for or function.

(3)We use Client side rouoting for single page application.


Practical work : 
(1)Use react-router-dom to create routing for contact-us, about pages. Create a error page and utilize useRouterError hook to show more information.
-npm install react-router-dom
-import { createBrowserRouter, RouterProvider } from 'react-router-dom'
-createBrowserRouter([
    {
        path: '/',
        element: <AppCompoment />
        errorElement: <Errorcomponent />
    }
])
-root.render(<RouterProvider router={config}>)
-import { useRouterError } from react-router-dom


(2)Children routing
-Use outlet component to load dynamic config based on the path name
-Use Link component to navigate to a new route without refresh the page : Do the same for all about us, contact us page.

(3)Dynamic routing
-create a restaurant menu page which will be shown with every restaurant card click
- useparams hook to get the params


## Episode - 9 : 
(1)If we follow "single responsibility principle" (can be break down codes into modules), then our code will become more re-usable, maintainable, testable.

(2)Optimize application: 
lazy loading | chunking | code aplitting | dynamic import


Practical Work : 
(1)Create a custom hook to abstract the fetch rest menu details logic and use that hook to the component.

(2)Create a custom hook to check online/offline status. For offline we will show a message instead of rest-cards. We will also show icons on header based on that by reusing the same custom hook.

(3)Use lazy loading with lazy and suspense to create different bundle
-const Component = lazy(() => import(PATH))
-<suspense fallback={JSX}><Component /></suspense>


## Episode - 11 : 
(1)Higher order component : It's a function which takes a component as parameter and return the enhanced version of that component .


Practical Work : 
(1) Create a higher order component inside restcardcomponent to show top rated restaurant with a label. From body component  call that higher order function and call that as per the rating condition.
(2)Update restaurant menu page and show all menu as per category by using accordian.
(3)Make sure to collapse all accordian and show the one accordinan which is clicked by using both below methods.
-uncontrolled component : the control is with the child : Add logic to expand colapse according to restaurantmenucategory componenet itself
-controlled component : where we can control the child component : Remove the accordian logic from restaurantmenucategory and move that to the parent compoent
-lifting the state up : We can not direactly call the setUseState method from child component. So we can pass the reference function as props to child component and call that. Implement the same to open 1 accordian at a time.
