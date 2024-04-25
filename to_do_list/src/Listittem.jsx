  import ShowItemModal from "./ShowItemModal"
  import PropTypes from "prop-types"
  const Listittem = ({task}) => {
      return (
        <>
        <div className="row">
            <div className="col-5">
              <ShowItemModal task={task} />
              <input type="checkbox" />
              <button 
                className="btn btn-link"
                data-bs-target={"#showItemModal"+task.id}
                data-bs-toggle="modal"
                >{task.task}</button>
            </div>
    
            <div className="col-2">
              {task.limit}
            </div>
    
            <div className="col-3">
              {task.location}
            </div>
            <div className="col">
            </div>
          </div>
        </>
      )
    }
    
    Listittem.propTypes = {
        task: PropTypes.object.isRequired
    }
    export default Listittem