function Modifier() {
  const handleModify = () => {
    alert("Modifier action executed");
  };

  return (
    <button
      className="primary-button"
      onClick={handleModify}
    >
      Modify Dashboard
    </button>
  );
}

export default Modifier;