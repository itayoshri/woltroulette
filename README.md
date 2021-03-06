![logo](https://github.com/itayoshri/woltroulette/blob/main/assets/logo.png?raw=true)

# Wolt Roulette

Generates random items and restaurants from [wolt](https://wolt.com)

## API

the api of the app contains 3 routes:

### Location

- `api/location/prediction?search={...}` - receives user's address as a query param and returns an array of places that match user's address
- `api/location/cords?placeId={...}` - receives a [place ID](https://developers.google.com/maps/documentation/places/web-service/place-id) as a query param and returns its cordinations
- `api/location/state?cords={...}` - receives cords as a query param and returns the city (state) that they are located in (according to Wolt's shipping areas)

### Wolt

- `api/wolt/items?location={...,...}` - receives cords as a query param and returns a random item from Wolt
- `api/wolt/restaurant?location={...,...}` - receives cords as a query param and returns a random restaurant from Wolt

### [Try it yourself!](https://woltroulette.vercel.app/)
