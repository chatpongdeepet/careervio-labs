// interface file > id card
interface idCard {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}

interface objective {
    courseName: string;
}

interface objectiveData {
    courseCode: number;
    courseCredit: number;
}

let courseSystem = (type: objective & objectiveData): void => {
    console.log(`The ` + type.courseName + `have ` + type.courseCredit + ' Credit and Code of The Course is ' + type.courseCode );
};

let thaiCourse = {courseName: 'Thai', courseCode: 123456, courseCredit: 3}
courseSystem(thaiCourse);