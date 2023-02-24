export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find((currentDay) => currentDay.name === day);
  if (filteredDays === undefined) {
    return [];
  }
  return filteredDays.appointments.map((id) => state.appointments[id]);
}
