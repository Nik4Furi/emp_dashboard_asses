import React from 'react'


const Loading = ({width="10%"}) => {
  return (
    <div>
      <div className="flex" style={{justifyContent:'center',width:"100%",alignItems:"center",background:"blur"}}>
        <img src="./loader.gif" alt="loader" width={"40%"} />
      </div>
    </div>
  )
}

export default Loading
