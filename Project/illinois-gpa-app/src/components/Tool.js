import React from 'react';
import "./Tools.css";
import data from "../data/data.js";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from 'recharts';

// Course object model
class Course {
    constructor(subject, number, title, gpa, students, aPlus, a, aMinus, bPlus, b, bMinus, cPlus, c, cMinus, dPlus, d, dMinus, f) {
        this.subject = subject
        this.number = number
        this.title = title
        this.gpa = gpa
        this.students = students
        this.aPlus = aPlus
        this.a = a
        this.aMinus = aMinus
        this.bPlus = bPlus
        this.b = b
        this.bMinus = bMinus
        this.cPlus = cPlus
        this.c = c
        this.cMinus = cMinus
        this.dPlus = dPlus
        this.d = d
        this.dMinus = dMinus
        this.f = f
    }
}

// GraphData object model
class GraphData {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

// Populate course list with course objects given data.js
var courseList = []
for (var i = 0; i < data.length; i++) {
    var containsCourse = false
    var courseIndex
    for (var j = 0; j < courseList.length; j++) {
        if (data[i].Subject === courseList[j].subject && data[i].Number === courseList[j].number) {
            containsCourse = true
            courseIndex = j
            break
        }
    }
    if (containsCourse) {
        courseList[courseIndex].aPlus += data[i]['A+']
        courseList[courseIndex].a += data[i].A
        courseList[courseIndex].aMinus += data[i]['A-']
        courseList[courseIndex].bPlus += data[i]['B+']
        courseList[courseIndex].b += data[i].B
        courseList[courseIndex].bMinus += data[i]['B-']
        courseList[courseIndex].cPlus += data[i]['C+']
        courseList[courseIndex].c += data[i].C
        courseList[courseIndex].cMinus += data[i]['C-']
        courseList[courseIndex].dPlus += data[i]['D+']
        courseList[courseIndex].d += data[i].D
        courseList[courseIndex].dMinus += data[i]['D-']
        courseList[courseIndex].f += data[i].F
    } else {
        var course = new Course(data[i].Subject, data[i].Number, data[i]['Course Title'], "foo", "bar", data[i]['A+'],
            data[i].A, data[i]['A-'], data[i]['B+'], data[i].B, data[i]['B-'], data[i]['C+'], data[i].C, data[i]['C-'],
            data[i]['D+'], data[i].D, data[i]['D-'], data[i].F)
        courseList.push(course)
    }
}
for (var i = 0; i < courseList.length; i++) {
    courseList[i].students = 
        courseList[i].aPlus + courseList[i].a + courseList[i].aMinus + courseList[i].bPlus +
        courseList[i].b + courseList[i].bMinus + courseList[i].cPlus + courseList[i].c + courseList[i].cMinus +
        courseList[i].dPlus + courseList[i].d + courseList[i].dMinus + courseList[i].f
    courseList[i].gpa = 
        (courseList[i].aPlus * 4 + courseList[i].a * 4 + courseList[i].aMinus * 3.67 + courseList[i].bPlus * 3.33 + 
        courseList[i].b * 3 + courseList[i].bMinus * 2.67 + courseList[i].cPlus * 2.33 + courseList[i].c * 2 + courseList[i].cMinus * 
        1.67 + courseList[i].dPlus * 1.33 + courseList[i].d * 1+ courseList[i].dMinus * 0.67 + courseList[i].f * 0) / courseList[i].students
}

// Return an array of courses filtered by subject
function courseFilter(subject) {
    var courseSubjectList = []
    for (var i = 0; i < courseList.length; i++) {
        if (courseList[i].subject === subject) {
            courseSubjectList.push(courseList[i])
        }
    }
    return courseSubjectList
}

// Converts array of courses into array of graph values [x, y] where x is gpa and y is course number
function convertToGraphData(input) {
    var data = []
    for (var i = 0; i < input.length; i++) {
        var point = new GraphData(input[i].number, input[i].gpa)
        data.push(point)
    }
    return data
}

function App() {

    var graphData = convertToGraphData(courseFilter("MATH"))

    return (
        <>
            <div>

                <h1> Tool </h1>
                
                <ScatterChart width={500} height={500}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="course number" />
                    <YAxis type="number" dataKey="y" name="gpa" />
                    <Scatter data={graphData} fill="red" />
                </ScatterChart>

            </div>
        </>
    );
}
  
export default App;