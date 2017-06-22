1. What data do we need to store?

  - Number of objects that have been shown
  - Number of votes submitted (total > 25?)
  - On the product objects
    - How many clicks?
    - How many impressions?
    - Was this in the last set of objects shown?
    - Name

  - Not Stored
    - Image path
    - Text/description for the object

2. How should we store it?

  Option 1: Giant JSON of Doom
  localStorage.stuff = {
    objectsShown: 12,
    votesSubmitted: 17,
    productsArray: [
      {
        name: "boots",
        clicks: 12,
        impressions: 17,
        wasLastSeen: true,
        imgSrc = "img/boots.jpg",
        desc = "Lorem ipsum"
      }
      {

      }
    ],
    productsLookup: {
      "boots": {
        clicks: 12,
        impressions: 17,
        wasLastSeen: true,
      },
      "pants": {
        clicks: 1,
        impressions: 7,
        wasLastSeen: false,
      }
    }
  };

  ```
  product.serializeUserData()

  // return { clicks, impressions, wasLastSeen }
  ```

  Option 2: Separate Local Storage Keys for each data point
  localStorage.objectsShown = 12;
  localStorage.votesSubmitted = 17;
  localStorage.products = "[{},{},{},...]";

3. How do we use the data?

Option 1: Products Array

- Get from localStorage
- If exists in localStorage
  - Parse JSON
  - For each `product` in `productsArray`
    - Make `new Product()` with data from `product`
- Else
  - Make default product data with 0 clicks/impressions

```
var products = getProductsFromLocalStorage() || buildDefaultProducts();
```

Option 2: Product Lookup

- Make default product data with 0 clicks/impressions
- If exists in localStorage
  - Parse JSON
  - For each `product` in default products
    - Check if `productsLookup` contains data for `product.name`
    - Update `product` from lookup data
    - `product.applyUserData(productsLookup)`
