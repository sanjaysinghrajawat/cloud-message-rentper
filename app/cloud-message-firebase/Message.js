const Message = ({ notification }) => {
    return (
      <>
        <div className="flex justify-around items-center text-lg font-bold">
          <span>{notification.title}</span>
        </div>
        <div className="mt-4 text-center">{notification.body}</div>
      </>
    );
  };
  
  export default Message;