# PokeApp

## Description

PokeApp is a web-based Pokedex that utilizes the PokeAPI to display information about all the Pokemon species in the world. It has a clean and user-friendly interface that allows users to search and browse through all the different Pokemon species easily. Each Pokemon has its unique profile that includes information such as its type and stats.

## Technologies Used

- Vuejs
- Typescript
- Vue Router
- Jest
- Vue Tests Utils
- PokeApi

## How to run locally

> To further develop this project, clone this repo and run the following

```
yarn install
yarn dev
```

> To run tests, run the following script

```
yarn test
```

## Design considerations

1. File Structure: Neat project structure improves maintainability, readability and scalability. A good system can also help with code reusability by grouping related components and functions. For example, `services` contain all code related to making API calls, while `components` control all Vue components.
2. Interfaces: Using Typescript interfaces to describe the structure of data return from PokeApi ensures code is type-safe and we can detect bugs earlier.
3. Components: Break down the application into smaller, reusable components to improve maintainability.
4. Error handling: Plan and implement error handling mechanisms to ensure your application continues to function even in the case of unexpected errors.
5. Data validation: Validate the data received from PokeApi to ensure it is in the correct format.
6. Loading indicator: Displaying a loading indicator to inform the user when data is loading helps improve the user experience
