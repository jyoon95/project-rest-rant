const React = require('react')
const Def = require('../default')

function show (data){
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings/data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '👀'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😒' : 'Rave! 😍'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
            <main>
                <div className="col-sm-6" text-align='center'>
                    <img src={data.place.pic} alt={data.place.name} width='50%' align-items='center'/>
                    <h3>
                    Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                            <h2>Rating</h2>
                            {rating}
                    <h2>
                    Description
                    </h2>
                    <h3>
                    {data.place.showEstablished()}
                    </h3>
                    <h4>
                    Serving {data.place.cuisines}
                    </h4>  
                    <h2>Comments</h2>
                    {comments}
                </div>
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                
                <form method = 'POST' action = {`/places/${data.place.id}/comment`}>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-5' text-align='center'>
                            <label htmlFor='author'>Author</label>
                            <input className='form-control' id='author' name='author' required/>
                        </div>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-8' text-align='center'>
                            <label htmlFor='content'>Content</label>
                            <input className='form-control' id='content' name='content' required/>
                        </div>
                    </div>
                    </div>
                    <div className='row'>
                        <label htmlFor='rating'>Rating</label>
                        <input className='form-control'
                            id='stars'
                            name='stars'
                            type='range'
                            step='0.5'
                            min='0'
                            max='10'/>
                    </div>
                    <label htmlFor='rant'>Rant?</label>
                        <input
                            type='checkbox'
                            name='rant'
                            id='rant'
                            defaultChecked
                            />
                        <input type="submit"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = show

