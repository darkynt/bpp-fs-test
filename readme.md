## Startup Instructions

1. Install Docker Desktop (Win/Mac) or Docker + Docker-Compose
1. Run `docker-compose up` from the project root.
1. Navigate to `http://localhost:3000` in a browser

## Running the tests
- UI: `docker-compose run ui-dev npm test`
- API: `docker-compose run api npm test`

## ToDos - OOS
- [ ] UI static build script
- [ ] Auto restart the API server on code changes
- [ ] lint+test+coverage combined npm tasks for CI
