import './Popup.css';

const Popup = ({ trigger, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">{children}</div>
    </div>
  ) : (
    ''
  );
};

export default Popup;
