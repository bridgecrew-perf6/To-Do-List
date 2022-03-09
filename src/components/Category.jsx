import './Category.css';

const CLASS_NAME_DEFAULT = 'todo__item-category';
const CLASS_NAMES = {
  Work: 'work',
  School: 'school',
  Family: 'family',
};

const Category = ({ children, category }) => {
  const className =
    `${CLASS_NAME_DEFAULT} ${CLASS_NAMES[category]}` || CLASS_NAME_DEFAULT;
  return <span className={className}>{children}</span>;
};

export default Category;
