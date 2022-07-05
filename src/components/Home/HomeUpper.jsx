import { cdnURL } from "../../utils/constants"

const HomeUpper = () => {
    return (
        <div className="bg-linkwater">
            <div className="container">
                <div className="d-flex flex-md-row flex-column-reverse py-5">
                    <div className="col-md-5">
                        <p className="fw-bold">Launch your Product</p>
                        <h1 className="fw-bold">Connect better with interactive stream.</h1>
                        <div className="my-2">
                            <button className="btn btn-outline-primary border-2 fw-bold me-3 px-4">SEE MORE</button>
                            <button className="btn btn-success fw-bold px-4">DOWNLOAD</button>
                        </div>
                        <small className="text-black-50">Free unrestricted usage for 14 days.</small><br/>
                        <small className="text-black-50">No credit card required*</small>
                    </div>
                    <div className="col-md-7 d-flex justify-content-end">
                        <img alt="" className="img-fluid" id='upper-home-img' src={cdnURL + 'Programming.svg'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeUpper