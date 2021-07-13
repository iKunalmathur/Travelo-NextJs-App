function Star({ value }) {
  let array = [];
  for (let index = 1; index <= value; index++) {
    array.push(index);
  }
  return (
    <div>
      {array.map((star) => (
        <i className="fa fa-star" aria-hidden="true" key={star}></i>
      ))}
    </div>
  );
}

export default Star;
