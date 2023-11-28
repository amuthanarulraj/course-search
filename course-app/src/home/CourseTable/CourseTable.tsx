import { ReactElement } from 'react';
import Course from '../../models/course';

type Props = {
    courses: Course[]
}

const CourseTable: React.FC<Props> = (props: Props): ReactElement => {
    const courseEntries = props.courses.map(c => {
        return (
          <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.instructor}</td>
            <td>{`${c.location.building}-${c.location.room}`}</td>
            <td>{`${c.schedule.startTime} - ${c.schedule.endTime}`}</td>
          </tr>
        )
      });
    return (
    <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Location</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {courseEntries}
        </tbody>
    </table>
    )
};
export default CourseTable;