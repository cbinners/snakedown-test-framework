# Snakedown Testing framework

## Getting Test Cases

1. Browse to a game on [snakedown](https://play.snakedown.com) and copy the JSON input for your snake.
2. Create a file in `inputs/` and name it with a case number and the valid moves separated by `_`. eg: `1_up_down.json` would indicate that [up, down] are valid moves for this case.
3. If you want to view a test case and forgot where it was, copy the input JSON to [snakedown debug](https://play.snakedown.com/app/debug)

## Usage

1. Install node modules: `npm install`
2. Copy the `.env.example` file into `.env` and point the `HOST` variable at your snake's URL.
3. Run `npm test`
4. Fix your snake!
