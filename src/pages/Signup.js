import Header from "../components/hero/Header";

export default function Signup(){
    return (
        <div>
            <Header/>
            <div className="row border-top">
                <div className="col-5 px-4 py-2 border-end">
                    <div className="display-6 px-2 pt-4 pb-2">Welcome to Regionalingo.</div>
                    <div style={{fontSize:15}}>
                    <div className="px-2 pt-1">The strongest password is the one that you can't remember.</div>
                    <div className="px-2 pb-1">Join our family of 1000+ learners.</div>
                    </div>
                    <div className="py-2">
                    <div className="py-2 px-2">
                        <div style={{fontSize:14}} className="text-bold">Enter email:</div>
                        <input type="email" placeholder="username@domain.com" className="p-1 form-control" style={{width:'70%'}}/>
                    </div>
                    <div className="py-2 px-2">
                        <div style={{fontSize:14}}  className="text-bold">Enter password:</div>
                        <input type="password" className="p-1 form-control" style={{width:'70%'}}/>
                    </div>
                    <div className="py-2 px-2">
                        <div style={{fontSize:14}} className="text-bold">Confirm password:</div>
                        <input type="password" className="p-1 form-control" style={{width:'70%'}}/>
                    </div>
                    <div className="py-3 px-2">
                        <button className="btn btn-outline-success">Signup</button>
                    </div>
                    <div className="py-2 px-2">
                        Already have an account? <a href="">login</a>
                    </div>
                    </div>
                    <div className="py-1 px-2 text-center">
                        <a href="">Privacy Policy</a> - <a href="">Terms and Conditions</a>
                    </div>
                </div>

                <div className="col-7 p-5">
                    <div className="row">
                    <div className="col-8 display-6">We are always expanding our product line.</div>
                    </div>
                    <div className="pt-5">check out the freshly baked products:</div>
                    <div className="py-1 "><button className="btn btn-outline-secondary">Check out platforms <span style={{fontWeight:'900'}}>&gt;</span> </button></div>
                    <div className="row justify-content-between">
                        <div className="col-1"></div>
                        <div className="col-11 text-end"><img src="./assets/signup_banner.png" className="img-fluid"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}