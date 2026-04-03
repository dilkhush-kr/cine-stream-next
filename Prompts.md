# week9 prompts
Explain the difference between Client Components and Server Components in Next.js App Router with simple examples.

How can I fetch data from an external API in a Next.js Server Component without using useEffect?

I have a React movie app built with Vite. What is the best way to migrate it into a Next.js App Router project?



How does dynamic routing work in Next.js App Router and how can I create a route like /movie/[id]?

How can I generate dynamic metadata (title and description) in Next.js for better SEO?

What is the difference between CSR (Client Side Rendering) and SSR (Server Side Rendering) and how does Next.js improve SEO?

My Next.js API fetch sometimes fails in development. How can I add error handling to server-side API requests?

How can I create a movie details page that fetches data using the movie ID from the URL?

How can I implement a favorite movies feature using LocalStorage in React / Next.js?

What is the best way to share data from a Server Component to a Client Component in Next.js?

How can I optimize image loading for external APIs like TMDB in Next.js?



How can I make a movie card clickable and navigate to a dynamic details page using Next.js Link component?


# week 10 prompts
How can I integrate Redux Toolkit into an existing Next.js App Router project?

What is the correct folder structure for using Redux Toolkit in a Next.js app?

How do I create a Redux store and connect it to my Next.js application using Provider?

What is a slice in Redux Toolkit and how do I create one for managing favorites?

How can I replace localStorage-based favorites logic with Redux global state?

How do I use useDispatch and useSelector hooks in a Next.js Client Component?

Why do I need "use client" when using Redux in Next.js components?

How can I manage global filter state (search and rating) using Redux Toolkit?

How do I remove prop drilling and connect multiple components using Redux?

How can I implement live search filtering using Redux state in React/Next.js?

How do I combine multiple filters (search + rating) to update UI dynamically?

How can I optimize filtering performance using useMemo in React?

How do I create a global theme (dark/light mode) using Redux Toolkit?

How can I apply conditional CSS classes based on Redux state in Next.js?

How do I structure components so that global state updates reflect instantly across the app?

I am getting module not found errors while setting up Redux in Next.js. How can I fix import path issues?

How can I handle API failures (like timeout errors) in Next.js without breaking the UI?

What is the best way to debug Redux state issues in a React/Next.js project?



How can I structure my project so that it looks scalable and production-ready using Redux?

# week 11 prompts


How can I set up Jest and React Testing Library in a Next.js project step by step? 
I want to understand the required packages, configuration files, and how testing works in a React environment.

I am getting an error related to JSX not being supported while running Jest tests. 
Can you explain why this happens and how to configure Babel properly to fix JSX parsing issues?


Jest is showing an error that the jsdom environment is not found. 
What does this mean and how can I fix it in a modern React/Next.js setup?


Why does Jest throw 'React is not defined' even though my Next.js app runs fine? 
How is the testing environment different from the Next.js runtime?



How can I test a React component that receives props and renders UI elements? 
I want to verify that the correct data is displayed and the component renders without crashing.


How do I write unit tests for a Redux Toolkit slice? 
I want to verify that actions like add and remove correctly update the state.


How can I simulate user interactions like button clicks in React Testing Library? 
I want to ensure that clicking a button triggers the expected behavior.


How can I test a React component that depends on Redux state using useSelector and useDispatch? 
What is the correct way to wrap it with a Provider in tests?


I have a component that filters data using useMemo based on search and rating. 
How can I test that the filtering logic works correctly with different inputs?



What are the best practices for writing clean and maintainable test cases in React applications? 
How many components should be tested in a small project?


# Prompts Used for Week 12 (Storybook Setup)

## 1. Understanding Storybook Integration

"How to setup Storybook in an existing Next.js project and what is the purpose of component isolation?"

---

## 2. Converting Existing Components to Storybook

"I have a React component that uses Redux and API calls. How can I convert it into a reusable UI component for Storybook without breaking the existing app?"

---

## 3. Splitting Smart and UI Components

"What is the best way to separate logic (Redux) and UI for a component so it works both in the app and in Storybook?"

---

## 4. Creating Storybook Stories

"How to write a .stories.jsx file for a React component and use args to control props dynamically in Storybook?"

---

## 5. Handling Props (Args) in Storybook

"How to configure controls in Storybook so that I can change component props like states (e.g., favorite, theme) from the UI panel?"

---

## 6. Fixing Tailwind CSS in Storybook

"Why Tailwind CSS is not working in Storybook and how to fix global styles inside Storybook configuration?"

---

## 7. Handling Next.js Specific Issues

"How to fix Next.js specific issues in Storybook such as Image component or routing problems?"

---

## 8. Creating Controlled Input Component

"How to create a controlled input component in React that works in Storybook without Redux?"

---

## 9. Debugging Build Issues

"I am getting build errors in Vercel while deploying Storybook. How to debug and fix issues related to babel config, staticDirs, and missing folders?"

---

## 10. Deployment of Storybook

"How to deploy Storybook as a static site using Vercel and what build commands and output directory should be used?"

---

