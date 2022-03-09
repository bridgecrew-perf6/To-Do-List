import './Priority.css';

const CLASS_NAME_DEFAULT = 'todo__item-priority';
const CLASS_NAMES = {
  High: ' high',
  Medium: ' medium',
  Low: ' low',
};

const Priority = ({ priority, children }) => {
  const className =
    `${CLASS_NAME_DEFAULT} ${CLASS_NAMES[priority]}` || CLASS_NAME_DEFAULT;
  return <span className={className}>{children}</span>;
};

export default Priority;
