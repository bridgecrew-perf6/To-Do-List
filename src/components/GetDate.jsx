import './GetDate.css';

const GetDate = () => {
  const [dia, mes, diaNum] = new Date().toDateString().split(' ');
  return (
    <p className="date__container">
      Today, {diaNum} {mes}, {dia}
    </p>
  );
};

export default GetDate;
