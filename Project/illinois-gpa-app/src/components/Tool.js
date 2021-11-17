import React from 'react';
import "./Tools.css";
import data from "../data/data.js";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Label, Tooltip } from 'recharts';

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
class GraphPoint {
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
        var course = 
            new Course(data[i].Subject, data[i].Number, data[i]['Course Title'], "foo", "bar", data[i]['A+'],
            data[i].A, data[i]['A-'], data[i]['B+'], data[i].B, data[i]['B-'], data[i]['C+'], data[i].C, data[i]['C-'],
            data[i]['D+'], data[i].D, data[i]['D-'], data[i].F)
        courseList.push(course)
    }
}
for (var k = 0; k < courseList.length; k++) {
    courseList[k].students = 
        courseList[k].aPlus + courseList[k].a + courseList[k].aMinus + courseList[k].bPlus +
        courseList[k].b + courseList[k].bMinus + courseList[k].cPlus + courseList[k].c + courseList[k].cMinus +
        courseList[k].dPlus + courseList[k].d + courseList[k].dMinus + courseList[k].f
    courseList[k].gpa = 
        ((courseList[k].aPlus * 4 + courseList[k].a * 4 + courseList[k].aMinus * 3.67 + courseList[k].bPlus * 3.33 + 
        courseList[k].b * 3 + courseList[k].bMinus * 2.67 + courseList[k].cPlus * 2.33 + courseList[k].c * 2 + courseList[k].cMinus * 
        1.67 + courseList[k].dPlus * 1.33 + courseList[k].d * 1+ courseList[k].dMinus * 0.67 + courseList[k].f * 0) / 
        courseList[k].students).toFixed(3)
}
console.log(courseList)

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
function convertToGraphPoints(input) {
    var data = []
    for (var i = 0; i < input.length; i++) {
        var point = new GraphPoint(input[i].number, input[i].gpa)
        data.push(point)
    }
    return data
}

function App() {

    var graphPoints = convertToGraphPoints(courseFilter("HIST"))
    var graphData = courseFilter("HIST")
    var title = graphData[0].subject + ' Courses'

    return (
        <div className = "Tool">

            <h1> Tool </h1>
    
            <ScatterChart width={1400} height={675} margin={{left: 400, right: 400, bottom: 25, top: 50}}>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Course Number">
                    <Label value="Course Number" dy={20} position="outsideBottom" />
                    <Label value={title} dy={-600} position="centerTop" />
                </XAxis>
                <YAxis type="number" dataKey="y" name="Grade Average">
                    <Label value="Grade Average" angle={-90} dx={-5} position="outsideLeft" />
                </YAxis>
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={graphPoints} fill="red" />
            </ScatterChart>

        </div>
    );
}
  
export default App;