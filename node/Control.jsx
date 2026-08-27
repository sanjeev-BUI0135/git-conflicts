function Control() {
  const handleControl = () => {
    alert("Control action executed");
  };

  return (
    <button
      className="secondary-button"
      onClick={handleControl}
    >
      Dashboard Control
    </button>
  );
}

export default Control;