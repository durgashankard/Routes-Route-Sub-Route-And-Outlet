
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shopping_Login } from "./Shopping_Login";
import { Shopping_Home } from "./Shopping_Home";
import { Shopping_Products } from "./Shopping_Products";
import { Shopping_Details } from "./Shopping_Details";



export function Shopping_Index() {


    return (
        <div className=" container-fluid">
            <BrowserRouter>
                <header className="bg-dark p-2 d-flex justify-content-between align-items-center">
                    <div className="fs-2 fw-bold text-primary">Shopper</div>

                    <div>
                        <div className="input-group">
                            <input type="text" name="" id="" placeholder="Search Categories & Products.." className=" form-control" style={{ width: '300px' }} />
                            <button className="btn btn-warning bi bi-search"></button>
                        </div>
                    </div>

                    <div>
                        <button className="btn bi bi-heart text-white"></button>
                        <button className="btn btn-secondary ms-3 bi bi-person-fill rounded rounded-circle text-white"></button>

                    </div>
                </header>

                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<Shopping_Login />} />

                        <Route path="home" element={<Shopping_Home />} />
                        <Route path="products/:catid" element={<Shopping_Products />} >
                            <Route path="details/:prodid" element={<Shopping_Details />} />
                        </Route>
                    </Routes>
                </section>

            </BrowserRouter>
        </div>
    )
}