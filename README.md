# JavaScript Essentials – Grade Processing

## Problem

This project focuses on processing student enrollment and grade information using JavaScript. The program evaluates student grades, identifies students based on specific conditions, and processes the resulting data. It also demonstrates how errors can be handled when a connection to the registrar API fails.

## Approach

The project separates the grade-related functions into `gradeUtils.js` and uses these functions in `main.js`.

Several JavaScript features are used to process the data:

* **Functions** are used to process and evaluate student grades.
* **`.filter()`** is used to identify students who meet a specific condition, such as probation students.
* **`.reduce()`** is used to calculate an accumulated result from the grade data.
* **`try/catch`** is used to handle errors that may occur when connecting to the registrar API.

The error-handling mechanism is also tested by temporarily changing:

```javascript
resolve(enrollees);
```

to:

```javascript
reject(new Error("Failed to connect to registrar API"));
```

This verifies that the `try/catch` structure properly handles the simulated API error.

## How to Run

### Requirements

The project requires:

* Node.js
* Visual Studio Code

### Project Files

The project should contain the following files:

```text
package.json
gradeUtils.js
main.js
README.md
```

### Run the Main Script

Open the project folder in Visual Studio Code and open the terminal.

Run the following command:

```bash
node main.js
```

The program will execute the main script and display the results in the terminal.

### Run `gradeUtils.js`

The `gradeUtils.js` file contains the grade-processing utility functions used by `main.js`. The complete functionality of these utilities is demonstrated by running:

```bash
node main.js
```

The main script imports and executes the functions from `gradeUtils.js`.

### Test the Error Handling

To verify the error-handling functionality, temporarily replace:

```javascript
resolve(enrollees);
```

with:

```javascript
reject(new Error("Failed to connect to registrar API"));
```

Run the program using:

```bash
node main.js
```

The error should be caught and handled correctly by the program.

After testing, restore the original line:

```javascript
resolve(enrollees);
```

Then run the program again:

```bash
node main.js
```

## Conclusion

This project demonstrates the use of JavaScript modules, functions, `.filter()`, `.reduce()`, and `try/catch` error handling. It provides a practical example of processing student grade information while also demonstrating how errors can be handled during an API operation.
