---
title: Why you should use "as const" in TypeScript 
description: We're going over the feature "as const" in TypeScript and if you don't use it, you probably should use it. 
tags:
    - Development
    - TypeScript
---

For the following example we'll create a function to go to a certain route. So for example we have these routes:

```typescript
    const appRoutes = {
        home: '/',
        about: '/about',
        products: '/products',
    }
```
As you can see its nothing special, just a simpel object to define our apps routes;

Now what happens if create a function that will bring us to one of these routes?  We will create the following function that takes a route as an argument.


#### ⚠️ This will result in an error
```typescript
    const appRoutes = {
        home: '/',
        about: '/about',
        products: '/products',
    }

    // we want to accept the same values ass appRoutes here
    function goToRoute(route: '/' | '/about' | '/products') {
        // Rest of your code
    }

    // this will error as appRoutes.home wil type to string instead of '/' 
    goToRoute(appRoutes.home);
```
#### ✅ Using as const will solve this issue

```typescript
    const appRoutes = {
        home: '/',
        about: '/about',
        products: '/products',
    } as const;
    // ^ notice as const here?

    // we can even create a type out of now
    type Route = (typeof appRoutes)[keyof typeof appRoutes];
    // ^ this results in '/' | '/about' | '/products'

    // we want to accept the same values ass appRoutes here
    function goToRoute(route: Route) {
        // Rest of your code
    }

    // now this won't error because of the type Route being dynamicly generated from the appRoutes object;
    goToRoute(appRoutes.home);
```
