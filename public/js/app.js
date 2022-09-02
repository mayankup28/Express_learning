// const { application, json } = require("express");

const App = () => {
    const [product, setproduct] = React.useState([]);
    const [form, setform] = React.useState({
        name: '',
        price: ''
    })

    React.useEffect(() => {
        fetchProducts()
    }, [])

    function fetchProducts() {
        fetch('/api/Products')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setproduct(data)
            })
    }

    function handelsubmit(e){
        e.preventDefault()
        if(!form.name||!form.price){
            return;
        }

        fetch('/api/Products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(form)
        }).then((res)=>res.json())
        .then((data)=>{
            fetchProducts()
            setform({name:'',price:''})
        })
    }


    function updateform(event,field){
        if(field==='name'){
            setform({
                ...form,
                name:event.target.value
            })
        }else if(field==='price'){
            setform({
                ...form,
                price:event.target.value
            })
        }
    }



    return (
        <>
            <div className="card">
                <div className="card-header">
                    Add a product
                </div>
                <div className="card-body">
                    <form onClick={handelsubmit}>
                        <input type="text" value={form.name} onChange={()=>updateform(event,'name')} placeholder="Products name..." className="form-control mt-3"/>
                        <input type="text" value={form.price} onChange={()=>updateform(event,'price')} placeholder="Products price..." className="form-control mt-3"/>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
            <ul className="list-group mt-4">
                {
                    product.map((ele, ind) => {
                        return (
                            <li key={ele.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{ele.name}: </strong>
                                    ${ele.price}
                                </div>
                                <button className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
const apps = ReactDOM.createRoot(document.getElementById('app'));
apps.render(<App />);
// ReactDOM.render(<App/>,document.getElementById('app'));