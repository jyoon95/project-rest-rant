const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <h1>404: PAGE NOT FOUND</h1>
            <div>
                <img src='/images/error-cat.jpg' alt='Looking Cat' width = '40%'/>
                <div>
                    Photo by <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Manja Vitolic</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <p>Oops, sorry, we cannot find this page!</p>
        </Def>
    )
}

module.exports = error404