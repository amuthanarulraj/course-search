import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { searchCourses }  from '../../store/slices/course-slice'

type Props = {
    query: string
}

const CourseTable: React.FC<Props> = (props: Props): ReactElement => {
  const courses = useSelector(searchCourses(props.query));
  const { t } = useTranslation('common');
  const courseEntries = courses.map(c => {
      return (
        <TableRow
            key={c._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row">{c.name}</TableCell>
          <TableCell align="right">{c.instructor}</TableCell>
          <TableCell align="right">{`${c.location.building}-${c.location.room}`}</TableCell>
          <TableCell align="right">{`${c.schedule.startTime} - ${c.schedule.endTime}`}</TableCell>
        </TableRow>
      )
    });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('course.table.course.name')}</TableCell>
            <TableCell align="right">{t('course.table.instructor')}</TableCell>
            <TableCell align="right">{t('course.table.location')}</TableCell>
            <TableCell align="right">{t('course.table.schedule')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{courseEntries}</TableBody>
      </Table>
    </TableContainer>
    );
}
export default CourseTable;