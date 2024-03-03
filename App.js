import React from "react";
export default App;


function Convener () {
  return (
    <div class="main">
    <h2>Welcome, <span id="convenerName">Name of convener</span></h2>

    <form action="/covenermatching.html" method="post">
        <label for="student">Choose a student:</label>
        <select name="student" id="student">
            <option value=""></option>
            <option value="student1">Student 1</option>
            <option value="student2">Student 2</option>
            <option value="student3">Student 3</option>
            <option value="student4">Student 4</option>
        </select>
        <br></br>
        <p>Display the urn, name, and Keywords</p>
    </form>

    <form id="academicForm" action="/convenermatching.html" method="post" onsubmit="return validateForm()">
        <label for="academics">Choose academics (minimum 2):</label>
        <select name="academics[]" id="academics" multiple size="4">
            <option value="academic1">Academic 1</option>
            <option value="academic2">Academic 2</option>
            <option value="academic3">Academic 3</option>
            <option value="academic4">Academic 4</option>
        </select>
        <br></br>
        <input type="submit" value="Submit">
          </input>
    </form>
</div>

  );
}

