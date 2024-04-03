import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';
import { resetDatabase } from '../mocks/storage';
import { fetchReportsThunk } from '../store/reports';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ReportsIndex = () => {
  const dispatch = useDispatch()
  const reports = useSelector(state => Object.values(state.reports)); // populate from Redux store
  // console.log(reports)

  useEffect(() => {
    dispatch(fetchReportsThunk())
  }, [ dispatch ])

  console.log(reports)

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <ul>
        {reports.map((report) => (
          <ReportIndexItem
            report={report}
            key={report.id}
          />
        ))}
      </ul>
      <Link
        className="back-button new"
        to="/reports/new"
      >
        New Report
      </Link>
      <button onClick={resetDatabase}>Reset the Database</button>
    </section>
  );
};

export default ReportsIndex;
