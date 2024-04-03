import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createReportThunk } from '../store/reports';

const ReportForm = ({ report, formType }) => {
  const navigate = useNavigate();
  const [understanding, setUnderstanding] = useState(report?.understanding);
  const [improvement, setImprovement] = useState(report?.improvement);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const newErrors = { ...errors }
    report = { ...report, understanding, improvement };
    if(!understanding.length){
      newErrors.understanding = "Understanding is required"
    }
    if(!improvement.length){
      newErrors.improvement = "Improvement is required"
    }
    setErrors(newErrors)
    if(Object.keys(newErrors).length === 0){
      dispatch(createReportThunk(report, navigate))
    }
  };

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType}</h2>
      <div className="errors">{errors.understanding}</div>
      <label>
        Understanding:
        <input
          type="text"
          value={understanding}
          onChange={(e) => setUnderstanding(e.target.value)}
        />
      </label>
      <div className="errors">{errors.improvement}</div>
      <label>
        Improvement:
        <textarea
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
        />
      </label>
      <button type="submit">{formType}</button>
    </form>
  );
};

export default ReportForm;
