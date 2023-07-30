const Notification = ({ message, classColor }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={`notification ${classColor}`}>
        {message}
      </div>
    )
  }

  export default Notification;