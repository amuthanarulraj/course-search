interface Course {
    _id: string,
    name: string,
    instructor: string,
    location: {
        room: string,
        building: string
    },
    schedule: {
        startTime: string,
        endTime: string
    }
}
export const courses: Course[] = [
    {
        _id: '1',
        name: 'INFO 6150',
        instructor: 'Amuthan',
        location: {
            room: '102',
            building: 'Shillman'
        },
        schedule: {
            startTime: 'Wed 6:10 PM',
            endTime: 'Wed 9:40 PM'
        }
    }
];
export default Course;