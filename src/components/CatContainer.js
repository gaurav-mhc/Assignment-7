import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchCats } from '../redux'
const CatContainer = ({fetchCats, catData}) => {
    useEffect(() => {
        fetchCats()
    },[fetchCats])
    return catData.loading ? <h2>Loading...</h2> : catData.error ? <h2>{catData.error}</h2> : (
        <div className = "container">
            <h1 className = "header">THECATAPI.COM</h1>
            {catData && catData.cats && 
            catData.cats.map(cat => cat.image && cat.image.url &&<div key = {cat.id} className = "cat-card">
                <div><img className = "image" src = {cat.image.url} alt = {cat.name} /></div>
                
                <div className = "info">
                    <h1 className = "name">{cat.name}</h1>
                    <div className = "para">
                        <p>Origin: {cat.origin}</p>
                        <p>{cat.description}</p>
                        <p>Life-Span: {cat.life_span}</p>
                    </div>

                </div>
            </div>)}
        </div>
    )
}



const mapStateToProps = state =>{
    return{
        catData: state.cat
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchCats: () => dispatch(fetchCats())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer)