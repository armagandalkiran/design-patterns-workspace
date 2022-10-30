This repository contains only my notes according to design patterns book. 

===============DESIGN PATTERNS=================

- they are fundamental part of software development.
- they provide typical solutions to communly recurring problems in software design.
- they are merely concepts that can be used to handle recurring themes in an optimized way.

SINGLETON PATTERN

- Share a single global instance throughout our application.
- Considered as anti-pattern

  Advantage ?

  - Saves a lot of memory space.

  Disadvantage ?

  - Hard to test. Because every test rely on previous test and after testing we need
    to reset entire instance.
  - Dependency hiding. If we want to use the instance from another file. There can
    be unexpected behavior because of the same instance.
  - Global behavior. Having multiple parts of your codebase rely on the same mutable
    object can lead to unexpected behavior.
  - React state management tools look like singleton but they are using a read-only state rather than the mutable state of the Singleton.

PROXY PATTERN

- Share a single global instance througout out application.

  Advantage ?

  - Get more control over the interactions with certain objects.

  Disadvantage ?

  - It's best to not use proxies for performance-critical code.

PROVIDER PATTERN

- Make data available to multiple child components.

  Advantage ?

  - Make data available to many components in an application.

PROTOTYPE PATTERN

- Share properties among many objects of the same type.

  Advantage ?

  - The prototype pattern allows us to easily let objects access and inherit
    properties from other objects. Since the prototype chain allows us to access
    properties that aren't directly defined on the object itself, we can avoid
    duplication of methods and properties, thus reducing the amount of memory used.

CONTAINER / PRESENTATIONAL PATTERN

- Enforce separation of concerns by separating the view from the application logic.

  Presentational Components

  - Components that care about how data is shown to the user.
    Ex: Rendering list of dog images.

  Container Components

  - Components that care about what data is shown to the user.
    Ex. Fetch the dog images.

  Advantage ?

  There are many benefits to using the Container/Presentational pattern.
  The Container/Presentational pattern encourages the separation of concerns.
  Presentational components can be pure functions which are responsible for
  the UI, whereas container components are responsible for the state and data
  of the application. This makes it easy to enforce the separation of concerns
  Presentational components are easily made reusable, as they
  simply display data without altering this data. We can reuse the presentational
  components throughout our application for different purposes.
  Since presentational components don't alter the application logic, the
  appearance of presentational components can easily be altered by someone
  without knowledge of the codebase, for example a designer. If the
  presentational component was reused in many parts of the application, the
  change can be consistent throughout the app.
  Testing presentational components is easy, as they are usually pure functions.
  We know what the components will render based on which data we pass,
  without having to mock a data store.

  Disadvantage ?

  The Container/Presentational pattern makes it easy to separate application
  logic from rendering logic. However, Hooks make it possible to achieve the
  same result without having to use the Container/Presentational pattern, and
  without having to rewrite a stateless functional component into a class
  component. Note that today, we don't need to create class components to use
  state anymore.
  Although we can still use the Container/Presentational pattern, even with
  React Hooks, this pattern can easily be an overkill in smaller sized application.

OBSERVER PATTERN

- we can use the observer pattern in many ways, it can be very useful
  when working with asynchronous, event-based data. Maybe you want certain
  components to get notified whenever certain data has finished downloading,
  or whenever users sent new messages to a message board and all other
  members should get notified.

  Advantage ?

  Using the observer pattern is a great way to enforce separation of
  concerns and the single-responsiblity principle. The observer objects aren’t
  tightly coupled to the observable object, and can be (de)coupled at any time.
  The observable object is responsible for monitoring the events, while the
  observers simply handle the received data.

  Disadvantage ?

  If an observer becomes too complex, it may cause performance issues when
  notifying all subscribers.

  Case Study : https://reactivex.io/

MODULE PATTERN

- As your application and codebase grow, it becomes increasingly important to
  keep your code maintainable and separated. The module pattern allows you
  to split up your code into smaller, reusable pieces.
  Besides being able to split your code into smaller reusable pieces, modules
  allow you to keep certain values within your file private. Declarations within a
  module are scoped (encapsulated) to that module , by default. If we don’t
  explicitly export a certain value, that value is not available outside that
  module. This reduces the risk of name collisions for values declared in other
  parts of your codebase, since the values are not available on the global
  scope.

- By dynamically importing modules, we can reduce the page load time.
  We only have to load, parse, and compile the code that the user really
  needs, when the user needs it.
  With the module pattern, we can encapsulate parts of our code that should not
  be publicly exposed. This prevents accidental name collision and global scope
  pollution, which makes working with multiple dependencies and namespaces
  less risky. In order to be able to use ES2015 modules in all JavaScript
  runtimes, a transpiler such as Babel is needed.

  Advantage ?

  A great benefit of having modules, is that we only have access to the values
  that we explicitly exported using the export keyword. Values that we didn't
  explicitly export using the export keyword, are only available within that
  module.

MIXIN PATTERN ( I didn't understand this pattern well maybe i can check more examples )

- Add functionality to objects or classes without inheritance

  Advantage ?

  Mixins allow us to easily add functionality to objects without inheritance by
  injecting functionality into an object's prototype.

  Disadvantage ?

  Modifying an object's
  prototype is seen as bad practice, as it can lead to prototype pollution and a
  level of uncertainty regarding the origin of our functions.

MEDIATOR / MIDDLEWARE PATTERN

- The mediator pattern makes it possible for components to interact with each other  
  through a central point: the mediator. Instead of directly talking to
  each other, the mediator receives the
  requests, and sends them forward! In JavaScript, the mediator often nothing more than an object literal
  or a function

You can compare this pattern to the relationship between an air traffic controller and a pilot.
Instead of having the pilots talk to each other directly, which would probably end up being quite chaotic,
the pilots talk the air traffic controller. The air traffic controller makes sure that all planes receive
the information they need in order to fly safely, without hitting the other airplanes.

Although we're hopefully not controlling airplanes in JavaScript, we often have to deal
with multidirectional data between objects. The communication between the components
can get rather confusing if there is a large number of components.

A good use case for the mediator pattern is a chatroom! The users within the chatroom won't talk to each other directly. Instead, the chatroom serves as the mediator between the users.

The middleware pattern makes it easy for us to simplify many-to-many relationships between objects, by letting all communication flow through one central point.

RENDER PROPS PATTERN

- A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

  Advantage ?

  Sharing logic and data among several components is easy with the render props pattern. Components can be made very reusable, by using a render
  or children prop. Although the Higher Order Component pattern mainly solves the same issues, namely reusability and sharing data, the render props pattern solves some of the issues we could encounter by using the HOC pattern.
  The issue of naming collisions that we can run into by using the HOC pattern no longer applies by using the render props pattern, since we don't automatically merge props. We explicitly pass the props down to the child components, with the value provided by the parent component.
  Since we explicitly pass props, we solve the HOC's implicit props issue. The props that should get passed down to the element, are all visible in the render prop's arguments list. This way, we know exactly where certain props come from.
  We can separate our app's logic from rendering components through render props. The stateful component that receives a render prop can pass the data onto stateless components, which merely render the data.

  Disadvantage ?

  The issues that we tried to solve with render props, have largely been replaced by React Hooks. As Hooks changed the way we can add reusability and data sharing to components, they can replace the render props pattern in many cases.
  Since we can't add lifecycle methods to a render prop, we can only use it on components that don't need to alter the data they receive.

HOOKS PATTERN

- Using React Hooks just made it much clearer to separate the logic of our component into several smaller pieces. Reusing the same stateful logic just became much easier, and we no longer have to rewrite functional components into class components if we want to make the component stateful. A good knowledge of ES2015 classes is no longer required, and having reusable stateful logic increases the testability, flexibility and readability of components.

HIGH ORDER COMPONENT PATTERN

- Within our application, we often want to use the same logic in multiple components. This logic can include applying a certain styling to components, requiring authorization, or adding a global state.
  One way of being able to reuse the same logic in multiple components, is by using the higher order component pattern. This pattern allows us to reuse component logic throughout our application.

  Advantage ?

  Using the Higher Order Component pattern allows us to keep logic that we want to re-use all in one place. This reduces the risk of accidentally spreading bugs throughout the application by duplicating code over and over, potentially introducing new bugs each time. By keeping the logic all in one place, we can keep our code DRY and easily enforce separation of concerns

  Disadvantage ?

  The name of the prop that a HOC can pass to an element, can cause a naming collision.

FLYWEIGHT PATTERN

- Reuse existing instances when working with identical objects.

  Advantage ?
  The flyweight pattern is useful when you're creating a huge
  number of objects, which could potentially drain all available RAM. It allows us to minimize the amount of consumed memory.

  Disadvantage ?
  In JavaScript, we can easily solve this problem through prototypal inheritance. Nowadays, hardware has GBs of RAM, which makes the flyweight pattern less important.

FACTORY PATTERN

- Use a factory function in order to create objects.

  Advantage ?
  The factory pattern is useful when we have to create multiple smaller objects that share the same properties. A factory function can easily return a custom object depending on the current environment, or user-specific configuration.

  Disadvantage ?
  In JavaScript, the factory pattern isn't much more than a function that returns an object without using the new keyword. ES6 arrow functions allow us to create small factory functions that implicitly return an object each time.
  However, in many cases it may be more memory efficient to create new instances instead of new objects each time.

COMPOUND PATTERN

- Create multiple components that work together to perform a single task.

  Advantage ?
  Compound components manage their own internal state, which they share among the several child components. When implementing a compound component, we don't have to worry about managing the state ourselves.
  When importing a compound component, we don't have to explicitly import the child components that are available on that component.

  Disadvantage ?
  When using the React.children.map to provide the values, the component nesting is limited. Only direct children of the parent component will have access to the open and toggle props, meaning we can't wrap any of these components in another component.

COMMAND PATTERN

- Decouple methods that execute tasks by sending commands to a commander

  Advantage ?
  The command pattern allows us to decouple methods from the object that executes the operation. It gives you more control if you're dealing with commands that have a certain lifespan, or commands that should be queued and executed at specific times.

  Disadvantage ?
  The use cases for the command pattern are quite limited, and often adds unnecessary boilerplate to an application.
