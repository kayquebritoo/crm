#!/bin/bash

echo "Starting automated tests and lint checks..."

# Check linting first
echo "Running lint check..."
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting errors found. Attempting auto-fix..."
  # If there is a fix command, use it
  # next lint --fix is common
  npx eslint --fix . --ext .js,.jsx,.ts,.tsx
  echo "Lint auto-fix completed. Re-running lint check..."
  npm run lint
  if [ $? -ne 0 ]; then
    echo "Linting errors persist. Please check output."
  fi
else
  echo "Lint check passed."
fi

# Run tests
echo "Running automated tests..."
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Please review the output above."
else
  echo "Tests passed successfully."
fi

echo "Finalizing: Running the application..."
npm run dev
