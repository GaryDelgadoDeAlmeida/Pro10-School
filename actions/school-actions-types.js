import { 
    RESET_ABSCENCE, 
    INCREMENT_PLUS, 
    INCREMENT_MINUS, 
    ORDER_STUDENTS, 
    GET_STUDENT,
} from '../constants/schools';

export const increment_plus = (student) => {
    return {
        type: INCREMENT_PLUS,
        student,
    }
}

export const increment_minus = (student) => {
    return {
        type: INCREMENT_MINUS,
        student
    }
}

export const reset_abscence = () => {
    return {
        type: RESET_ABSCENCE, 
    }
}

export const order_students = () => {
    return {
        type: ORDER_STUDENTS,
    }
}

export const get_student = (user) => {
    return {
        type: GET_STUDENT,
        user
    }
}