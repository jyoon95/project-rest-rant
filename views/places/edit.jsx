const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    let message =''
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
            <div className='row' text-align='center' border='3px solid green' padding='70px 0'>
                {message} 
            </div>
                <h1>Edit Place</h1>
                <form method = 'POST' action = {`/places/${data.place.id}?_method=PUT`}>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' required/>
                        </div>
                    </div>
                        
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' type='url' id='pic' name='pic'/>
                        </div>
                    </div>
                        
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city'/>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id='state' name='state'/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' required/>
                        </div>
                    </div>
                        
                    <div className='row'>
                        <div className='form group col-sm-4'>
                            <label for="founded">Founded Year</label>
                            <input className='form-control'
                                id='founded'
                                name='founded'
                                value={data.place.founded}
                                />
                        </div>
                    </div>
                    
                    <input className='btn btn-primary' type='submit' value='Update Place'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
