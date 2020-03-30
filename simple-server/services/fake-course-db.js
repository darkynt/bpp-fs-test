let courses = [
  {
    id: 0,
    title: "Law",
    description: "A Law Course ",
    cost: 1000,
    allocatedUsers: []
  },
  {
    id: 1,
    title: "Accounting",
    description: "An Accounting Course ",
    cost: 500,
    classroom: true,
    maxSeats: 10,
    allocatedUsers: []
  },
  {
    id: 2,
    title: "Management",
    description: "A Management Course ",
    cost: 200,
    classroom: true,
    maxSeats: 10,
    allocatedUsers: []
  }
];

module.exports = {
  find: id => courses.find(id),
  get: () => courses,
  update: newCourse => {
    courses = courses.map(course => { // NB: just mutating for convenience/mocking
      return course.id === newCourse.id ? newCourse : course
    })
  }
}
