function Comment(props){
    
    const comments = props.com
    console.log(comments)
    return (
        <div>
          {comments.map((c) => {
             return c.map((c1)=>{
                  return <p>{c1}</p>
              })
          })}
        </div>
    );
       
}

export default Comment;