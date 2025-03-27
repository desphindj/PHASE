
const Taskeleven = () => {

  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div className="bac">
      <h1>Fruit List</h1>
      <ul>
\
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Taskeleven




