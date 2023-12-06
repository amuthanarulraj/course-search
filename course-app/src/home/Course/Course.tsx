import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { findById } from '../../store/slices/course-slice';

export default () => {
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    const { courseId } = useParams();
    const course = useSelector(findById(courseId));
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {t('course.table.course.name')}: {course?.name} <br />
                {t('course.table.instructor')}: {course?.instructor} <br />
                {t('course.table.location')}: {course?.location.building} <br />
                {t('course.table.schedule')}: {course?.schedule.startTime}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(-1)}>Back</Button>
            </CardActions>
        </Card>
    );
}