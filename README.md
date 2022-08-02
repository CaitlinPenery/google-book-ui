# Google Books API Search Engine

### \_**[Launch the Live Site]()**\_e

## Description

This project will require you to use both DOM manipulation and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## Implementation

### MVP

Create a page that allows users to search for books
Page should include the following:

-   Header section introducing the page
-   Form containing a text input and a submit / search button

-   A grid of books
    Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules.
-   Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

## Plan

1. HTML / SCSS

-   Heading
-   Description
-   Text bar for input
-   Button to access API and compare to search
-   Hidden grid to render returned data
-   Make pretty

2. JavaScript
1. DOM functions

-   Grab elements
    -   Input
    -   Display
-   Map through fetched array to display data

1. non-DOM functions

-   Use async await to fetch and render data

# ToDo

-   [ ] Add the option of different search params (author, isbn, desc)
-   [ ] Buttons
    -   Load more
    -   Clear search
    -   Expand content
-   [ ] Expanded content card
-   [ ] include an image when no image found
-   [ ] Add loading image
-   [ ] Render list of 4 most popular books to be removed when input value
-   [ ] Add tablet sizing to device mixin
-   [ ] Find solution for setPointCapture on smaller devices
-   [ ] Convert useState to useSearchParams for search bar
-   [x] Handle no books being returned
