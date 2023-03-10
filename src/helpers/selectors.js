export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find((currentDay) => currentDay.name === day);
  if (filteredDays === undefined) {
    return [];
  }
  return filteredDays.appointments.map((id) => state.appointments[id]);
}
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerData = state.interviewers[interview.interviewer];

  const newInterview = {
    student: interview.student,
    interviewer: interviewerData,
  };

  return newInterview;
}
export function getInterviewersForDay(state, dayName) {
  const filteredDays = state.days.find(
    (currentDay) => currentDay.name === dayName
  );
  if (filteredDays === undefined) {
    return [];
  }
  return filteredDays.interviewers.map((id) => state.interviewers[id]);
}
