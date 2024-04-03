import { useParams } from 'react-router-dom';
import ReportForm from './ReportForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchReportThunk } from '../store/reports';

const EditReportForm = () => {
  const { reportId } = useParams();
  const report = useSelector(state => state.reports[reportId]); // populate from Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReportThunk(reportId))
  }, [dispatch])

  if (!report) return(<></>);

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    Object.keys(report).length > 1 && (
      <>
        <ReportForm
          report={report}
          formType="Update Report"
        />
      </>
    )
  );
};

export default EditReportForm;
