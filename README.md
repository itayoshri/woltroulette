# [Wolt Roulette](https://woltroulette.vercel.app)
Generates random items and restaurants from [wolt](https://wolt.com)

## API
the app contains 3 routes:
- `/cords?address={...}` - receives an address as a query param and returns its cordinations
- `/items?location={...,...}` - receives cords as a query param and returns a random item from Wolt
- `/restaurant?location={...,...}` - receives cords as a query param and returns a random restaurant from Wolt
