import PropType from 'prop-types'
function Tsksix(props) {
    return (
      <div className="bac">
          <h1>Name:{props.name} </h1>
          <h5> Age:{props.age}</h5>
          <h3>City:{props.city}</h3>
      </div>
    )
  }
Tsksix.propType={
    name:PropType.string,
    age:PropType.number,
    city:PropType.string
  }
  
  export default Tsksix
  