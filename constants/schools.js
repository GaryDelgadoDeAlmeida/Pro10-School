export const RESET_ABSCENCE = "RESET_ABSCENCE";
export const INCREMENT_PLUS = "INCREMENT_PLUS";
export const INCREMENT_MINUS = "INCREMENT_MINUS";
export const ORDER_STUDENTS = "ORDER_STUDENTS";
export const GET_STUDENT = "GET_STUDENT";

const average = (notes, decimal = 100) => {
  if (notes.length === 0) return null;

  return (
    Math.floor(
      (notes.reduce((curr, acc) => curr + acc) / notes.length) * decimal
    ) / decimal
  );
};

const deepStudentsCopy = ({students}) => {
  return students.map((s) => ({ ...s, notes: [...s.notes] }));
}

const deepBehavioursCopy = ({behaviours}) => {
  return behaviours.map((s) => ({ ...s }));
}

export {average, deepStudentsCopy, deepBehavioursCopy};