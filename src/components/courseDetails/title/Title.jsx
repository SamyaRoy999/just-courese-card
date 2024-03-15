import React from 'react'

const Title = ({single}) => {
    console.log(single);
    return (
        <div>
          <h3 className="text-lg font-bold">{single.title}</h3>
            <h3>total credit hour : 13</h3>
            <h3>total price</h3>
        </div>
    )
}

export default Title