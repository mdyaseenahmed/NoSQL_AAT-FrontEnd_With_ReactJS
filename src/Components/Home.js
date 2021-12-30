import React from 'react'
import Header from './header'

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="container intro">
                <h1 className="heading">NoSQL AAT Presentation</h1>
                on <br />
                <h2 className="title">&ldquo;Lungs Cancer Analysis&rdquo;</h2>
                By <br />    
                <h3 className="names">Mohammed Ahmed Ali (1BM18CS135)</h3>
                <h3 className="names">Md Yaseen Ahmed (1BM19CS404)</h3>
                <br />
                <br /> 
                <br /> 
                <h4>Under the Guidance of</h4>
                <h2 className="faculty"> Dr. Pallavi G. B. </h2>
                <h5>Assistant Professor <br/> Department Of Computer Science and Engineering <br/> B.M.S. College Of Engineering, Bengaluru</h5>
            </div>    
        </div>
    )
}

export default Home;