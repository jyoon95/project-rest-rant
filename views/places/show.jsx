const React = require('react')
const Def = require('../default')

function show (data){
    let message ='Validation Error'
        if (data.message) {
            message = (
                <h4 className='alert-danger'>
                    {data.message}
                </h4>
            )
        }
    return (
        <Def>
            <main>
            <div className="row">
                {message}
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                    Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
            </div>
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
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
                    <p>No Comments</p> 
                </div>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}



module.exports = show