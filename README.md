# The Odin Project Todo

The main purpose of this project was to practice organizing JS code via modules and bundling with webpack.
I'm quite happy that the code structure now is at least starting to resemble what modern JS looks like with component modules, webpack, eslint etc.

Here are some things that could be better:

1. Firstly, todo component modules are written badly. A lot of repetition that could have been avoided using a parent class and inheritance.
2. Secondly, I felt that I coded myself into a corner at a point, where I wanted to set up localstorage. app.js holds a class and an instance of that class that contains all of the data of the project as an array of objects. Renderer imports and uses that class instance to rerender the page whenever a change in the data occurs. When trying to implement localstorage my idea was to do a similar thing. The difference was that I wouldn't call app.populateStorage() inside interface components, but inside data components. App imports Project to create new projects, and I wanted to import App inside projects to call app.populateStorage() whenever there is a change in a project's data, which obviously wouldn't work. I settled on committing changes to localstorage partially inside Project - only committing the changes in that project instead of rewriting the whole thing as I initially wanted.
3. Thirdly, my component classes used a return statement inside their constructor. Its convenient because I can just call new Input and append it, but there might be something wring with having your class instance be a DOM node. For example, after calling super on such class that inherits from another such class this becomes a DOM node. It seems like I couldn't then properly call methods declared with a shorthand and could for some reason only call methods that were declared with a function expression.
