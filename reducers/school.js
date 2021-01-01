import { average, deepStudentsCopy, deepBehavioursCopy } from '../constants/schools';

// Source de vérité
const initialState = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    student: null,
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
    behaviours :  [],
    order: true,
    mentions: [
        "A",
        "B",
        "C",
        "D"
    ]
};

const copyInitialState = JSON.parse(JSON.stringify(initialState));

const reducer = (state = copyInitialState, action) => {
    let 
        students = null, 
        newStudent = null, 
        newOrder = null, 
        sens = null, 
        behaviours = null, 
        newBehaviour = null,
        newMention = null
    ;
    
    switch(action.type) {
        case "RESET_ABSCENCE":
            students = deepStudentsCopy(state);
            students.map((student) => student.attendance = 0);
        
            return {
                ...state,
                students: students,
            };

        case "INCREMENT_PLUS":
        case "INCREMENT_MINUS":
            // Copy profonde
            students = deepStudentsCopy(state);
            behaviours = deepBehavioursCopy(state);

            students.map((student) => {
                if(student.id == state.student.id) {
                    if(action.type == "INCREMENT_PLUS") student.attendance++;
                    if(action.type == "INCREMENT_MINUS") { if(student.attendance > 0) student.attendance--; };
                    newStudent = student;
                }

                return student;
            });

            if(newStudent.attendance == 0) {
                newMention = "A";
            } 
            
            if(newStudent.attendance > 0 && newStudent.attendance <= 3) {
                newMention = "B";
            } 
            
            if(newStudent.attendance > 3 && newStudent.attendance <= 5) {
                newMention = "C";
            } 

            if(newStudent.attendance > 5) {
                newMention = "D";
            }

            if(behaviours.find((behaviour) => behaviour.id == action.student.id)) {
                for(const behaviour of behaviours) {
                    if(behaviour.id == newStudent.id) {
                        behaviour.mention = newMention;
                        break;
                    }
                }
            } else {
                behaviours = behaviours.concat({id: newStudent.id, mention: newMention});
            }
            
            return {
                ...state,
                students: students,
                behaviours: behaviours,
                student: newStudent,
            };

        case "GET_STUDENT":
            newStudent = state.students.find((student) => student.id == action.user.id)
            
            return {
                ...state,
                student: {...newStudent, notes: [...newStudent.notes]}
            };
        
        case "ORDER_STUDENTS":
            newOrder = !state.order;
            sens = newOrder == true ? 1 : -1;
            students = students = deepStudentsCopy(state);
            students.sort((a, b) => sens * (average(a.notes) - average(b.notes)));

            return {
                ...state,
                order: newOrder,
                students: students
            };

        default:
            return state;
    }
}

export default reducer;