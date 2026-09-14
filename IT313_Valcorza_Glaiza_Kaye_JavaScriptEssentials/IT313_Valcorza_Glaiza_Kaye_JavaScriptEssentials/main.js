import isPassing, {computeAverage} from "./gradeUtils.js";

const enrollees = [
    {name: "Ana Cruz", prelim: 85, midterm: 90, final: 88},
    {name: "Bea Santos", prelim: 70, midterm: 65, final: 60},
    {name: "Cid Ramos", prelim: 95, midterm: 92, final: 97},
    {name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50},
    {name: "Eli Tan", prelim: 78, midterm: 80, final: 76},
];

const getEnrollees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(enrollees);
        }, 1000);
    });
};

const generateReport = async () => {
    try {
        const data = await getEnrollees();
        
        const results = data.map((enrollee) => {
            const {name, prelim, midterm, final} = enrollee;

            const average = computeAverage(prelim, midterm, final);

            const status = isPassing(average)
                ? "PASSING"
                : "PROBATION";

            return {
                name,
                average,
                status
            };
        });

        const passingStudents = results.filter(
            (student) => student.status === "PASSING"
        );

        const probationStudents = results.filter(
            (student) => student.status === "PROBATION"
        );

        const totalAverage = results.reduce(
            (total, student) => total + student.average, 0
        );

        const classAverage = totalAverage / results.length;

        console.log("=== IT313 Enrollment Eligibity Report ===");

        results.forEach((student) => {
            const name = student.name.padEnd(12);
            const average = student.average.toFixed(2).padEnd(6);

            console.log(
                `${name} - Average: ${average} - ${student.status}`
            );
        });

        console.log(`\nClass Average: ${classAverage.toFixed(2)}`);
        console.log(`PassingL ${passingStudents.length} / $results.length`);

    }  catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

generateReport();