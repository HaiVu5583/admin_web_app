# Naming convention

### 1.Redux:

1.1 Action name:

- **REQUEST** for action requestor request to Network or an async call handle by **Saga**
- **DO** for do some sync task handle by **Saga**
- **SET** for set data to reducer handle by **Reducer**
- **CLEAR** for clear data from reducer handle by **Reducer**
- **handlexxxxx** for saga generator function handle action
- **selectxxxx** for selector

# Project structure

### Struture by feature/domain

- Structure redux feature module as **redux/{feature_name}**, all relate **action, type, reducer, saga, selector** in **redux/{feature_name}/index.js** file if module small enough. If redux module quite large, seperate to each corespond file **action.js**, **reducer.js**, **saga.js**, **selector.js** in **redux/{feature_name}** folder, then export them in **index.js** file
- Default export of **redux/{feature_name}/index.js** is reducer function
